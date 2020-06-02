import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/authentication.service";

/*nombre del componente = selector*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    public authService: AuthService
  ) { }

  login() {
    console.log(this.email);
    console.log(this.password);
  }

  ngOnInit() {
  }

}
