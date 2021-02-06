import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { VideoContainerComponent } from './video-container/video-container.component';
import { VideoContentComponent } from './video-content/video-content.component';


const routes: Routes = [{
  path: '', component: IndexComponent
}];

@NgModule({
  declarations: [IndexComponent, VideoContainerComponent, VideoContentComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DetailModule { }
