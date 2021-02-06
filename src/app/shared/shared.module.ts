import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestAccountsComponent } from './suggest-accounts/suggest-accounts.component';
import { VideoGridComponent } from './video-grid/video-grid.component';



@NgModule({
  declarations: [SuggestAccountsComponent, VideoGridComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
