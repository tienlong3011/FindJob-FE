import { Component, OnInit } from '@angular/core';
import {AuthService} from "../security/auth.service";
import {TokenService} from "../security/token.service";
import {Router} from "@angular/router";
import {SignInForm} from "../security/SignInForm";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  form: any = {};

  status = 'Please fill in the form to Login!';

  emailFormControl = new FormControl('', [
    Validators.email, Validators.required
  ]);

  // @ts-ignore
  signInForm: SignInForm;

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  openRegisterOption() {
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';

  }

  onLogin() {
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    )
    this.authService.signIn(this.signInForm).subscribe(data => {
      if (data.token != undefined) {
        this.tokenService.setIdAccount(data.idAccount);
        this.tokenService.setIdGuest(data.idGuest);
        this.tokenService.setTokenKey(data.token);
        this.tokenService.setNameKey(data.username);
        this.tokenService.setRoleKey(data.roles);
        for (let i = 0; i < this.tokenService.getRoleKey().length; i++) {
          if (this.tokenService.getRoleKey()[i] == "COMPANY") {
            this.router.navigate(['list-recruitmentnew-company']).then(() => {
              window.location.reload();
            })
          }
          if (this.tokenService.getRoleKey()[i] == "USER") {
            this.router.navigate(['']).then(() => {
              window.location.reload();
            })
          }
        }
      }
    })
  }
}
