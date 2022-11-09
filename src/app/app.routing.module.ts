import {AuthGuard} from "./guards/auth.guard";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";

 const routes: Routes = [
   //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
   path: 'login',
   component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
