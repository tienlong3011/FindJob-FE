import {Component, OnInit} from '@angular/core';
import {RecruitmentNew} from '../../../model/recruitmentNew';
import {RecruitmentNewService} from '../../../service/recruitmentNew/recruitment-new.service';
import {PageEvent} from '@angular/material/paginator';
import {SearchJob} from '../../../model/SearchJob';
import {City} from '../../../model/city';
import {CityService} from '../../../service/city/city.service';
import {FieldService} from '../../../service/field/field.service';
import {Field} from '../../../model/field';
import {CompanyService} from '../../../service/company/company.service';
import {Company} from '../../../model/company';
import {VacanciesService} from '../../../service/vacancies/vacancies.service';
import {Vacancies} from '../../../model/vacancies';
import {WorkingTimeService} from '../../../service/workingTime/working-time.service';
import {WorkingTime} from '../../../model/workingTime';
import {TokenService} from '../../../security/token.service';
import {ApplyRecruitmentnewComponent} from '../../apply-recruitmentnew/apply-recruitmentnew.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../service/user.service';
import {ApplyNowComponent} from '../../../dialog/apply-now/apply-now.component';
import {Router} from '@angular/router';
import {Apply} from '../../../model/apply';
import {ApplyService} from '../../../service/apply/apply.service';
import {DialogApplyComponent} from '../../../dialog/dialogApplyFail/dialog-apply/dialog-apply.component';
import {DialogApplyFailComponent} from '../../../dialog/dialogApplyFail/dialog-apply-fail/dialog-apply-fail.component';

@Component({
  selector: 'app-list-recruitment-user',
  templateUrl: './list-recruitment-user.component.html',
  styleUrls: ['./list-recruitment-user.component.scss']
})
export class ListRecruitmentUserComponent implements OnInit {
  searchJob: SearchJob;
  recruitmentNews: any;
  pageCurrent: any = 0;
  start: number = 0;
  pageSize: number = 3;
  totalSize: number = 3;
  check: boolean = false;
  checkUser: boolean = false;
  idGuest: number;

  city: City[] = [];
  fields: Field[] = [];
  company: any[] = [];
  vacancies: Vacancies[] = [];
  workingTime: WorkingTime[] = [];



  constructor(private recruitmentNewService: RecruitmentNewService,
              private cityService: CityService,
              private fieldService: FieldService,
              private companyService: CompanyService,
              private vacanciesService: VacanciesService,
              private workingTimeService: WorkingTimeService,
              private tokenService: TokenService,
              public dialog: MatDialog,
              private userService: UserService,
              private router: Router,
              private applyService: ApplyService
              ) {
    this.searchJob = new SearchJob(null, null, null, null, null, null, 0, 3);
    this.recruitmentNewService.searchByObj(this.searchJob).subscribe(data => {
      this.recruitmentNews = data.data;
      console.log(this.recruitmentNews);
    });
    this.getAllCity();
    this.getAllField();
    this.getAllCompany();
    this.getAllVacancies();
    this.getAllWorkingTime();
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

  getAllCity() {
    this.cityService.showAll().subscribe(data => {
      this.city = data;

    });
  }

  getAllField() {
    this.fieldService.showAll().subscribe(data => {
      this.fields = data;
    });
  }

  getAllCompany() {
    this.companyService.getAllCompany().subscribe(data => {
      this.company = data;
    });
  }
  getAllVacancies(){
    this.vacanciesService.showAll().subscribe(data =>{
      this.vacancies = data;
    })
  }
  getAllWorkingTime(){
    this.workingTimeService.showAll().subscribe(data =>{
      this.workingTime = data;
    })
  }


  ngOnInit(): void {
    this.checkLogin();
    this.checkUserCurrent();
  }

  pagination() {
    this.start = this.pageCurrent * this.pageSize;
    console.log(this.start);
    this.searchJob = new SearchJob(this.searchJob.title, this.searchJob.cityId, this.searchJob.fieldId, this.searchJob.companyId, this.searchJob.vacancies, this.searchJob.workingTimeId, this.start, this.totalSize);
    this.recruitmentNewService.searchByObj(this.searchJob).subscribe(data => {
      this.recruitmentNews = data.data;
      console.log(this.recruitmentNews);
    });
  }

  leftPage() {
    if (this.pageCurrent != 0) {
      this.pageCurrent = this.pageCurrent - 1;
      this.pagination();
    }
  }
  checkLogin(){
    if(this.tokenService.getTokenKey()){
      this.check = true;
    }
  }

  rightPage() {
    this.pageCurrent = this.pageCurrent + 1;
    this.pagination();
  }

  ngSubmit(form) {
    if(form.value.title == ""){
      form.value.title = null;
    }
    if(form.value.cityId == ""){
      form.value.cityId = null;
    }
    if(form.value.fieldId == ""){
      form.value.fieldId = null;
    }
    if(form.value.companyId == ""){
      form.value.companyId = null;
    }
    if(form.value.vacancies == ""){
      form.value.vacancies = null;
    }
    if(form.value.workingTimeId == ""){
      form.value.workingTimeId = null;
    }
    this.searchJob.title = form.value.title;
    this.searchJob.cityId = form.value.cityId;
    this.searchJob.fieldId = form.value.fieldId;
    this.searchJob.companyId = form.value.companyId;
    this.searchJob.vacancies = form.value.vacancies;
    this.searchJob.workingTimeId = form.value.workingTime;
    this.start = 0 ;
    this.pageCurrent = 0;
    this.pagination();
    form.reset();
  }


  openDialogApply(id) {
    const dialogRef = this.dialog.open(ApplyRecruitmentnewComponent, {
      data : {
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogApplyNow(id) {
    const dialogRef = this.dialog.open(ApplyNowComponent, {
      data : {
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        if (!this.tokenService.getTokenKey()) {
          this.router.navigate(['login']).then(window.location.reload)
        } else {
          const apply: Apply = new Apply(id, this.tokenService.getIdGuest());
          this.applyService.createCV(apply).subscribe(data2 => {
            if(data2.message == "CREATE") {
              const dialogRef1 = this.dialog.open(DialogApplyComponent);
              dialogRef1.afterClosed().subscribe(result => {
                console.log('ressult sau khi bam nut --> ', result);
                if (result == false) {

                }
              })
            }
            else if(data2.message == "CREATE_FAIL"){
              const dialogRef1 = this.dialog.open(DialogApplyFailComponent);
              dialogRef1.afterClosed().subscribe(result => {
                console.log('ressult sau khi bam nut --> ', result);
                if (result == false) {

                }
              });
            }
          })
        }
      }
      console.log('The dialog was closed');
    });
  }
}
