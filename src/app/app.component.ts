import { Component } from '@angular/core';
import { AgGridColumn } from 'ag-grid-angular';
import { EditableFieldComponent } from './editable-field.component';
import { GridApi } from 'ag-grid-community';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  private gridApi: GridApi;

  columnDefs:  Partial<AgGridColumn>[] = [
    {
      headerName: '',
      field: 'select',
      headerCheckboxSelection: true,
      checkboxSelection: true,
      resizable: true,
      pinned: 'left',
      width: 40,
      headerTooltip: "Columna para seleccionar y editar",
    },
    {
      headerName: 'Make (Selectable)',
      headerTooltip: "Columna con la marca de coche",
      field: 'make', 
      editable: true, 
      resizable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Toyota", "Ford", "Porsche", "Renault", "Seat"],
      },
      cellRendererFramework: EditableFieldComponent,
    },
    {
      headerName: 'Model', 
      headerTooltip: "Columna con el modelo de cada marca",
      field: 'model',
      resizable: true, 
      editable: true,
      cellRendererFramework: EditableFieldComponent,
      cellEditorSelector: params => {
        console.log(params.value);
        console.log(params.data.make);
        if(params.data.make === 'Toyota') {
          return {
            component: 'agSelectCellEditor',
            params: { values: ['','Yaris', 'Corolla'] }
          }
        }

        if(params.data.make === 'Ford') {
          return {
           component: 'agSelectCellEditor',
          params: { values: ['', 'Focus', 'Fiesta'] }
          }
        }
      }
    },
    {
      headerName: 'Price', 
      headerTooltip: "Precio final",
      field: 'price', 
      resizable: true
    }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  onGridReady(params) {
    this.gridApi = params.api;
  }

  onRemoveSelected(event: Event) {
    const selectedRows = this.gridApi.getSelectedRows();
    this.gridApi.updateRowData({ remove: selectedRows });
  }

}
