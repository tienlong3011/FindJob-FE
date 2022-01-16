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
import {ChangePasswordComponent} from './account/change-password/change-password.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {CreateRecruitmentnewComponent} from "./company/recruitmentnew/create-recruitmentnew/create-recruitmentnew.component";
import {UpdateRecruitmentnewCompanyComponent} from "./company/recruitmentnew/update-recruitmentnew-company/update-recruitmentnew-company.component";
import {MatNativeDateModule} from "@angular/material/core";
import {DialogComponent} from './dialog/dialog.component';
import {RegisterUserComponent} from './user/register-user/register-user.component';
import {MatBadgeModule} from '@angular/material/badge';
import {ListRecruitmentUserComponent} from './user/recruitmentnew/list-recruitment-user/list-recruitment-user.component';
import {CreateCvComponent} from './user/CV/create-cv/create-cv.component';
import {ApplyRecruitmentnewComponent} from './user/apply-recruitmentnew/apply-recruitmentnew.component';
import {DialogApplyFailComponent} from './dialog/dialogApplyFail/dialog-apply-fail/dialog-apply-fail.component';
import {DialogApplyComponent} from './dialog/dialogApplyFail/dialog-apply/dialog-apply.component';
import {DetailCvComponent} from "./user/CV/detail-cv/detail-cv.component";
import {EditCvComponent} from "./user/CV/edit-cv/edit-cv.component";
import {DetailRecruitmentnewComponent} from "./company/recruitmentnew/detail-recruitmentnew/detail-recruitmentnew.component";
import { HomepageComponent } from './homepage/homepage.component';

export const appRoutes: Routes = [
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'register-company', component: RegisterCompanyComponent},
  {path: 'login', component: LoginComponent},
  {path: 'list-recruitmentnew-company', component: ListRecruitmentnewCompanyComponent},
  {path: 'list-recruitmentnew-user', component: ListRecruitmentUserComponent},
  {path: 'detail-company', component: DetailCompanyComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: 'create-cv', component: CreateCvComponent},
  {path: 'update-cv/:id', component: EditCvComponent},
  {path: 'detail-cv/:id', component: DetailCvComponent},
  {path: 'create-recruitmentnew', component: CreateRecruitmentnewComponent},
  {path: 'update-recruitmentnew/:id', component: UpdateRecruitmentnewCompanyComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'home', component: HomepageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
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
    DialogComponent,
    RegisterUserComponent,
    ListRecruitmentUserComponent,
    CreateCvComponent,
    ApplyRecruitmentnewComponent,
    DialogApplyFailComponent,
    DialogApplyComponent,
    EditCvComponent,
    DetailCvComponent,
    DetailRecruitmentnewComponent,
    HomepageComponent
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
    RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule, ReactiveFormsModule, MatProgressSpinnerModule, MatPaginatorModule, MatTableModule, MatDialogModule, MatSelectModule, MatDatepickerModule, MatBadgeModule
  ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
