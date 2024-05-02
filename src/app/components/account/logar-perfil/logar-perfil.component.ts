import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiDogsService } from '../../../services/api-dogs.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
} from '@angular/material/snack-bar';
import { Subject, Subscription, Unsubscribable, catchError, tap } from 'rxjs';

@Component({
  selector: 'app-logar-perfil',
  templateUrl: './logar-perfil.component.html',
  styleUrl: './logar-perfil.component.scss',
})
export class LogarPerfilComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  email: string = '';
  password: string = '';
  authentic: boolean = true;
  private unsubscribe!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private serviceDogs: ApiDogsService,
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

   this.unsubscribe = this.serviceDogs.getToken(email, password).pipe(
      tap(() => {
        this.authentic = true
      }),
      catchError((): any => this.authentic = true)
    ).subscribe();

}

  ngOnDestroy() {
    if(this.unsubscribe || this.unsubscribe !== undefined) {
      this.unsubscribe.unsubscribe();
      console.log(this.unsubscribe)
    }
  }
}
