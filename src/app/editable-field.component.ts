import {Component} from "@angular/core";

import {ICellRendererAngularComp} from "ag-grid-angular/main";

@Component({
    selector: 'editable-cell',
    template: `{{params.value}} (E)`
})
export class EditableFieldComponent implements ICellRendererAngularComp {
  params: any;

  agInit(params: any): void {
      this.params = params;
  }

  refresh(params): boolean {
      if(params.value !== this.params.value) {
          this.params = params;
      }
      return true;
  }
}