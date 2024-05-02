import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ApiDogsService } from '../../../services/api-dogs.service';
import { Router } from '@angular/router';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements  DoCheck, OnDestroy {
  nome!: void  | any;
  token!: void | any;

  constructor(
    private dogsApi: ApiDogsService,
    private router: Router
  ) {}

  ngDoCheck() {
    if(this.dogsApi.nomeUser()) {
      this.nome = this.dogsApi.nomeUser()
    } else {
      this.nome = null;
    }
  }

  handleClick() {
    window.localStorage.clear()
    if(!this.dogsApi.usuarioAutenticado()) {
      this.router.navigate(['/login'])
    }
  }

  ngOnDestroy(): void {}
}
