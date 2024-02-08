import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarPerfilComponent } from './criar-perfil/criar-perfil.component';
import { LogarPerfilComponent } from './logar-perfil/logar-perfil.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CriarPerfilComponent,
    LogarPerfilComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CriarPerfilComponent,
    LogarPerfilComponent,
    ReactiveFormsModule,
  ]
})
export class AccountModule { }
