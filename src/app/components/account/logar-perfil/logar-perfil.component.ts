import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiDogsService } from '../../../services/api-dogs.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
} from '@angular/material/snack-bar';
import { catchError, tap } from 'rxjs';
import { Router } from '@angular/router';
import { PerfilUserComponent } from '../../user/perfil-user/perfil-user.component';

@Component({
  selector: 'app-logar-perfil',
  templateUrl: './logar-perfil.component.html',
  styleUrl: './logar-perfil.component.scss',
})
export class LogarPerfilComponent implements OnInit {
  form!: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  email: string = '';
  password: string = '';
  authentic: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private serviceDogs: ApiDogsService,
    private _snackBar: MatSnackBar,
    private route: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    this.authentic = false
    const email = this.form.controls['email'].value;
    const password = this.form.controls['password'].value;

    const loading = this.serviceDogs.getToken(email, password).subscribe(
      (tap) => {
        this.openSnackBar();
        this.route.navigate(['/perfil']);
        this.authentic = true
      },
      (catchError) => {
        this.errorSnackBar();
        this.authentic = true
      }
    );
  }

  openSnackBar() {
    this._snackBar.open('login com sucesso!', 'X', {
      horizontalPosition: this.horizontalPosition,
      duration: 5000,
    });
  }

  errorSnackBar() {
    this._snackBar.open('Error ao logar', 'X', {
      horizontalPosition: this.horizontalPosition,
      duration: 5000,
    });
  }
}
