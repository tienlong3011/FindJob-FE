import {Component, OnInit} from '@angular/core';
import {Account} from "../../model/account";
import {AuthService} from "../../security/auth.service";
import {Company} from "../../model/company";
import {CityService} from "../../service/city/city.service";


@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss']
})
export class RegisterCompanyComponent implements OnInit {

  data: any = {
    avatar: ""
  };
  // @ts-ignore
  account: Account;
  // @ts-ignore
  company: Company;
  // @ts-ignore
  idAccount: number;
  cities: any = [];
  status: string = "";

  constructor(private authService: AuthService, private cityService: CityService) {
    this.showAllCity();
  }

  showAllCity() {
    this.cityService.showAll().subscribe(data3 => {
      this.cities = data3;
      console.log(data3)
    })
  }

  ngOnInit(): void {
  }


  ngSubmit() {
    console.log()
    const roles: string[] = ['company']
    // @ts-ignore
    this.account = new Account(this.data.username, this.data.password, roles)
    this.authService.signUp(this.account).subscribe(data1 => {
      console.log(data1)
      this.idAccount = data1.id;
      this.create()
    })
  }

  create() {
    const city = {
      id: this.data.city
    }
    console.log(city)
    this.account.id = this.idAccount;
    const account11 = {
      id: this.idAccount
    }
    this.company = new Company(this.data.name, this.data.avatar, this.data.description, this.data.address, this.data.employeeQuantity, city, this.data.linkMap, this.data.phone, account11)
    console.log(this.company)
    this.authService.registerCompany(this.company).subscribe(data2 => {

      console.log(data2)
    })
  }

  onUpLoadAvatar(event: any) {
    this.data.avatar = event;
  }
}
