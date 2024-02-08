import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  exports: [
    MaterialModule,
    HttpClientModule
  ]
})
export class SharedModule { }
