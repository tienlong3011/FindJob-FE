import {Component, OnInit} from '@angular/core';
import {RecruitmentNew} from "../../../model/recruitmentNew";
import {RecruitmentNewService} from "../../../service/recruitmentNew/recruitment-new.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-list-recruitment-user',
  templateUrl: './list-recruitment-user.component.html',
  styleUrls: ['./list-recruitment-user.component.scss']
})
export class ListRecruitmentUserComponent implements OnInit {
  totalElements: number = 0;
  recruitmentNews: RecruitmentNew[];

  constructor(private recruitmentNewService: RecruitmentNewService) {
  }

  ngOnInit(): void {
    this.getListResquest({page: '', size: 5});
  }

  private getListResquest(request) {
    this.recruitmentNewService.pageRecruitmentNew(request)
      .subscribe(data => {
          this.recruitmentNews = data['content'];
          console.log('recruitment', data);
          this.totalElements = data['totalElements'];
        }
      );
  }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.getListResquest(request);
  }
}
