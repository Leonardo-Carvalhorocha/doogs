import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Feed } from '../components/model/Feed';
import { Photos } from '../components/model/Photos';
import { error } from 'console';

@Injectable({
  providedIn: 'root',
})
export class ApiDogsService {
  private URL_API = environment.API;
  private usuarioLogado: boolean = false;

  constructor(private httpClient: HttpClient) {}

  getFeedList() {
    return this.httpClient.get<Feed[]>(`${this.URL_API}api/photo`).pipe(
      tap((photo) => {
        //console.log("Photos: ", photo)
      })
    );
  }

  getPhotoCard(id: number) {
    return this.httpClient.get<Photos>(`${this.URL_API}api/photo/${id}`).pipe(
      tap((photo) => {
        //console.log("photos ID", photo)
      })
    );
  }

  getUser(token: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.httpClient.get(`${this.URL_API}api/user`, { headers }).pipe(
      tap((user) => {
        console.log(user);
      })
    );
  }

  getToken(username: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let corpo = JSON.stringify({ username, password });
    return this.httpClient
      .post<any>(`${this.URL_API}jwt-auth/v1/token`, corpo, { headers })
      .pipe();
  }
}
