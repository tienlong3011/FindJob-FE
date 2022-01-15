import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../../security/token.service";
import {User} from "../../../model/user";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-edit-cv',
  templateUrl: './edit-cv.component.html',
  styleUrls: ['./edit-cv.component.scss']
})
export class EditCvComponent implements OnInit {
  user: User;

  idUser: number;

  constructor(private tokenService: TokenService,
              private userService: UserService
              ) { }

  ngOnInit(): void {
    this.idUser = this.tokenService.getIdGuest();
    this.userService.getUserById(this.idUser).subscribe(data => {
      this.user = data;
    })
  }
}
