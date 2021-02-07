import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.scss']
})
export class VideoGridComponent implements OnInit {

  @Input() video: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
