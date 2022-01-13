import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CompanyService} from '../service/company.service';
import {Company} from '../../model/company';
import {TokenService} from '../../security/token.service';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.scss']
})
export class DetailCompanyComponent implements OnInit {
  idCustom: number;
  companyCurrent: Company ;
  constructor(private router: Router,private companyService: CompanyService,private tokenService: TokenService) {
    this.idCustom = tokenService.getIdGuest()
    this.companyService.getCompanyNameById(this.idCustom).subscribe(data => {
      this.companyCurrent = data;
    })
  }

  ngOnInit(): void {
  }


}
