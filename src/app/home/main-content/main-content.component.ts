import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  videos: any[] = [];

  constructor(private readonly videoService: VideoService) { }

  ngOnInit(): void {
    this.callApi(false);
  }

  callApi(isLatest: boolean) {
    let updateContent = (response: any) => {
      this.videos = response as any[];
    }

    if (isLatest) {
      this.videoService.getHomeVideos().then(updateContent)
    } else {
      this.videoService.getLatestVideos().then(updateContent)
    }
  }
}
