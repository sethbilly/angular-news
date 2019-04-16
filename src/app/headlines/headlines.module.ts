import { HeadlinesComponent } from './headlines.component';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HeadlinesComponent
  }
];

@NgModule({
  declarations: [HeadlinesComponent],
  imports: [
    CommonModule, MaterialModule, RouterModule.forChild(routes)
  ]
})
export class HeadlinesModule { }
