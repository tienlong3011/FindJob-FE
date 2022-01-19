import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../../security/token.service";
import {User} from "../../../model/user";
import {UserService} from "../../service/user.service";
import {Skill} from "../../../model/skill";
import {SkillService} from "../../../service/skill/skill.service";
import {ActivatedRoute} from "@angular/router";
import {CVService} from "../../../service/cv/cv.service";
import {Cv} from "../../../model/cv";
import {WorkExp} from "../../../model/workExp";
import {WorkExpService} from "../../../service/workExp/work-exp.service";
import {CvDTO} from "../../../model/dto/cv-dto";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../../dialog/dialog.component";
import {WorkExpDTO} from "../../../model/dto/work-exp-dto";
import {FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-edit-cv',
  templateUrl: './edit-cv.component.html',
  styleUrls: ['./edit-cv.component.scss']
})
export class EditCvComponent implements OnInit {
  user: User;

  idUser: number;

  id: number;

  cvForm = this.fb.group({
    expYear: [],
    salaryExpectation: [],
    fileCV: [],
    userId: this.token.getIdGuest(),
    skills: this.fb.array([]),
    workExps: this.fb.array([])
  })

  constructor(private tokenService: TokenService,
              private userService: UserService,
              private skillService: SkillService,
              private cvService: CVService,
              private workExpService: WorkExpService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private fb: FormBuilder,
              private token: TokenService
  ) {
  }

  get skills() {
    return this.cvForm.get('skills') as FormArray;
  }

  get workExps() {
    return this.cvForm.get("workExps") as FormArray;
  }

  ngOnInit(): void {
    this.idUser = this.route.snapshot.params['id'];

    this.userService.getUserById(this.idUser).subscribe(data => {
      this.user = data;
    })

    this.cvService.findByUserId(this.idUser).subscribe((data: CvDTO) => {
      data.skills.forEach(item => {
        this.skills.push(this.fb.group({
          name: [''],
          proficiency: ['']
        }));
      })
      data.workExps.forEach(item => {
        this.workExps.push(this.fb.group({
          title: [''],
          startDate: [''],
          endDate: [''],
          content: ['']
        }))
      })
      this.cvForm.patchValue(data);
      console.log("data", data);
    });
  }

  // addSkill() {
  //   const skillForm = this.fb.group({
  //     name: [''],
  //     proficiency: ['50%']
  //   })
  //   this.skills.push(skillForm);
  // }
  //
  // deleteSkill(index: number) {
  //   this.skills.removeAt(index);
  // }
  //
  // addWorkExp() {
  //   const workExpForm = this.fb.group({
  //     title: [''],
  //     startDate: [''],
  //     endDate: [''],
  //     content: ['']
  //   })
  //   this.workExps.push(workExpForm);
  // }
  //
  // deleteWorkExp(index: number) {
  //   this.workExps.removeAt(index);
  // }
}
