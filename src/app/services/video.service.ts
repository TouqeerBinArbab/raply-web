import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private readonly apiService: ApiService) { }

  async getHomeVideos() {
    return await this.apiService.get('videos/home-videos');
  }

  async getLatestVideos() {
    let filter = { order: 'id desc', include: ['rapper', 'beat'] };
    return await this.apiService.get(`videos?filter=${encodeURIComponent(JSON.stringify(filter))}`);
  }

  async videoById(videoId: any) {
    let filter = { order: 'id desc', include: ['rapper', 'beat'], where: { id: videoId } };

    let videos = await this.apiService.get(`videos?filter=${encodeURIComponent(JSON.stringify(filter))}`) as any[];
    return videos[0];
  }
}