import { Route } from '@angular/router';
import { HomeFeatureComponent } from '@portfolio/home-feature';

export const appRoutes: Route[] = [
  { path: 'home', component: HomeFeatureComponent },
  { path: '**', redirectTo: '/home' }
];
