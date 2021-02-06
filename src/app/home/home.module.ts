import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [{
  path: '', component: IndexComponent
}];

@NgModule({
  declarations: [IndexComponent, HeaderComponent, SideBarComponent, MainContentComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class HomeModule { }
