import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SignInForm} from "./SignInForm";
import {Observable} from "rxjs";
import {JwtResponse} from "./JwtResponses";
import {Company} from "../model/company";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    signIn(signInForm: SignInForm): Observable<JwtResponse> {
        return this.http.post<JwtResponse>(`${this.apiServerUrl}/signin`, signInForm);
    }

    signUp(signInForm: SignInForm): Observable<any> {
        return this.http.post<any>(`${this.apiServerUrl}/signup`, signInForm);
    }

    registerCompany(company: Company): Observable<any> {
        return this.http.post<any>(`${this.apiServerUrl}/company`, company)
    }
}
