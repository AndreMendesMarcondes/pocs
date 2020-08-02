import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-another-component',
  templateUrl: './another-component.component.html',
  styleUrls: ['./another-component.component.css'],
})
export class AnotherComponentComponent implements OnInit {
  user$: Observable<any>;

  constructor(private store: Store<{ user: User }>) {}

  ngOnInit(): void {
    this.user$ = this.store.pipe(select('loginReducer'));
  }
}
