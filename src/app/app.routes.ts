import { Routes } from '@angular/router';

const desktop = () => import('./features/home/home').then((module) => module.Home);

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: desktop },
  { path: 'works', loadComponent: desktop, data: { openApp: 'projects' } },
  { path: 'projects', loadComponent: desktop, data: { openApp: 'projects' } },
  { path: 'about-me', loadComponent: desktop, data: { openApp: 'about' } },
  { path: 'contacts', loadComponent: desktop, data: { openApp: 'contact' } },
  { path: '**', redirectTo: 'home' },
];
