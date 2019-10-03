import {NgModule} from "@angular/core";

import {RouterModule, Routes} from "@angular/router";
import {UserCreateComponent} from "./components/user-create/user-create.component";

import { App1SharedModule } from '../../projects/app1/src/app/app.module';
import { App2SharedModule } from '../../projects/app2/src/app/app.module';
const appRoutes: Routes = [
  {path: '', component: UserCreateComponent},
  {path: 'th', component: UserCreateComponent},
  {path: 'en', component: UserCreateComponent},
  {path: 'id', component: UserCreateComponent},
  { path: 'app1', loadChildren: '../../projects/app1/src/app/app.module#App1SharedModule'},
  { path: 'app2', loadChildren: '../../projects/app2/src/app/app.module#App2SharedModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
