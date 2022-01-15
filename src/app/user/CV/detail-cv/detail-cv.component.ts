import { Component, OnInit } from '@angular/core';
import {Cv} from "../../../model/cv";
import {User} from "../../../model/user";
import {Skill} from "../../../model/skill";
import {TokenService} from "../../../security/token.service";
import {UserService} from "../../service/user.service";
import {SkillService} from "../../../service/skill/skill.service";
import {CVService} from "../../../service/cv/cv.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.scss']
})
export class DetailCvComponent implements OnInit {
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
    this.cvService.findByUserId(this.idUser).subscribe(data => {
      this.cv = data;
      this.skillService.findAllByCvId(this.cv.id).subscribe(data => {
        console.log(data);
        this.skills = data;
      })
    })

  }
}
