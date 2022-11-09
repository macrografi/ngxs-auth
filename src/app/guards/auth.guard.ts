import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthState} from "../state/auth.state";
import {Store} from "@ngxs/store";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private router: Router,private store: Store) {}

  canActivate() {
    const isAuthenticated = this.store.selectSnapshot(AuthState.isAuthenticated);

    if(!isAuthenticated){
      this.router.navigateByUrl('/login');
    }
    return isAuthenticated;
  }
}
