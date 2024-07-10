import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { AuthorizeComponent } from './components/authorize/authorize.component';
import { PostViewComponent } from './views/post-view/post-view.component';

export const routes: Routes = [
  { path : 'home', component : HomeViewComponent },
  { path : 'authorized', component : AuthorizeComponent },
  { path : 'post/:id', component : PostViewComponent },
  { path : '', redirectTo : 'home', pathMatch : "full" },
  { path : '**', component: PageNotFoundComponent }
];
