import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../company/service/company.service';
import {Company} from '../model/company';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  companyHot: Company[] = []

  constructor(private companyService: CompanyService) {
    this.companyService.fidAllCompanyByStatus(4).subscribe(data=>{
      console.log(data);
      this.companyHot = data;
      console.log(this.companyHot);
    })
  }

  ngOnInit(): void {
  }

}
