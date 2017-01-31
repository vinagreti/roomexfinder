import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, OVERLAY_PROVIDERS } from '@angular/material';
import { NgModule } from '@angular/core';
import { AngularFireModule, AuthMethods,  AuthProviders } from "angularfire2";

import { AppComponent } from './app.component';
import { HomeModule } from './home';
import { RoomexfinderRoutingModule } from './app-routing.module';
import { AuthService } from './auth/shared/auth.service';
// App environment conf
import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }),
    BrowserModule,
    FormsModule,
    HomeModule,
    HttpModule,
    MaterialModule.forRoot(),
    RoomexfinderRoutingModule,
  ],
  providers: [
    OVERLAY_PROVIDERS,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
