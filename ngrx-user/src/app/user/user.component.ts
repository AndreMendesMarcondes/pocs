import { AuthService } from '../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { login, logout } from '../ngrx';
import { User } from 'firebase';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public user$: Observable<any>;

  constructor(
    private authService: AuthService,
    private store: Store<{ user: User }>
  ) {}

  ngOnInit(): void {
    this.user$ = this.store.pipe(select('loginReducer'));
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then((user) => {
      localStorage.setItem('user', JSON.stringify(user));
      this.store.dispatch(login());
      console.log(this.store.select<User>((state) => state.user));
    });
  }

  logout() {
    this.authService.logout().then((_) => {
      localStorage.removeItem('user');
      this.store.dispatch(logout());
    });
  }
}
