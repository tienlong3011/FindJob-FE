import { Component, OnInit } from '@angular/core';
import {WorkingTimeService} from '../../../service/workingTime/working-time.service';
import {FieldService} from '../../../service/field/field.service';
import {Vacancies} from '../../../model/vacancies';
import {VacanciesService} from '../../../service/vacancies/vacancies.service';
import {CityService} from '../../../service/city/city.service';

@Component({
  selector: 'app-create-recruitmentnew',
  templateUrl: './create-recruitmentnew.component.html',
  styleUrls: ['./create-recruitmentnew.component.scss']
})
export class CreateRecruitmentnewComponent implements OnInit {

  form : any = {};
  workingTimes: any = [];
  fields: any = [];
  vacancies1: any = [];
  cities: any = [];
  status: string = "";
  gender: any = [
    {
      id: 1,
      name: "Nam"
    },
    {
      id: 2,
      name: "Nữ"
    },
    {
      id: 3,
      name: "Nam và Nữ"
    }
  ]
  constructor(private workingTimeService: WorkingTimeService,
              private fieldService: FieldService,
              private vacanciesService: VacanciesService,
              private cityService: CityService) {
    this.showAllWorkingTime()
    this.showAllField()
    this.showAllVacancies()
    this.showAllCity()
  }

  showAllWorkingTime() {
    this.workingTimeService.showAll().subscribe(data => {
      this.workingTimes = data;
      console.log(data)
    })
  }

  showAllField(){
    this.fieldService.showAll().subscribe(data1 => {
      this.fields = data1;
      console.log(data1)
    })
  }

  showAllVacancies(){
    this.vacanciesService.showAll().subscribe(data2 => {
      this.vacancies1 = data2;
      console.log(data2)
    })
  }

  showAllCity() {
    this.cityService.showAll().subscribe(data3 => {
      this.cities = data3;
      console.log(data3)
    })
  }
  ngOnInit(): void {
  }

  ngSubmit() {
    return false;
  }
}
