import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../../security/token.service";
import {User} from "../../../model/user";
import {UserService} from "../../service/user.service";
import {Skill} from "../../../model/skill";
import {SkillService} from "../../../service/skill/skill.service";
import {ActivatedRoute} from "@angular/router";
import {CVService} from "../../../service/cv/cv.service";
import {Cv} from "../../../model/cv";

@Component({
  selector: 'app-edit-cv',
  templateUrl: './edit-cv.component.html',
  styleUrls: ['./edit-cv.component.scss']
})
export class EditCvComponent implements OnInit {
  cv: Cv;

  user: User;

  skills: Skill[];

  idUser: number;

  constructor(private tokenService: TokenService,
              private userService: UserService,
              private skillService: SkillService,
              private cvService: CVService,
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.idUser = this.route.snapshot.params['id'];
    this.userService.getUserById(this.idUser).subscribe(data => {
      this.user = data;
    })
    // this.cvService.findByUserId(this.idUser).subscribe(data => {
    //   this.cv = data;
    //   this.skillService.findAllByCvId(this.cv.id).subscribe(data => {
    //     console.log(data);
    //     this.skills = data;
    //   })
    // })

  }
}
