import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { AuthorizeComponent } from './views/authorize/authorize.component';
import { PostViewComponent } from './views/post-view/post-view.component';
import { CreatePostViewComponent } from './views/create-post-view/create-post-view.component';
import { canActivateAdmin } from './core/guard/admin-guard';
import { SearchViewComponent } from './views/search-view/search-view.component';

export const routes: Routes = [
  { path : 'home', component : HomeViewComponent },
  { path : 'authorized', component : AuthorizeComponent },
  { path : 'post/:id', component : PostViewComponent },
  { path : 'admin' , component : CreatePostViewComponent, canActivate : [canActivateAdmin] },
  { path : 'search', component : SearchViewComponent },
  { path : '', redirectTo : 'home', pathMatch : "full" },
  { path : '**', component: PageNotFoundComponent }
];
