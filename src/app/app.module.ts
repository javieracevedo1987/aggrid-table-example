import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditableFieldComponent } from './editable-field.component';

import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    AgGridModule.withComponents([EditableFieldComponent]) 
  ],
  declarations: [ AppComponent, EditableFieldComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
