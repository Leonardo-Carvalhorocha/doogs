import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiDogsService } from '../../../../services/api-dogs.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-postar-foto',
  templateUrl: './postar-foto.component.html',
  styleUrl: './postar-foto.component.scss',
})
export class PostarFotoComponent implements OnInit, OnDestroy {
  form: FormData = new FormData();
  formulario!: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  authentic: boolean = true;
  setImg: any;
  img: any;
  private unsubscribe!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private apiDogs: ApiDogsService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [''],
      peso: [''],
      idade: [''],
    });
  }

  onSubmit() {
    this.authentic = false
    const token = window.localStorage.getItem('token');
    const nome = this.formulario.controls['nome'];
    const peso = this.formulario.controls['peso'];
    const idade = this.formulario.controls['idade'];
    this.form.append('img', this.setImg);
    this.form.append('nome', nome.value);
    this.form.append('peso', peso.value);
    this.form.append('idade', idade.value);
    this.unsubscribe = this.apiDogs.Photo_Post(token, this.form, this.authentic).subscribe();
  }

  handleImgChange(event: any) {
    this.setImg = event.target.files[0];
    this.img = URL.createObjectURL(this.setImg);
  }


  //snackBar para aparecer a mensagem de sucesso
  openSnackBar() {
    this._snackBar.open('Postado com sucesso!', 'X', {
      horizontalPosition: this.horizontalPosition,
      duration: 5000,
    });
  }
 
  //snackBar para aparecer a mensagem de error
  errorSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      horizontalPosition: this.horizontalPosition,
      duration: 5000,
    });
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }
}
