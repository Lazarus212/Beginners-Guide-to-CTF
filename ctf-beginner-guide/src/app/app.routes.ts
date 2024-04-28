import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landingpage/landingpage.component').then(m => m.LandingpageComponent),
  },
  {
    path: 'templates',
    loadComponent: () => import('./templates/templates.component').then(m => m.TemplatesComponent),
  },
  {
    path: 'guide',
    loadComponent: () => import('./guide/guide.component').then(m => m.GuideComponent),
  },
];
