import { MaterialModule } from './../material.module';
import { SourcesComponent } from './sources.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: SourcesComponent}
];

@NgModule({
  declarations: [SourcesComponent],
  imports: [
    CommonModule, MaterialModule, RouterModule.forChild(routes)
  ]
})
export class SourcesModule { }
