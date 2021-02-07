import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.scss']
})
export class VideoContentComponent implements OnInit {
  @Input() video: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
