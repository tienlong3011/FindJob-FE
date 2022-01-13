import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {AuthService} from '../../security/auth.service';
import {Account} from '../../model/account';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  data: any = {
    password: '',
    confirmpassword: '',
    phone: ''
  };
  check: boolean = false;
  account: Account;
  idAccount: number;
  user: User

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  ngSubmit(form) {
    console.log(this.data);
    if (this.checkPassword()) {
      const roles: string[] = ['user']
      this.account = new Account(this.data.username, this.data.password, roles);
      console.log(this.account);
      this.authService.signUp(this.account).subscribe(data1 => {
        console.log(data1)
        this.idAccount = data1.id;
        this.createUser();
      })
    }
  }
  createUser(){
    this.account.id = this.idAccount;
    const account11 = {
      id: this.idAccount
    }
    this.user = new User(this.data.name,this.data.phone,account11);
    console.log(this.user);
    this.authService.registerUser(this.user).subscribe(data2=>{
      console.log(data2);
    })
  }

  checkPassword() {
    if (this.data.password == this.data.confirmpassword && this.data.password != '') {
      return true;
    } else if (this.data.password != this.data.confirmpassword && this.data.password != '' && this.data.confirmpassword != '') {
      return false;
    }
  }
}
