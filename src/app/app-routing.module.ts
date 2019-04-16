
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'headlines', loadChildren: './headlines/headlines.module#HeadlinesModule' },
  { path: 'sources', loadChildren: './sources/sources.module#SourcesModule' },
  { path: 'favourites', loadChildren: './favourites/favourites.module#FavouritesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
