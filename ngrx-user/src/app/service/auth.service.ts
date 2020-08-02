import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;

  constructor(public afAuth: AngularFireAuth) {}

  async loginWithGoogle(): Promise<User> {
    this.user = (
      await this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
    ).user;
    (await this.afAuth.currentUser).getIdToken().then((idToken) => {
      localStorage.setItem(
        'nameThisAnimeTokenId',
        JSON.stringify(idToken).slice(1, -1)
      );
    });
    return this.user;
  }

  async logout() {
    await this.afAuth.signOut().then((_) => {
      return null;
    });
  }
}
