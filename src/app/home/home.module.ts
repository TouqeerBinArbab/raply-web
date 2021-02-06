import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path: '', component: IndexComponent
}];

@NgModule({
  declarations: [IndexComponent, HeaderComponent, SideBarComponent],
  imports: [  CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModule { }
