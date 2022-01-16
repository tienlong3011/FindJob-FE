import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../service/company/company.service';
import {Company} from '../model/company';
import {RecruitmentNewService} from '../service/recruitmentNew/recruitment-new.service';
import {RecruitmentNew} from '../model/recruitmentNew';
import {TokenService} from '../security/token.service';
import {ApplyRecruitmentnewComponent} from '../user/apply-recruitmentnew/apply-recruitmentnew.component';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import {UserService} from '../user/service/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  companyHot: Company[] = [];
  recruimentNew: RecruitmentNew[] = [];
  totalElements: number = 0;
  checkLogin: boolean = false;
  checkUser: boolean = false;
  idGuest: number;

  constructor(private companyService: CompanyService,
              private rcms: RecruitmentNewService,
              private tokenService: TokenService,
              public dialog: MatDialog,
              private userService: UserService,
              ) {
    this.companyService.fidAllCompanyByStatus(4).subscribe(data => {
      console.log(data);
      this.companyHot = data;
      console.log(this.companyHot);
    });
    this.checklogin();
  }

  checkUserCurrent(){
    if(this.tokenService.getTokenKey()){
      this.idGuest = this.tokenService.getIdGuest();
      for (let i = 0; i < this.tokenService.getRoleKey().length; i++){
        console.log(this.tokenService.getRoleKey()[i]);
        if (this.tokenService.getRoleKey()[i] == "USER") {
          this.userService.getUserById(this.idGuest).subscribe(data => {
            if(data){
              console.log("hello");
              this.checkUser = true
              console.log(data);
            }
          })
        }
        else {
          this.checkUser = false;
        }
      }
    }
    else {
      this.checkUser = true;
    }
  }

  ngOnInit(): void {
    this.pageRecruiment({page: 0, size: 4});
    this.checkUserCurrent();
  }

  checklogin() {
    if (this.tokenService.getTokenKey()) {
      this.checkLogin = true;
    }
  }

  pageRecruiment(nextPage) {
    this.rcms.pageRecruitmentNew(nextPage).subscribe(data => {
      this.recruimentNew = data['content'];
      console.log(this.recruimentNew);
      this.totalElements = data['totalElements'];
      console.log(this.totalElements);
    });
  }

  nextPage(event: PageEvent) {
    console.log(event);
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.pageRecruiment(request);
  }

  openDialogApplyNow(id: number) {
    const dialogRef = this.dialog.open(ApplyRecruitmentnewComponent, {
      data: {
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
