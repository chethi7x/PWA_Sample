import {environment} from '../environments/environment';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {SuiModule} from 'ng2-semantic-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import {UserCreateComponent} from './components/user-create/user-create.component';
import {App1SharedModule} from "../../projects/app1/src/app/app.module";
import {App2SharedModule} from "../../projects/app2/src/app/app.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    SuiModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
