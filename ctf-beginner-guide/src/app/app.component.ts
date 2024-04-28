import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTab, MatTabGroup, MatTabLink, MatTabNav, MatTabNavPanel } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenav, MatIcon, MatIconButton, MatToolbar, MatSidenavContainer, MatSidenavContent, MatTabGroup, MatTab, MatTabNav, MatTabNavPanel, RouterLink, MatTabLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ctf-beginner-guide';
  routes: { label: string; route: string }[] = [
    { label: 'Home', route: '' },
    { label: 'Guide', route: 'guide' },
    { label: 'Templates', route: 'templates' },
  ];
  activeLink = this.routes[0];
}
