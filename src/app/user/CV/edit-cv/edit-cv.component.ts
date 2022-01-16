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

@Component({
  selector: 'app-edit-cv',
  templateUrl: './edit-cv.component.html',
  styleUrls: ['./edit-cv.component.scss']
})
export class EditCvComponent implements OnInit {
  cv: CvDTO;

  idUser: number;

  constructor(private tokenService: TokenService,
              private userService: UserService,
              private skillService: SkillService,
              private cvService: CVService,
              private workExpService: WorkExpService,
              private route: ActivatedRoute,
              private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.idUser = this.route.snapshot.params['id'];
    this.cvService.findByUserId(this.idUser).subscribe((data: CvDTO) => {
      this.cv = data;
    });
  }

  addWorkExp() {
    const workExp: WorkExpDTO = {content: "aaaa", cvId: this.cv.id, endDate: null, id: null, startDate: null, title: ""};
    this.cv.workExps.push(workExp);
  }

  deleteWorkExp(index: number) {
    const workExpDel = this.cv.workExps.splice(index, 1);
    // const dialog = this.dialog.openDialogs(DialogComponent);
  }
}
