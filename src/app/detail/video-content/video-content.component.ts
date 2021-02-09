import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.scss'],
})
export class VideoContentComponent implements OnInit {
  @Input() video: any;

  sharing = {
    link: `${environment.baseWebUrl}/`,
  };

  constructor() {}

  ngOnInit(): void {
    this.sharing.link = `${environment.baseWebUrl}${this.video.sharingInfo.publicUrl}`;
  }

  copyToClip() {
    navigator.clipboard
      .writeText(this.sharing.link)
      .then((s) => {
        alert('Copied to clipboard!');
      })
      .catch((e) => console.error(e));
  }
}
