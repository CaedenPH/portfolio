import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GistsComponent } from './gists/gist/gists.component';
import { GistHomeComponent } from './gists/home/home.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gists', component: GistHomeComponent },
  { path: 'gists/:id', component: GistsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
