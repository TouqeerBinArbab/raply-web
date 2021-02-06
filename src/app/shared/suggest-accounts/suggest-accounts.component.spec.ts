import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestAccountsComponent } from './suggest-accounts.component';

describe('SuggestAccountsComponent', () => {
  let component: SuggestAccountsComponent;
  let fixture: ComponentFixture<SuggestAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
