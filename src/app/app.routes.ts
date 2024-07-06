import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { AuthorizeComponent } from './components/authorize/authorize.component';

export const routes: Routes = [
  { path : 'home' , component : HomeViewComponent},
  { path : 'authorized', component : AuthorizeComponent }
];
