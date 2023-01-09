import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/home", title: "Home", icon: "pe-7s-science", class: "" },
  { path: "/user", title: "User Profile", icon: "pe-7s-user", class: "" },
  { path: "/daily", title: "Daily View", icon: "pe-7s-date", class: "" },
  {
    path: "/weekly",
    title: "Weekly View",
    icon: "pe-7s-bookmarks",
    class: "",
  },
  { path: "/schedule", title: "Schedule", icon: "pe-7s-news-paper", class: "" },

  // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
