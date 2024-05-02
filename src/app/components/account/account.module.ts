import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarPerfilComponent } from './criar-perfil/criar-perfil.component';
import { LogarPerfilComponent } from './logar-perfil/logar-perfil.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';
import { EstatisticasComponent } from './perfil/estatisticas/estatisticas.component';
import { PostarFotoComponent } from './perfil/postar-foto/postar-foto.component';
import { ContaComponent } from './perfil/conta/conta.component';



@NgModule({
  declarations: [
    CriarPerfilComponent,
    LogarPerfilComponent,
    PerfilComponent,
    EstatisticasComponent,
    PostarFotoComponent,
    ContaComponent
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
