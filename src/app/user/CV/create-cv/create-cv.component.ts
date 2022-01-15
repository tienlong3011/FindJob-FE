import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.scss']
})
export class CreateCvComponent implements OnInit {
  data : any={};
  status:string = "Vui lòng bổ sung các thông tin dưới đây để hoàn tất tài khoản."
  constructor() { }

  ngOnInit(): void {
  }

}
