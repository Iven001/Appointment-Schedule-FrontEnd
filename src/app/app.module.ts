import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app.routing";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { FooterModule } from "./shared/footer/footer.module";
import { SidebarModule } from "./sidebar/sidebar.module";
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { NgToastModule } from "ng-angular-popup";
import { GetstartedComponent } from "./getstarted/getstarted.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import { PasswordComponent } from './password/password.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { AuthGuard } from "_auth/auth.guard";
import { AuthInterceptor } from "_auth/auth.interceptor";
 import { UserService } from "services/user.service";
 import { PasswordService } from "services/password.service";
import { ForbiddenComponent } from './forbidden/forbidden.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    NgToastModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    GetstartedComponent,
    LoginComponent,
    SignupComponent,
    PasswordComponent,
    ForgetPassComponent,
    ForbiddenComponent,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
     UserService,
     PasswordService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
