import { Action, Selector, State, StateContext } from '@ngxs/store';
import {AuthStateModel, Login, Logout} from "../model/auth.state.model";
import {Injectable} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {tap} from "rxjs";

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    username: null
  }
})

@Injectable()

export class AuthState {
  @Selector()
  static token(state: AuthStateModel): string | null {
    return state.token;
  }

  @Selector()
  static refreshToken(state: AuthStateModel) {
    return state.refreshToken;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return !!state.token;
  }

  constructor(private authService: AuthService) {}

  @Action(Login)
  login(ctx: StateContext<AuthStateModel>, action: Login) {
    return this.authService.login(action.payload).pipe(
      tap((result: [{ token: string }]) => {
        result.forEach(
          (res)=>{
            for (const [key, value] of Object.entries(res)) {
              ctx.patchState({
                token: `${value}`,
                username: action.payload.username
              });
            }
          }
        )
      })
    );
  }

 @Action(Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    const state = ctx.getState();
    return this.authService.logout(state.token).pipe(
      tap(() => {
        ctx.setState({
          token: null,
          username: null
        });
      })
    );
  }
}
