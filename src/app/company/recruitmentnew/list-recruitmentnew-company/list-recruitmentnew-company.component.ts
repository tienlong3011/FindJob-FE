import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {RecruitmentNewService} from '../../../service/recruitmentNew/recruitment-new.service';
import {RecruitmentNew} from '../../../model/recruitmentNew';
import {TokenService} from '../../../security/token.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../../../dialog/dialog.component';

@Component({
  selector: 'app-list-recruitmentnew-company',
  templateUrl: './list-recruitmentnew-company.component.html',
  styleUrls: ['./list-recruitmentnew-company.component.scss']
})
export class ListRecruitmentnewCompanyComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'expDate','status','edit','delete'];
  dataSource: any;
  recruitmentNews: RecruitmentNew[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private recruitmentNewService: RecruitmentNewService,
              private token: TokenService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getListRecruitmentNew()
  }

  getListRecruitmentNew() {
    this.recruitmentNewService.showAllListRecruitmentNew(this.token.getIdGuest()).subscribe(listRN => {
      this.recruitmentNews = listRN;
      this.dataSource = new MatTableDataSource<RecruitmentNew>(this.recruitmentNews);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteRecruitmentNew(id: number) {
    this.recruitmentNewService.deleteRecruitmentNewById(id).subscribe(() => {
      this.getListRecruitmentNew();
    });
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('ressult sau khi bam nut --> ', result);
      if (result) {
        this.deleteRecruitmentNew(id);
      }
      console.log(`Dialog result: ${result}`);
    });
  }
}
