import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
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
}
