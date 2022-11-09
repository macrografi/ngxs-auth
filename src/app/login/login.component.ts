import { Component, OnInit } from '@angular/core';
import {Login} from "../model/auth.state.model";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _store:Store) { }

  ngOnInit(): void {
    this._store
      .dispatch(new Login({ username: "user-1", password: "123456" }))
      .subscribe(success => {}, error => {});
  }

}
