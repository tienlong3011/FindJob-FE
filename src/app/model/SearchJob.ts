export class SearchJob{
  title: string;
  cityId: number;
  fieldId: number;
  companyId: number;
  vacancies: number;
  workingTimeId: number;
  start: number;
  pageSize: number;


  constructor(title: string, cityId: number, fieldId: number, companyId: number, vacancies: number, workingTimeId: number, start: number, pageSize: number) {
    this.title = title;
    this.cityId = cityId;
    this.fieldId = fieldId;
    this.companyId = companyId;
    this.vacancies = vacancies;
    this.workingTimeId = workingTimeId;
    this.start = start;
    this.pageSize = pageSize;
  }
}
