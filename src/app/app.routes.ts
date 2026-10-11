import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'works',
    loadComponent: () => import('./features/works/works').then((m) => m.Works),
  },
  {
    path: 'about-me',
    loadComponent: () => import('./features/about-me/about-me').then((m) => m.AboutMe),
  },
  {
    path: 'contacts',
    loadComponent: () => import('./features/contacts/contacts').then((m) => m.Contacts),
  },
  { path: '**', redirectTo: 'home' },
];
