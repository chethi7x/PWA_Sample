import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubMainComponent } from './sub-main/sub-main.component';

const routes: Routes = [
  { path: 'app1', component: SubMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
