import { MaterialModule } from './../material.module';
import { FavouritesComponent } from './favourites.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: FavouritesComponent}
];

@NgModule({
  declarations: [FavouritesComponent],
  imports: [
    CommonModule, MaterialModule, RouterModule.forChild(routes)
  ]
})
export class FavouritesModule { }
