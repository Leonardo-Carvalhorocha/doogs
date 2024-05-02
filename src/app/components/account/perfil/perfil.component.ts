import { ApiDogsService } from './../../../services/api-dogs.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit, OnDestroy {

  constructor(
    private dogsApi: ApiDogsService,
    private router: Router
  ) {}

  ngOnInit() {
  }
  
  ngOnDestroy(): void {}
}
