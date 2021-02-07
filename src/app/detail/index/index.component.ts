import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  video: any;
  videoId: any;
  userId: any;

  constructor(private readonly location: Location,
    private readonly videoService: VideoService,
    private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.videoId = params['video-id'];
      this.userId = params['user-id'];
      this.callApi();
    });
  }
  callApi() {
    this.videoService.videoById(this.videoId)
      .then((video: any) => {
        this.video = video;
      });
  }

  back() {
    this.location.back();
  }
}
