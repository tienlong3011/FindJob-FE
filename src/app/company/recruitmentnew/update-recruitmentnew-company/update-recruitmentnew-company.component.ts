import { Component, OnInit } from '@angular/core';
import {City} from "../../../model/city";

@Component({
  selector: 'app-update-recruitmentnew-company',
  templateUrl: './update-recruitmentnew-company.component.html',
  styleUrls: ['./update-recruitmentnew-company.component.scss']
})
export class UpdateRecruitmentnewCompanyComponent implements OnInit {
  recruitmentNew: City;

  constructor() { }

  ngOnInit(): void {
  }

}
