import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiDogsService } from '../../../services/api-dogs.service';

@Component({
  selector: 'app-logar-perfil',
  templateUrl: './logar-perfil.component.html',
  styleUrl: './logar-perfil.component.scss',
})
export class LogarPerfilComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private serviceDogs: ApiDogsService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    // this.serviceDogs.getUser("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2RvZ3NhcGkub3JpZ2FtaWQuZGV2IiwiaWF0IjoxNzA3MjcyNTMwLCJuYmYiOjE3MDcyNzI1MzAsImV4cCI6MTcwNzM1ODkzMCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMTUifX19.MKwyG-gJPzi0ch5wLdKqgMUsfqJZe4aJIF5upnfYOmg"
    // ).subscribe()

    this.serviceDogs.getToken(this.form.value).subscribe()
  }
}
