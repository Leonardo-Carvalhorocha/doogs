import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MessageErrorComponent } from './message-error/message-error.component';

@NgModule({
  exports: [
    MaterialModule,
    MessageErrorComponent
  ],
  declarations: [
    MessageErrorComponent
  ],
  imports: [
    MaterialModule
  ]
})
export class SharedModule { }
