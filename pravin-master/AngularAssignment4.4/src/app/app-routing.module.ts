import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatchesComponent } from './batches/batches.component';
import { componentFactoryName } from '@angular/compiler';
import { SubjectsComponent } from './subjects/subjects.component';
import { DatabaseComponent } from './database/database.component';
const routes: Routes = [
  {path : 'batches', component:BatchesComponent},
  {path : 'subjects' ,component:SubjectsComponent},
  {path : 'database' ,component:DatabaseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
