import {Component, Inject, OnInit} from '@angular/core';
import {RecruitmentNewService} from '../../service/recruitmentNew/recruitment-new.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {RecruitmentNew} from '../../model/recruitmentNew';
import {TokenService} from '../../security/token.service';
import {ApplyService} from '../../service/apply/apply.service';
import {Apply} from '../../model/apply';
import {DialogComponent} from '../../dialog/dialog.component';
import {DialogApplyFailComponent} from '../../dialog/dialogApplyFail/dialog-apply-fail/dialog-apply-fail.component';
import {DialogApplyComponent} from '../../dialog/dialogApplyFail/dialog-apply/dialog-apply.component';

@Component({
  selector: 'app-apply-recruitmentnew',
  templateUrl: './apply-recruitmentnew.component.html',
  styleUrls: ['./apply-recruitmentnew.component.scss']
})
export class ApplyRecruitmentnewComponent implements OnInit {
  recruitmentNew: RecruitmentNew;
  checkLogin: boolean = false;
  idRcm: number;
  constructor(private rcms: RecruitmentNewService,private router: Router,
              @Inject(MAT_DIALOG_DATA) public data:any,
              public dialogRef: MatDialogRef<ApplyRecruitmentnewComponent>,
              private tokenService: TokenService,
              private applyService: ApplyService,
              public dialog: MatDialog
              ) {
    this.idRcm = data.id;
    this.rcms.getRecruitmentNewById(data.id).subscribe(data =>{
      this.recruitmentNew = data;
      console.log(this.recruitmentNew);
    })
  }
  checkLoginWithToken(){
    if(this.tokenService.getTokenKey()){
      this.checkLogin = true;
    }
  }

  ngOnInit(): void {
    this.checkLoginWithToken();
  }

  applyRecruitmentNewNow() {
    const apply: Apply = new Apply(this.idRcm,this.tokenService.getIdGuest());
    this.applyService.createCV(apply).subscribe(data2 =>{
      console.log(data2);
      if(data2.message == "CREATE"){
        this.dialogRef.close();
        const dialogRef1 = this.dialog.open(DialogApplyComponent);
        dialogRef1.afterClosed().subscribe(result => {
          console.log('ressult sau khi bam nut --> ', result);
          if (result == false) {

          }
      })
      }
      else if(data2.message == "CREATE_FAIL"){
        this.dialogRef.close();
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
