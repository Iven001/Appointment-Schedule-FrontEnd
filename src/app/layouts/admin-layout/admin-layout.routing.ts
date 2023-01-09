import { Routes } from "@angular/router";

import { HomeComponent } from "../../home/home.component";
import { UserComponent } from "../../user/user.component";
import { ScheduleComponent } from "../../schedule/schedule.component";
import { DailyComponent } from "app/daily/daily.component";
import { WeeklyComponent } from "app/weekly/weekly.component";
import { AuthGuard } from "_auth/auth.guard";
import { ForgetPassComponent } from "app/forget-pass/forget-pass.component";

export const AdminLayoutRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "user", component: UserComponent },
  { path: "forbidden", component: ForgetPassComponent },
  
  {
    path: "schedule", component: ScheduleComponent ,
    canActivate: [AuthGuard],
    data: { roles: ['organizer'] },
  },
  { path: "daily", component: DailyComponent },
  { path: "weekly", component: WeeklyComponent },
];
