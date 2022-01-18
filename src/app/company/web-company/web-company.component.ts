import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../service/company/company.service';
import {TokenService} from '../../security/token.service';
import {RecruitmentNewService} from '../../service/recruitmentNew/recruitment-new.service';
import {RecruitmentNew} from '../../model/recruitmentNew';
import {MatTableDataSource} from '@angular/material/table';
import {DetailRecruitmentnewComponent} from '../recruitmentnew/detail-recruitmentnew/detail-recruitmentnew.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-web-company',
  templateUrl: './web-company.component.html',
  styleUrls: ['./web-company.component.scss']
})
export class WebCompanyComponent implements OnInit {
  idCustom: number;
  emailCompany
  companyCurrent: any ;
  recruitmentNews: RecruitmentNew[] = [];
  constructor( private companyService: CompanyService,
               private tokenService: TokenService,
               private recruitmentNewService: RecruitmentNewService,
               private dialog: MatDialog) {
    this.idCustom = tokenService.getIdGuest()
    this.emailCompany = tokenService.getNameKey()
    this.companyService.getCompanyNameById(this.idCustom).subscribe(data => {
      console.log(data);
      this.companyCurrent = data;
    })
  }

  ngOnInit(): void {
    this.getListRecruitmentNew();
  }

  getListRecruitmentNew() {
    this.recruitmentNewService.showAllListRecruitmentNew(this.idCustom).subscribe(listRN => {
      this.recruitmentNews = listRN;
      console.log(listRN);

    });
  }


  openDialogDetails(id) {
    const dialogRef = this.dialog.open(DetailRecruitmentnewComponent, {
      data : {
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getListRecruitmentNew();
      console.log('The dialog was closed');
    });
  }

}
