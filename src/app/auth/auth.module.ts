import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms'

import { AuthComponent } from './auth.component';
import { AuthLogoutComponent } from './auth-logout.component';
import { AuthCenterComponent }    from './auth-center.component';
import { AuthService } from './shared/auth.service';

import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
  imports:[
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdIconModule,
    AuthRoutingModule
  ],
  exports: [
    AuthComponent,
    AuthLogoutComponent,
    AuthCenterComponent
  ],
  declarations: [
    AuthComponent,
    AuthLogoutComponent,
    AuthCenterComponent
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule {}
