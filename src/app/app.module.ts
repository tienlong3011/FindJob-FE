import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {NgxAudioPlayerModule} from 'projects/ngx-audio-player/src/public_api';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment.prod';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {httpInterceptorProvider} from './security/auth.interceptor';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from "./login/login.component";
import {DetailCompanyComponent} from "./company/detail-company/detail-company.component";
import {ListRecruitmentnewCompanyComponent} from "./company/recruitmentnew/list-recruitmentnew-company/list-recruitmentnew-company.component";
import {RegisterCompanyComponent} from "./company/register-company/register-company.component";
import {UploadImageComponent} from "./upload/upload-image/upload-image.component";
import {CompanyService} from "./company/service/company.service";
import { ChangePasswordComponent } from './account/change-password/change-password.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {CreateRecruitmentnewComponent} from "./company/recruitmentnew/create-recruitmentnew/create-recruitmentnew.component";
import {UpdateRecruitmentnewCompanyComponent} from "./company/recruitmentnew/update-recruitmentnew-company/update-recruitmentnew-company.component";
import {MatNativeDateModule} from "@angular/material/core";
import { DialogComponent } from './dialog/dialog.component';


export const appRoutes: Routes = [
    {path: 'register-company', component: RegisterCompanyComponent},
    {path: 'login', component: LoginComponent},
    {path: 'list-recruitmentnew-company', component: ListRecruitmentnewCompanyComponent},
    {path: 'detail-company', component: DetailCompanyComponent},
    {path: 'change-password', component: ChangePasswordComponent},
    {path: 'create-recruitmentnew', component: CreateRecruitmentnewComponent},
    {path: 'update-recruitmentnew/:id', component: UpdateRecruitmentnewCompanyComponent},
    // {path: '', redirectTo: 'register-company', pathMatch: 'full'}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        DetailCompanyComponent,
        ListRecruitmentnewCompanyComponent,
        RegisterCompanyComponent,
        UploadImageComponent,
        CreateRecruitmentnewComponent,
        UpdateRecruitmentnewCompanyComponent,
        ChangePasswordComponent,
        DialogComponent
    ],
    imports: [
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        HttpClientModule,
        BrowserModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatInputModule,
        NgxAudioPlayerModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule, ReactiveFormsModule, MatProgressSpinnerModule, MatPaginatorModule, MatTableModule, MatDialogModule, MatSelectModule, MatDatepickerModule
    ],
    providers: [httpInterceptorProvider],
    bootstrap: [AppComponent]
})
export class AppModule {
}
