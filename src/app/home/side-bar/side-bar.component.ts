import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  suggestedUsers: any[] = [];

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.callApi();
  }

  callApi() {
    this.userService.getSuggestedUsers()
        .then(response => this.suggestedUsers = response as any[]);
  }
}