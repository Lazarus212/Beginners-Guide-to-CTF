import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "templates",
    loadComponent: () => import("./templates/templates.component").then(m => m.TemplatesComponent),
  },
  {
    path: "",
    loadComponent: () => import("./guide/guide.component").then(m => m.GuideComponent),
  },
  {
    path: "**",
    loadComponent: () => import("./guide/guide.component").then(m => m.GuideComponent),
  },
];
