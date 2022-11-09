import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {MockData} from "./mock/mock-data";
import {HttpClientModule} from "@angular/common/http";
import {AuthState} from "./state/auth.state";
import {NgxsModule} from "@ngxs/store";
import {NgxsDispatchPluginModule} from "@ngxs-labs/dispatch-decorator";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";
import {AppRoutingModule} from "./app.routing.module";
import {AdminComponent} from "./admin/admin.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(MockData),
    NgxsDispatchPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsModule.forRoot([AuthState]),
    NgxsStoragePluginModule.forRoot({
      key: 'auth.token',
    }),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
