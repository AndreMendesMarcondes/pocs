import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { AnotherComponentComponent } from './another-component/another-component.component';
import { StoreModule } from '@ngrx/store';
import { reducer as loginReducer } from './ngrx';

@NgModule({
  declarations: [AppComponent, UserComponent, AnotherComponentComponent],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.config),
    RouterModule,
    StoreModule.forRoot({
      loginReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
