import { Component, OnInit } from '@angular/core';
import {ChangePassword} from '../../service/account/changePassword';
import {AuthService} from '../../security/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  newPassword: string;
  changePassword: ChangePassword;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  ngSubmit(form: any) {
    this.changePassword = new ChangePassword(this.newPassword);
    console.log(this.changePassword);
    this.authService.changePassword(this.changePassword).subscribe(data =>{
      console.log(data);
    })
  }
}
