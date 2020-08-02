import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { User } from 'firebase';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  loginWithGoogle() {
    this.authService.loginWithGoogle().then((user) => {
      this.user = user;
    });
  }

  logout() {
    this.authService.logout().then((_) => (this.user = null));
  }
}
