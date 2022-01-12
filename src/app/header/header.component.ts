import { Component, OnInit } from '@angular/core';
import {TokenService} from "../security/token.service";
import {CompanyService} from "../company/service/company.service";
import {Company} from "../model/company";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  checkLogin = false;

  checkRole: string;

  // @ts-ignore
  name: string

  // @ts-ignore
  idGuest: number;

  // @ts-ignore
  company: Company;

  constructor(private tokenService: TokenService,
              private companyService: CompanyService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getTokenKey()) {
      this.checkLogin = true;
      this.idGuest = this.tokenService.getIdGuest();
      for (let i = 0; i < this.tokenService.getRoleKey().length; i++) {
        if (this.tokenService.getRoleKey()[i] == "COMPANY") {
          this.companyService.getCompanyNameById(this.idGuest).subscribe(data => {
            console.log(data);
            this.company = data;
            this.checkRole = "COMPANY";
            this.name = this.company.name;
          })
        }
        // CÒN USER CHƯA LÀM
      }
    }
  }

  logOut() {
    window.sessionStorage.clear();
    this.router.navigate(['login']).then(()=>{
      window.location.reload();
    })
  }
}
