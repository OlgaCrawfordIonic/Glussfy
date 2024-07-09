import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'glussfy',
    loadComponent: () => import('./glussfy/glussfy.page').then( m => m.GlussfyPage)
  },
  
  {
    path: 'lessons',
    loadComponent: () => import('./pages/lessons/lessons.page').then( m => m.LessonsPage)
  },
  {
    path: 'vowels',
    loadComponent: () => import('./pages/vowels/vowels.page').then( m => m.VowelsPage)
  },
  {
    path: 'vowels/:linkId',
    loadComponent: () => import('./pages/vowels/vowels.page').then( m => m.VowelsPage)
  },
  {
    path: 'comparesounds',
    loadComponent: () => import('./pages/comparesounds/comparesounds.page').then( m => m.ComparesoundsPage)
  },
  {
    path: 'comparesounds/:linkId',
    loadComponent: () => import('./pages/comparesounds/comparesounds.page').then( m => m.ComparesoundsPage)
  },
  {
    path: 'tonguetwisters',
    loadComponent: () => import('./pages/tonguetwisters/tonguetwisters.page').then( m => m.TonguetwistersPage)
  },
];
