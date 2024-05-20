import { Component, inject, OnInit } from "@angular/core";
import { NavigationEnd, Router, RouterLink, RouterOutlet } from "@angular/router";
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";
import { MatToolbar } from "@angular/material/toolbar";
import { MatTab, MatTabGroup, MatTabLink, MatTabNav, MatTabNavPanel } from "@angular/material/tabs";
import { TemplateService } from "./shared-services/template.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenav,
    MatIcon,
    MatIconButton,
    MatToolbar,
    MatSidenavContainer,
    MatSidenavContent,
    MatTabGroup,
    MatTab,
    MatTabNav,
    MatTabNavPanel,
    RouterLink,
    MatTabLink,
  ],
  providers: [ HttpClient],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  private router: Router = inject(Router);

  title = "ctf-beginner-guide";
  routes: { label: string; route: string }[] = [
    { label: "Home", route: "" },
    { label: "Guide", route: "guide" },
    { label: "Templates", route: "templates" },
  ];
  activeLink = "";

  ngOnInit() {
    this.router.events.subscribe(data => {
      const navigationEnd = data as NavigationEnd;
      this.activeLink = navigationEnd.url;
    });
  }
}
