import { Comments } from './../components/model/Comments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable, OnDestroy } from '@angular/core';
import { catchError, tap, Observable } from 'rxjs';
import { Feed } from '../components/model/Feed';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Injectable({
  providedIn: 'root',
})
export class ApiDogsService implements OnDestroy {
  private URL_API = environment.API;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';

  constructor(
    private httpClient: HttpClient, 
    private router: Router,
    private _snackBar: MatSnackBar
    ) {}

  getFeedList(): Observable<any> {
    return this.httpClient.get<Feed[]>(`${this.URL_API}api/photo`);
  }

  getPhotoCard(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.URL_API}api/photo/${id}`).pipe(
      catchError((error): any => {
        console.error("ERROR: ", error)
        const mensagem = error.error.message;
        this.errorSnackBar(mensagem);
      })
    );
  }

  getUser(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.httpClient.get(`${this.URL_API}api/user`, { headers });
  }

  getToken(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let body = JSON.stringify({ username, password });
    return this.httpClient.post<any>(`${this.URL_API}jwt-auth/v1/token`, body, { headers })
      .pipe(
        tap((perfil) => {
          window.localStorage.setItem('nome', perfil.user_nicename)
          window.localStorage.setItem('token', perfil.token)
          if(this.usuarioAutenticado(perfil.token)) {
            this.router.navigate(['/perfil']);
          }
          this.openSnackBar('login com sucesso!');
        }),
        catchError((error): any => {
          console.error("ERROR: ", error)
          const mensagem = error.error.message
          this.errorSnackBar(mensagem);
        })
      );
  }

  Photo_Post(token: any, formData: FormData, authentic: boolean): Observable<any>  {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    return this.httpClient.post<any>(`${this.URL_API}api/photo`, formData, { headers })
    .pipe(
      tap(() => {
          if(token && formData) {
            this.router.navigate(['/feed']);
          }
          this.openSnackBar('Postado com sucesso!');
          authentic = true
        }),
      catchError((error): any => {
        console.error("ERROR: ", error)
        const mensagem = error.error.message
        this.errorSnackBar(mensagem);
        authentic = true
      })
    );
  }

  usuarioAutenticado(token?: string) {
    const localStorageToken = typeof window !== "undefined" ? window.localStorage.getItem('token') : false;
    if (localStorageToken) {
      return localStorage;
    } else if (token) {
      return token;
    } else {
      return '';
    }
  }

  nomeUser(nome?: string | null) {
    const localStorageNome = typeof window !== "undefined" ? window.localStorage.getItem('nome') : false;
    if (localStorageNome) {
      return localStorageNome
    } else if(nome) {
      return nome
    } else {
      return null
    }
  }

  COMMENT_POST(id: string, body: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
    });

    let corpo = JSON.stringify({ body });
    console.log(corpo)

    return this.httpClient.post(`${this.URL_API}api/comment/${id}`, corpo, { headers })
    .pipe(
      tap((mensagem) => {
        console.log(mensagem);
      })
    );
  }

   //snackBar para aparecer a mensagem de sucesso
   openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
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

  ngOnDestroy(): void {}
}
