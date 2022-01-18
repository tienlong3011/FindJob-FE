import {Component, OnInit} from '@angular/core';
import {CVService} from '../../../service/cv/cv.service';
import {WorkExpService} from '../../../service/workExp/work-exp.service';
import {SkillService} from '../../../service/skill/skill.service';
import {AuthService} from '../../../security/auth.service';
import {TokenService} from '../../../security/token.service';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CvDTO} from "../../../model/dto/cv-dto";

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.scss']
})
export class CreateCvComponent implements OnInit {
  status: string = "Vui lòng bổ sung các thông tin dưới đây để hoàn tất tài khoản."

  errorCV1: any = {
    message: "no_file_cv"
  }
  errorCV2: any = {
    message: "no_SalaryExpectation_cv"
  }
  errorSkill1: any = {
    message: "no_name_skill"
  }
  errorWorkExp1: any = {
    message: "no_title"
  }
  errorWorkExp2: any = {
    message: "no_start_date"
  }
  errorWorkExp3: any = {
    message: "no_end_date"
  }
  success: any = {
    message: "yes"
  }

  constructor(private cvService: CVService,
              private workExpService: WorkExpService,
              private skillService: SkillService,
              private token: TokenService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  check = false;

  cvForm = this.fb.group({
    expYear: [],
    salaryExpectation: [],
    fileCV: [],
    userId: this.token.getIdGuest(),
    skills: this.fb.array([]),
    workExps: this.fb.array([])
  })

  get skills() {
    return this.cvForm.get('skills') as FormArray;
  }

  get workExps() {
    return this.cvForm.get("workExps") as FormArray;
  }

  onUpLoadAvatar(event: any) {
    this.cvForm.value.fileCV = event;
  }

  ngSubmit() {
    this.cvService.createCV(this.cvForm.value).subscribe(data => {
      console.log("CV sau khi submit", data);
    })
  }

  addSkill() {
    const skillForm = this.fb.group({
      name: [''],
      proficiency: ['50%']
    })
    this.skills.push(skillForm);
  }

  deleteSkill(index: number) {
    this.skills.removeAt(index);
  }

  addWorkExp() {
    const workExpForm = this.fb.group({
      title: [''],
      startDate: [''],
      endDate: [''],
      content: ['']
    })
    this.workExps.push(workExpForm);
  }

  deleteWorkExp(index: number) {
    this.workExps.removeAt(index);
  }
}
