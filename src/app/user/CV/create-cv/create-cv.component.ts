import { Component, OnInit } from '@angular/core';
import {Cv} from '../../../model/cv';
import {WorkExp} from '../../../model/workExp';
import {Skill} from '../../../model/skill';
import {CVService} from '../../../service/cv/cv.service';
import {WorkExpService} from '../../../service/workExp/work-exp.service';
import {SkillService} from '../../../service/skill/skill.service';
import {AuthService} from '../../../security/auth.service';
import {TokenService} from '../../../security/token.service';

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.scss']
})
export class CreateCvComponent implements OnInit {
  data : any={
    fileCv: ''
  };
  status:string = "Vui lòng bổ sung các thông tin dưới đây để hoàn tất tài khoản."
  cv: Cv;
  workExp:WorkExp;
  skill: Skill;
  idCV: number;

  errorCV1:any = {
    message: "no_file_cv"
  }
  errorCV2:any = {
    message: "no_SalaryExpectation_cv"
  }
  errorSkill1:any = {
    message: "no_name_skill"
  }
  errorWorkExp1:any = {
    message: "no_title"
  }
  errorWorkExp2:any = {
    message: "no_start_date"
  }
  errorWorkExp3:any = {
    message: "no_end_date"
  }
  success:any = {
    message: "yes"
  }
  constructor(private cvService: CVService,
              private workExpService: WorkExpService,
              private skillService: SkillService,
              private token: TokenService) { }

  ngOnInit(): void {
  }

  onUpLoadAvatar(event: any) {
    this.data.fileCv = event;
  }

  ngSubmit(form:any) {
    const user = {
      id: this.token.getIdGuest()
    }
    this.cv = new Cv(this.data.expYear,this.data.fileCv,this.data.salaryExpectation,user);
    this.cvService.createCV(this.cv).subscribe(data1 =>{
      if (JSON.stringify(data1) == JSON.stringify(this.errorCV1)) {
        this.status = 'Vui lòng Up-load file CV!';
      }
      if (JSON.stringify(data1) == JSON.stringify(this.errorCV2)) {
        this.status = 'Vui lòng nhập mức lương mong muốn!';
      }
      if(JSON.stringify(data1)==JSON.stringify(this.success)){
        this.status = 'Tạo mới CV thành công!'
      }
      this.idCV = data1.id;
      this.createWorkExp();
      this.createSkill();
    },error => alert(error));
  }

  // tạo mới workExp vào cv
    createWorkExp(){
      this.cv.id = this.idCV;
      const cvID = {
      id: this.idCV
    };
    this.workExp = new WorkExp(this.data.content,this.data.endDate,this.data.startDate,this.data.title,cvID)
    this.workExpService.createWorkExp(this.workExp).subscribe(data2 =>{
      if (JSON.stringify(data2) == JSON.stringify(this.errorWorkExp1)) {
        this.status = 'Vui lòng nhập kinh nghiệm bản thân!';
      }
      if (JSON.stringify(data2) == JSON.stringify(this.errorWorkExp2)) {
        this.status = 'Vui lòng nhập ngày bắt đầu!';
      }
      if (JSON.stringify(data2) == JSON.stringify(this.errorWorkExp3)) {
        this.status = 'Vui lòng nhập ngày kết thúc!';
      }
    })
  }

  //tạo mới skil vào cv
    createSkill(){
      this.cv.id = this.idCV;
      const cvID = {
      id: this.idCV
    };

    this.skill = new Skill(this.data.name,cvID)
    this.skillService.createSkill(this.skill).subscribe(data3 =>{

      if (JSON.stringify(data3) == JSON.stringify(this.errorSkill1)) {
        this.status = 'Vui lòng nhập kinh nghiệm làm việc!';
      }
    })
  }

}
