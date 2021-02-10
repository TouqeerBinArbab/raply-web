import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly apiService: ApiService) { }

  async getSuggestedUsers() {
    let filter = { order: 'id desc', limit: 10 };
    return await this.apiService.get(`rappers?filter=${encodeURIComponent(JSON.stringify(filter))}`);
  }

}