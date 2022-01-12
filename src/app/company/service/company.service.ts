import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {SignInForm} from "../../security/SignInForm";
import {Observable} from "rxjs";
import {JwtResponse} from "../../security/JwtResponses";
import {HttpClient} from "@angular/common/http";
import {Company} from "../../model/company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getCompanyNameById(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiServerUrl}/company/${id}`);
  }
}
