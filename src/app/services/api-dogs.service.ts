import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Feed } from '../components/model/Feed';
import { Photos } from '../components/model/Photos';

@Injectable({
  providedIn: 'root'
})
export class ApiDogsService {

  private URL_API = environment.API;

  constructor(
    private httpClient: HttpClient
  ) { }

  getFeedList() {
    return this.httpClient.get<Feed[]>(`${this.URL_API}api/photo`)
    .pipe(
      tap((photo) => {
        //console.log("Photos: ", photo)
      })
    )
  }

  getPhotoCard(id: number) {
    return this.httpClient.get<Photos>(`${this.URL_API}api/photo/${id}`)
    .pipe(
      tap((photo) => {
        //console.log("photos ID", photo)
      })
    )
  }

  getUser(token: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    return this.httpClient.get(`${this.URL_API}api/user`, {headers})
    .pipe(
      tap((user) => {
        console.log(user)
      })
    )
  }

    getToken(body: any): Observable<any> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      let corpo = JSON.stringify(body);
  
      return this.httpClient.post(`${this.URL_API}jwt-auth/v1/token`, corpo, { headers })
      .pipe(
        tap((token) => {
          console.log(token)
        })
      );
    }
}
