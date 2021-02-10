import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggest-accounts',
  templateUrl: './suggest-accounts.component.html',
  styleUrls: ['./suggest-accounts.component.scss']
})
export class SuggestAccountsComponent implements OnInit {
  @Input() user: any;

  constructor() { }

  ngOnInit(): void {
  }

}
