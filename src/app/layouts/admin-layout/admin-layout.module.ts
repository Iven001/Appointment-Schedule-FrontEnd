import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NguiMapModule } from "@ngui/map";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { HomeComponent } from "../../home/home.component";
import { UserComponent } from "../../user/user.component";
import { ScheduleComponent } from "../../schedule/schedule.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { DailyComponent } from "app/daily/daily.component";
import { WeeklyComponent } from "app/weekly/weekly.component";
import { AuthGuard } from "_auth/auth.guard";
import { AuthInterceptor } from "_auth/auth.interceptor";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NguiMapModule.forRoot({
      apiUrl: "https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE",
    }),

    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    ScheduleComponent,
    DailyComponent,
    WeeklyComponent,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AdminLayoutModule {}
