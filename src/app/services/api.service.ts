import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly httpClient: HttpClient) { }


  async get(endPoint: string) {
    return await this.httpClient.get(`${environment.baseApiUrl}${endPoint}`).toPromise();
  }
}