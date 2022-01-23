(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+0W5":
/*!*******************************************************************************************!*\
  !*** ./src/app/dialog/dialogApplyFail/dialog-apply-fail/dialog-apply-fail.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctYXBwbHktZmFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "+gvS":
/*!**********************************************************************!*\
  !*** ./projects/ngx-audio-player/src/lib/pipe/seconds-to-minutes.ts ***!
  \**********************************************************************/
/*! exports provided: SecondsToMinutesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondsToMinutesPipe", function() { return SecondsToMinutesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Transform seconds to minutes:seconds
 * Example : 270 -> 02:30
*/
var SecondsToMinutesPipe = /** @class */ (function () {
    function SecondsToMinutesPipe() {
    }
    SecondsToMinutesPipe.prototype.transform = function (time) {
        var hours = ('0' + Math.floor(time / 3600)).slice(-2);
        var minutes = ('0' + Math.floor((time % 3600) / 60)).slice(-2);
        var seconds = ('0' + time % 60).slice(-2);
        if (hours !== '00') {
            return hours + ":" + minutes + ":" + seconds;
        }
        return minutes + ":" + seconds;
    };
    SecondsToMinutesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'secondsToMinutes' })
    ], SecondsToMinutesPipe);
    return SecondsToMinutesPipe;
}());



/***/ }),

/***/ "/2An":
/*!************************************!*\
  !*** ./src/app/model/SearchJob.ts ***!
  \************************************/
/*! exports provided: SearchJob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchJob", function() { return SearchJob; });
var SearchJob = /** @class */ (function () {
    function SearchJob(title, cityId, fieldId, companyId, vacancies, workingTimeId, start, pageSize, salary) {
        this.title = title;
        this.cityId = cityId;
        this.fieldId = fieldId;
        this.companyId = companyId;
        this.vacancies = vacancies;
        this.workingTimeId = workingTimeId;
        this.start = start;
        this.pageSize = pageSize;
        this.salary = salary;
    }
    return SearchJob;
}());



/***/ }),

/***/ "/DSI":
/*!****************************************************!*\
  !*** ./src/app/service/account/account.service.ts ***!
  \****************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
        this.apiServerUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl;
    }
    AccountService.prototype.showAll = function () {
        return this.http.get(this.apiServerUrl + "/showAllAccount");
    };
    AccountService.prototype.changeStatusById = function (id) {
        // @ts-ignore
        return this.http.put(this.apiServerUrl + "/editStatusAccount/" + id);
    };
    AccountService.prototype.changeStatusById2 = function (id) {
        // @ts-ignore
        return this.http.put(this.apiServerUrl + "/recruitment/editStatus/" + id);
    };
    AccountService.prototype.showAllAdminRecruitment = function () {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + "/recruitment/list");
    };
    AccountService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "/Vn9":
/*!**************************************************************************!*\
  !*** ./src/app/dialog/CV/dialog-create-cv/dialog-create-cv.component.ts ***!
  \**************************************************************************/
/*! exports provided: DialogCreateCvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogCreateCvComponent", function() { return DialogCreateCvComponent; });
/* harmony import */ var _raw_loader_dialog_create_cv_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dialog-create-cv.component.html */ "Yd1Z");
/* harmony import */ var _dialog_create_cv_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-create-cv.component.scss */ "m1uw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogCreateCvComponent = /** @class */ (function () {
    function DialogCreateCvComponent() {
    }
    DialogCreateCvComponent.prototype.ngOnInit = function () {
    };
    DialogCreateCvComponent.ctorParameters = function () { return []; };
    DialogCreateCvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dialog-create-cv',
            template: _raw_loader_dialog_create_cv_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dialog_create_cv_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DialogCreateCvComponent);
    return DialogCreateCvComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\M6-FindJob-Frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0eJw":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/CV/dialog-no-create/dialog-no-create.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\" style=\"margin-top: 20px\">\r\n            <mat-card style=\"margin: 50px 0\">\r\n                <h4 class=\"alert alert-dark\">Bạn đã có CV!</h4>\r\n                <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"false\">Đóng</button>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "0jf1":
/*!*********************************************************!*\
  !*** ./src/app/dialog/apply-now/apply-now.component.ts ***!
  \*********************************************************/
/*! exports provided: ApplyNowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyNowComponent", function() { return ApplyNowComponent; });
/* harmony import */ var _raw_loader_apply_now_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./apply-now.component.html */ "IzhQ");
/* harmony import */ var _apply_now_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-now.component.scss */ "jVqi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApplyNowComponent = /** @class */ (function () {
    function ApplyNowComponent() {
    }
    ApplyNowComponent.prototype.ngOnInit = function () {
    };
    ApplyNowComponent.ctorParameters = function () { return []; };
    ApplyNowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-apply-now',
            template: _raw_loader_apply_now_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_apply_now_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ApplyNowComponent);
    return ApplyNowComponent;
}());



/***/ }),

/***/ "0x/x":
/*!**********************************************************************************************!*\
  !*** ./src/app/user/recruitmentnew/list-recruitment-user/list-recruitment-user.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ListRecruitmentUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRecruitmentUserComponent", function() { return ListRecruitmentUserComponent; });
/* harmony import */ var _raw_loader_list_recruitment_user_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./list-recruitment-user.component.html */ "DXXV");
/* harmony import */ var _list_recruitment_user_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-recruitment-user.component.scss */ "PPnF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/recruitmentNew/recruitment-new.service */ "FmPh");
/* harmony import */ var _model_SearchJob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/SearchJob */ "/2An");
/* harmony import */ var _service_city_city_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/city/city.service */ "J7T8");
/* harmony import */ var _service_field_field_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/field/field.service */ "3GXu");
/* harmony import */ var _service_company_company_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/company/company.service */ "KXKP");
/* harmony import */ var _service_vacancies_vacancies_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/vacancies/vacancies.service */ "dL5G");
/* harmony import */ var _service_workingTime_working_time_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/workingTime/working-time.service */ "oMkr");
/* harmony import */ var _security_token_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../security/token.service */ "zdrf");
/* harmony import */ var _apply_recruitmentnew_apply_recruitmentnew_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../apply-recruitmentnew/apply-recruitmentnew.component */ "6aLj");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../service/user.service */ "sQRL");
/* harmony import */ var _dialog_apply_now_apply_now_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../dialog/apply-now/apply-now.component */ "0jf1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _model_apply__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../model/apply */ "IU9o");
/* harmony import */ var _service_apply_apply_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../service/apply/apply.service */ "j6QF");
/* harmony import */ var _dialog_dialogApplyFail_dialog_apply_dialog_apply_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../dialog/dialogApplyFail/dialog-apply/dialog-apply.component */ "pA9W");
/* harmony import */ var _dialog_dialogApplyFail_dialog_apply_fail_dialog_apply_fail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../dialog/dialogApplyFail/dialog-apply-fail/dialog-apply-fail.component */ "NUjO");
/* harmony import */ var _dialog_dialog_match_dialog_match_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../dialog/dialog-match/dialog-match.component */ "erfy");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var ListRecruitmentUserComponent = /** @class */ (function () {
    function ListRecruitmentUserComponent(recruitmentNewService, cityService, fieldService, companyService, vacanciesService, workingTimeService, tokenService, dialog, userService, router, applyService, activeRouter) {
        var _this = this;
        this.recruitmentNewService = recruitmentNewService;
        this.cityService = cityService;
        this.fieldService = fieldService;
        this.companyService = companyService;
        this.vacanciesService = vacanciesService;
        this.workingTimeService = workingTimeService;
        this.tokenService = tokenService;
        this.dialog = dialog;
        this.userService = userService;
        this.router = router;
        this.applyService = applyService;
        this.activeRouter = activeRouter;
        this.pageCurrent = 0;
        this.start = 0;
        this.pageSize = 3;
        this.totalSize = 3;
        this.check = false;
        this.checkUser = false;
        this.advancedForm = false;
        this.city = [];
        this.fields = [];
        this.company = [];
        this.vacancies = [];
        this.workingTime = [];
        this.sub = this.activeRouter.paramMap.subscribe(function (paramMap) {
            _this.searchKey = (paramMap.get('id'));
            if (paramMap.get('id') == 'xxx') {
                _this.searchKey = null;
            }
            console.log(_this.searchKey);
        });
        this.searchJob = new _model_SearchJob__WEBPACK_IMPORTED_MODULE_4__["SearchJob"](this.searchKey, null, null, null, null, null, 0, 3, null);
        this.recruitmentNewService.searchByObj(this.searchJob).subscribe(function (data) {
            _this.recruitmentNews = data.data;
            _this.totalSize = data.totalRecord;
            console.log(_this.recruitmentNews);
            // this.checkdate();
        });
        this.getAllCity();
        this.getAllField();
        this.getAllCompany();
        this.getAllVacancies();
        this.getAllWorkingTime();
    }
    // checkdate() {
    //   for (let i = 0; i < this.recruitmentNews.length; i++) {
    //     const dateRCM = new Date(this.recruitmentNews[i].expDate);
    //     console.log(dateRCM);
    //     const today = new Date();
    //     console.log(today);
    //     // @ts-ignore
    //     const c = (today - dateRCM) / (1000 * 3600 * 24);
    //     console.log(c);
    //     if (c >= 0) {
    //       this.recruitmentNewService.changeStatusById(this.recruitmentNews[i].id).subscribe(data => {
    //         console.log(data);
    //       });
    //     }
    //   }
    // }
    ListRecruitmentUserComponent.prototype.formatLabel = function (value) {
        if (value >= 1000000) {
            return Math.round(value / 1000000) + 'tr';
        }
        return value;
    };
    ListRecruitmentUserComponent.prototype.checkUserCurrent = function () {
        var _this = this;
        if (this.tokenService.getTokenKey()) {
            this.idGuest = this.tokenService.getIdGuest();
            for (var i = 0; i < this.tokenService.getRoleKey().length; i++) {
                console.log(this.tokenService.getRoleKey()[i]);
                if (this.tokenService.getRoleKey()[i] == 'USER') {
                    this.userService.getUserById(this.idGuest).subscribe(function (data) {
                        if (data) {
                            console.log('hello');
                            _this.checkUser = true;
                            console.log(data);
                        }
                    });
                }
                else {
                    this.checkUser = false;
                }
            }
        }
        else {
            this.checkUser = true;
        }
    };
    ListRecruitmentUserComponent.prototype.getAllCity = function () {
        var _this = this;
        this.cityService.showAll().subscribe(function (data) {
            _this.city = data;
        });
    };
    ListRecruitmentUserComponent.prototype.getAllField = function () {
        var _this = this;
        this.fieldService.showAll().subscribe(function (data) {
            _this.fields = data;
        });
    };
    ListRecruitmentUserComponent.prototype.getAllCompany = function () {
        var _this = this;
        this.companyService.getAllCompany().subscribe(function (data) {
            _this.company = data;
        });
    };
    ListRecruitmentUserComponent.prototype.getAllVacancies = function () {
        var _this = this;
        this.vacanciesService.showAll().subscribe(function (data) {
            _this.vacancies = data;
        });
    };
    ListRecruitmentUserComponent.prototype.getAllWorkingTime = function () {
        var _this = this;
        this.workingTimeService.showAll().subscribe(function (data) {
            _this.workingTime = data;
        });
    };
    ListRecruitmentUserComponent.prototype.ngOnInit = function () {
        this.checkLogin();
        this.checkUserCurrent();
    };
    ListRecruitmentUserComponent.prototype.pagination = function () {
        var _this = this;
        this.start = this.pageCurrent * this.pageSize;
        console.log(this.start);
        this.searchJob = new _model_SearchJob__WEBPACK_IMPORTED_MODULE_4__["SearchJob"](this.searchJob.title, this.searchJob.cityId, this.searchJob.fieldId, this.searchJob.companyId, this.searchJob.vacancies, this.searchJob.workingTimeId, this.start, this.pageSize, this.searchJob.salary);
        console.log(this.searchJob);
        this.recruitmentNewService.searchByObj(this.searchJob).subscribe(function (data) {
            _this.recruitmentNews = data.data;
            console.log(_this.recruitmentNews);
        });
    };
    ListRecruitmentUserComponent.prototype.leftPage = function () {
        if (this.pageCurrent != 0) {
            this.pageCurrent = this.pageCurrent - 1;
            this.pagination();
        }
    };
    ListRecruitmentUserComponent.prototype.checkLogin = function () {
        if (this.tokenService.getTokenKey()) {
            this.check = true;
        }
    };
    ListRecruitmentUserComponent.prototype.rightPage = function () {
        if (this.pageCurrent * this.pageSize >= this.totalSize) {
        }
        else {
            this.pageCurrent = this.pageCurrent + 1;
            this.pagination();
        }
    };
    ListRecruitmentUserComponent.prototype.ngSubmit = function (form) {
        if (form.value.title == '') {
            form.value.title = null;
        }
        if (form.value.cityId == '') {
            form.value.cityId = null;
        }
        if (form.value.fieldId == '') {
            form.value.fieldId = null;
        }
        if (form.value.companyId == '') {
            form.value.companyId = null;
        }
        if (form.value.vacancies == '') {
            form.value.vacancies = null;
        }
        if (form.value.workingTimeId == '') {
            form.value.workingTimeId = null;
        }
        if (form.value.salary == 0) {
            form.value.salary = null;
        }
        console.log(form.value);
        this.searchJob.title = form.value.title;
        this.searchJob.cityId = form.value.cityId;
        this.searchJob.fieldId = form.value.fieldId;
        this.searchJob.companyId = form.value.companyId;
        this.searchJob.vacancies = form.value.vacancies;
        this.searchJob.workingTimeId = form.value.workingTime;
        this.searchJob.salary = form.value.salary;
        this.start = 0;
        this.pageCurrent = 0;
        this.pagination();
        form.reset();
    };
    ListRecruitmentUserComponent.prototype.openDialogApply = function (id) {
        var dialogRef = this.dialog.open(_apply_recruitmentnew_apply_recruitmentnew_component__WEBPACK_IMPORTED_MODULE_11__["ApplyRecruitmentnewComponent"], {
            data: {
                id: id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ListRecruitmentUserComponent.prototype.openDialogApplyNow = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_apply_now_apply_now_component__WEBPACK_IMPORTED_MODULE_14__["ApplyNowComponent"], {
            data: {
                id: id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (!_this.tokenService.getTokenKey()) {
                    _this.router.navigate(['login']).then(window.location.reload);
                }
                else {
                    var apply = new _model_apply__WEBPACK_IMPORTED_MODULE_16__["Apply"](id, _this.tokenService.getIdGuest());
                    _this.applyService.createCV(apply).subscribe(function (data2) {
                        if (data2.message == 'CREATE') {
                            var dialogRef1 = _this.dialog.open(_dialog_dialogApplyFail_dialog_apply_dialog_apply_component__WEBPACK_IMPORTED_MODULE_18__["DialogApplyComponent"]);
                            dialogRef1.afterClosed().subscribe(function (result) {
                                console.log('ressult sau khi bam nut --> ', result);
                                if (result == false) {
                                }
                            });
                        }
                        else if (data2.message == 'CREATE_FAIL') {
                            var dialogRef1 = _this.dialog.open(_dialog_dialogApplyFail_dialog_apply_fail_dialog_apply_fail_component__WEBPACK_IMPORTED_MODULE_19__["DialogApplyFailComponent"]);
                            dialogRef1.afterClosed().subscribe(function (result) {
                                console.log('ressult sau khi bam nut --> ', result);
                                if (result == false) {
                                }
                            });
                        }
                        else if (data2.message == 'MATCH') {
                            var dialogRef2 = _this.dialog.open(_dialog_dialog_match_dialog_match_component__WEBPACK_IMPORTED_MODULE_20__["DialogMatchComponent"]);
                            dialogRef2.afterClosed().subscribe(function (result) {
                            });
                        }
                    });
                }
            }
            console.log('The dialog was closed');
        });
    };
    ListRecruitmentUserComponent.ctorParameters = function () { return [
        { type: _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_3__["RecruitmentNewService"] },
        { type: _service_city_city_service__WEBPACK_IMPORTED_MODULE_5__["CityService"] },
        { type: _service_field_field_service__WEBPACK_IMPORTED_MODULE_6__["FieldService"] },
        { type: _service_company_company_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"] },
        { type: _service_vacancies_vacancies_service__WEBPACK_IMPORTED_MODULE_8__["VacanciesService"] },
        { type: _service_workingTime_working_time_service__WEBPACK_IMPORTED_MODULE_9__["WorkingTimeService"] },
        { type: _security_token_service__WEBPACK_IMPORTED_MODULE_10__["TokenService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] },
        { type: _service_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] },
        { type: _service_apply_apply_service__WEBPACK_IMPORTED_MODULE_17__["ApplyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"] }
    ]; };
    ListRecruitmentUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list-recruitment-user',
            template: _raw_loader_list_recruitment_user_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_list_recruitment_user_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_3__["RecruitmentNewService"],
            _service_city_city_service__WEBPACK_IMPORTED_MODULE_5__["CityService"],
            _service_field_field_service__WEBPACK_IMPORTED_MODULE_6__["FieldService"],
            _service_company_company_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"],
            _service_vacancies_vacancies_service__WEBPACK_IMPORTED_MODULE_8__["VacanciesService"],
            _service_workingTime_working_time_service__WEBPACK_IMPORTED_MODULE_9__["WorkingTimeService"],
            _security_token_service__WEBPACK_IMPORTED_MODULE_10__["TokenService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"],
            _service_apply_apply_service__WEBPACK_IMPORTED_MODULE_17__["ApplyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"]])
    ], ListRecruitmentUserComponent);
    return ListRecruitmentUserComponent;
}());



/***/ }),

/***/ "1AE3":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/recruitmentnew/detail-recruitmentnew/detail-recruitmentnew.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\" style=\"margin-top: 20px\">\r\n        <div class=\"col-12\">\r\n            <h2 style=\"text-align: center; color: royalblue\">Chi tiết tin tuyển dụng</h2>\r\n            <div style=\"width: 700px\">\r\n                <p><b>Tên tin tuyển dụng:</b> {{recruitmentNew.title}}</p>\r\n                <p><b>Thời gian làm việc:</b> {{recruitmentNew.workingTime.name}} </p>\r\n                <p><b>Lĩnh Vực:</b> {{recruitmentNew.field.name}} </p>\r\n                <p><b>Công ty đăng tuyển:</b> {{recruitmentNew.company.name}} </p>\r\n                <p><b>Mức độ nổi tiếng của công ty đăng tuyển</b>: {{recruitmentNew.company.statusCompany}} </p>\r\n                <p><b>Vị trí cần tuyển dụng:</b> {{recruitmentNew.vacancies.name}} </p>\r\n                <p><b>Ngày kết thúc:</b> {{recruitmentNew.expDate}} </p>\r\n                <p><b>Mô tả công việc:</b> {{recruitmentNew.description}} </p>\r\n                <p><b>Số lượng cần tuyển:</b> {{recruitmentNew.quantity}} </p>\r\n                <p><b>Lương một tháng:</b> {{recruitmentNew.salary}} </p>\r\n                <p><b>Địa điểm làm việc:</b> {{recruitmentNew.city.name}} </p>\r\n                <p><b>Trạng thái tin tuyển dụng:</b> {{recruitmentNew.status}} </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "1TGh":
/*!*****************************************************************************************************!*\
  !*** ./projects/ngx-audio-player/src/lib/component/ngx-audio-player/ngx-audio-player.component.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card, mat-slider {\r\n    padding: 0!important;\r\n}\r\n\r\nbutton:hover, button:focus { \r\n    outline: 0px!important;\r\n}\r\n\r\nsvg {\r\n    vertical-align: top;\r\n}\r\n\r\n.mat-icon {\r\n    height: 32px! important;\r\n    width: 32px! important;\r\n}\r\n\r\nmat-icon > .currently-playing {\r\n    height: 16px! important;\r\n    width: 16px! important;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n}\r\n\r\n::ng-deep .ngx-audio-player {\r\n    min-width: 375px;\r\n}\r\n\r\n.mat-expansion-panel {\r\n    min-width: 375px;\r\n}\r\n\r\n/* mat-slider {\r\n    max-height: 30px;\r\n} */\r\n\r\n::ng-deep .mat-paginator-container {\r\n    justify-content: space-between!important;\r\n}\r\n\r\n.material-icons {\r\n    font-size: 16px! important;\r\n}\r\n\r\n.play-pause {\r\n    border-left: 1px solid rgba(0,0,0,.1);\r\n    border-right: 1px solid rgba(0,0,0,.1);\r\n}\r\n\r\n.volume {\r\n    border-left: 1px solid rgba(0,0,0,.1);\r\n}\r\n\r\n.skip-next {\r\n    border-right: 1px solid rgba(0,0,0,.1);\r\n}\r\n\r\n/* Removal of bootstrap */\r\n\r\n*, ::after, ::before {\r\n    box-sizing: inherit;\r\n}\r\n\r\n.ngx-p-1 {\r\n    padding: .25rem !important;\r\n}\r\n\r\n.ngx-col, .ngx-col-1, .ngx-col-10, .ngx-col-11, .ngx-col-12, .ngx-col-2, .ngx-col-3, .ngx-col-4, .ngx-col-5, .ngx-col-6, .ngx-col-7, .ngx-col-8, .ngx-col-9, .ngx-col-auto, .ngx-col-lg, .ngx-col-lg-1, .ngx-col-lg-10, .ngx-col-lg-11, .ngx-col-lg-12, .ngx-col-lg-2, .ngx-col-lg-3, .ngx-col-lg-4, .ngx-col-lg-5, .ngx-col-lg-6, .ngx-col-lg-7, .ngx-col-lg-8, .ngx-col-lg-9, .ngx-col-lg-auto, .ngx-col-md, .ngx-col-md-1, .ngx-col-md-10, .ngx-col-md-11, .ngx-col-md-12, .ngx-col-md-2, .ngx-col-md-3, .ngx-col-md-4, .ngx-col-md-5, .ngx-col-md-6, .ngx-col-md-7, .ngx-col-md-8, .ngx-col-md-9, .ngx-col-md-auto, .ngx-col-sm, .ngx-col-sm-1, .ngx-col-sm-10, .ngx-col-sm-11, .ngx-col-sm-12, .ngx-col-sm-2, .ngx-col-sm-3, .ngx-col-sm-4, .ngx-col-sm-5, .ngx-col-sm-6, .ngx-col-sm-7, .ngx-col-sm-8, .ngx-col-sm-9, .ngx-col-sm-auto, .ngx-col-xl, .ngx-col-xl-1, .ngx-col-xl-10, .ngx-col-xl-11, .ngx-col-xl-12, .ngx-col-xl-2, .ngx-col-xl-3, .ngx-col-xl-4, .ngx-col-xl-5, .ngx-col-xl-6, .ngx-col-xl-7, .ngx-col-xl-8, .ngx-col-xl-9, .ngx-col-xl-auto {\r\n    position: relative;\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n}\r\n\r\n.ngx-col {\r\n    flex-basis: 0;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n}\r\n\r\n.ngx-justify-content-center {\r\n    justify-content: center !important;\r\n}\r\n\r\n.ngx-flex-fill {\r\n    flex: 1 1 auto !important;\r\n}\r\n\r\n.ngx-d-flex {\r\n    display: flex !important;\r\n}\r\n\r\n.ngx-pb-3, .ngx-py-3 {\r\n    padding-bottom: 1rem !important;\r\n}\r\n\r\n.ngx-pt-3, .ngx-py-3 {\r\n    padding-top: 1rem !important;\r\n}\r\n\r\n.ngx-pl-1, .ngx-px-1 {\r\n    padding-left: .25rem !important;\r\n}\r\n\r\n.ngx-pr-1, .ngx-px-1 {\r\n    padding-right: .25rem !important;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .ngx-sm-block {\r\n        display: block !important;\r\n    }\r\n\r\n    .ngx-d-none {\r\n        display: none !important;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5neC1hdWRpby1wbGF5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOztHQUVHOztBQUVIO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQyx5QkFBeUI7O0FBRXpCO0lBQ0csbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBRUksYUFBYTtJQUViLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBRUksa0NBQWtDO0FBQ3RDOztBQUVBO0lBRUkseUJBQXlCO0FBQzdCOztBQUVBO0lBRUksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0k7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSx3QkFBd0I7SUFDNUI7RUFDRiIsImZpbGUiOiJuZ3gtYXVkaW8tcGxheWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCwgbWF0LXNsaWRlciB7XHJcbiAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyLCBidXR0b246Zm9jdXMgeyBcclxuICAgIG91dGxpbmU6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gICAgaGVpZ2h0OiAzMnB4ISBpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMzJweCEgaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtaWNvbiA+IC5jdXJyZW50bHktcGxheWluZyB7XHJcbiAgICBoZWlnaHQ6IDE2cHghIGltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxNnB4ISBpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm5neC1hdWRpby1wbGF5ZXIge1xyXG4gICAgbWluLXdpZHRoOiAzNzVweDtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgbWluLXdpZHRoOiAzNzVweDtcclxufVxyXG5cclxuLyogbWF0LXNsaWRlciB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG59ICovXHJcblxyXG46Om5nLWRlZXAgLm1hdC1wYWdpbmF0b3ItY29udGFpbmVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBmb250LXNpemU6IDE2cHghIGltcG9ydGFudDtcclxufVxyXG5cclxuLnBsYXktcGF1c2Uge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpO1xyXG59XHJcblxyXG4udm9sdW1lIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLDAsMCwuMSk7XHJcbn1cclxuXHJcbi5za2lwLW5leHQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLDAsMCwuMSk7XHJcbn1cclxuXHJcbiAvKiBSZW1vdmFsIG9mIGJvb3RzdHJhcCAqL1xyXG5cclxuICosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5uZ3gtcC0xIHtcclxuICAgIHBhZGRpbmc6IC4yNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmd4LWNvbCwgLm5neC1jb2wtMSwgLm5neC1jb2wtMTAsIC5uZ3gtY29sLTExLCAubmd4LWNvbC0xMiwgLm5neC1jb2wtMiwgLm5neC1jb2wtMywgLm5neC1jb2wtNCwgLm5neC1jb2wtNSwgLm5neC1jb2wtNiwgLm5neC1jb2wtNywgLm5neC1jb2wtOCwgLm5neC1jb2wtOSwgLm5neC1jb2wtYXV0bywgLm5neC1jb2wtbGcsIC5uZ3gtY29sLWxnLTEsIC5uZ3gtY29sLWxnLTEwLCAubmd4LWNvbC1sZy0xMSwgLm5neC1jb2wtbGctMTIsIC5uZ3gtY29sLWxnLTIsIC5uZ3gtY29sLWxnLTMsIC5uZ3gtY29sLWxnLTQsIC5uZ3gtY29sLWxnLTUsIC5uZ3gtY29sLWxnLTYsIC5uZ3gtY29sLWxnLTcsIC5uZ3gtY29sLWxnLTgsIC5uZ3gtY29sLWxnLTksIC5uZ3gtY29sLWxnLWF1dG8sIC5uZ3gtY29sLW1kLCAubmd4LWNvbC1tZC0xLCAubmd4LWNvbC1tZC0xMCwgLm5neC1jb2wtbWQtMTEsIC5uZ3gtY29sLW1kLTEyLCAubmd4LWNvbC1tZC0yLCAubmd4LWNvbC1tZC0zLCAubmd4LWNvbC1tZC00LCAubmd4LWNvbC1tZC01LCAubmd4LWNvbC1tZC02LCAubmd4LWNvbC1tZC03LCAubmd4LWNvbC1tZC04LCAubmd4LWNvbC1tZC05LCAubmd4LWNvbC1tZC1hdXRvLCAubmd4LWNvbC1zbSwgLm5neC1jb2wtc20tMSwgLm5neC1jb2wtc20tMTAsIC5uZ3gtY29sLXNtLTExLCAubmd4LWNvbC1zbS0xMiwgLm5neC1jb2wtc20tMiwgLm5neC1jb2wtc20tMywgLm5neC1jb2wtc20tNCwgLm5neC1jb2wtc20tNSwgLm5neC1jb2wtc20tNiwgLm5neC1jb2wtc20tNywgLm5neC1jb2wtc20tOCwgLm5neC1jb2wtc20tOSwgLm5neC1jb2wtc20tYXV0bywgLm5neC1jb2wteGwsIC5uZ3gtY29sLXhsLTEsIC5uZ3gtY29sLXhsLTEwLCAubmd4LWNvbC14bC0xMSwgLm5neC1jb2wteGwtMTIsIC5uZ3gtY29sLXhsLTIsIC5uZ3gtY29sLXhsLTMsIC5uZ3gtY29sLXhsLTQsIC5uZ3gtY29sLXhsLTUsIC5uZ3gtY29sLXhsLTYsIC5uZ3gtY29sLXhsLTcsIC5uZ3gtY29sLXhsLTgsIC5uZ3gtY29sLXhsLTksIC5uZ3gtY29sLXhsLWF1dG8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ubmd4LWNvbCB7XHJcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcclxuICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5neC1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5neC1mbGV4LWZpbGwge1xyXG4gICAgLW1zLWZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmd4LWQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmd4LXBiLTMsIC5uZ3gtcHktMyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5uZ3gtcHQtMywgLm5neC1weS0zIHtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5neC1wbC0xLCAubmd4LXB4LTEge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAuMjVyZW0gIWltcG9ydGFudDtcclxufVxyXG4ubmd4LXByLTEsIC5uZ3gtcHgtMSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAuMjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubmd4LXNtLWJsb2NrIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5uZ3gtZC1ub25lIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "1vL1":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/CV/dialog-edit-cv/dialog-edit-cv.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\" style=\"margin-top: 20px\">\r\n            <mat-card style=\"margin: 50px 0\">\r\n                <h4 class=\"alert alert-dark\">Hồ sơ của bạn đã cập nhật thành công!</h4>\r\n                <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"false\">Đóng</button>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "2dVa":
/*!***************************************************************************************************!*\
  !*** ./src/app/company/recruitmentnew/detail-recruitmentnew/detail-recruitmentnew.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtcmVjcnVpdG1lbnRuZXcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "2o5X":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/CV/edit-cv/edit-cv.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"text-center\" style=\"margin-top: 120px\">Sửa hồ sơ của bạn</h2>\r\n<div class=\"container\" style=\"margin-top: 50px\">\r\n    <form [formGroup]=\"cvForm\" (ngSubmit)=\"onUpdate()\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 \">\r\n                <div class=\"card left-profile-card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"text-center\">\r\n                            <img src=\"https://bootdey.com/img/Content/avatar/avatar2.png\" alt=\"\" class=\"user-profile\">\r\n                            <h3>{{user.name}}</h3>\r\n                            <div class=\"d-flex align-items-center justify-content-center mb-3\">\r\n                                <i class=\"fas fa-star text-info\"></i>\r\n                                <i class=\"fas fa-star text-info\"></i>\r\n                                <i class=\"fas fa-star text-info\"></i>\r\n                                <i class=\"fas fa-star text-info\"></i>\r\n                                <i class=\"fas fa-star text-info\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"personal-info\">\r\n                            <h3>Thông tin cá nhân</h3>\r\n                            <ul class=\"personal-list\">\r\n                                <li><h6>Năm kinh nghiệm</h6></li>\r\n                                <li>\r\n                                    <i class=\"fas fa-briefcase \"></i>\r\n                                    <input formControlName=\"expYear\">\r\n                                <li><h6>Lương mong muốn</h6></li>\r\n                                <li>\r\n                                    <i class=\"fas fa-money-bill-wave\"></i>\r\n                                    <input formControlName=\"salaryExpectation\">\r\n                                </li>\r\n                                <li><i class=\"far fa-envelope \"></i><span>{{user?.account?.username}}</span></li>\r\n                                <li><i class=\"fas fa-mobile \"></i><span>{{user?.phone}}</span></li>\r\n                            </ul>\r\n                        </div>\r\n                        <h3 style=\"margin-bottom: 5px\">Kỹ năng</h3>\r\n                        <ng-container formArrayName=\"skills\">\r\n                            <ng-container *ngFor=\"let skillForm of skills.controls; let i = index\">\r\n                                <div class=\"d-flex justify-content-between\">\r\n                                    <h6 style=\"margin-top: 10px\">Kỹ năng {{i + 1}}</h6>\r\n                                    <button style=\"width: 50px; height: 50px; padding: 0; margin-bottom: 20px\"\r\n                                            (click)=\"deleteSkill(i)\" mat-raised-button>\r\n                                        Xóa\r\n                                    </button>\r\n                                </div>\r\n                                <div [formGroup]=\"skillForm\">\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"text\" formControlName=\"name\" class=\"form-control\">\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"text\" formControlName=\"proficiency\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                        <button color=\"primary\" style=\"width: 200px; height: 50px; padding: 0; margin: 0 auto\"\r\n                                type=\"button\"\r\n                                (click)=\"addSkill()\"\r\n                                mat-raised-button>\r\n                            Thêm kỹ năng mới\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-9\">\r\n                <div class=\"card right-profile-card\">\r\n                    <div class=\"card-header alert-primary d-flex justify-content-between\">\r\n                        <h2>Kinh nghiệm cá nhân</h2>\r\n                        <a color=\"#f8f9fa\" style=\"font-size: 16px\" mat-raised-button [routerLink]=\"['/detail-cv/', tokenService.getIdGuest()]\">Quay lại</a>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"tab-content\" id=\"pills-tabContent\">\r\n                            <div class=\"tab-pane fade show active\" id=\"pills-home\" role=\"tabpanel\"\r\n                                 aria-labelledby=\"pills-home-tab\">\r\n                                <ng-container formArrayName=\"workExps\">\r\n                                    <ng-container *ngFor=\"let workExpForm of workExps.controls; let i = index\">\r\n                                        <div [formGroup]=\"workExpForm\" class=\"form-group\">\r\n                                            <div class=\"d-flex justify-content-between\">\r\n                                                <h2>Kinh nghiệm {{i + 1}}</h2>\r\n                                                <button style=\"width: 50px; height: 50px; padding: 0; margin-bottom: 20px\"\r\n                                                        (click)=\"deleteWorkExp(i)\" mat-raised-button>\r\n                                                    Xóa\r\n                                                </button>\r\n                                            </div>\r\n                                            <mat-form-field style=\"width: 50%\" appearance=\"fill\">\r\n                                                <mat-label>Tiêu đề</mat-label>\r\n                                                <input formControlName=\"title\" matInput>\r\n                                            </mat-form-field>\r\n                                            <h4>\r\n                                                <h6 style=\"margin-right: 10px\">Ngày bắt đầu</h6>\r\n                                                <input type=\"date\" formControlName=\"startDate\">\r\n                                                <br>\r\n                                                <br>\r\n                                                <h6 style=\"margin-right: 10px\">Ngày kết thúc</h6>\r\n                                                <input type=\"date\" formControlName=\"endDate\">\r\n                                            </h4>\r\n                                            <mat-form-field style=\"width: 100%\" appearance=\"fill\">\r\n                                                <mat-label>Nội dung</mat-label>\r\n                                                <textarea formControlName=\"content\" matInput\r\n                                                          placeholder=\"...\"></textarea>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </ng-container>\r\n                                </ng-container>\r\n                                <div class=\"text-center\">\r\n                                    <button color=\"primary\" type=\"button\"\r\n                                            style=\"width: 200px; height: 50px; padding: 0; margin-bottom: 20px\"\r\n                                            (click)=\"addWorkExp()\"\r\n                                            mat-raised-button>\r\n                                        Thêm kinh nghiệm mới\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"file-cv col-lg-12 col-sm-12\" style=\"border: 1px #f0f0f0 solid\">\r\n                        <h2>File hồ sơ</h2>\r\n                        <mat-form-field appearance=\"outline\" style=\"width: 50%\">\r\n                            <input matInput\r\n                                   hidden\r\n                                   placeholder=\"Placeholder\">\r\n                            <app-upload-file formControlName=\"fileCV\" style=\"width: 100%\"\r\n                                             (giveURLtoCreate)=\"onUpLoadAvatar($event)\"></app-upload-file>\r\n                            <mat-icon color=\"black\" matSuffix>add_photo_alternate</mat-icon>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"text-center\" style=\"margin: 10px 0\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\"\r\n                    style=\"width: 200px; height: 50px; padding: 0; margin-bottom: 20px\">\r\n                Cập nhật\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n");

/***/ }),

/***/ "3GXu":
/*!************************************************!*\
  !*** ./src/app/service/field/field.service.ts ***!
  \************************************************/
/*! exports provided: FieldService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldService", function() { return FieldService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FieldService = /** @class */ (function () {
    function FieldService(http) {
        this.http = http;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl;
    }
    FieldService.prototype.showAll = function () {
        return this.http.get(this.apiServerUrl + "/field/showAll");
    };
    FieldService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    FieldService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FieldService);
    return FieldService;
}());



/***/ }),

/***/ "4T0K":
/*!**********************************************************!*\
  !*** ./src/app/user/CV/detail-cv/detail-cv.component.ts ***!
  \**********************************************************/
/*! exports provided: DetailCvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCvComponent", function() { return DetailCvComponent; });
/* harmony import */ var _raw_loader_detail_cv_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./detail-cv.component.html */ "n2qO");
/* harmony import */ var _detail_cv_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-cv.component.scss */ "D2GT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _security_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../security/token.service */ "zdrf");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/user.service */ "sQRL");
/* harmony import */ var _service_skill_skill_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/skill/skill.service */ "6YXc");
/* harmony import */ var _service_cv_cv_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/cv/cv.service */ "cxox");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_workExp_work_exp_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/workExp/work-exp.service */ "fAU0");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DetailCvComponent = /** @class */ (function () {
    function DetailCvComponent(tokenService, userService, skillService, cvService, workExpService, route) {
        this.tokenService = tokenService;
        this.userService = userService;
        this.skillService = skillService;
        this.cvService = cvService;
        this.workExpService = workExpService;
        this.route = route;
    }
    DetailCvComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idUser = this.route.snapshot.params['id'];
        this.cvService.findByUserId(this.idUser).subscribe(function (data) {
            _this.cv = data;
        });
        for (var i = 0; i < this.tokenService.getRoleKey().length; i++) {
            if (this.tokenService.getRoleKey()[i] == "USER") {
                this.userService.getUserById(this.tokenService.getIdGuest()).subscribe(function (data) {
                    _this.checkRole = "USER";
                });
            }
        }
    };
    DetailCvComponent.ctorParameters = function () { return [
        { type: _security_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
        { type: _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _service_skill_skill_service__WEBPACK_IMPORTED_MODULE_5__["SkillService"] },
        { type: _service_cv_cv_service__WEBPACK_IMPORTED_MODULE_6__["CVService"] },
        { type: _service_workExp_work_exp_service__WEBPACK_IMPORTED_MODULE_8__["WorkExpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    DetailCvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detail-cv',
            template: _raw_loader_detail_cv_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_detail_cv_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_security_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _service_skill_skill_service__WEBPACK_IMPORTED_MODULE_5__["SkillService"],
            _service_cv_cv_service__WEBPACK_IMPORTED_MODULE_6__["CVService"],
            _service_workExp_work_exp_service__WEBPACK_IMPORTED_MODULE_8__["WorkExpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], DetailCvComponent);
    return DetailCvComponent;
}());



/***/ }),

/***/ "4btf":
/*!****************************************!*\
  !*** ./src/app/security/SignInForm.ts ***!
  \****************************************/
/*! exports provided: SignInForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInForm", function() { return SignInForm; });
var SignInForm = /** @class */ (function () {
    function SignInForm(username, password) {
        this.username = username;
        this.password = password;
    }
    return SignInForm;
}());



/***/ }),

/***/ "4kZh":
/*!***************************************************************************************************!*\
  !*** ./src/app/company/recruitmentnew/create-recruitmentnew/create-recruitmentnew.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcmVjcnVpdG1lbnRuZXcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "566h":
/*!****************************************************************!*\
  !*** ./projects/ngx-audio-player/src/lib/model/track.model.ts ***!
  \****************************************************************/
/*! exports provided: Track */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return Track; });
var Track = /** @class */ (function () {
    function Track() {
        var _this = this;
        this.toString = function () {
            return "Track (index: " + _this.index + ", title: " + _this.title + ")";
        };
    }
    return Track;
}());



/***/ }),

/***/ "5KuW":
/*!***************************************************************************************************************!*\
  !*** ./src/app/company/recruitmentnew/list-recruitmentnew-company/list-recruitmentnew-company.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGlzdC1yZWNydWl0bWVudG5ldy1jb21wYW55LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6Imxpc3QtcmVjcnVpdG1lbnRuZXctY29tcGFueS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "66wb":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ngx-audio-player/src/lib/component/ngx-audio-player/ngx-audio-player.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"ngx-d-flex ngx-justify-content-center ngx-audio-player z-depth-1 mat-elevation-z2\"\r\n    style=\"margin: 0px;\">\r\n\r\n    <audio #audioPlayer [src]=\"tracks[currentIndex]?.link\"></audio>\r\n\r\n    <button *ngIf=\"tracks.length > 1\" (click)='previousSong();' [disabled]=\"loaderDisplay\" class=\"ngx-p-1\" mat-button>\r\n        <mat-icon aria-hidden=\"true\">\r\n            <!-- Skip previous icon (skip_previous) -->\r\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path d=\"M6 6h2v12H6zm3.5 6l8.5 6V6z\" />\r\n                <path d=\"M0 0h32v32H0z\" fill=\"none\" />\r\n            </svg>\r\n        </mat-icon>\r\n    </button>\r\n    <button (click)='playBtnHandler();' [disabled]=\"loaderDisplay\" class=\"ngx-p-1 play-pause\" mat-button>\r\n\r\n        <svg *ngIf=\"loaderDisplay\" height=\"34px\" preserveAspectRatio=\"xMidYMid\"\r\n            style=\"margin: auto; display: block; shape-rendering: auto;\" viewBox=\"0 0 100 100\" width=\"34px\"\r\n            xmlns=\"http://www.w3.org/2000/svg\">\r\n            <g transform=\"rotate(0 50 50)\">\r\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\r\n                    <animate attributeName=\"opacity\" begin=\"-0.9166666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\r\n                        repeatCount=\"indefinite\" values=\"1;0\" />\r\n                </rect>\r\n            </g>\r\n            <g transform=\"rotate(30 50 50)\">\r\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\r\n                    <animate attributeName=\"opacity\" begin=\"-0.8333333333333334s\" dur=\"1s\" keyTimes=\"0;1\"\r\n                        repeatCount=\"indefinite\" values=\"1;0\" />\r\n                </rect>\r\n            </g>\r\n            <g transform=\"rotate(60 50 50)\">\r\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\r\n                    <animate attributeName=\"opacity\" begin=\"-0.75s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\r\n                        values=\"1;0\" />\r\n                </rect>\r\n            </g>\r\n            <g transform=\"rotate(90 50 50)\">\r\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\r\n                    <animate attributeName=\"opacity\" begin=\"-0.6666666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\r\n                        repeatCount=\"indefinite\" values=\"1;0\" />\r\n                </rect>\r\n            </g>\r\n            <g transform=\"rotate(120 50 50)\">\r\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\r\n                    <animate attributeName=\"opacity\" begin=\"-0.5833333333333334s\" dur=\"1s\" keyTimes=\"0;1\"\r\n                        repeatCount=\"indefinite\" values=\"1;0\" />\r\n                </rect>\r\n            </g>\r\n            <g transform=\"rotate(150 50 50)\">\r\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\r\n                    <animate attributeName=\"opacity\" begin=\"-0.5s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\r\n                        values=\"1;0\" />\r\n                </rect>\r\n            </g>\r\n            <g transform=\"rotate(180 50 50)\">\r\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\r\n                    <animate attributeName=\"opacity\" begin=\"-0.4166666666666667s\" dur=\"1s\" keyTimes=\"0;1\"\r\n                        repeatCount=\"indefinite\" values=\"1;0\" />\r\n                </rect>\r\n            </g>\r\n            <g transform=\"rotate(210 50 50)\">\r\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\r\n                    <animate attributeName=\"opacity\" begin=\"-0.3333333333333333s\" dur=\"1s\" keyTimes=\"0;1\"\r\n                        repeatCount=\"indefinite\" values=\"1;0\" />\r\n                </rect>\r\n            </g>\r\n            <g transform=\"rotate(240 50 50)\">\r\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\r\n                    <animate attributeName=\"opacity\" begin=\"-0.25s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\r\n                        values=\"1;0\" />\r\n                </rect>\r\n            </g>\r\n            <g transform=\"rotate(270 50 50)\">\r\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\r\n                    <animate attributeName=\"opacity\" begin=\"-0.16666666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\r\n                        repeatCount=\"indefinite\" values=\"1;0\" />\r\n                </rect>\r\n            </g>\r\n            <g transform=\"rotate(300 50 50)\">\r\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\r\n                    <animate attributeName=\"opacity\" begin=\"-0.08333333333333333s\" dur=\"1s\" keyTimes=\"0;1\"\r\n                        repeatCount=\"indefinite\" values=\"1;0\" />\r\n                </rect>\r\n            </g>\r\n            <g transform=\"rotate(330 50 50)\">\r\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\r\n                    <animate attributeName=\"opacity\" begin=\"0s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\r\n                        values=\"1;0\" />\r\n                </rect>\r\n            </g>\r\n        </svg>\r\n\r\n        <mat-icon *ngIf=\"!loaderDisplay && !isPlaying\" aria-hidden=\"true\" class=\"play-track\">\r\n            <!-- Play icon (play_arrow) -->\r\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path d=\"M8 5v14l11-7z\" />\r\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\r\n            </svg>\r\n        </mat-icon>\r\n        <mat-icon *ngIf=\"!loaderDisplay && isPlaying\" aria-hidden=\"true\" class=\"pause-track\">\r\n            <!-- Pause icon (pause) -->\r\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\" />\r\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\r\n            </svg>\r\n        </mat-icon>\r\n    </button>\r\n    <button *ngIf=\"tracks.length > 1\" (click)='nextSong();' [disabled]=\"loaderDisplay\" class=\"ngx-p-1 skip-next\"\r\n        mat-button>\r\n        <mat-icon aria-hidden=\"true\" class=\"next-track\">\r\n            <!-- Skip next icon (skip_next) -->\r\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path d=\"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z\" />\r\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\r\n            </svg>\r\n        </mat-icon>\r\n    </button>\r\n\r\n    <div class=\"ngx-col\">\r\n        <div class=\"ngx-d-flex ngx-flex-fill ngx-justify-content-center\">\r\n            <div class=\"ngx-d-none ngx-d-sm-block ngx-py-3 ngx-px-1\" style=\"font-size: 12px\">\r\n                <span *ngIf=\"duration !== 0.01\">\r\n                    {{currentTime | secondsToMinutes}}\r\n                </span>\r\n            </div>\r\n            <mat-slider [disabled]=\"disablePositionSlider\" (change)=\"currTimePosChanged($event)\" [min]=\"startOffset\"\r\n                class=\"ngx-d-none ngx-d-sm-block ngx-flex-fill ngx-p-1\" max=\"{{duration-endOffset}}\" style=\"width: 100%\"\r\n                value=\"{{currentTime}}\"></mat-slider>\r\n\r\n            <div class=\"ngx-py-3 ngx-px-1\" style=\"font-size: 12px; text-align: right\">\r\n                <span *ngIf=\"duration !== 0.01\">\r\n                    -{{duration-currentTime | secondsToMinutes }}\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <button (click)='toggleRepeat();' *ngIf=\"displayRepeatControls\" class=\"ngx-p-1 volume justify-content-center\"\r\n        mat-button>\r\n        <mat-icon *ngIf=\"repeat === 'none'\" aria-hidden=\"true\" class=\"volume-mute justify-content-center\">\r\n            <!-- Repeat None -->\r\n            <svg height=\"24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\r\n                <g>\r\n                    <g>\r\n                        <path d=\"m0,0l24,0l0,24l-24,0l0,-24z\" fill=\"none\" />\r\n                        <path\r\n                            d=\"m8,20l0,1.932a0.5,0.5 0 0 1 -0.82,0.385l-4.12,-3.433a0.5,0.5 0 0 1 0.322,-0.884l14.618,0a2,2 0 0 0 2,-2l0,-8l2,0l0,8a4,4 0 0 1 -4,4l-10,0zm8,-16l0,-1.932a0.5,0.5 0 0 1 0.82,-0.385l4.12,3.433a0.5,0.5 0 0 1 -0.321,0.884l-14.619,0a2,2 0 0 0 -2,2l0,8l-2,0l0,-8a4,4 0 0 1 4,-4l10,0z\" />\r\n                        <path d=\"M 3 0 L 22.4164 22.2706 L 21 24 L 1.5836 1.8128 L 3 0\"></path>\r\n                    </g>\r\n                    <!-- <line xmlns=\"http://www.w3.org/2000/svg\" id=\"svg_4\" y2=\"22.27056\" x2=\"22.41638\" y1=\"1.81276\" x1=\"1.58362\" stroke-width=\"2\" fill=\"none\"/> -->\r\n                </g>\r\n            </svg>\r\n        </mat-icon>\r\n        <mat-icon *ngIf=\"repeat === 'all'\" aria-hidden=\"true\" class=\"volume-mute\">\r\n            <!-- Repeat All -->\r\n            <svg height=\"24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\r\n                <g>\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                    <path\r\n                        d=\"M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10z\" />\r\n                </g>\r\n            </svg>\r\n        </mat-icon>\r\n        <mat-icon *ngIf=\"repeat === 'one'\" aria-hidden=\"true\" class=\"volume-up\">\r\n            <!-- Repeat ONE -->\r\n            <svg height=\"24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\r\n                <g>\r\n                    <path fill=\"none\" d=\"M0 0h24v24H0z\" />\r\n                    <path\r\n                        d=\"M8 20v1.932a.5.5 0 0 1-.82.385l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H8zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10zm-5 4h2v8h-2v-6H9V9l2-1z\" />\r\n                </g>\r\n            </svg>\r\n        </mat-icon>\r\n    </button>\r\n    <button (click)='toggleVolume();' *ngIf=\"displayVolumeControls\" class=\"ngx-p-1 volume\" mat-button>\r\n        <mat-icon *ngIf=\"volume === 0\" aria-hidden=\"true\" class=\"volume-mute\">\r\n            <!-- Volume mute icon (volume_off) -->\r\n            <svg height=\"28\" viewBox=\"0 0 24 24\" width=\"28\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path\r\n                    d=\"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z\" />\r\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\r\n            </svg>\r\n        </mat-icon>\r\n        <mat-icon *ngIf=\"volume > 0\" aria-hidden=\"true\" class=\"volume-up\">\r\n            <!-- Volume up icon (volume_up) -->\r\n            <svg height=\"28\" viewBox=\"0 0 24 24\" width=\"28\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path\r\n                    d=\"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z\" />\r\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\r\n            </svg>\r\n        </mat-icon>\r\n    </button>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"displayTitle\" class=\"mat-elevation-z1 ngx-audio-player\">\r\n    <div style=\"text-align: center;\">\r\n        <div style=\"margin: 1px 2px; padding: 1em\">\r\n            <span *ngIf=\"!isPlaying\">{{ tracks[currentIndex]?.title }}{{ displayArtist && tracks[currentIndex]?.artist ?\r\n                ' | ' + tracks[currentIndex]?.artist : ''}}</span>\r\n            <marquee *ngIf=\"isPlaying\" behavior=\"scroll\" direction=\"left\">{{ tracks[currentIndex]?.title\r\n                }}{{ displayArtist && tracks[currentIndex]?.artist ? ' | ' + tracks[currentIndex]?.artist : ''}}\r\n            </marquee>\r\n        </div>\r\n        <div class=\"clear\"></div>\r\n    </div>\r\n</mat-card>\r\n\r\n<mat-accordion class=\"ngx-audio-player\" *ngIf=\"displayPlaylist && tracks.length > 1\">\r\n    <mat-expansion-panel [expanded]=\"expanded\">\r\n        <mat-expansion-panel-header>\r\n            {{tableHeader}}\r\n        </mat-expansion-panel-header>\r\n        <table [dataSource]=\"dataSource\" class=\"mat-elevation-z6\" mat-table>\r\n            <ng-container matColumnDef=\"title\">\r\n                <th *matHeaderCellDef mat-header-cell>{{titleHeader}}</th>\r\n                <td (click)=\"selectTrack(element.index)\" *matCellDef=\"let element\" mat-cell>\r\n                    {{element.title}}\r\n                </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"artist\">\r\n                <th *matHeaderCellDef mat-header-cell>{{artistHeader}}</th>\r\n                <td (click)=\"selectTrack(element.index)\" *matCellDef=\"let element\" mat-cell>\r\n                    {{element?.artist ? element?.artist : ''}}\r\n                </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"duration\">\r\n                <th *matHeaderCellDef mat-header-cell>{{durationHeader}}</th>\r\n                <td (click)=\"selectTrack(element.index)\" *matCellDef=\"let element\" mat-cell>\r\n                    {{element?.duration ? (element?.duration | secondsToMinutes) : ''}}\r\n                </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"status\">\r\n                <th *matHeaderCellDef mat-header-cell></th>\r\n                <td *matCellDef=\"let element\" mat-cell>\r\n                    <div *ngIf=\"tracks[currentIndex]?.title === element.title\">\r\n                        <!-- <mat-icon *ngIf=\"isPlaying\" aria-hidden=\"true\">\r\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\r\n                        </mat-icon> -->\r\n                        <mat-icon *ngIf=\"isPlaying\" aria-hidden=\"true\" class=\"currently-playing\">\r\n                            <!-- Play icon (play_arrow) -->\r\n                            <svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\r\n                                <path\r\n                                    d=\"M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z\" />\r\n                            </svg>\r\n                        </mat-icon>\r\n                    </div>\r\n                </td>\r\n            </ng-container>\r\n            <tr *matHeaderRowDef=\"displayedColumns\" mat-header-row></tr>\r\n            <tr *matRowDef=\"let row; columns: displayedColumns;\" class=\"mat-select-content\" mat-row></tr>\r\n        </table>\r\n        <mat-paginator [pageSizeOptions]=\"pageSizeOptions\" showFirstLastButtons></mat-paginator>\r\n    </mat-expansion-panel>\r\n</mat-accordion>");

/***/ }),

/***/ "6UB0":
/*!***************************************************************!*\
  !*** ./src/app/user/register-user/register-user.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function() { return RegisterUserComponent; });
/* harmony import */ var _raw_loader_register_user_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./register-user.component.html */ "QI2D");
/* harmony import */ var _register_user_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-user.component.scss */ "We65");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/account */ "gGTi");
/* harmony import */ var _security_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../security/auth.service */ "JZt4");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/user */ "kl1M");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _dialog_dialogCreateCompany_dialog_create_company_dialog_create_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialog/dialogCreateCompany/dialog-create-company/dialog-create-company.component */ "S4+S");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterUserComponent = /** @class */ (function () {
    function RegisterUserComponent(authService, dialog) {
        this.authService = authService;
        this.dialog = dialog;
        this.data = {
            password: '',
            confirmpassword: '',
            phone: ''
        };
        this.check = false;
        this.hide = true;
        this.hide1 = true;
        this.success = {
            message: 'yes'
        };
    }
    RegisterUserComponent.prototype.ngOnInit = function () {
    };
    RegisterUserComponent.prototype.ngSubmit = function (form) {
        var _this = this;
        console.log(this.data);
        if (this.checkPassword()) {
            var roles = ['user'];
            this.account = new _model_account__WEBPACK_IMPORTED_MODULE_3__["Account"](this.data.username, this.data.password, roles);
            console.log(this.account);
            this.authService.signUp(this.account).subscribe(function (data1) {
                console.log(data1);
                _this.idAccount = data1.id;
                _this.createUser();
                form.reset();
            });
        }
    };
    RegisterUserComponent.prototype.createUser = function () {
        var _this = this;
        this.account.id = this.idAccount;
        var account11 = {
            id: this.idAccount
        };
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_5__["User"](this.data.name, this.data.phone, account11);
        console.log(this.user);
        this.authService.registerUser(this.user).subscribe(function (data2) {
            if (JSON.stringify(data2) == JSON.stringify(_this.success)) {
                // @ts-ignore
                var dialogRef1 = _this.dialog.open(_dialog_dialogCreateCompany_dialog_create_company_dialog_create_company_component__WEBPACK_IMPORTED_MODULE_7__["DialogCreateCompanyComponent"]);
                dialogRef1.afterClosed().subscribe(function (result) {
                    console.log('The dialog was closed');
                });
            }
        });
    };
    RegisterUserComponent.prototype.checkPassword = function () {
        if (this.data.password == this.data.confirmpassword && this.data.password != '') {
            return true;
        }
        else if (this.data.password != this.data.confirmpassword && this.data.password != '' && this.data.confirmpassword != '') {
            return false;
        }
    };
    RegisterUserComponent.ctorParameters = function () { return [
        { type: _security_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
    ]; };
    RegisterUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register-user',
            template: _raw_loader_register_user_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_register_user_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_security_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}());



/***/ }),

/***/ "6YXc":
/*!************************************************!*\
  !*** ./src/app/service/skill/skill.service.ts ***!
  \************************************************/
/*! exports provided: SkillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillService", function() { return SkillService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SkillService = /** @class */ (function () {
    function SkillService(http) {
        this.http = http;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl;
    }
    SkillService.prototype.createSkill = function (skill) {
        return this.http.post(this.apiServerUrl + "/Skill", skill);
    };
    SkillService.prototype.findAllByCvId = function (id) {
        return this.http.get(this.apiServerUrl + "/Skill/cv/" + id);
    };
    SkillService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SkillService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SkillService);
    return SkillService;
}());



/***/ }),

/***/ "6aLj":
/*!*****************************************************************************!*\
  !*** ./src/app/user/apply-recruitmentnew/apply-recruitmentnew.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ApplyRecruitmentnewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyRecruitmentnewComponent", function() { return ApplyRecruitmentnewComponent; });
/* harmony import */ var _raw_loader_apply_recruitmentnew_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./apply-recruitmentnew.component.html */ "8K1K");
/* harmony import */ var _apply_recruitmentnew_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-recruitmentnew.component.scss */ "hqhz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/recruitmentNew/recruitment-new.service */ "FmPh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _security_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../security/token.service */ "zdrf");
/* harmony import */ var _service_apply_apply_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/apply/apply.service */ "j6QF");
/* harmony import */ var _model_apply__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/apply */ "IU9o");
/* harmony import */ var _dialog_dialogApplyFail_dialog_apply_fail_dialog_apply_fail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dialog/dialogApplyFail/dialog-apply-fail/dialog-apply-fail.component */ "NUjO");
/* harmony import */ var _dialog_dialogApplyFail_dialog_apply_dialog_apply_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../dialog/dialogApplyFail/dialog-apply/dialog-apply.component */ "pA9W");
/* harmony import */ var _model_forwardApply__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../model/forwardApply */ "pm72");
/* harmony import */ var _service_apply_forward_apply_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../service/apply/forward-apply.service */ "9wQv");
/* harmony import */ var _dialog_dialog_match_dialog_match_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../dialog/dialog-match/dialog-match.component */ "erfy");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ApplyRecruitmentnewComponent = /** @class */ (function () {
    function ApplyRecruitmentnewComponent(rcms, router, data, dialogRef, tokenService, applyService, dialog, recruitmentNewService, forwardApplyService) {
        var _this = this;
        this.rcms = rcms;
        this.router = router;
        this.data = data;
        this.dialogRef = dialogRef;
        this.tokenService = tokenService;
        this.applyService = applyService;
        this.dialog = dialog;
        this.recruitmentNewService = recruitmentNewService;
        this.forwardApplyService = forwardApplyService;
        this.idRcm = data.id;
        this.rcms.getRecruitmentNewById(data.id).subscribe(function (data) {
            _this.recruitmentNew = data;
            console.log(_this.recruitmentNew);
        });
    }
    ApplyRecruitmentnewComponent.prototype.checkLoginWithToken = function () {
        if (this.tokenService.getTokenKey()) {
            this.checkLogin = true;
        }
    };
    ApplyRecruitmentnewComponent.prototype.checkUserWithToken = function () {
        if (this.tokenService.getTokenKey()) {
            this.checkLogin = true;
            this.idGuest = this.tokenService.getIdGuest();
            for (var i = 0; i < this.tokenService.getRoleKey().length; i++) {
                if (this.tokenService.getRoleKey()[i] == 'COMPANY') {
                    this.checkUser = false;
                }
                if (this.tokenService.getRoleKey()[i] == 'USER') {
                    this.checkUser = true;
                }
            }
        }
    };
    ApplyRecruitmentnewComponent.prototype.ngOnInit = function () {
        this.checkLoginWithToken();
        this.checkUserWithToken();
    };
    ApplyRecruitmentnewComponent.prototype.applyRecruitmentNewNow = function () {
        var _this = this;
        if (!this.tokenService.getTokenKey()) {
            this.dialogRef.close();
            // @ts-ignore
            this.router.navigate(['login']).then(this.dialogRef.close());
        }
        else {
            var apply = new _model_apply__WEBPACK_IMPORTED_MODULE_8__["Apply"](this.idRcm, this.tokenService.getIdGuest());
            this.applyService.createCV(apply).subscribe(function (data2) {
                console.log(data2);
                if (data2.message == 'CREATE') {
                    _this.dialogRef.close();
                    var dialogRef1 = _this.dialog.open(_dialog_dialogApplyFail_dialog_apply_dialog_apply_component__WEBPACK_IMPORTED_MODULE_10__["DialogApplyComponent"]);
                    dialogRef1.afterClosed().subscribe(function (result) {
                        _this.recruitmentNewService.getRecruitmentNewById(_this.idRcm).subscribe(function (data3) {
                            _this.recruitmentNew = data3;
                            _this.forwardApply = new _model_forwardApply__WEBPACK_IMPORTED_MODULE_11__["ForwardApply"](_this.tokenService.getIdGuest(), Number(_this.recruitmentNew.company.id));
                            _this.forwardApplyService.forwardApply(_this.forwardApply).subscribe(function (data4) {
                                console.log('sau khi bam nut--->', data4);
                            });
                            console.log('ressult sau khi bam nut --> ', result);
                            if (result == false) {
                            }
                        });
                    });
                }
                else if (data2.message == 'CREATE_FAIL') {
                    _this.dialogRef.close();
                    var dialogRef1 = _this.dialog.open(_dialog_dialogApplyFail_dialog_apply_fail_dialog_apply_fail_component__WEBPACK_IMPORTED_MODULE_9__["DialogApplyFailComponent"]);
                    dialogRef1.afterClosed().subscribe(function (result) {
                        console.log('ressult sau khi bam nut --> ', result);
                        if (result == false) {
                        }
                    });
                }
                else if (data2.message == 'MATCH') {
                    var dialogRef2 = _this.dialog.open(_dialog_dialog_match_dialog_match_component__WEBPACK_IMPORTED_MODULE_13__["DialogMatchComponent"]);
                    dialogRef2.afterClosed().subscribe(function (result) {
                    });
                }
            });
        }
    };
    ApplyRecruitmentnewComponent.ctorParameters = function () { return [
        { type: _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_3__["RecruitmentNewService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _security_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] },
        { type: _service_apply_apply_service__WEBPACK_IMPORTED_MODULE_7__["ApplyService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_3__["RecruitmentNewService"] },
        { type: _service_apply_forward_apply_service__WEBPACK_IMPORTED_MODULE_12__["ForwardApplyService"] }
    ]; };
    ApplyRecruitmentnewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-apply-recruitmentnew',
            template: _raw_loader_apply_recruitmentnew_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_apply_recruitmentnew_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_3__["RecruitmentNewService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _security_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"],
            _service_apply_apply_service__WEBPACK_IMPORTED_MODULE_7__["ApplyService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_3__["RecruitmentNewService"],
            _service_apply_forward_apply_service__WEBPACK_IMPORTED_MODULE_12__["ForwardApplyService"]])
    ], ApplyRecruitmentnewComponent);
    return ApplyRecruitmentnewComponent;
}());



/***/ }),

/***/ "6cG4":
/*!*****************************************!*\
  !*** ./src/app/model/recruitmentNew.ts ***!
  \*****************************************/
/*! exports provided: RecruitmentNew */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitmentNew", function() { return RecruitmentNew; });
var RecruitmentNew = /** @class */ (function () {
    function RecruitmentNew(title, workingTime, field, company, vacancies, expDate, description, city, quantity, gender, salary) {
        this.title = title;
        this.workingTime = workingTime;
        this.field = field;
        this.company = company;
        this.vacancies = vacancies;
        this.expDate = expDate;
        this.description = description;
        this.city = city;
        this.quantity = quantity;
        this.gender = gender;
        this.salary = salary;
    }
    return RecruitmentNew;
}());



/***/ }),

/***/ "7Ac5":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"banner-area\">\r\n    <div class=\"d-table\">\r\n        <div class=\"d-table-cell\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row align-items-center\">\r\n                    <div class=\"col-lg-6\">\r\n                        <div class=\"banner-content\">\r\n                            <h1>\r\n                                Chào mừng bạn đã đến với Paso.vn\r\n                            </h1>\r\n                            <p>\r\n                                Cơ hội vàng nằm gọn trong tay bạn. Bất cứ khi nào bạn muốn tìm công việc phù hợp với\r\n                                bạn, Hãy đến với chúng tôi.\r\n                            </p>\r\n                            <div class=\"banner-btn\">\r\n<!--                                <a href=\"contact.html\" class=\"box-btn\" routerLink=\"/list-recruitmentnew-user\">Tìm kiếm-->\r\n<!--                                    việc làm</a>-->\r\n                                <form class=\"newsletter-form\" data-toggle=\"validator\" #f=\"ngForm\" (ngSubmit)=\"ngSubmit(f)\" novalidate >\r\n                                    <div style=\"display: flex\">\r\n                                        <input style=\"width: 300px; margin-right: 10px\" name=\"searchKey\" ngModel class=\"form-control\" placeholder=\"Nhập vào tên công việc, tên công ty...\"\r\n                                               required=\"\" autocomplete=\"off\">\r\n                                        <button class=\"box-btn\" type=\"submit\">\r\n                                            Tìm kiếm việc làm\r\n                                        </button>\r\n                                    </div>\r\n                                    <div id=\"validator-newsletter\" class=\"form-result\"></div>\r\n                                </form>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6\">\r\n                        <div class=\"banner-img\">\r\n                            <img src=\"../../../../assets/images/home-bg-1-img.png\" alt=\"banner-img\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"home-shape\">\r\n        <div class=\"shape1\">\r\n            <img src=\"../../../../assets/images/shape/1.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape2\">\r\n            <img src=\"../../../../assets/images/shape/2.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape3\">\r\n            <img src=\"../../../../assets/images/shape/3.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape4\">\r\n            <img src=\"../../../../assets/images/shape/4.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape5\">\r\n            <img src=\"../../../../assets/images/shape/5.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape6\">\r\n            <img src=\"../../../../assets/images/shape/6.png\" alt=\"shape\">\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Banner Area -->\r\n\r\n\r\n<!-- Info Area -->\r\n<div class=\"info-area pt-100 pb-70\">\r\n    <div class=\"container\">\r\n        <div class=\"section-title\">\r\n            <h2>CÁC CÔNG TY ĐANG HOT</h2>\r\n            <p>Các công ty hiện tai đang được nhiều người đăng ký tuyển dụng</p>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-sm-6\" *ngFor=\"let comhot of companyHot\">\r\n                <div class=\"single-info\">\r\n                    <div class=\"info-img\">\r\n                        <img width=\"400px\" src=\"{{comhot.avatar}}\">\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <h3><i class=\"flaticon-info\"></i> {{comhot.name}}</h3>\r\n                        <div class=\"arrow\">\r\n                            <a [routerLink]=\"['/web-company/', comhot.id]\"><i class=\"flaticon-next-1\"></i></a>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"info-area pt-100 pb-70\">\r\n    <div class=\"container\">\r\n        <div class=\"section-title\">\r\n            <h2>CÁC CÔNG TY CÓ NHU CẦU TUYỂN DỤNG CAO NHẤT</h2>\r\n            <p>Các công ty hiện tai đang cần tuyển dùng cao nhất</p>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-sm-6\" *ngFor=\"let rnn of RecuitmentNewNeed\">\r\n                <div class=\"single-info\">\r\n                    <div class=\"info-img\">\r\n                        <img width=\"400px\" src=\"{{rnn.avatar}}\">\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <h3>Tên công ty: {{rnn.name}}</h3>\r\n                        <h3>Số lượng vị trí cần tuyển: {{rnn.count}}</h3>\r\n                        <div class=\"arrow\">\r\n                            <a [routerLink]=\"['/web-company/', rnn.id]\"><i class=\"flaticon-next-1\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"testimonials-area ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"section-title\">\r\n                    <h2>TIN TUYỂN DỤNG, VIỆC LÀM TỐT NHẤT</h2>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6\" *ngFor=\"let ctg of recruimentNew\">\r\n                <div class=\"single-testimonials\">\r\n                    <div class=\"testimonials-head\">\r\n                        <div class=\"row align-items-center\">\r\n                            <div class=\"col-lg-3 col-md-3 col-5\">\r\n                                <div class=\"testimonials-img\">\r\n                                    <img src=\"{{ctg.company.avatar}}\" alt=\"testimonials\"\r\n                                         style=\"width: 150px;height: 139px\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-9 col-md-9 col-7\">\r\n                                <div class=\"content\">\r\n                                    <h2>{{ctg.title}}</h2>\r\n                                    <span *ngIf=\"checkLogin == true\">Tiền lương: {{ctg.salary}}</span>\r\n                                    <span *ngIf=\"checkLogin == false\">Tiền lương: Bạn cần đăng nhập để xem</span>\r\n                                    <div>Địa điểm: {{ctg.company.address}}</div>\r\n                                    <p>Tuyển dụng đến: {{ctg.expDate}}</p>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div style=\"display: flex\">\r\n                        <div class=\"testimonials-foot\" style=\"margin-right: 10px\">\r\n                            <button *ngIf=\"checkUser\" class=\"text-center\" mat-stroked-button color=\"accent\"\r\n                                    (click)=\"openDialogApply(ctg.id)\">Xem chi tiêt\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"testimonials-foot\">\r\n                            <button *ngIf=\"checkUser\" class=\"text-center\" mat-stroked-button color=\"accent\"\r\n                                    (click)=\"openDialogApplyNow(ctg.id)\">Ứng tuyển ngay\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <mat-paginator [length]=\"totalElements\"\r\n                       [pageSize]=\"4\"\r\n                       [pageSizeOptions]=\"[4, 8, 12, 16]\"\r\n                       (page)=\"nextPage($event)\"\r\n                       aria-label=\"Select page\">\r\n        </mat-paginator>\r\n    </div>\r\n</div>>\r\n\r\n<!-- End Info Area -->\r\n<!--<div class=\"container\">-->\r\n<!--    <div class=\"row\">-->\r\n<!--        <div class=\"col-12\" style=\"margin-top: 20px\">-->\r\n<!--            <mat-card style=\"margin: 50px 0\">-->\r\n<!--                <table class=\"table\">-->\r\n<!--                    <thead>-->\r\n<!--                    <tr>-->\r\n<!--                        <th scope=\"col\">Tên sách</th>-->\r\n<!--                        <th scope=\"col\">Anh</th>-->\r\n<!--                    </tr>-->\r\n<!--                    </thead>-->\r\n<!--                    <tbody>-->\r\n<!--                    <tr *ngFor=\"let ctg of recruimentNew\" style=\"align-items: center\">-->\r\n<!--                        <td>-->\r\n<!--                            <i style=\"font-size: 1.5vw;color: crimson\">{{ctg.title}}</i>-->\r\n<!--                        </td>-->\r\n<!--                        <td>-->\r\n<!--                            <img style=\"width: 50px;height: 50px\" src=\"{{ctg.company.avatar}}\">-->\r\n<!--                        </td>-->\r\n<!--                        <td>-->\r\n<!--                            <button mat-icon-button color=\"accent\" routerLink=\"/update-category/{{ctg.id}}\">-->\r\n<!--                                <mat-icon color=\"primary\">edit</mat-icon>-->\r\n<!--                            </button>-->\r\n<!--                        </td>-->\r\n<!--                        <td>-->\r\n\r\n<!--                        </td>-->\r\n<!--                    </tr>-->\r\n<!--                    <mat-paginator [length]=\"totalElements\"-->\r\n<!--                                   [pageSize]=\"3\"-->\r\n<!--                                   [pageSizeOptions]=\"[3, 6, 9, 12]\"-->\r\n<!--                                   (page)=\"nextPage($event)\"-->\r\n<!--                                   aria-label=\"Select page\">-->\r\n<!--                    </mat-paginator>-->\r\n<!--                    </tbody>-->\r\n<!--                </table>-->\r\n<!--            </mat-card>-->\r\n<!--        </div>-->\r\n<!--    </div>-->\r\n<!--</div>-->\r\n\r\n\r\n<!-- Testimonials -->\r\n<div class=\"testimonials-area ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"section-title\">\r\n                    <h2>Thành Viên Của Nhóm</h2>\r\n                    <p>Những người đứng sau thành tựu</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"single-testimonials\">\r\n                    <div class=\"testimonials-head\">\r\n                        <div class=\"row align-items-center\">\r\n                            <div class=\"col-lg-3 col-md-3 col-5\">\r\n                                <div class=\"testimonials-img\">\r\n                                    <img src=\"assets/images/testimonilas/111.jpg\" alt=\"testimonials\"\r\n                                         style=\"width: 150px;height: 139px\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-9 col-md-9 col-7\">\r\n                                <div class=\"content\">\r\n                                    <h2>Nguyễn Tiến Long</h2>\r\n                                    <span>Founder</span>\r\n                                    <ul class=\"rate\">\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"testimonials-foot\">\r\n                        <p>If you don’t do wild things while you’re young, you will have nothing to smile about when\r\n                            you’re old.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"single-testimonials\">\r\n                    <div class=\"testimonials-head\">\r\n                        <div class=\"row align-items-center\">\r\n                            <div class=\"col-lg-3 col-md-3 col-5\">\r\n                                <div class=\"testimonials-img\">\r\n                                    <img src=\"assets/images/testimonilas/222.jpg\" alt=\"testimonials\"\r\n                                         style=\"width: 150px;height: 140px\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-9 col-md-9 col-7\">\r\n                                <div class=\"content\">\r\n                                    <h2>Đỗ Nam Khánh</h2>\r\n                                    <span>Co-Founder</span>\r\n                                    <ul class=\"rate\">\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"testimonials-foot\">\r\n                        <p>It’s better to cross the line and suffer the consequences than to just stare at the line for\r\n                            the rest of your life.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"single-testimonials\">\r\n                    <div class=\"testimonials-head\">\r\n                        <div class=\"row align-items-center\">\r\n                            <div class=\"col-lg-3 col-md-3 col-5\">\r\n                                <div class=\"testimonials-img\">\r\n                                    <img src=\"assets/images/testimonilas/333.jpg\" alt=\"testimonials\"\r\n                                         style=\"width: 150px;height: 155px\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-9 col-md-9 col-7\">\r\n                                <div class=\"content\">\r\n                                    <h2>Nguyễn Đình Lộc</h2>\r\n                                    <span>Co-Founder</span>\r\n                                    <ul class=\"rate\">\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"testimonials-foot\">\r\n                        <p>Learn from yesterday, live for today, hope for tomorrow. The important is to not stop\r\n                            questioning.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"single-testimonials\">\r\n                    <div class=\"testimonials-head\">\r\n                        <div class=\"row align-items-center\">\r\n                            <div class=\"col-lg-3 col-md-3 col-5\">\r\n                                <div class=\"testimonials-img\">\r\n                                    <img src=\"assets/images/testimonilas/444.jpg\" alt=\"testimonials\"\r\n                                         style=\"width: 150px;height: auto\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-9 col-md-9 col-7\">\r\n                                <div class=\"content\">\r\n                                    <h2>Nguyễn Văn Định</h2>\r\n                                    <span>Co-Founder</span>\r\n                                    <ul class=\"rate\">\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"testimonials-foot\">\r\n                        <p>Don’t cry over the past, it’s gone. Don’t stress about the future, it hasn’t arrived. Live in\r\n                            the present and make it beautiful.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"page-navigation-area\">\r\n                    <nav aria-label=\"Page navigation example text-center\">\r\n                        <ul class=\"pagination\">\r\n                            <li class=\"page-item\">\r\n                                <a class=\"page-link page-links\" href=\"#\">\r\n                                    <i class='bx bx-chevrons-left'></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"page-item active\">\r\n                                <a class=\"page-link\" href=\"#\">1</a>\r\n                            </li>\r\n                            <li class=\"page-item\">\r\n                                <a class=\"page-link\" href=\"#\">2</a>\r\n                            </li>\r\n                            <li class=\"page-item\">\r\n                                <a class=\"page-link\" href=\"#\">3</a>\r\n                            </li>\r\n                            <li class=\"page-item\">\r\n                                <a class=\"page-link\" href=\"#\">\r\n                                    <i class='bx bx-chevrons-right'></i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </nav>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Testimonials -->\r\n\r\n");

/***/ }),

/***/ "81uI":
/*!**************************************************************************!*\
  !*** ./src/app/dialog/CV/dialog-no-create/dialog-no-create.component.ts ***!
  \**************************************************************************/
/*! exports provided: DialogNoCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogNoCreateComponent", function() { return DialogNoCreateComponent; });
/* harmony import */ var _raw_loader_dialog_no_create_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dialog-no-create.component.html */ "0eJw");
/* harmony import */ var _dialog_no_create_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-no-create.component.scss */ "e6NR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogNoCreateComponent = /** @class */ (function () {
    function DialogNoCreateComponent() {
    }
    DialogNoCreateComponent.prototype.ngOnInit = function () {
    };
    DialogNoCreateComponent.ctorParameters = function () { return []; };
    DialogNoCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dialog-no-create',
            template: _raw_loader_dialog_no_create_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dialog_no_create_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DialogNoCreateComponent);
    return DialogNoCreateComponent;
}());



/***/ }),

/***/ "8K1K":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/apply-recruitmentnew/apply-recruitmentnew.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\" style=\"margin-top: 20px\">\r\n        <div class=\"col-12\">\r\n            <h2 style=\"text-align: center; color: royalblue\">Chi tiết tin tuyển dụng</h2>\r\n            <div style=\"width: 700px\">\r\n                <p><b>Tên tin tuyển dụng:</b> {{recruitmentNew.title}}</p>\r\n                <p><b>Thời gian làm việc:</b> {{recruitmentNew.workingTime.name}} </p>\r\n                <p><b>Lĩnh Vực:</b> {{recruitmentNew.field.name}} </p>\r\n                <p><b>Công ty đăng tuyển:</b> {{recruitmentNew.company.name}} </p>\r\n                <p><b>Mức độ nổi tiếng của công ty đăng tuyển</b>: {{recruitmentNew.company.statusCompany}} </p>\r\n                <p><b>Vị trí cần tuyển dụng:</b> {{recruitmentNew.vacancies.name}} </p>\r\n                <p><b>Ngày kết thúc:</b> {{recruitmentNew.expDate}} </p>\r\n                <p><b>Mô tả công việc:</b> {{recruitmentNew.description}} </p>\r\n                <p><b>Số lượng cần tuyển:</b> {{recruitmentNew.quantity}} </p>\r\n                <p *ngIf=\"checkLogin == true\" ><b>Lương một tháng:</b> {{recruitmentNew.salary}} </p>\r\n                <p *ngIf=\"checkLogin == false\" ><b>Lương một tháng:</b> Cần đăng nhập </p>\r\n                <p><b>Địa điểm làm việc:</b> {{recruitmentNew.city.name}} </p>\r\n                <p><b>Trạng thái tin tuyển dụng:</b> {{recruitmentNew.status}} </p>\r\n                <button mat-button mat-dialog-close=\"\" color=\"warn\" style=\"margin-right: 10px\">Thoát</button>\r\n                <button mat-raised-button color=\"accent\" *ngIf=\"checkLogin && checkUser\" (click)=\"applyRecruitmentNewNow()\">Ứng tuyển</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "8KMC":
/*!*****************************************************************!*\
  !*** ./src/app/user/active-status/active-status.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3RpdmUtc3RhdHVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "8PEf":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "9wQv":
/*!********************************************************!*\
  !*** ./src/app/service/apply/forward-apply.service.ts ***!
  \********************************************************/
/*! exports provided: ForwardApplyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForwardApplyService", function() { return ForwardApplyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForwardApplyService = /** @class */ (function () {
    function ForwardApplyService(http) {
        this.http = http;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl;
    }
    ForwardApplyService.prototype.forwardApply = function (forwardApply) {
        return this.http.post(this.apiServerUrl + "/applies/forward", forwardApply);
    };
    ForwardApplyService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ForwardApplyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ForwardApplyService);
    return ForwardApplyService;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiBaseUrl: 'https://c821h1.herokuapp.com',
    firebaseConfig: {
        apiKey: "AIzaSyD8-xixCVrK-1RrA6G-Ob5j88HoD72s0g0",
        authDomain: "employee-app-f2600.firebaseapp.com",
        projectId: "employee-app-f2600",
        storageBucket: "employee-app-f2600.appspot.com",
        messagingSenderId: "652664345747",
        appId: "1:652664345747:web:40dd0895de56628b33e966",
        measurementId: "G-853TR2HBGP"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "AzJW":
/*!******************************************************************!*\
  !*** ./src/app/company/list-company/list-company.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWNvbXBhbnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "BAZj":
/*!************************************************************************!*\
  !*** ./src/app/account/change-password/change-password.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "CZ5x":
/*!************************************************************************!*\
  !*** ./src/app/dialog/CV/dialog-edit-cv/dialog-edit-cv.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctZWRpdC1jdi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "D2GT":
/*!************************************************************!*\
  !*** ./src/app/user/CV/detail-cv/detail-cv.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".left-profile-card .user-profile {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  margin: auto;\n  margin-bottom: 20px;\n}\n\n.left-profile-card h3 {\n  font-size: 18px;\n  margin-bottom: 0;\n  font-weight: 700;\n}\n\n.left-profile-card p {\n  margin-bottom: 5px;\n}\n\n.left-profile-card .progress-bar {\n  background-color: var(--main-color);\n}\n\n.personal-info {\n  margin-bottom: 30px;\n}\n\n.personal-info .personal-list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.personal-list li {\n  margin-bottom: 5px;\n}\n\n.personal-info h3 {\n  margin-bottom: 10px;\n}\n\n.personal-info p {\n  margin-bottom: 5px;\n  font-size: 14px;\n}\n\n.personal-info i {\n  font-size: 15px;\n  color: var(--main-color);\n  margin-right: 15px;\n  width: 18px;\n}\n\n.skill {\n  margin-bottom: 30px;\n}\n\n.skill h3 {\n  margin-bottom: 15px;\n}\n\n.skill p {\n  margin-bottom: 5px;\n}\n\n.languages h3 {\n  margin-bottom: 15px;\n}\n\n.languages p {\n  margin-bottom: 5px;\n}\n\n.right-profile-card .nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: var(--main-color);\n}\n\n.right-profile-card .nav > li {\n  float: left;\n  margin-right: 10px;\n}\n\n.right-profile-card .nav-pills .nav-link {\n  border-radius: 26px;\n}\n\n.right-profile-card h3 {\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 15px;\n}\n\n.right-profile-card h4 {\n  font-size: 16px;\n  margin-bottom: 15px;\n}\n\n.right-profile-card i {\n  font-size: 15px;\n  margin-right: 10px;\n}\n\n.right-profile-card .work-container {\n  border-bottom: 1px solid #eee;\n  margin-bottom: 20px;\n  padding: 10px;\n}\n\n/*timeline*/\n\n.img-circle {\n  border-radius: 50%;\n}\n\n.timeline-centered {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.timeline-centered:before,\n.timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before,\n.timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 4px;\n  background: #f5f5f6;\n  /*left: 50%;*/\n  top: 20px;\n  bottom: 20px;\n  margin-left: 30px;\n}\n\n.timeline-centered .timeline-entry {\n  position: relative;\n  /*width: 50%;\n      float: right;*/\n  margin-top: 5px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n  clear: both;\n}\n\n.timeline-centered .timeline-entry:before,\n.timeline-centered .timeline-entry:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered .timeline-entry:after {\n  clear: both;\n}\n\n.timeline-centered .timeline-entry:before,\n.timeline-centered .timeline-entry:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered .timeline-entry:after {\n  clear: both;\n}\n\n.timeline-centered .timeline-entry.begin {\n  margin-bottom: 0;\n}\n\n.timeline-centered .timeline-entry.left-aligned {\n  float: left;\n}\n\n.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner {\n  margin-left: 0;\n  margin-right: -18px;\n}\n\n.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-time {\n  left: auto;\n  right: -100px;\n  text-align: left;\n}\n\n.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-icon {\n  float: right;\n}\n\n.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-label {\n  margin-left: 0;\n  margin-right: 70px;\n}\n\n.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-label:after {\n  left: auto;\n  right: 0;\n  margin-left: 0;\n  margin-right: -9px;\n  transform: rotate(180deg);\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner {\n  position: relative;\n  margin-left: -20px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner:before,\n.timeline-centered .timeline-entry .timeline-entry-inner:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner:after {\n  clear: both;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner:before,\n.timeline-centered .timeline-entry .timeline-entry-inner:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner:after {\n  clear: both;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-time {\n  position: absolute;\n  left: -100px;\n  text-align: right;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span {\n  display: block;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span:first-child {\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span:last-child {\n  font-size: 12px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {\n  background: #fff;\n  color: #737881;\n  display: block;\n  width: 40px;\n  height: 40px;\n  -webkit-background-clip: padding-box;\n  -moz-background-clip: padding;\n  background-clip: padding-box;\n  border-radius: 20px;\n  text-align: center;\n  box-shadow: 0 0 0 5px #f5f5f6;\n  line-height: 40px;\n  font-size: 15px;\n  float: left;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-primary {\n  background-color: #303641;\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-secondary {\n  background-color: #ee4749;\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-success {\n  background-color: #00a651;\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-info {\n  background-color: #21a9e1;\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-warning {\n  background-color: #fad839;\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-danger {\n  background-color: #cc2424;\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {\n  position: relative;\n  background: #f5f5f6;\n  padding: 1em;\n  margin-left: 60px;\n  -webkit-background-clip: padding-box;\n  -moz-background-clip: padding;\n  background-clip: padding-box;\n  border-radius: 3px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 9px 9px 9px 0;\n  border-color: transparent #f5f5f6 transparent transparent;\n  left: 0;\n  top: 10px;\n  margin-left: -9px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2,\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p {\n  color: #737881;\n  font-size: 12px;\n  margin: 0;\n  line-height: 1.428571429;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p + p {\n  margin-top: 15px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 {\n  font-size: 16px;\n  margin-bottom: 10px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 a {\n  color: #303641;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 span {\n  -webkit-opacity: 0.6;\n  -moz-opacity: 0.6;\n  opacity: 0.6;\n  -ms-filter: alpha(opacity=60);\n  filter: alpha(opacity=60);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGV0YWlsLWN2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBOztFQUVFLFdBQUE7RUFDQSxtQ0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUFGOztBQUlBLFdBQUE7O0FBRUE7RUFDRSxrQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBOztFQUVFLFlBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0FBRkY7O0FBS0E7O0VBRUUsWUFBQTtFQUNBLGNBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQTtvQkFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUtBOztFQUVFLFlBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0FBRkY7O0FBS0E7O0VBRUUsWUFBQTtFQUNBLGNBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFLQSx5QkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBOztFQUVFLFlBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0FBRkY7O0FBS0E7O0VBRUUsWUFBQTtFQUNBLGNBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUdBLHNCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUdBLG1CQUFBO0VBQ0Esa0JBQUE7RUFHQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFHQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlEQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQUZGOztBQUtBOztFQUVFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUFGRiIsImZpbGUiOiJkZXRhaWwtY3YuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1wcm9maWxlLWNhcmQgLnVzZXItcHJvZmlsZSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubGVmdC1wcm9maWxlLWNhcmQgaDMge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5sZWZ0LXByb2ZpbGUtY2FyZCBwIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5sZWZ0LXByb2ZpbGUtY2FyZCAucHJvZ3Jlc3MtYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxufVxyXG5cclxuLnBlcnNvbmFsLWluZm8ge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5wZXJzb25hbC1pbmZvIC5wZXJzb25hbC1saXN0IHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5wZXJzb25hbC1saXN0IGxpIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5wZXJzb25hbC1pbmZvIGgzIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucGVyc29uYWwtaW5mbyBwIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ucGVyc29uYWwtaW5mbyBpIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG47XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiAxOHB4O1xyXG59XHJcblxyXG4uc2tpbGwge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5za2lsbCBoMyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnNraWxsIHAge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmxhbmd1YWdlcyBoMyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmxhbmd1YWdlcyBwIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5yaWdodC1wcm9maWxlLWNhcmQgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLFxyXG4ubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGluayB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbi5yaWdodC1wcm9maWxlLWNhcmQgLm5hdj5saSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucmlnaHQtcHJvZmlsZS1jYXJkIC5uYXYtcGlsbHMgLm5hdi1saW5rIHtcclxuICBib3JkZXItcmFkaXVzOiAyNnB4O1xyXG59XHJcblxyXG4ucmlnaHQtcHJvZmlsZS1jYXJkIGgzIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ucmlnaHQtcHJvZmlsZS1jYXJkIGg0IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnJpZ2h0LXByb2ZpbGUtY2FyZCBpIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucmlnaHQtcHJvZmlsZS1jYXJkIC53b3JrLWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLyp0aW1lbGluZSovXHJcblxyXG4uaW1nLWNpcmNsZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlLFxyXG4udGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlLFxyXG4udGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjZjVmNWY2O1xyXG4gIC8qbGVmdDogNTAlOyovXHJcbiAgdG9wOiAyMHB4O1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qd2lkdGg6IDUwJTtcclxuICAgICAgZmxvYXQ6IHJpZ2h0OyovXHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnk6YmVmb3JlLFxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5OmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeTphZnRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnk6YmVmb3JlLFxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5OmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeTphZnRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkuYmVnaW4ge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkubGVmdC1hbGlnbmVkIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeS5sZWZ0LWFsaWduZWQgLnRpbWVsaW5lLWVudHJ5LWlubmVyIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xOHB4O1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5LmxlZnQtYWxpZ25lZCAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLXRpbWUge1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IC0xMDBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5LmxlZnQtYWxpZ25lZCAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeS5sZWZ0LWFsaWduZWQgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5LmxlZnQtYWxpZ25lZCAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsOmFmdGVyIHtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogLTlweDtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyOmJlZm9yZSxcclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lcjphZnRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyOmJlZm9yZSxcclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lcjphZnRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS10aW1lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTEwMHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtdGltZT5zcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLXRpbWU+c3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtdGltZT5zcGFuOmxhc3QtY2hpbGQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgY29sb3I6ICM3Mzc4ODE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCA1cHggI2Y1ZjVmNjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDVweCAjZjVmNWY2O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDVweCAjZjVmNWY2O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uYmctcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzY0MTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uYmctc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU0NzQ5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5iZy1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNjUxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5iZy1pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFhOWUxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5iZy13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFkODM5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5iZy1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzI0MjQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjY7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiA5cHggOXB4IDlweCAwO1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2Y1ZjVmNiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogLTlweDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyLFxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgcCB7XHJcbiAgY29sb3I6ICM3Mzc4ODE7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBwK3Age1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiBhIHtcclxuICBjb2xvcjogIzMwMzY0MTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIHNwYW4ge1xyXG4gIC13ZWJraXQtb3BhY2l0eTogLjY7XHJcbiAgLW1vei1vcGFjaXR5OiAuNjtcclxuICBvcGFjaXR5OiAuNjtcclxuICAtbXMtZmlsdGVyOiBhbHBoYShvcGFjaXR5PTYwKTtcclxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NjApO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "D6Qw":
/*!***************************************************************!*\
  !*** ./src/app/upload/upload-image/upload-image.component.ts ***!
  \***************************************************************/
/*! exports provided: UploadImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImageComponent", function() { return UploadImageComponent; });
/* harmony import */ var _raw_loader_upload_image_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./upload-image.component.html */ "kti8");
/* harmony import */ var _upload_image_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-image.component.scss */ "QGdh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadImageComponent = /** @class */ (function () {
    function UploadImageComponent(afStorage) {
        this.afStorage = afStorage;
        this.checkUpLoadFile = false;
        this.giveURLtoCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    UploadImageComponent.prototype.ngOnInit = function () {
    };
    UploadImageComponent.prototype.onFileChanged = function (event) {
        this.selectFile = event.target.files[0];
        this.onUpLoad();
    };
    UploadImageComponent.prototype.onUpLoad = function () {
        var _this = this;
        this.checkUpLoadFile = true;
        var id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref(id);
        this.ref.put(this.selectFile).then(function (snapshot) {
            return snapshot.ref.getDownloadURL();
        }).then(function (downloadURL) {
            _this.checkUpLoadFile = false;
            _this.downloadURL = downloadURL;
            _this.giveURLtoCreate.emit(_this.downloadURL);
            console.log(_this.downloadURL);
            return downloadURL;
        }).catch(function (error) {
            console.log('Fail Upload ' + error);
        });
    };
    UploadImageComponent.ctorParameters = function () { return [
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }
    ]; };
    UploadImageComponent.propDecorators = {
        giveURLtoCreate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    UploadImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-upload-image',
            template: _raw_loader_upload_image_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_upload_image_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]])
    ], UploadImageComponent);
    return UploadImageComponent;
}());



/***/ }),

/***/ "DXXV":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/recruitmentnew/list-recruitment-user/list-recruitment-user.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<!-- End Banner Area -->\r\n\r\n<div class=\"container\">\r\n    <div style=\"margin-top: 155px\" class=\"row\">\r\n        <div class=\"col-lg-10 mx-auto mb-4\">\r\n            <div class=\"section-title text-center \">\r\n                <h3 style=\"font-size: 50px\" class=\"top-c-sep\">Danh sách việc làm</h3>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-10 mx-auto\">\r\n            <form class=\"career-form\" #form=\"ngForm\"\r\n                  (ngSubmit)=\"ngSubmit(form)\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 col-lg-12 my-3\">\r\n                        <div class=\"input-group position-relative\" style=\"margin-top: 10px;\">\r\n                            <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"Nhập vào tên công việc, tên công ty, tên thành phố...\" id=\"keywords\" [(ngModel)]=\"searchJob.title\">\r\n                        </div>\r\n                    </div>\r\n                    <a class=\"btn btn-link\"  style=\"color:#4e63d7;margin-left: -450px\" *ngIf=\"!advancedForm\" (click)=\" advancedForm = !advancedForm\" >Tìm kiếm nâng cao</a>\r\n                    <a class=\"btn btn-link\"  style=\"color:#4e63d7;margin-left: -490px\" *ngIf=\"advancedForm\" (click)=\" advancedForm = !advancedForm\" >Đóng</a>\r\n                    <mat-form-field *ngIf=\"advancedForm\" appearance=\"outline\" class=\"col-md-6 col-lg-6 my-3\">\r\n                        <mat-label>Thành phố</mat-label>\r\n                        <select matNativeControl ngModel name=\"cityId\">\r\n                            <option *ngFor=\"let ct of city\" [value]=\"ct.id\">{{ct.name}}</option>\r\n                        </select>\r\n                    </mat-form-field>\r\n                    <mat-form-field  *ngIf=\"advancedForm\" appearance=\"outline\" class=\"col-md-6 col-lg-6 my-3\">\r\n                        <mat-label>Lĩnh vực</mat-label>\r\n                        <select matNativeControl ngModel name=\"fieldId\">\r\n                            <option *ngFor=\"let field of fields\" [value]=\"field.id\">{{field.name}}</option>\r\n                        </select>\r\n                    </mat-form-field>\r\n                    <mat-form-field *ngIf=\"advancedForm\" appearance=\"outline\" class=\"col-md-4 col-lg-4 my-3\">\r\n                        <mat-label>Tên công ty</mat-label>\r\n                        <select matNativeControl ngModel name=\"companyId\">\r\n                            <option *ngFor=\"let com of company\" [value]=\"com.id\">{{com.name}}</option>\r\n                        </select>\r\n                    </mat-form-field>\r\n                    <mat-form-field *ngIf=\"advancedForm\" appearance=\"outline\" class=\"col-md-4 col-lg-4 my-3\">\r\n                        <mat-label>Vị trí tuyển dụng</mat-label>\r\n                        <select matNativeControl ngModel name=\"vacancies\">\r\n                            <option *ngFor=\"let vc of vacancies\" [value]=\"vc.id\">{{vc.name}}</option>\r\n                        </select>\r\n                    </mat-form-field>\r\n                    <mat-form-field *ngIf=\"advancedForm\" appearance=\"outline\" class=\"col-md-4 col-lg-4 my-3\">\r\n                        <mat-label>Thời gian làm việc</mat-label>\r\n                        <select matNativeControl ngModel name=\"workingTimeId\">\r\n                            <option *ngFor=\"let wt of workingTime\" [value]=\"wt.id\">{{wt.name}}</option>\r\n                        </select>\r\n                    </mat-form-field>\r\n                    <mat-label  *ngIf=\"advancedForm\">Mức lương</mat-label>\r\n                    <mat-slider *ngIf=\"advancedForm\"\r\n                            thumbLabel\r\n                            [displayWith]=\"formatLabel\"\r\n                            tickInterval=\"1000000\"\r\n                            step=\"1000000\"\r\n                            min=\"0\"\r\n                            max=\"20000000\"\r\n                            ngModel\r\n                            name=\"salary\"\r\n                            aria-label=\"units\"></mat-slider>\r\n                    <div class=\"col-md-6 col-lg-3 my-3\" style=\"margin-left: 400px\">\r\n                        <button type=\"submit\" class=\"btn btn-lg btn-block btn-light btn-custom btn-outline-primary\"\r\n                                id=\"contact-submit\" style=\"margin-top: 10px;\">\r\n                            Tìm Kiếm\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <div class=\"filter-result\">\r\n                <div *ngFor=\"let rcm of recruitmentNews\"\r\n                     class=\"job-box d-md-flex align-items-center justify-content-between mb-30\">\r\n                    <div class=\"job-left my-4 d-md-flex align-items-center flex-wrap\">\r\n                        <div class=\"img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex\">\r\n                            <img src=\"{{rcm.avatar}}\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"job-content\">\r\n                            <h5 class=\"text-center text-md-left\">{{rcm.title}}</h5>\r\n                            <ul class=\"d-md-flex flex-wrap text-capitalize ff-open-sans\">\r\n                                <li class=\"mr-md-4\">\r\n                                    <i class=\"zmdi zmdi-pin mr-2\"></i> {{rcm.cityName}}\r\n                                </li>\r\n                                <li class=\"mr-md-4\" *ngIf=\"check == true\">\r\n                                    <i class=\"zmdi zmdi-money mr-2\"></i> {{rcm.salary | currency:'VND' : true : '1.0-0': 'en-US' }}\r\n                                </li>\r\n                                <li class=\"mr-md-4\" *ngIf=\"check == false\">\r\n                                    <i class=\"zmdi zmdi-money mr-2\"></i> Lương XXX\r\n                                </li>\r\n                                <li class=\"mr-md-4\">\r\n                                    <i class=\"zmdi zmdi-time mr-2\"></i> {{rcm.workingTimeName}}\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"job-right my-4 flex-shrink-0\">\r\n                        <button *ngIf=\"checkUser\" mat-stroked-button color=\"primary\" (click)=\"openDialogApply(rcm.id)\">Ứng tuyển</button>\r\n                    </div>\r\n                    <div class=\"job-right my-4 flex-shrink-0\">\r\n                        <button *ngIf=\"checkUser\" mat-stroked-button color=\"primary\" (click)=\"openDialogApplyNow(rcm.id)\"\r\n                                >Ứng tuyển ngay\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"page-navigation-area\">\r\n                    <nav aria-label=\"Page navigation example text-center\">\r\n                        <ul class=\"pagination\">\r\n                            <li class=\"page-item\">\r\n                                <a class=\"page-link page-links\" (click)=\"leftPage()\">\r\n                                    <i class='bx bx-chevrons-left'></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"page-item\">\r\n                                <a class=\"page-link\" (click)=\"rightPage()\">\r\n                                    <i class='bx bx-chevrons-right'></i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </nav>\r\n                </div>\r\n            </div>\r\n            <!--                <mat-paginator [pageSizeOptions]=\"[5,15,30,90]\" [length]=\"totalElements\"-->\r\n            <!--                               (page)=\"nextPage($event)\"></mat-paginator>-->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- Testimonials -->\r\n<div class=\"testimonials-area ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"section-title\">\r\n                    <h2>Thành Viên Của Nhóm</h2>\r\n                    <p>Những người đứng sau thành tựu</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"single-testimonials\">\r\n                    <div class=\"testimonials-head\">\r\n                        <div class=\"row align-items-center\">\r\n                            <div class=\"col-lg-3 col-md-3 col-5\">\r\n                                <div class=\"testimonials-img\">\r\n                                    <img src=\"assets/images/testimonilas/111.jpg\" alt=\"testimonials\"\r\n                                         style=\"width: 150px;height: 139px\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-9 col-md-9 col-7\">\r\n                                <div class=\"content\">\r\n                                    <h2>Nguyễn Tiến Long</h2>\r\n                                    <span>Founder</span>\r\n                                    <ul class=\"rate\">\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"testimonials-foot\">\r\n                        <p>If you don’t do wild things while you’re young, you will have nothing to smile about when\r\n                            you’re old.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"single-testimonials\">\r\n                    <div class=\"testimonials-head\">\r\n                        <div class=\"row align-items-center\">\r\n                            <div class=\"col-lg-3 col-md-3 col-5\">\r\n                                <div class=\"testimonials-img\">\r\n                                    <img src=\"assets/images/testimonilas/222.jpg\" alt=\"testimonials\"\r\n                                         style=\"width: 150px;height: 140px\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-9 col-md-9 col-7\">\r\n                                <div class=\"content\">\r\n                                    <h2>Đỗ Nam Khánh</h2>\r\n                                    <span>Co-Founder</span>\r\n                                    <ul class=\"rate\">\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"testimonials-foot\">\r\n                        <p>It’s better to cross the line and suffer the consequences than to just stare at the line for\r\n                            the rest of your life.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"single-testimonials\">\r\n                    <div class=\"testimonials-head\">\r\n                        <div class=\"row align-items-center\">\r\n                            <div class=\"col-lg-3 col-md-3 col-5\">\r\n                                <div class=\"testimonials-img\">\r\n                                    <img src=\"assets/images/testimonilas/333.jpg\" alt=\"testimonials\"\r\n                                         style=\"width: 150px;height: 155px\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-9 col-md-9 col-7\">\r\n                                <div class=\"content\">\r\n                                    <h2>Nguyễn Đình Lộc</h2>\r\n                                    <span>Co-Founder</span>\r\n                                    <ul class=\"rate\">\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"testimonials-foot\">\r\n                        <p>Learn from yesterday, live for today, hope for tomorrow. The important is to not stop\r\n                            questioning.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"single-testimonials\">\r\n                    <div class=\"testimonials-head\">\r\n                        <div class=\"row align-items-center\">\r\n                            <div class=\"col-lg-3 col-md-3 col-5\">\r\n                                <div class=\"testimonials-img\">\r\n                                    <img src=\"assets/images/testimonilas/444.jpg\" alt=\"testimonials\"\r\n                                         style=\"width: 150px;height: auto\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-9 col-md-9 col-7\">\r\n                                <div class=\"content\">\r\n                                    <h2>Nguyễn Văn Định</h2>\r\n                                    <span>Co-Founder</span>\r\n                                    <ul class=\"rate\">\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                        <li><i class=\"bx bxs-star\"></i></li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"testimonials-foot\">\r\n                        <p>Don’t cry over the past, it’s gone. Don’t stress about the future, it hasn’t arrived. Live in\r\n                            the present and make it beautiful.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"page-navigation-area\">\r\n                    <nav aria-label=\"Page navigation example text-center\">\r\n                        <ul class=\"pagination\">\r\n                            <li class=\"page-item\">\r\n                                <a class=\"page-link page-links\" href=\"#\">\r\n                                    <i class='bx bx-chevrons-left'></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"page-item active\">\r\n                                <a class=\"page-link\" href=\"#\">1</a>\r\n                            </li>\r\n                            <li class=\"page-item\">\r\n                                <a class=\"page-link\" href=\"#\">2</a>\r\n                            </li>\r\n                            <li class=\"page-item\">\r\n                                <a class=\"page-link\" href=\"#\">3</a>\r\n                            </li>\r\n                            <li class=\"page-item\">\r\n                                <a class=\"page-link\" href=\"#\">\r\n                                    <i class='bx bx-chevrons-right'></i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </nav>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Testimonials -->\r\n\r\n");

/***/ }),

/***/ "DZ35":
/*!************************************************************************************************!*\
  !*** ./projects/ngx-audio-player/src/lib/service/audio-player-service/audio-player.service.ts ***!
  \************************************************************************************************/
/*! exports provided: AudioPlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPlayerService", function() { return AudioPlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AudioPlayerService = /** @class */ (function () {
    function AudioPlayerService() {
        // Dynamic update of playlist
        this.tracks = [];
        this.playlistSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.tracks);
        // Get the current track
        this.currentTrack = null;
        this.currentTrackSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.currentTrack);
        // Get the current time
        this.currentTime = null;
        this.currentTimeSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.currentTime);
    }
    AudioPlayerService.prototype.setPlaylist = function (tracks) {
        this.tracks = tracks;
        this.playlistSubject$.next(this.tracks);
    };
    AudioPlayerService.prototype.getPlaylist = function () {
        return this.playlistSubject$.asObservable();
    };
    AudioPlayerService.prototype.setCurrentTrack = function (currentTrack) {
        this.currentTrack = currentTrack;
        this.currentTrackSubject$.next(this.currentTrack);
    };
    AudioPlayerService.prototype.getCurrentTrack = function () {
        return this.currentTrackSubject$.asObservable();
    };
    AudioPlayerService.prototype.setCurrentTime = function (currentTime) {
        this.currentTime = currentTime;
        this.currentTimeSubject$.next(this.currentTime);
    };
    AudioPlayerService.prototype.getCurrentTime = function () {
        return this.currentTimeSubject$.asObservable();
    };
    AudioPlayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], AudioPlayerService);
    return AudioPlayerService;
}());



/***/ }),

/***/ "E0Y7":
/*!**********************************************************************!*\
  !*** ./src/app/company/detail-company/detail-company.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkZXRhaWwtY29tcGFueS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoiZGV0YWlsLWNvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "EAf1":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/change-password/change-password.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-title-area\" style=\"height: 600px\">\r\n    <div class=\"container\" style=\"margin-top: -35px\">\r\n        <div class=\"page-title-content\">\r\n            <h2 class=\"active\">Tạo mật khẩu mới</h2>\r\n        </div>\r\n        <section class=\"signup-area\" style=\"margin: 10px\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <div class=\"signup-form\">\r\n                            <form>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-12\">\r\n                                        <mat-card class=\"text-center\">\r\n                                            <form class=\"create-category\" #form=\"ngForm\"\r\n                                                  (ngSubmit)=\"form.form.valid && ngSubmit(form)\" novalidate>\r\n                                                <mat-error  style=\"text-align: center\">{{status}}</mat-error>\r\n                                                <mat-form-field style=\"width: 350px\" appearance=\"outline\">\r\n                                                    <mat-label>Nhập mật khẩu mới</mat-label>\r\n                                                    <input matInput placeholder=\"username\" name=\"phone\"\r\n                                                           [(ngModel)]=\"data.newPassword\" #newPassword=\"ngModel\"\r\n                                                           [type]=\"hide ? 'password' : 'text'\">\r\n                                                    <button mat-icon-button matSuffix (click)=\"hide = !hide\"\r\n                                                            [attr.aria-label]=\"'Hide password'\"\r\n                                                            [attr.aria-pressed]=\"hide\">\r\n                                                        <mat-icon\r\n                                                                color=\"black\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                                    </button>\r\n                                                    <mat-error *ngIf=\"newPassword?.hasError('required')\">Không được bỏ\r\n                                                        trống\r\n                                                    </mat-error>\r\n                                                </mat-form-field>\r\n\r\n                                                <mat-form-field style=\"width: 350px\" appearance=\"outline\">\r\n                                                    <mat-label>Nhập lại mật khẩu</mat-label>\r\n                                                    <input matInput placeholder=\"Nhập lại mật khẩu\" name=\"confirmpassword\"\r\n                                                           [(ngModel)]=\"data.confirmPassword\"\r\n                                                           #confirmPassword=\"ngModel\"\r\n                                                           [type]=\"hide1 ? 'password' : 'text'\">\r\n                                                    <button mat-icon-button matSuffix (click)=\"hide1 = !hide1\"\r\n                                                            [attr.aria-label]=\"'Hide password'\"\r\n                                                            [attr.aria-pressed]=\"hide1\">\r\n                                                        <mat-icon\r\n                                                                color=\"black\">{{hide1 ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                                    </button>\r\n                                                </mat-form-field>\r\n                                                <p>\r\n                                                    <span matBadge=\"\" matBadgeSize=\"large\" *ngIf=\"checkPassword()\">Mật khẩu chính xác</span>\r\n                                                </p>\r\n                                                <p>\r\n                                                    <span matBadge=\"\" matBadgeSize=\"large\"\r\n                                                          *ngIf=\"checkPassword() == false\">Mật khẩu không giống nhau</span>\r\n                                                </p>\r\n                                                <br>\r\n                                                <button mat-raised-button class=\"btn btn-primary\">Xác nhận</button>\r\n                                            </form>\r\n                                        </mat-card>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "EZ6k":
/*!*************************************************************************************************************!*\
  !*** ./src/app/company/recruitmentnew/list-recruitmentnew-company/list-recruitmentnew-company.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ListRecruitmentnewCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRecruitmentnewCompanyComponent", function() { return ListRecruitmentnewCompanyComponent; });
/* harmony import */ var _raw_loader_list_recruitmentnew_company_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./list-recruitmentnew-company.component.html */ "ptxN");
/* harmony import */ var _list_recruitmentnew_company_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-recruitmentnew-company.component.scss */ "5KuW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/recruitmentNew/recruitment-new.service */ "FmPh");
/* harmony import */ var _security_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../security/token.service */ "zdrf");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../dialog/dialog.component */ "ZYp2");
/* harmony import */ var _service_company_company_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/company/company.service */ "KXKP");
/* harmony import */ var _detail_recruitmentnew_detail_recruitmentnew_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../detail-recruitmentnew/detail-recruitmentnew.component */ "wR/+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ListRecruitmentnewCompanyComponent = /** @class */ (function () {
    function ListRecruitmentnewCompanyComponent(recruitmentNewService, token, dialog, companyService) {
        this.recruitmentNewService = recruitmentNewService;
        this.token = token;
        this.dialog = dialog;
        this.companyService = companyService;
        this.displayedColumns = ['id', 'title', 'expDate', 'status', 'edit', 'delete', 'editStatus'];
        this.recruitmentNews = [];
        this.form = {};
    }
    ListRecruitmentnewCompanyComponent.prototype.ngOnInit = function () {
        this.getListRecruitmentNew();
        this.getNameByID();
    };
    ListRecruitmentnewCompanyComponent.prototype.getListRecruitmentNew = function () {
        var _this = this;
        this.recruitmentNewService.showAllListRecruitmentNew(this.token.getIdGuest()).subscribe(function (listRN) {
            _this.recruitmentNews = listRN;
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.recruitmentNews);
            _this.dataSource.paginator = _this.paginator;
            console.log(listRN);
        });
    };
    ListRecruitmentnewCompanyComponent.prototype.getNameByID = function () {
        var _this = this;
        var idGuest = this.token.getIdGuest();
        this.companyService.getCompanyNameById(idGuest).subscribe(function (data) {
            _this.nameCompany = data.name;
            _this.descriptionCompany = data.description;
        });
    };
    ListRecruitmentnewCompanyComponent.prototype.deleteRecruitmentNew = function (id) {
        var _this = this;
        this.recruitmentNewService.deleteRecruitmentNewById(id).subscribe(function () {
            _this.getListRecruitmentNew();
        });
    };
    ListRecruitmentnewCompanyComponent.prototype.openDialog = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('ressult sau khi bam nut --> ', result);
            if (result) {
                _this.deleteRecruitmentNew(id);
            }
            console.log("Dialog result: " + result);
        });
    };
    ListRecruitmentnewCompanyComponent.prototype.changeStatus = function (idRecrui) {
        var _this = this;
        this.recruitmentNewService.changeStatusById(idRecrui).subscribe(function (data) {
            _this.getListRecruitmentNew();
        });
    };
    ListRecruitmentnewCompanyComponent.prototype.openDialogDetails = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_detail_recruitmentnew_detail_recruitmentnew_component__WEBPACK_IMPORTED_MODULE_10__["DetailRecruitmentnewComponent"], {
            data: {
                id: id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getListRecruitmentNew();
            console.log('The dialog was closed');
        });
    };
    ListRecruitmentnewCompanyComponent.ctorParameters = function () { return [
        { type: _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_4__["RecruitmentNewService"] },
        { type: _security_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: _service_company_company_service__WEBPACK_IMPORTED_MODULE_9__["CompanyService"] }
    ]; };
    ListRecruitmentnewCompanyComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"],] }]
    };
    ListRecruitmentnewCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list-recruitmentnew-company',
            template: _raw_loader_list_recruitmentnew_company_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_list_recruitmentnew_company_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_4__["RecruitmentNewService"],
            _security_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _service_company_company_service__WEBPACK_IMPORTED_MODULE_9__["CompanyService"]])
    ], ListRecruitmentnewCompanyComponent);
    return ListRecruitmentnewCompanyComponent;
}());



/***/ }),

/***/ "FgHN":
/*!***************************************************************!*\
  !*** ./src/app/user/active-status/active-status.component.ts ***!
  \***************************************************************/
/*! exports provided: ActiveStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveStatusComponent", function() { return ActiveStatusComponent; });
/* harmony import */ var _raw_loader_active_status_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./active-status.component.html */ "QQo1");
/* harmony import */ var _active_status_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./active-status.component.scss */ "8KMC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _security_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../security/auth.service */ "JZt4");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActiveStatusComponent = /** @class */ (function () {
    function ActiveStatusComponent(router, activeRouter, auth) {
        var _this = this;
        this.router = router;
        this.activeRouter = activeRouter;
        this.auth = auth;
        this.id = 0;
        this.sub = this.activeRouter.paramMap.subscribe(function (paramMap) {
            _this.id = Number(paramMap.get('id'));
            console.log(_this.id);
            _this.auth.activeStatus(_this.id).subscribe(function (data) {
                console.log(data);
                _this.router.navigate(["login"]).then(window.location.reload);
            });
        });
    }
    ActiveStatusComponent.prototype.ngOnInit = function () {
    };
    ActiveStatusComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _security_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    ActiveStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-active-status',
            template: _raw_loader_active_status_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_active_status_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _security_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ActiveStatusComponent);
    return ActiveStatusComponent;
}());



/***/ }),

/***/ "FmPh":
/*!*******************************************************************!*\
  !*** ./src/app/service/recruitmentNew/recruitment-new.service.ts ***!
  \*******************************************************************/
/*! exports provided: RecruitmentNewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitmentNewService", function() { return RecruitmentNewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecruitmentNewService = /** @class */ (function () {
    function RecruitmentNewService(http) {
        this.http = http;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl;
    }
    RecruitmentNewService.prototype.getRecruitmentNewById = function (id) {
        return this.http.get(this.apiServerUrl + "/recruitment/" + id);
    };
    RecruitmentNewService.prototype.createRecruitmentNew = function (recruitmentNew) {
        return this.http.post(this.apiServerUrl + "/recruitment", recruitmentNew);
    };
    RecruitmentNewService.prototype.updateRecruitment = function (id, recruitment) {
        return this.http.put(this.apiServerUrl + "/recruitment/" + id, recruitment);
    };
    RecruitmentNewService.prototype.showAllListRecruitmentNew = function (id) {
        return this.http.get(this.apiServerUrl + "/recruitment/showAll/" + id);
    };
    RecruitmentNewService.prototype.deleteRecruitmentNewById = function (id) {
        return this.http.delete(this.apiServerUrl + "/recruitment/" + id);
    };
    RecruitmentNewService.prototype.pageRecruitmentNew = function (request) {
        var params = request;
        return this.http.get(this.apiServerUrl + "/recruitment/showPageRecuitmentNew", { params: params });
    };
    RecruitmentNewService.prototype.changeStatusById = function (id) {
        // @ts-ignore
        return this.http.put(this.apiServerUrl + "/recruitment/editStatus/" + id);
    };
    RecruitmentNewService.prototype.searchByObj = function (searchJob) {
        return this.http.post(this.apiServerUrl + "/recruitment/findByObj", searchJob);
    };
    RecruitmentNewService.prototype.getAll = function () {
        return this.http.get(this.apiServerUrl + "/recruitment/list");
    };
    RecruitmentNewService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    RecruitmentNewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RecruitmentNewService);
    return RecruitmentNewService;
}());



/***/ }),

/***/ "FqlH":
/*!****************************************************************!*\
  !*** ./src/app/company/web-company/web-company.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  margin-top: 20px;\n}\n\n.member-details {\n  padding-top: 80px;\n  padding-bottom: 80px;\n}\n\n@media (min-width: 992px) {\n  .member-details {\n    padding-top: 100px;\n    padding-bottom: 100px;\n  }\n}\n\n.member-details .member_designation {\n  margin-bottom: 30px;\n}\n\n.member-details .member_designation h2 {\n  margin-bottom: 5px;\n  margin-top: 25px;\n}\n\n@media (min-width: 768px) {\n  .member-details .member_designation h2 {\n    margin-top: 0;\n  }\n}\n\n.member-details .member_designation span {\n  font-style: italic;\n}\n\n.member-details .member_desc li {\n  display: block;\n  float: unset;\n  width: 100%;\n}\n\n.member-details .member_desc li i {\n  color: #0cc652;\n  font-size: 14px;\n}\n\n.member-details .member_desc h4 {\n  margin-top: 40px;\n}\n\n.member-details .member_desc p {\n  margin-top: 10px;\n}\n\n.member-details .member_desc .progress-holder {\n  margin-top: 30px;\n}\n\n.member-details .media-box {\n  margin-bottom: 20px;\n}\n\n@media (min-width: 992px) {\n  .member-details .media-box {\n    margin-bottom: 0;\n  }\n}\n\n.member-details .member_contact {\n  padding: 40px;\n  position: relative;\n  margin-top: 40px;\n}\n\n.member-details .member_contact .media-icon {\n  font-size: 32px;\n  color: #dae0e6;\n  position: relative;\n  width: 30px;\n  text-align: center;\n  float: left;\n  margin-right: 15px;\n}\n\n.member-details .member_contact .media-content {\n  padding-left: 0;\n  float: left;\n}\n\n.member-details .member_contact .media-content h5 {\n  font-size: 15px;\n}\n\n.member-details .member_contact .media-content h5,\n.member-details .member_contact .media-content a {\n  color: #dae0e6;\n}\n\n@media (min-width: 992px) {\n  .member-details .member_contact .social-icons {\n    text-align: right;\n  }\n}\n\n.member-details .member_contact .social-icons .btn-social {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n}\n\n.member-details .member_contact .social-icons .btn {\n  background-color: transparent;\n  border: 1px solid;\n  border-color: #999;\n  color: #dae0e6;\n}\n\n.member-details .member_contact .social-icons .btn:hover {\n  background-color: rgba(162, 156, 156, 0.2);\n  border-color: rgba(162, 156, 156, 0.2);\n  opacity: 1;\n}\n\n.bg-image-holder,\n.bg-image {\n  background-size: cover !important;\n  background-position: 50% 0 !important;\n  transition: all 0.3s linear;\n  background: #f5f5f6;\n  position: relative;\n}\n\n.bg-image:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.bg-fixed {\n  background-attachment: fixed;\n}\n\n.bg-image .overlay-content {\n  position: relative;\n  z-index: 5;\n}\n\n.progress-holder {\n  margin-top: 50px;\n}\n\n.progress-holder .barWrapper .progressText {\n  font-size: 15px;\n  color: #222;\n}\n\n.progress-holder .progress {\n  margin-bottom: 25px;\n  margin-top: 10px;\n  overflow: visible;\n  background-color: #f5f5f6;\n}\n\n.progress-holder .progress .progress-bar {\n  position: relative;\n}\n\n.progress-holder .progress .progress-bar:after {\n  position: absolute;\n  content: \"\";\n  width: 1px;\n  height: 33px;\n  background-color: rgba(162, 156, 156, 0.2);\n  top: -8px;\n  right: 0;\n  z-index: 55;\n}\n\n.img-full {\n  width: 100%;\n}\n\np {\n  color: #8b8e93;\n  font-weight: 300;\n  margin-bottom: 0;\n  font-size: 14px;\n  line-height: 26px;\n}\n\n.styled_list {\n  margin-top: 15px;\n  position: relative;\n  display: inline-block;\n}\n\n@media (min-width: 768px) {\n  .styled_list {\n    margin-top: 15px;\n  }\n}\n\n.styled_list li {\n  font-size: 14px;\n  line-height: 30px;\n}\n\n@media (min-width: 768px) {\n  .styled_list li {\n    font-size: 14px;\n    float: left;\n    width: 50%;\n  }\n}\n\n.styled_list li i {\n  margin-right: 10px;\n  font-size: 12px;\n}\n\n.styled_list li a {\n  color: #8b8e93;\n}\n\n@media (min-width: 768px) {\n  .styled_list li a {\n    font-size: 12px;\n  }\n}\n\n@media (min-width: 992px) {\n  .styled_list li a {\n    font-size: 14px;\n  }\n}\n\nol.styled_list {\n  margin-left: 15px;\n}\n\nol.styled_list li {\n  padding-left: 10px;\n}\n\n.icon-box {\n  font-size: 30px;\n  margin-bottom: 33px;\n  display: inline-block;\n  color: #ffffff;\n  height: 65px;\n  width: 65px;\n  line-height: 65px;\n  background-color: #59b73f;\n  text-align: center;\n  border-radius: 0.3rem;\n}\n\n.social-icon-style2 li a {\n  display: inline-block;\n  font-size: 14px;\n  text-align: center;\n  color: #ffffff;\n  background: #051c31;\n  height: 41px;\n  line-height: 41px;\n  width: 41px;\n}\n\n.social-icon-style2 {\n  margin-bottom: 0;\n  display: inline-block;\n  padding-left: 10px;\n  list-style: none;\n}\n\n.social-icon-style2 li {\n  vertical-align: middle;\n  display: inline-block;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3ZWItY29tcGFueS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFLLGdCQUFBO0FBRUw7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBR0Y7O0FBQUE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EscUJBQUE7RUFHRjtBQUNGOztBQUFBO0VBQ0UsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFO0lBQ0UsYUFBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7O0VBRUUsY0FBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxpQkFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSwwQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBOztFQUVFLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtBQURGOztBQUlBO0VBQ0UsNEJBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQURGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBTUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFIRjs7QUFNQTtFQUNFO0lBQ0UsZ0JBQUE7RUFIRjtBQUNGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtFQUpGO0FBQ0Y7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFMRjs7QUFRQTtFQUNFLGNBQUE7QUFMRjs7QUFRQTtFQUNFO0lBQ0UsZUFBQTtFQUxGO0FBQ0Y7O0FBUUE7RUFDRTtJQUNFLGVBQUE7RUFORjtBQUNGOztBQVNBO0VBQ0UsaUJBQUE7QUFQRjs7QUFVQTtFQUNFLGtCQUFBO0FBUEY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBTkY7O0FBUUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFMRjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFKRiIsImZpbGUiOiJ3ZWItY29tcGFueS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7bWFyZ2luLXRvcDoyMHB4O31cclxuXHJcbi5tZW1iZXItZGV0YWlscyB7XHJcbiAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDgwcHhcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6OTkycHgpIHtcclxuICAubWVtYmVyLWRldGFpbHMge1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4XHJcbiAgfVxyXG59XHJcblxyXG4ubWVtYmVyLWRldGFpbHMgLm1lbWJlcl9kZXNpZ25hdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweFxyXG59XHJcblxyXG4ubWVtYmVyLWRldGFpbHMgLm1lbWJlcl9kZXNpZ25hdGlvbiBoMiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDI1cHhcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIHtcclxuICAubWVtYmVyLWRldGFpbHMgLm1lbWJlcl9kZXNpZ25hdGlvbiBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwXHJcbiAgfVxyXG59XHJcblxyXG4ubWVtYmVyLWRldGFpbHMgLm1lbWJlcl9kZXNpZ25hdGlvbiBzcGFuIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWNcclxufVxyXG5cclxuLm1lbWJlci1kZXRhaWxzIC5tZW1iZXJfZGVzYyBsaSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxvYXQ6IHVuc2V0O1xyXG4gIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi5tZW1iZXItZGV0YWlscyAubWVtYmVyX2Rlc2MgbGkgaSB7XHJcbiAgY29sb3I6ICMwY2M2NTI7XHJcbiAgZm9udC1zaXplOiAxNHB4XHJcbn1cclxuXHJcbi5tZW1iZXItZGV0YWlscyAubWVtYmVyX2Rlc2MgaDQge1xyXG4gIG1hcmdpbi10b3A6IDQwcHhcclxufVxyXG5cclxuLm1lbWJlci1kZXRhaWxzIC5tZW1iZXJfZGVzYyBwIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4XHJcbn1cclxuXHJcbi5tZW1iZXItZGV0YWlscyAubWVtYmVyX2Rlc2MgLnByb2dyZXNzLWhvbGRlciB7XHJcbiAgbWFyZ2luLXRvcDogMzBweFxyXG59XHJcblxyXG4ubWVtYmVyLWRldGFpbHMgLm1lZGlhLWJveCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo5OTJweCkge1xyXG4gIC5tZW1iZXItZGV0YWlscyAubWVkaWEtYm94IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBcclxuICB9XHJcbn1cclxuXHJcbi5tZW1iZXItZGV0YWlscyAubWVtYmVyX2NvbnRhY3Qge1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDQwcHhcclxufVxyXG5cclxuLm1lbWJlci1kZXRhaWxzIC5tZW1iZXJfY29udGFjdCAubWVkaWEtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGNvbG9yOiAjZGFlMGU2O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4XHJcbn1cclxuXHJcbi5tZW1iZXItZGV0YWlscyAubWVtYmVyX2NvbnRhY3QgLm1lZGlhLWNvbnRlbnQge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBmbG9hdDogbGVmdFxyXG59XHJcblxyXG4ubWVtYmVyLWRldGFpbHMgLm1lbWJlcl9jb250YWN0IC5tZWRpYS1jb250ZW50IGg1IHtcclxuICBmb250LXNpemU6IDE1cHhcclxufVxyXG5cclxuLm1lbWJlci1kZXRhaWxzIC5tZW1iZXJfY29udGFjdCAubWVkaWEtY29udGVudCBoNSxcclxuLm1lbWJlci1kZXRhaWxzIC5tZW1iZXJfY29udGFjdCAubWVkaWEtY29udGVudCBhIHtcclxuICBjb2xvcjogI2RhZTBlNlxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo5OTJweCkge1xyXG4gIC5tZW1iZXItZGV0YWlscyAubWVtYmVyX2NvbnRhY3QgLnNvY2lhbC1pY29ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodFxyXG4gIH1cclxufVxyXG5cclxuLm1lbWJlci1kZXRhaWxzIC5tZW1iZXJfY29udGFjdCAuc29jaWFsLWljb25zIC5idG4tc29jaWFsIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHhcclxufVxyXG5cclxuLm1lbWJlci1kZXRhaWxzIC5tZW1iZXJfY29udGFjdCAuc29jaWFsLWljb25zIC5idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzk5OTtcclxuICBjb2xvcjogI2RhZTBlNlxyXG59XHJcblxyXG4ubWVtYmVyLWRldGFpbHMgLm1lbWJlcl9jb250YWN0IC5zb2NpYWwtaWNvbnMgLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjIsIDE1NiwgMTU2LCAwLjIpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNjIsIDE1NiwgMTU2LCAwLjIpO1xyXG4gIG9wYWNpdHk6IDFcclxufVxyXG5cclxuLmJnLWltYWdlLWhvbGRlcixcclxuLmJnLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMCFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmVcclxufVxyXG5cclxuLmJnLWltYWdlOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KVxyXG59XHJcblxyXG4uYmctZml4ZWQge1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWRcclxufVxyXG5cclxuLmJnLWltYWdlIC5vdmVybGF5LWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA1XHJcbn1cclxuXHJcblxyXG4ucHJvZ3Jlc3MtaG9sZGVyIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1ob2xkZXIgLmJhcldyYXBwZXIgLnByb2dyZXNzVGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjMjIyXHJcbn1cclxuXHJcbi5wcm9ncmVzcy1ob2xkZXIgLnByb2dyZXNzIHtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNlxyXG59XHJcblxyXG4ucHJvZ3Jlc3MtaG9sZGVyIC5wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmVcclxufVxyXG5cclxuLnByb2dyZXNzLWhvbGRlciAucHJvZ3Jlc3MgLnByb2dyZXNzLWJhcjphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAzM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYyLCAxNTYsIDE1NiwgMC4yKTtcclxuICB0b3A6IC04cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogNTVcclxufVxyXG5cclxuLmltZy1mdWxsIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxucCB7XHJcbiAgY29sb3I6ICM4YjhlOTM7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuXHJcbi5zdHlsZWRfbGlzdCB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgLnN0eWxlZF9saXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHhcclxuICB9XHJcbn1cclxuXHJcbi5zdHlsZWRfbGlzdCBsaSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgLnN0eWxlZF9saXN0IGxpIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJVxyXG4gIH1cclxufVxyXG5cclxuLnN0eWxlZF9saXN0IGxpIGkge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDEycHhcclxufVxyXG5cclxuLnN0eWxlZF9saXN0IGxpIGEge1xyXG4gIGNvbG9yOiAjOGI4ZTkzXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgLnN0eWxlZF9saXN0IGxpIGEge1xyXG4gICAgZm9udC1zaXplOiAxMnB4XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo5OTJweCkge1xyXG4gIC5zdHlsZWRfbGlzdCBsaSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweFxyXG4gIH1cclxufVxyXG5cclxub2wuc3R5bGVkX2xpc3Qge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4XHJcbn1cclxuXHJcbm9sLnN0eWxlZF9saXN0IGxpIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHhcclxufVxyXG4uaWNvbi1ib3gge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzM3B4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDY1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5YjczZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG59XHJcbi5zb2NpYWwtaWNvbi1zdHlsZTIgbGkgYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZDogIzA1MWMzMTtcclxuICBoZWlnaHQ6IDQxcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQxcHg7XHJcbiAgd2lkdGg6IDQxcHg7XHJcbn1cclxuLnNvY2lhbC1pY29uLXN0eWxlMiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbi1zdHlsZTIgbGkge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "H2Zj":
/*!***********************************************************!*\
  !*** ./src/app/user/apply-list/apply-list.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  background-color: #f8f9fa !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.mb-0, .my-0 {\n  margin-bottom: 0 !important;\n}\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n/* user-dashboard-info-box */\n\n.user-dashboard-info-box .candidates-list .thumb {\n  margin-right: 20px;\n}\n\n.user-dashboard-info-box .candidates-list .thumb img {\n  width: 80px;\n  height: 80px;\n  -o-object-fit: cover;\n  object-fit: cover;\n  overflow: hidden;\n  border-radius: 50%;\n}\n\n.user-dashboard-info-box .title {\n  display: flex;\n  align-items: center;\n  padding: 30px 0;\n}\n\n.user-dashboard-info-box .candidates-list td {\n  vertical-align: middle;\n}\n\n.user-dashboard-info-box td li {\n  margin: 0 4px;\n}\n\n.user-dashboard-info-box .table thead th {\n  border-bottom: none;\n}\n\n.table.manage-candidates-top th {\n  border: 0;\n}\n\n.user-dashboard-info-box .candidate-list-favourite-time .candidate-list-favourite {\n  margin-bottom: 10px;\n}\n\n.table.manage-candidates-top {\n  min-width: 650px;\n}\n\n.user-dashboard-info-box .candidate-list-details ul {\n  color: #969696;\n}\n\n/* Candidate List */\n\n.candidate-list {\n  background: #ffffff;\n  display: flex;\n  border-bottom: 1px solid #eeeeee;\n  align-items: center;\n  padding: 20px;\n  transition: all 0.3s ease-in-out;\n}\n\n.candidate-list:hover {\n  box-shadow: 0px 0px 34px 4px rgba(33, 37, 41, 0.06);\n  position: relative;\n  z-index: 99;\n}\n\n.candidate-list:hover a.candidate-list-favourite {\n  color: #e74c3c;\n  box-shadow: -1px 4px 10px 1px rgba(24, 111, 201, 0.1);\n}\n\n.candidate-list .candidate-list-image {\n  margin-right: 25px;\n  flex: 0 0 80px;\n  border: none;\n}\n\n.candidate-list .candidate-list-image img {\n  width: 80px;\n  height: 80px;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n\n.candidate-list-title {\n  margin-bottom: 5px;\n}\n\n.candidate-list-details ul {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 0px;\n}\n\n.candidate-list-details ul li {\n  margin: 5px 10px 5px 0px;\n  font-size: 13px;\n}\n\n.candidate-list .candidate-list-favourite-time {\n  margin-left: auto;\n  text-align: center;\n  font-size: 13px;\n  flex: 0 0 90px;\n}\n\n.candidate-list .candidate-list-favourite-time span {\n  display: block;\n  margin: 0 auto;\n}\n\n.candidate-list .candidate-list-favourite-time .candidate-list-favourite {\n  display: inline-block;\n  position: relative;\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  border: 1px solid #eeeeee;\n  border-radius: 100%;\n  text-align: center;\n  transition: all 0.3s ease-in-out;\n  margin-bottom: 20px;\n  font-size: 16px;\n  color: #646f79;\n}\n\n.candidate-list .candidate-list-favourite-time .candidate-list-favourite:hover {\n  background: #ffffff;\n  color: #e74c3c;\n}\n\n.candidate-banner .candidate-list:hover {\n  position: inherit;\n  box-shadow: inherit;\n  z-index: inherit;\n}\n\n.bg-white {\n  background-color: #ffffff !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.mb-0, .my-0 {\n  margin-bottom: 0 !important;\n}\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n.user-dashboard-info-box .candidates-list .thumb {\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHBseS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUFDRjs7QUFDQTtFQUNFLDBCQUFBO0FBRUY7O0FBQUE7RUFDRSwyQkFBQTtBQUdGOztBQURBO0VBQ0UsOERBQUE7QUFJRjs7QUFEQSw0QkFBQTs7QUFDQTtFQUNFLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBRkE7RUFHRSxhQUFBO0VBR0EsbUJBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBRkE7RUFDRSxzQkFBQTtBQUtGOztBQUZBO0VBQ0UsYUFBQTtBQUtGOztBQUZBO0VBQ0UsbUJBQUE7QUFLRjs7QUFGQTtFQUNFLFNBQUE7QUFLRjs7QUFGQTtFQUNFLG1CQUFBO0FBS0Y7O0FBRkE7RUFDRSxnQkFBQTtBQUtGOztBQUZBO0VBQ0UsY0FBQTtBQUtGOztBQUZBLG1CQUFBOztBQUNBO0VBQ0UsbUJBQUE7RUFHQSxhQUFBO0VBQ0EsZ0NBQUE7RUFHQSxtQkFBQTtFQUNBLGFBQUE7RUFFQSxnQ0FBQTtBQUtGOztBQUhBO0VBRUUsbURBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFNRjs7QUFKQTtFQUNFLGNBQUE7RUFFQSxxREFBQTtBQU9GOztBQUpBO0VBQ0Usa0JBQUE7RUFHQSxjQUFBO0VBQ0EsWUFBQTtBQU9GOztBQUxBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBUUY7O0FBTEE7RUFDRSxrQkFBQTtBQVFGOztBQUxBO0VBR0UsYUFBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtBQVFGOztBQU5BO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBTkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUdBLGNBQUE7QUFTRjs7QUFQQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBVUY7O0FBUkE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVdGOztBQVRBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBWUY7O0FBVEE7RUFDRSxpQkFBQTtFQUVBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFZRjs7QUFUQTtFQUNFLG9DQUFBO0FBWUY7O0FBVkE7RUFDRSwwQkFBQTtBQWFGOztBQVhBO0VBQ0UsMkJBQUE7QUFjRjs7QUFaQTtFQUNFLDhEQUFBO0FBZUY7O0FBWkE7RUFDRSxrQkFBQTtBQWVGIiwiZmlsZSI6ImFwcGx5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEhaW1wb3J0YW50XHJcbn1cclxuLnAtNCB7XHJcbiAgcGFkZGluZzogMS41cmVtIWltcG9ydGFudDtcclxufVxyXG4ubWItMCwgLm15LTAge1xyXG4gIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xyXG59XHJcbi5zaGFkb3ctc20ge1xyXG4gIGJveC1zaGFkb3c6IDAgLjEyNXJlbSAuMjVyZW0gcmdiYSgwLDAsMCwuMDc1KSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIHVzZXItZGFzaGJvYXJkLWluZm8tYm94ICovXHJcbi51c2VyLWRhc2hib2FyZC1pbmZvLWJveCAuY2FuZGlkYXRlcy1saXN0IC50aHVtYiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi51c2VyLWRhc2hib2FyZC1pbmZvLWJveCAuY2FuZGlkYXRlcy1saXN0IC50aHVtYiBpbWcge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnVzZXItZGFzaGJvYXJkLWluZm8tYm94IC50aXRsZSB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMHB4IDA7XHJcbn1cclxuXHJcbi51c2VyLWRhc2hib2FyZC1pbmZvLWJveCAuY2FuZGlkYXRlcy1saXN0IHRkIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4udXNlci1kYXNoYm9hcmQtaW5mby1ib3ggdGQgbGkge1xyXG4gIG1hcmdpbjogMCA0cHg7XHJcbn1cclxuXHJcbi51c2VyLWRhc2hib2FyZC1pbmZvLWJveCAudGFibGUgdGhlYWQgdGgge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi50YWJsZS5tYW5hZ2UtY2FuZGlkYXRlcy10b3AgdGgge1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnVzZXItZGFzaGJvYXJkLWluZm8tYm94IC5jYW5kaWRhdGUtbGlzdC1mYXZvdXJpdGUtdGltZSAuY2FuZGlkYXRlLWxpc3QtZmF2b3VyaXRlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udGFibGUubWFuYWdlLWNhbmRpZGF0ZXMtdG9wIHtcclxuICBtaW4td2lkdGg6IDY1MHB4O1xyXG59XHJcblxyXG4udXNlci1kYXNoYm9hcmQtaW5mby1ib3ggLmNhbmRpZGF0ZS1saXN0LWRldGFpbHMgdWwge1xyXG4gIGNvbG9yOiAjOTY5Njk2O1xyXG59XHJcblxyXG4vKiBDYW5kaWRhdGUgTGlzdCAqL1xyXG4uY2FuZGlkYXRlLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWVlZTtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmNhbmRpZGF0ZS1saXN0OmhvdmVyIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMzRweCA0cHggcmdiYSgzMywgMzcsIDQxLCAwLjA2KTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDM0cHggNHB4IHJnYmEoMzMsIDM3LCA0MSwgMC4wNik7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG59XHJcbi5jYW5kaWRhdGUtbGlzdDpob3ZlciBhLmNhbmRpZGF0ZS1saXN0LWZhdm91cml0ZSB7XHJcbiAgY29sb3I6ICNlNzRjM2M7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDRweCAxMHB4IDFweCByZ2JhKDI0LCAxMTEsIDIwMSwgMC4xKTtcclxuICBib3gtc2hhZG93OiAtMXB4IDRweCAxMHB4IDFweCByZ2JhKDI0LCAxMTEsIDIwMSwgMC4xKTtcclxufVxyXG5cclxuLmNhbmRpZGF0ZS1saXN0IC5jYW5kaWRhdGUtbGlzdC1pbWFnZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XHJcbiAgLW1zLWZsZXg6IDAgMCA4MHB4O1xyXG4gIGZsZXg6IDAgMCA4MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uY2FuZGlkYXRlLWxpc3QgLmNhbmRpZGF0ZS1saXN0LWltYWdlIGltZyB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uY2FuZGlkYXRlLWxpc3QtdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmNhbmRpZGF0ZS1saXN0LWRldGFpbHMgdWwge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5jYW5kaWRhdGUtbGlzdC1kZXRhaWxzIHVsIGxpIHtcclxuICBtYXJnaW46IDVweCAxMHB4IDVweCAwcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uY2FuZGlkYXRlLWxpc3QgLmNhbmRpZGF0ZS1saXN0LWZhdm91cml0ZS10aW1lIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XHJcbiAgLW1zLWZsZXg6IDAgMCA5MHB4O1xyXG4gIGZsZXg6IDAgMCA5MHB4O1xyXG59XHJcbi5jYW5kaWRhdGUtbGlzdCAuY2FuZGlkYXRlLWxpc3QtZmF2b3VyaXRlLXRpbWUgc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmNhbmRpZGF0ZS1saXN0IC5jYW5kaWRhdGUtbGlzdC1mYXZvdXJpdGUtdGltZSAuY2FuZGlkYXRlLWxpc3QtZmF2b3VyaXRlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM2NDZmNzk7XHJcbn1cclxuLmNhbmRpZGF0ZS1saXN0IC5jYW5kaWRhdGUtbGlzdC1mYXZvdXJpdGUtdGltZSAuY2FuZGlkYXRlLWxpc3QtZmF2b3VyaXRlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjZTc0YzNjO1xyXG59XHJcblxyXG4uY2FuZGlkYXRlLWJhbm5lciAuY2FuZGlkYXRlLWxpc3Q6aG92ZXIge1xyXG4gIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5oZXJpdDtcclxuICBib3gtc2hhZG93OiBpbmhlcml0O1xyXG4gIHotaW5kZXg6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5iZy13aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5wLTQge1xyXG4gIHBhZGRpbmc6IDEuNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLm1iLTAsIC5teS0wIHtcclxuICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcclxufVxyXG4uc2hhZG93LXNtIHtcclxuICBib3gtc2hhZG93OiAwIC4xMjVyZW0gLjI1cmVtIHJnYmEoMCwwLDAsLjA3NSkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udXNlci1kYXNoYm9hcmQtaW5mby1ib3ggLmNhbmRpZGF0ZXMtbGlzdCAudGh1bWIge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "HZ/q":
/*!****************************************************************************************************!*\
  !*** ./projects/ngx-audio-player/src/lib/component/ngx-audio-player/ngx-audio-player.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AudioPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPlayerComponent", function() { return AudioPlayerComponent; });
/* harmony import */ var _raw_loader_ngx_audio_player_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ngx-audio-player.component.html */ "66wb");
/* harmony import */ var _ngx_audio_player_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-audio-player.component.css */ "1TGh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _service_audio_player_service_audio_player_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/audio-player-service/audio-player.service */ "DZ35");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AudioPlayerComponent = /** @class */ (function () {
    function AudioPlayerComponent(elem) {
        this.repeat = 'all';
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.tracks = [];
        this.displayTitle = true;
        this.displayPlaylist = true;
        this.displayVolumeControls = true;
        this.displayRepeatControls = true;
        this.pageSizeOptions = [10, 20, 30];
        this.expanded = true;
        this.autoPlay = false;
        this.disablePositionSlider = false;
        this.displayArtist = false;
        this.displayDuration = false;
        // Support for internationalization
        this.tableHeader = 'Playlist';
        this.titleHeader = 'Title';
        this.artistHeader = 'Artist';
        this.durationHeader = 'Duration';
        this.currentIndex = 0;
        this.trackEnded = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.iOS = (/iPad|iPhone|iPod/.test(navigator.platform)
            || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
        this.loaderDisplay = false;
        this.isPlaying = false;
        this.currentTime = 0;
        this.volume = 0.1;
        this.duration = 0.01;
        this.startOffsetValue = 0;
        this.endOffset = 0;
        if (elem.nativeElement.tagName.toLowerCase() === 'mat-advanced-audio-player') {
            console.warn("'mat-advanced-audio-player' selector is deprecated; use 'ngx-audio-player' instead.");
        }
        this.audioPlayerService = new _service_audio_player_service_audio_player_service__WEBPACK_IMPORTED_MODULE_5__["AudioPlayerService"]();
    }
    Object.defineProperty(AudioPlayerComponent.prototype, "playlist", {
        set: function (playlist) {
            this.audioPlayerService.setPlaylist(playlist);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioPlayerComponent.prototype, "matPaginator", {
        set: function (mp) {
            this.paginator = mp;
            this.setDataSourceAttributes();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioPlayerComponent.prototype, "startOffset", {
        get: function () {
            return this.startOffsetValue;
        },
        set: function (seconds) {
            this.startOffsetValue = seconds;
            this.player.nativeElement.currentTime = seconds;
        },
        enumerable: false,
        configurable: true
    });
    AudioPlayerComponent.prototype.currTimePosChanged = function (event) {
        this.player.nativeElement.currentTime = event.value;
    };
    AudioPlayerComponent.prototype.bindPlayerEvent = function () {
        var _this = this;
        this.player.nativeElement.addEventListener('playing', function () {
            _this.isPlaying = true;
            _this.duration = Math.floor(_this.player.nativeElement.duration);
        });
        this.player.nativeElement.addEventListener('pause', function () {
            _this.isPlaying = false;
        });
        this.player.nativeElement.addEventListener('timeupdate', function () {
            _this.currentTime = Math.floor(_this.player.nativeElement.currentTime);
            // BUG: Commenting for `ended` event not firing #66
            // if (this.currentTime >= this.duration - this.endOffset) {
            //     this.player.nativeElement.pause();
            // }
        });
        this.player.nativeElement.addEventListener('volume', function () {
            _this.volume = Math.floor(_this.player.nativeElement.volume);
        });
        if (!this.iOS) {
            this.player.nativeElement.addEventListener('loadstart', function () {
                _this.loaderDisplay = true;
            });
        }
        this.player.nativeElement.addEventListener('loadedmetadata', function () {
            _this.loaderDisplay = false;
            _this.duration = Math.floor(_this.player.nativeElement.duration);
        });
        this.player.nativeElement.addEventListener('ended', function () {
            _this.trackEnded.next('ended');
        });
    };
    AudioPlayerComponent.prototype.playBtnHandler = function () {
        if (this.loaderDisplay) {
            return;
        }
        if (this.player.nativeElement.paused) {
            if (this.currentTime >= this.duration - this.endOffset) {
                this.player.nativeElement.currentTime = this.startOffset;
            }
            else {
                this.player.nativeElement.currentTime = this.currentTime;
            }
            this.player.nativeElement.play();
        }
        else {
            this.currentTime = this.player.nativeElement.currentTime;
            this.player.nativeElement.pause();
        }
    };
    AudioPlayerComponent.prototype.play = function (track) {
        var _this = this;
        if (track) {
            this.startOffset = track.startOffset || 0;
            this.endOffset = track.endOffset || 0;
        }
        setTimeout(function () {
            _this.player.nativeElement.play();
        }, 50);
    };
    AudioPlayerComponent.prototype.toggleVolume = function () {
        if (this.volume === 0) {
            this.setVolume(1.0);
        }
        else {
            this.setVolume(0);
        }
    };
    AudioPlayerComponent.prototype.toggleRepeat = function () {
        if (this.repeat === 'none') {
            this.repeat = 'all';
        }
        else if (this.repeat === 'all') {
            if (this.tracks.length > 1) {
                this.repeat = 'one';
            }
            else {
                this.repeat = 'none';
            }
        }
        else if (this.repeat === 'one' && this.tracks.length > 1) {
            this.repeat = 'none';
        }
    };
    AudioPlayerComponent.prototype.setVolume = function (vol) {
        this.volume = vol;
        this.player.nativeElement.volume = this.volume;
    };
    AudioPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bindPlayerEvent();
        // auto play next track
        this.player.nativeElement.addEventListener('ended', function () {
            if (_this.checkIfSongHasStartedSinceAtleastTwoSeconds()) {
                if (_this.repeat === 'all') {
                    _this.nextSong();
                }
                else if (_this.repeat === 'one') {
                    _this.play();
                }
                else if (_this.repeat === 'none') {
                    // Do nothing
                }
            }
        });
        this.player.nativeElement.addEventListener('timeupdate', function () {
            _this.audioPlayerService.setCurrentTime(_this.player.nativeElement.currentTime);
        });
        // Subscribe to playlist observer from AudioPlayerService and
        // update the playlist within MatAdvancedAudioPlayerComponent
        this.audioPlayerService.getPlaylist().subscribe(function (tracks) {
            if (tracks !== null && tracks !== []) {
                _this.tracks = tracks;
                _this.initialize();
            }
        });
    };
    AudioPlayerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('displayArtist') || changes.hasOwnProperty('displayDuration')) {
            this.buildDisplayedColumns();
        }
    };
    AudioPlayerComponent.prototype.buildDisplayedColumns = function () {
        this.displayedColumns = ['title'];
        if (this.displayArtist) {
            this.displayedColumns.push('artist');
        }
        if (this.displayDuration) {
            this.displayedColumns.push('duration');
        }
        this.displayedColumns.push('status');
    };
    AudioPlayerComponent.prototype.initialize = function () {
        this.buildDisplayedColumns();
        // populate indexs for the track and configure
        // material table data source and paginator
        this.setDataSourceAttributes();
        this.player.nativeElement.currentTime = this.startOffset;
        this.updateCurrentTrack();
        if (this.autoPlay) {
            this.play();
        }
    };
    AudioPlayerComponent.prototype.setDataSourceAttributes = function () {
        var index = 1;
        if (this.tracks) {
            this.tracks.forEach(function (track) {
                track.index = index++;
            });
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.tracks);
            this.dataSource.paginator = this.paginator;
        }
    };
    AudioPlayerComponent.prototype.nextSong = function () {
        if (this.displayPlaylist === true
            && (((this.currentIndex + 1) % this.paginator.pageSize) === 0
                || (this.currentIndex + 1) === this.paginator.length)) {
            if (this.paginator.hasNextPage()) {
                this.paginator.nextPage();
            }
            else if (!this.paginator.hasNextPage()) {
                this.paginator.firstPage();
            }
        }
        this.currentTime = 0;
        this.duration = 0.01;
        if ((this.currentIndex + 1) >= this.tracks.length) {
            this.currentIndex = 0;
        }
        else {
            this.currentIndex++;
        }
        this.updateCurrentTrack();
        this.play();
    };
    AudioPlayerComponent.prototype.previousSong = function () {
        this.currentTime = 0;
        this.duration = 0.01;
        if (!this.checkIfSongHasStartedSinceAtleastTwoSeconds()) {
            if (this.displayPlaylist === true
                && (((this.currentIndex) % this.paginator.pageSize) === 0
                    || (this.currentIndex === 0))) {
                if (this.paginator.hasPreviousPage()) {
                    this.paginator.previousPage();
                }
                else if (!this.paginator.hasPreviousPage()) {
                    this.paginator.lastPage();
                }
            }
            if ((this.currentIndex - 1) < 0) {
                this.currentIndex = (this.tracks.length - 1);
            }
            else {
                this.currentIndex--;
            }
        }
        else {
            this.resetSong();
        }
        this.updateCurrentTrack();
        this.play();
    };
    AudioPlayerComponent.prototype.resetSong = function () {
        this.player.nativeElement.src = this.tracks[this.currentIndex].link;
    };
    AudioPlayerComponent.prototype.selectTrack = function (index) {
        this.currentIndex = index - 1;
        this.updateCurrentTrack();
        this.play();
    };
    AudioPlayerComponent.prototype.checkIfSongHasStartedSinceAtleastTwoSeconds = function () {
        return this.player.nativeElement.currentTime > 2;
    };
    AudioPlayerComponent.prototype.updateCurrentTrack = function () {
        this.audioPlayerService.setCurrentTrack(this.tracks[this.currentIndex]);
    };
    AudioPlayerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    AudioPlayerComponent.propDecorators = {
        playlist: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        matPaginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false },] }],
        displayTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        displayPlaylist: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        displayVolumeControls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        displayRepeatControls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        pageSizeOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        autoPlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        disablePositionSlider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        displayArtist: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        displayDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        tableHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        titleHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        artistHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        durationHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        trackEnded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        player: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['audioPlayer', { static: true },] }],
        startOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        endOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    AudioPlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'mat-advanced-audio-player,ngx-audio-player',
            template: _raw_loader_ngx_audio_player_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ngx_audio_player_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], AudioPlayerComponent);
    return AudioPlayerComponent;
}());



/***/ }),

/***/ "HhuZ":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Footer Area -->\r\n<footer class=\"footer-area pt-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-6\">\r\n                <div class=\"content\">\r\n                    <div class=\"logo\">\r\n                        <a href=\"index.html\"><img src=\"assets/images/logo2.png\" alt=\"logo\"></a>\r\n                    </div>\r\n                    <p>\r\n                        Cơ hội vàng nằm gọn trong tay bạn\r\n                    </p>\r\n                    <div class=\"subscribe\">\r\n                        <h4>Tìm việc phù hợp với bạn</h4>\r\n                        <form class=\"newsletter-form\" data-toggle=\"validator\">\r\n                            <input type=\"email\" id=\"emails\" class=\"form-control\" placeholder=\"Your Email\" name=\"EMAIL\" required=\"\" autocomplete=\"off\">\r\n\r\n                            <button class=\"box-btn\" type=\"submit\">\r\n                                Tìm kiếm\r\n                            </button>\r\n\r\n                            <div id=\"validator-newsletter\" class=\"form-result\"></div>\r\n                        </form>\r\n                    </div>\r\n\r\n                    <ul class=\"social\">\r\n                        <li>\r\n                            <a href=\"#\" target=\"_blank\"><i class='bx bxl-facebook'></i></a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\" target=\"_blank\"><i class='bx bxl-twitter'></i></a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\" target=\"_blank\"><i class='bx bxl-instagram'></i></a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\" target=\"_blank\"><i class='bx bxl-pinterest'></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n                <div class=\"content ml-15\">\r\n                    <h3>Về Paso</h3>\r\n                    <ul class=\"footer-list\">\r\n                        <li><a href=\"#\">Giới thiệu</a></li>\r\n                        <li><a href=\"#\">Góc báo chí</a></li>\r\n                        <li><a href=\"#\">Tuyển dụng</a></li>\r\n                        <li><a href=\"#\">Liên hệ</a></li>\r\n                        <li><a href=\"#\">Hỏi đáp</a></li>\r\n                        <li><a href=\"#\">Chính sách bảo mật</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-6\">\r\n                <div class=\"content\">\r\n                    <h3>Đối tác</h3>\r\n                    <ul class=\"footer-list\">\r\n                        <li><a src=\"https://vingroup.net/\">Tập đoàn Vingroup</a></li>\r\n                        <li><a src=\"https://www.cengroup.vn/\">Cen Group</a></li>\r\n                        <li><a src=\"https://www.testcenter.vn/\">TestCenter</a></li>\r\n                        <li><a src=\"https://tophr.vn/\">TopHR</a></li>\r\n                        <li><a src=\"https://www.happytimeapp.vn/\">Happy Time</a></li>\r\n                        <li><a src=\"https://gitiho.com/\">Gitiho</a></li>\r\n\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n                <div class=\"content contacts\">\r\n                    <h3 class=\"ml-40\">Contact</h3>\r\n                    <ul class=\"footer-list foot-social\">\r\n                        <li><a href=\"tel:+1123456789\"><i class=\"bx bx-mobile-alt\"></i> 024 62538829</a></li>\r\n                        <li><a href=\"tel:+1975456789\"><i class=\"bx bx-phone\"></i> 023 45689999</a></li>\r\n                        <li><a href=\"mailto:hello@paso.com\"><i class=\"bx bxs-envelope\"></i> info@codegym.vn</a></li>\r\n                        <li><a src=\"https://codegym.vn/\"><i class=\"bx bx-world\" ></i>codegym.vn</a></li>\r\n                        <li><i class=\"bx bxs-map\"></i> Nhà số 23, Lô TT01, Khu đô thị Mon City (Ngõ 2, đường Hàm Nghi), Phường Mỹ Đình 2, Quận Nam Từ Liêm, Hà Nội</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"copy-area\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                    <p class=\"right\">\r\n                        Copyright @2022 Paso. All Rights Reserved by\r\n                        <a src=\"https://c0821h1.online/\" target=\"_blank\">\r\n                           c0821h1.online</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n<!-- End Footer Area -->\r\n\r\n<!-- Start Go Top Area -->\r\n<div class=\"go-top active\">\r\n    <i class='bx bx-chevrons-up'></i>\r\n    <i class='bx bx-chevrons-up'></i>\r\n</div>\r\n<!-- End Go Top Area -->\r\n");

/***/ }),

/***/ "I/eY":
/*!******************************************************!*\
  !*** ./src/app/user/CV/edit-cv/edit-cv.component.ts ***!
  \******************************************************/
/*! exports provided: EditCvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCvComponent", function() { return EditCvComponent; });
/* harmony import */ var _raw_loader_edit_cv_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./edit-cv.component.html */ "2o5X");
/* harmony import */ var _edit_cv_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-cv.component.scss */ "hZMr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _security_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../security/token.service */ "zdrf");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/user.service */ "sQRL");
/* harmony import */ var _service_skill_skill_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/skill/skill.service */ "6YXc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_cv_cv_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/cv/cv.service */ "cxox");
/* harmony import */ var _service_workExp_work_exp_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/workExp/work-exp.service */ "fAU0");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _dialog_CV_dialog_edit_cv_dialog_edit_cv_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../dialog/CV/dialog-edit-cv/dialog-edit-cv.component */ "lIeo");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var EditCvComponent = /** @class */ (function () {
    function EditCvComponent(tokenService, userService, skillService, cvService, workExpService, route, router, dialog, fb, token) {
        this.tokenService = tokenService;
        this.userService = userService;
        this.skillService = skillService;
        this.cvService = cvService;
        this.workExpService = workExpService;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.fb = fb;
        this.token = token;
        this.user = { account: null, phone: "", name: '' };
        this.cvForm = this.fb.group({
            expYear: [],
            salaryExpectation: [],
            fileCV: [],
            userId: this.token.getIdGuest(),
            skills: this.fb.array([]),
            workExps: this.fb.array([])
        });
    }
    Object.defineProperty(EditCvComponent.prototype, "skills", {
        get: function () {
            return this.cvForm.get('skills');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditCvComponent.prototype, "workExps", {
        get: function () {
            return this.cvForm.get('workExps');
        },
        enumerable: false,
        configurable: true
    });
    EditCvComponent.prototype.onUpLoadAvatar = function (event) {
        this.cvForm.value.fileCV = event;
    };
    EditCvComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idUser = this.route.snapshot.params['id'];
        this.userService.getUserById(this.idUser).subscribe(function (data) {
            _this.user = data;
        });
        this.cvService.findByUserId(this.idUser).subscribe(function (data) {
            data.skills.forEach(function (item) {
                _this.skills.push(_this.fb.group({
                    id: [''],
                    name: [''],
                    proficiency: ['']
                }));
            });
            data.workExps.forEach(function (item) {
                _this.workExps.push(_this.fb.group({
                    id: [''],
                    title: [''],
                    startDate: [''],
                    endDate: [''],
                    content: ['']
                }));
            });
            _this.cvForm.patchValue(data);
        });
    };
    EditCvComponent.prototype.onUpdate = function () {
        var _this = this;
        console.log(this.cvForm.value);
        this.cvService.updateCV(this.tokenService.getIdGuest(), this.cvForm.value).subscribe(function (data) {
            var dialogRef = _this.dialog.open(_dialog_CV_dialog_edit_cv_dialog_edit_cv_component__WEBPACK_IMPORTED_MODULE_11__["DialogEditCvComponent"]);
            dialogRef.afterClosed().subscribe(function (result) {
                _this.cvForm.reset();
                _this.router.navigate(['detail-cv', _this.tokenService.getIdGuest()]);
            });
        });
    };
    EditCvComponent.prototype.addSkill = function () {
        var skillForm = this.fb.group({
            id: [''],
            name: [''],
            proficiency: ['50%']
        });
        this.skills.push(skillForm);
    };
    EditCvComponent.prototype.deleteSkill = function (index) {
        this.skills.removeAt(index);
    };
    EditCvComponent.prototype.addWorkExp = function () {
        var workExpForm = this.fb.group({
            id: [''],
            title: [''],
            startDate: [''],
            endDate: [''],
            content: ['']
        });
        this.workExps.push(workExpForm);
    };
    EditCvComponent.prototype.deleteWorkExp = function (index) {
        this.workExps.removeAt(index);
    };
    EditCvComponent.ctorParameters = function () { return [
        { type: _security_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
        { type: _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _service_skill_skill_service__WEBPACK_IMPORTED_MODULE_5__["SkillService"] },
        { type: _service_cv_cv_service__WEBPACK_IMPORTED_MODULE_7__["CVService"] },
        { type: _service_workExp_work_exp_service__WEBPACK_IMPORTED_MODULE_8__["WorkExpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] },
        { type: _security_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }
    ]; };
    EditCvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-cv',
            template: _raw_loader_edit_cv_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_edit_cv_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_security_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _service_skill_skill_service__WEBPACK_IMPORTED_MODULE_5__["SkillService"],
            _service_cv_cv_service__WEBPACK_IMPORTED_MODULE_7__["CVService"],
            _service_workExp_work_exp_service__WEBPACK_IMPORTED_MODULE_8__["WorkExpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
            _security_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], EditCvComponent);
    return EditCvComponent;
}());



/***/ }),

/***/ "IU9o":
/*!********************************!*\
  !*** ./src/app/model/apply.ts ***!
  \********************************/
/*! exports provided: Apply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Apply", function() { return Apply; });
var Apply = /** @class */ (function () {
    function Apply(recuitmentNewId, userId) {
        this.recuitmentNewId = recuitmentNewId;
        this.userId = userId;
    }
    return Apply;
}());



/***/ }),

/***/ "Ik+H":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\" style=\"margin-top: 20px\">\r\n            <mat-card style=\"margin: 50px 0\">\r\n                <mat-error class=\"alert alert-primary\">Are you sure ?</mat-error>\r\n                <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"false\">NO</button>\r\n                <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"true\">YES</button>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "IzhQ":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/apply-now/apply-now.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p><div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\" style=\"margin-top: 20px\">\r\n            <mat-card style=\"margin: 50px 0\">\r\n                <mat-error class=\"alert alert-primary\">Bạn có muốn ứng tuyển ngay không?</mat-error>\r\n                <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"false\">NO</button>\r\n                <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"true\">YES</button>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "J7T8":
/*!**********************************************!*\
  !*** ./src/app/service/city/city.service.ts ***!
  \**********************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CityService = /** @class */ (function () {
    function CityService(http) {
        this.http = http;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl;
    }
    CityService.prototype.showAll = function () {
        return this.http.get(this.apiServerUrl + "/cities/showAll");
    };
    CityService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CityService);
    return CityService;
}());



/***/ }),

/***/ "JZt4":
/*!******************************************!*\
  !*** ./src/app/security/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl;
    }
    AuthService.prototype.signIn = function (signInForm) {
        return this.http.post(this.apiServerUrl + "/signin", signInForm);
    };
    AuthService.prototype.signUp = function (signInForm) {
        return this.http.post(this.apiServerUrl + "/signup", signInForm);
    };
    AuthService.prototype.registerCompany = function (company) {
        return this.http.post(this.apiServerUrl + "/company", company);
    };
    AuthService.prototype.changePassword = function (changePassword) {
        return this.http.put(this.apiServerUrl + "/change-password", changePassword);
    };
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.apiServerUrl + "/user", user);
    };
    AuthService.prototype.activeStatus = function (id) {
        return this.http.get(this.apiServerUrl + ("/verify/" + id));
    };
    AuthService.prototype.findById = function (id) {
        return this.http.get(this.apiServerUrl + "/" + id);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "KXKP":
/*!****************************************************!*\
  !*** ./src/app/service/company/company.service.ts ***!
  \****************************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyService = /** @class */ (function () {
    function CompanyService(http) {
        this.http = http;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl;
    }
    CompanyService.prototype.getCompanyNameById = function (id) {
        return this.http.get(this.apiServerUrl + "/company/" + id);
    };
    CompanyService.prototype.editCompany = function (id, company) {
        // const httpOptions = { headers: new HttpHeaders({ 'Content-Type':'application/json','Access-Control-Allow-Origins':'*'})};
        // @ts-ignore
        return this.http.put(this.apiServerUrl + "/company/" + id, company);
    };
    CompanyService.prototype.getAllCompany = function () {
        return this.http.get(this.apiServerUrl + "/company/list");
    };
    CompanyService.prototype.fidAllCompanyByStatus = function (status) {
        return this.http.get(this.apiServerUrl + "/company/findByStatus/" + status);
    };
    CompanyService.prototype.findByRecuitmentNewNeed = function () {
        return this.http.get(this.apiServerUrl + "/company/findByRecuitmentNewNeed");
    };
    CompanyService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CompanyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "Ki41":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/apply-list/apply-list.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Start Page Title Area -->\r\n<div class=\"page-title-area\" style=\"height: 439px\">\r\n    <div class=\"container\">\r\n        <div class=\"page-title-content\">\r\n            <h2>DANH SÁCH ỨNG TUYỂN CỦA BẠN</h2>\r\n            <ul>\r\n                <li>\r\n                    <a href=\"index.html\">\r\n                        Home\r\n                    </a>\r\n                </li>\r\n\r\n                <li class=\"active\">Blog</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"page-shape\">\r\n        <div class=\"shape1\">\r\n            <img src=\"assets/images/shape/1.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape3\">\r\n            <img src=\"assets/images/shape/3.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape4\">\r\n            <img src=\"assets/images/shape/4.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape5\">\r\n            <img src=\"assets/images/shape/5.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape6\">\r\n            <img src=\"assets/images/shape/6.png\" alt=\"shape\">\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Page Title Area -->\r\n\r\n\r\n\r\n\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css\" integrity=\"sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=\" crossorigin=\"anonymous\" />\r\n<div class=\"container mt-3 mb-4\">\r\n    <div class=\"col-lg-12 mt-4 mt-lg-0\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\" >\r\n                <div class=\"user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm\">\r\n                    <table class=\"table manage-candidates-top mb-0\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th>Thông tin tuyển dụng</th>\r\n                            <th class=\"text-center\">Trạng thái</th>\r\n                            <th class=\"action text-right\">Hoạt động</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr class=\"candidates-list\" *ngFor=\"let apply of applis\">\r\n                            <td class=\"title\">\r\n                                <div class=\"thumb\">\r\n                                    <img class=\"img-fluid\" src=\"{{apply.recuitmentNew.company.avatar}}\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"candidate-list-details\">\r\n                                    <div class=\"candidate-list-info\">\r\n                                        <div class=\"candidate-list-title\">\r\n                                            <h5 class=\"mb-0\"><a (click)=\"openDialogDetails(apply.recuitmentNew.id)\">{{apply.recuitmentNew.title}}</a></h5>\r\n                                        </div>\r\n                                        <div class=\"candidate-list-option\">\r\n                                            <ul class=\"list-unstyled\">\r\n                                                <li><i class=\"fas fa-filter pr-1\"></i>{{apply.recuitmentNew.field.name}}</li>\r\n                                                <li><i class=\"fas fa-map-marker-alt pr-1\"></i>{{apply.recuitmentNew.city.name}}</li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"candidate-list-favourite-time text-center\">\r\n                                <a class=\"candidate-list-favourite order-2 text-danger\" href=\"#\"><i class=\"fas fa-heart\"></i></a>\r\n                                <span class=\"candidate-list-time order-1\">{{apply.status}}</span>\r\n                            </td>\r\n                            <td>\r\n                                <ul class=\"list-unstyled mb-0 d-flex justify-content-end\">\r\n                                    <li><a class=\"text-primary\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"view\" (click)=\"openDialogDetails(apply.recuitmentNew.id)\"><i class=\"far fa-eye\"></i></a></li>\r\n                                </ul>\r\n                            </td>\r\n                        </tr>\r\n\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"text-center mt-3 mt-sm-3\">\r\n                        <mat-paginator [pageSizeOptions]=\"[3,6,15,30,90]\"\r\n                                       [length]=\"totalElements\"\r\n                                       (page)=\"nextPage($event)\">\r\n                        </mat-paginator>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "KyF4":
/*!**********************************************!*\
  !*** ./src/app/security/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor, httpInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProvider", function() { return httpInterceptorProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "zdrf");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TOKEN_HEADER_KEY = 'Authorization';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(tokenService) {
        this.tokenService = tokenService;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var authReq = request;
        var token = this.tokenService.getTokenKey();
        if (token != null) {
            authReq = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer' + token) });
        }
        return next.handle(authReq);
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: _token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] }
    ]; };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

var httpInterceptorProvider = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "LhTi":
/*!************************************************************************************!*\
  !*** ./src/app/admin/lock-unlock-recruiment/lock-unlock-recruiment.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2NrLXVubG9jay1yZWNydWltZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6ImxvY2stdW5sb2NrLXJlY3J1aW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6MTAwJVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "MmMu":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/company/recruitmentnew/update-recruitmentnew-company/update-recruitmentnew-company.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtcmVjcnVpdG1lbnRuZXctY29tcGFueS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "NSQK":
/*!*****************************************************************!*\
  !*** ./src/app/dialog/dialog-match/dialog-match.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctbWF0Y2guY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "NUjO":
/*!*****************************************************************************************!*\
  !*** ./src/app/dialog/dialogApplyFail/dialog-apply-fail/dialog-apply-fail.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DialogApplyFailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogApplyFailComponent", function() { return DialogApplyFailComponent; });
/* harmony import */ var _raw_loader_dialog_apply_fail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dialog-apply-fail.component.html */ "SwKa");
/* harmony import */ var _dialog_apply_fail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-apply-fail.component.scss */ "+0W5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogApplyFailComponent = /** @class */ (function () {
    function DialogApplyFailComponent() {
    }
    DialogApplyFailComponent.prototype.ngOnInit = function () {
    };
    DialogApplyFailComponent.ctorParameters = function () { return []; };
    DialogApplyFailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dialog-apply-fail',
            template: _raw_loader_dialog_apply_fail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dialog_apply_fail_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DialogApplyFailComponent);
    return DialogApplyFailComponent;
}());



/***/ }),

/***/ "O1OE":
/*!**************************************************************************!*\
  !*** ./src/app/company/register-company/register-company.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1jb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "OLWM":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/list-account/list-account.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Banner Area -->\r\n<section class=\"banner-area\">\r\n    <div class=\"d-table\">\r\n        <div class=\"d-table-cell\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row align-items-center\">\r\n                    <div class=\"col-lg-6\">\r\n                        <div class=\"banner-content\">\r\n                            <h1> YOU ARE ADMIN. YOU CAN IT ALL.\r\n                            </h1>\r\n\r\n                            <div class=\"banner-btn\">\r\n                                <a href=\"contact.html\" class=\"box-btn\">Contact Us</a>\r\n                                <a href=\"about.html\" class=\"box-btn border-btn\">Know More</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6\">\r\n                        <div class=\"banner-img\">\r\n                            <img src=\"../../../../assets/images/home-bg-1-img.png\" alt=\"banner-img\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"home-shape\">\r\n        <div class=\"shape1\">\r\n            <img src=\"../../../../assets/images/shape/1.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape2\">\r\n            <img src=\"../../../../assets/images/shape/2.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape3\">\r\n            <img src=\"../../../../assets/images/shape/3.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape4\">\r\n            <img src=\"../../../../assets/images/shape/4.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape5\">\r\n            <img src=\"../../../../assets/images/shape/5.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape6\">\r\n            <img src=\"../../../../assets/images/shape/6.png\" alt=\"shape\">\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Banner Area -->\r\n\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\" style=\"margin-top: 20px\">\r\n            <mat-card style=\"margin: 50px 0;\">\r\n                <h2 style=\"text-align: center\">Danh Sách Tai khoan </h2>\r\n                <div class=\"mat-elevation-z8\">\r\n                    <table mat-table [dataSource]=\"dataSource\" >\r\n\r\n                        <!-- Position Column -->\r\n                        <ng-container matColumnDef=\"id\">\r\n                            <th mat-header-cell *matHeaderCellDef> No.</th>\r\n                            <td mat-cell *matCellDef=\"let element; let i = index\"> {{i + 1}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"name\">\r\n                            <th mat-header-cell *matHeaderCellDef>Tên tài khoản</th>\r\n                            <td mat-cell *matCellDef=\"let element\"><span\r\n                                    class=\"btn btn-link\">{{element.username}}</span></td>\r\n                        </ng-container>\r\n\r\n\r\n\r\n<!--                        &lt;!&ndash; Name Column &ndash;&gt;-->\r\n<!--                        <ng-container matColumnDef=\"status\">-->\r\n<!--                            <th mat-header-cell *matHeaderCellDef>Trạng thái</th>-->\r\n<!--                            <tr *matCellDef=\"let element\">-->\r\n<!--                                <td mat-cell ><span>{{element.status}}</span></td>-->\r\n<!--                                <td mat-cell ><span *ngIf=\"!element.status\"></span></td>-->\r\n<!--                            </tr>-->\r\n<!--                        </ng-container>-->\r\n\r\n\r\n                        <ng-container matColumnDef=\"editStatus\">\r\n                            <th mat-header-cell *matHeaderCellDef> UnLock/Lock</th>\r\n                            <td mat-cell *matCellDef=\"let element\">\r\n                                <button (click)=changeStatus(element.id) *ngIf=\"element.status2\"  mat-icon-button\r\n                                        class=\"btn btn-danger\">\r\n                                    <mat-icon>lock_open</mat-icon>\r\n                                </button>\r\n                                <button (click)=changeStatus(element.id) *ngIf=\"!element.status2\" mat-icon-button\r\n                                        class=\"btn btn-success\">\r\n                                    <mat-icon>lock</mat-icon>\r\n                                </button>\r\n                            </td>\r\n                        </ng-container>\r\n\r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    </table>\r\n\r\n                    <mat-paginator [pageSizeOptions]=\"[3, 10, 20, 30]\"\r\n                                   showFirstLastButtons\r\n                                   aria-label=\"Select page of periodic elements\">\r\n                    </mat-paginator>\r\n                </div>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- Company Area -->\r\n<section class=\"home-company-area bg-color\">\r\n    <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-lg-6 col-md-12\">\r\n                <div class=\"company-content\">\r\n                    <div class=\"company-tittle\">\r\n                        <span>Our Company</span>\r\n                        <h2>Innovative It Helping Service All Over the World</h2>\r\n\r\n                        <p>It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.</p>\r\n\r\n                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form variations passages.</p>\r\n                    </div>\r\n\r\n                    <a href=\"#\" class=\"box-btn\">\r\n                        Know More\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-12\">\r\n                <div class=\"company-img\">\r\n                    <img src=\"./assets/images/company/company-img.jpg\" alt=\"company\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Company Area -->\r\n\r\n\r\n<!-- Process Area -->\r\n<section class=\"home-process-area pt-100 pb-70\">\r\n    <div class=\"container\">\r\n        <div class=\"section-title\">\r\n            <span>Working Process</span>\r\n            <h2>We are popular because of our way of working</h2>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"single-process\">\r\n                    <div class=\"icon\">\r\n                        <img src=\"assets/images/process/p1.png\" alt=\"process\">\r\n                        <span>\r\n                                        <img src=\"assets/images/process/next.png\" alt=\"shape\">\r\n                                    </span>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <h3>Research Product</h3>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"single-process\">\r\n                    <div class=\"icon\">\r\n                        <img src=\"assets/images/process/p2.png\" alt=\"process\">\r\n                        <span class=\"pro-span\">\r\n                                        <img src=\"assets/images/process/next.png\" alt=\"shape\">\r\n                                    </span>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <h3>User Testing</h3>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"single-process\">\r\n                    <div class=\"icon\">\r\n                        <img src=\"assets/images/process/p3.png\" alt=\"process\">\r\n                        <span>\r\n                                        <img src=\"assets/images/process/next.png\" alt=\"shape\">\r\n                                    </span>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <h3>Development</h3>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"single-process\">\r\n                    <div class=\"icon\">\r\n                        <img src=\"assets/images/process/p4.png\" alt=\"process\">\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <h3>Product Handover</h3>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Process Area -->\r\n");

/***/ }),

/***/ "Oh3b":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _raw_loader_homepage_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./homepage.component.html */ "7Ac5");
/* harmony import */ var _homepage_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.component.scss */ "cAuZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_company_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/company/company.service */ "KXKP");
/* harmony import */ var _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/recruitmentNew/recruitment-new.service */ "FmPh");
/* harmony import */ var _security_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../security/token.service */ "zdrf");
/* harmony import */ var _user_apply_recruitmentnew_apply_recruitmentnew_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/apply-recruitmentnew/apply-recruitmentnew.component */ "6aLj");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user/service/user.service */ "sQRL");
/* harmony import */ var _dialog_apply_now_apply_now_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dialog/apply-now/apply-now.component */ "0jf1");
/* harmony import */ var _model_apply__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../model/apply */ "IU9o");
/* harmony import */ var _dialog_dialogApplyFail_dialog_apply_dialog_apply_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dialog/dialogApplyFail/dialog-apply/dialog-apply.component */ "pA9W");
/* harmony import */ var _dialog_dialogApplyFail_dialog_apply_fail_dialog_apply_fail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dialog/dialogApplyFail/dialog-apply-fail/dialog-apply-fail.component */ "NUjO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_apply_apply_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../service/apply/apply.service */ "j6QF");
/* harmony import */ var _model_forwardApply__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../model/forwardApply */ "pm72");
/* harmony import */ var _service_apply_forward_apply_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../service/apply/forward-apply.service */ "9wQv");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(companyService, rcms, tokenService, dialog, userService, router, applyService, forwardApplyService, recruitmentNewService) {
        var _this = this;
        this.companyService = companyService;
        this.rcms = rcms;
        this.tokenService = tokenService;
        this.dialog = dialog;
        this.userService = userService;
        this.router = router;
        this.applyService = applyService;
        this.forwardApplyService = forwardApplyService;
        this.recruitmentNewService = recruitmentNewService;
        this.companyHot = [];
        this.recruimentNew = [];
        this.RecuitmentNewNeed = [];
        this.totalElements = 0;
        this.checkLogin = false;
        this.checkUser = false;
        this.searchKey = '';
        this.rcmdate = [];
        this.companyService.fidAllCompanyByStatus(4).subscribe(function (data) {
            _this.companyHot = data;
        });
        this.checklogin();
        this.checkdate();
    }
    HomepageComponent.prototype.checkdate = function () {
        var _this = this;
        this.recruitmentNewService.getAll().subscribe(function (data) {
            _this.rcmdate = data;
            for (var i = 0; i < _this.rcmdate.length; i++) {
                console.log("hello");
                var dateRCM = new Date(_this.rcmdate[i].expDate);
                console.log(dateRCM);
                var today = new Date();
                console.log(today);
                // @ts-ignore
                var c = (today - dateRCM) / (1000 * 3600 * 24);
                console.log(c);
                if (c >= 0) {
                    _this.recruitmentNewService.changeStatusById(_this.rcmdate[i].id).subscribe(function (data) {
                        console.log(data);
                    });
                }
            }
        });
    };
    HomepageComponent.prototype.checkUserCurrent = function () {
        var _this = this;
        if (this.tokenService.getTokenKey()) {
            this.idGuest = this.tokenService.getIdGuest();
            for (var i = 0; i < this.tokenService.getRoleKey().length; i++) {
                if (this.tokenService.getRoleKey()[i] == 'USER') {
                    this.userService.getUserById(this.idGuest).subscribe(function (data) {
                        if (data) {
                            _this.checkUser = true;
                        }
                    });
                }
                else {
                    this.checkUser = false;
                }
            }
        }
        else {
            this.checkUser = true;
        }
    };
    HomepageComponent.prototype.findByRecuitmentNewNeed = function () {
        var _this = this;
        this.companyService.findByRecuitmentNewNeed().subscribe(function (data) {
            _this.RecuitmentNewNeed = data;
        });
    };
    HomepageComponent.prototype.ngOnInit = function () {
        this.pageRecruiment({ page: 0, size: 4 });
        this.checkUserCurrent();
        this.findByRecuitmentNewNeed();
    };
    HomepageComponent.prototype.checklogin = function () {
        if (this.tokenService.getTokenKey()) {
            this.checkLogin = true;
        }
    };
    HomepageComponent.prototype.pageRecruiment = function (nextPage) {
        var _this = this;
        this.rcms.pageRecruitmentNew(nextPage).subscribe(function (data) {
            _this.recruimentNew = data['content'];
            _this.totalElements = data['totalElements'];
        });
    };
    HomepageComponent.prototype.nextPage = function (event) {
        var request = {};
        request['page'] = event.pageIndex.toString();
        request['size'] = event.pageSize.toString();
        this.pageRecruiment(request);
    };
    HomepageComponent.prototype.openDialogApply = function (id) {
        var dialogRef = this.dialog.open(_user_apply_recruitmentnew_apply_recruitmentnew_component__WEBPACK_IMPORTED_MODULE_6__["ApplyRecruitmentnewComponent"], {
            data: {
                id: id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    HomepageComponent.prototype.openDialogApplyNow = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_apply_now_apply_now_component__WEBPACK_IMPORTED_MODULE_9__["ApplyNowComponent"], {
            data: {
                id: id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (!_this.tokenService.getTokenKey()) {
                    _this.router.navigate(['login']).then(window.location.reload);
                }
                else {
                    var apply = new _model_apply__WEBPACK_IMPORTED_MODULE_10__["Apply"](id, _this.tokenService.getIdGuest());
                    _this.applyService.createCV(apply).subscribe(function (data2) {
                        if (data2.message == 'CREATE') {
                            var dialogRef1 = _this.dialog.open(_dialog_dialogApplyFail_dialog_apply_dialog_apply_component__WEBPACK_IMPORTED_MODULE_11__["DialogApplyComponent"]);
                            dialogRef1.afterClosed().subscribe(function (result) {
                                _this.recruitmentNewService.getRecruitmentNewById(id).subscribe(function (data3) {
                                    _this.recruitmentNew = data3;
                                    _this.forwardApply = new _model_forwardApply__WEBPACK_IMPORTED_MODULE_15__["ForwardApply"](_this.tokenService.getIdGuest(), Number(_this.recruitmentNew.company.id));
                                    _this.forwardApplyService.forwardApply(_this.forwardApply).subscribe(function (data4) {
                                        console.log('sau khi bam nut--->', data4);
                                    });
                                });
                                console.log('ressult sau khi bam nut --> ', result);
                                if (result == false) {
                                }
                            });
                        }
                        else if (data2.message == 'CREATE_FAIL') {
                            var dialogRef1 = _this.dialog.open(_dialog_dialogApplyFail_dialog_apply_fail_dialog_apply_fail_component__WEBPACK_IMPORTED_MODULE_12__["DialogApplyFailComponent"]);
                            dialogRef1.afterClosed().subscribe(function (result) {
                                console.log('ressult sau khi bam nut --> ', result);
                                if (result == false) {
                                }
                            });
                        }
                    });
                }
            }
            console.log('The dialog was closed');
        });
    };
    HomepageComponent.prototype.ngSubmit = function (f) {
        console.log(f.value);
        this.searchKey = f.value.searchKey;
        if (this.searchKey == '') {
            this.router.navigate(["list-recruitmentnew-user/xxx"]);
        }
        else {
            this.router.navigate(["list-recruitmentnew-user/" + this.searchKey]);
        }
    };
    HomepageComponent.ctorParameters = function () { return [
        { type: _service_company_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
        { type: _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_4__["RecruitmentNewService"] },
        { type: _security_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] },
        { type: _service_apply_apply_service__WEBPACK_IMPORTED_MODULE_14__["ApplyService"] },
        { type: _service_apply_forward_apply_service__WEBPACK_IMPORTED_MODULE_16__["ForwardApplyService"] },
        { type: _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_4__["RecruitmentNewService"] }
    ]; };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-homepage',
            template: _raw_loader_homepage_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_homepage_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_company_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"],
            _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_4__["RecruitmentNewService"],
            _security_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _user_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"],
            _service_apply_apply_service__WEBPACK_IMPORTED_MODULE_14__["ApplyService"],
            _service_apply_forward_apply_service__WEBPACK_IMPORTED_MODULE_16__["ForwardApplyService"],
            _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_4__["RecruitmentNewService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "PPnF":
/*!************************************************************************************************!*\
  !*** ./src/app/user/recruitmentnew/list-recruitment-user/list-recruitment-user.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.column {\n  float: left;\n  width: 33.3%;\n  padding: 10px 10px;\n}\n.card {\n  box-shadow: 12px 12px 2px 1px rgba(60, 84, 255, 0.94);\n  text-align: center;\n  background-color: #17e8e8;\n}\ndiv.card {\n  padding: 10px;\n}\n/* ===== Career ===== */\n.career-form {\n  background-color: #ffffff;\n  border-radius: 5px;\n  border-style: inset;\n  border-color: #1e2a55;\n  padding: 0 16px;\n}\n.career-form .select-container {\n  position: relative;\n}\n.career-form .select-container:before {\n  position: absolute;\n  right: 15px;\n  top: calc(50% - 14px);\n  font-size: 18px;\n  color: #ffffff;\n  content: \"\";\n  font-family: \"Material-Design-Iconic-Font\";\n}\n.filter-result .job-box {\n  box-shadow: 0 0 35px 0 rgba(130, 130, 130, 0.2);\n  border-radius: 10px;\n  padding: 10px 35px;\n}\nul {\n  list-style: none;\n}\n.list-disk li {\n  list-style: none;\n  margin-bottom: 12px;\n}\n.list-disk li:last-child {\n  margin-bottom: 0;\n}\n.job-box .img-holder {\n  height: 65px;\n  width: 65px;\n  background-color: #4e63d7;\n  background-image: linear-gradient(to right, rgba(78, 99, 215, 0.9) 0%, #5a85dd 100%);\n  font-family: \"Open Sans\", sans-serif;\n  color: #fff;\n  font-size: 22px;\n  font-weight: 700;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 65px;\n}\n.career-title {\n  background-color: #4e63d7;\n  color: #fff;\n  padding: 15px;\n  text-align: center;\n  border-radius: 10px 10px 0 0;\n  background-image: linear-gradient(to right, rgba(78, 99, 215, 0.9) 0%, #5a85dd 100%);\n}\n.job-overview {\n  box-shadow: 0 0 35px 0 rgba(130, 130, 130, 0.2);\n  border-radius: 10px;\n}\n@media (min-width: 992px) {\n  .job-overview {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 70px;\n  }\n}\n.job-overview .job-detail ul {\n  margin-bottom: 28px;\n}\n.job-overview .job-detail ul li {\n  opacity: 0.75;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n.job-overview .job-detail ul li i {\n  font-size: 20px;\n  position: relative;\n  top: 1px;\n}\n.job-overview .overview-bottom,\n.job-overview .overview-top {\n  padding: 35px;\n}\n.job-content ul li {\n  font-weight: 600;\n  opacity: 0.75;\n  border-bottom: 1px solid #ccc;\n  padding: 10px 5px;\n}\n@media (min-width: 768px) {\n  .job-content ul li {\n    border-bottom: 0;\n    padding: 0;\n  }\n}\n.job-content ul li i {\n  font-size: 20px;\n  position: relative;\n  top: 1px;\n}\n.mb-30 {\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGlzdC1yZWNydWl0bWVudC11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUFBO0VBQ0UscURBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBR0Y7QUFEQTtFQUNFLGFBQUE7QUFJRjtBQUNBLHVCQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFFRjtBQTJCQTtFQUNFLGtCQUFBO0FBeEJGO0FBMkJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtBQXhCRjtBQTJCQTtFQUVFLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXhCRjtBQTJCQTtFQUNFLGdCQUFBO0FBeEJGO0FBMkJBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQXhCRjtBQTJCQTtFQUNFLGdCQUFBO0FBeEJGO0FBMkJBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUVBLG9GQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBR0EsYUFBQTtFQUdBLHVCQUFBO0VBR0EsbUJBQUE7RUFDQSxtQkFBQTtBQXhCRjtBQTJCQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBRUEsb0ZBQUE7QUF4QkY7QUEyQkE7RUFFRSwrQ0FBQTtFQUNBLG1CQUFBO0FBeEJGO0FBMkJBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLGdCQUFBO0lBQ0EsU0FBQTtFQXhCRjtBQUNGO0FBMkJBO0VBQ0UsbUJBQUE7QUF6QkY7QUE0QkE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXpCRjtBQTRCQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUF6QkY7QUE0QkE7O0VBRUUsYUFBQTtBQXpCRjtBQTRCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUF6QkY7QUE0QkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsVUFBQTtFQXpCRjtBQUNGO0FBNEJBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQTFCRjtBQTRCQTtFQUNFLG1CQUFBO0FBekJGIiwiZmlsZSI6Imxpc3QtcmVjcnVpdG1lbnQtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDMzLjMlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG59XG5cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMTJweCAxMnB4IDJweCAxcHggcmdiYSg2MCwgODQsIDI1NSwgMC45NCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3ZThlODtcbn1cblxuZGl2LmNhcmQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vKiA9PT09PSBDYXJlZXIgPT09PT0gKi9cbi5jYXJlZXItZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXN0eWxlOiBpbnNldDtcbiAgYm9yZGVyLWNvbG9yOiAjMWUyYTU1O1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG5cbi5jYXJlZXItZm9ybSAuc2VsZWN0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmVlci1mb3JtIC5zZWxlY3QtY29udGFpbmVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogY2FsYyg1MCUgLSAxNHB4KTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgY29udGVudDogXCLvi7lcIjtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwtRGVzaWduLUljb25pYy1Gb250XCI7XG59XG5cbi5maWx0ZXItcmVzdWx0IC5qb2ItYm94IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMzVweCAwIHJnYmEoMTMwLCAxMzAsIDEzMCwgMC4yKTtcbiAgYm94LXNoYWRvdzogMCAwIDM1cHggMCByZ2JhKDEzMCwgMTMwLCAxMzAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMzVweDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubGlzdC1kaXNrIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmxpc3QtZGlzayBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmpvYi1ib3ggLmltZy1ob2xkZXIge1xuICBoZWlnaHQ6IDY1cHg7XG4gIHdpZHRoOiA2NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU2M2Q3O1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbShyZ2JhKDc4LCA5OSwgMjE1LCAwLjkpKSwgdG8oIzVhODVkZCkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoNzgsIDk5LCAyMTUsIDAuOSkgMCUsICM1YTg1ZGQgMTAwJSk7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNjVweDtcbn1cblxuLmNhcmVlci10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTYzZDc7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKHJnYmEoNzgsIDk5LCAyMTUsIDAuOSkpLCB0bygjNWE4NWRkKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg3OCwgOTksIDIxNSwgMC45KSAwJSwgIzVhODVkZCAxMDAlKTtcbn1cblxuLmpvYi1vdmVydmlldyB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDM1cHggMCByZ2JhKDEzMCwgMTMwLCAxMzAsIDAuMik7XG4gIGJveC1zaGFkb3c6IDAgMCAzNXB4IDAgcmdiYSgxMzAsIDEzMCwgMTMwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmpvYi1vdmVydmlldyB7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiA3MHB4O1xuICB9XG59XG4uam9iLW92ZXJ2aWV3IC5qb2ItZGV0YWlsIHVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLmpvYi1vdmVydmlldyAuam9iLWRldGFpbCB1bCBsaSB7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5qb2Itb3ZlcnZpZXcgLmpvYi1kZXRhaWwgdWwgbGkgaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbn1cblxuLmpvYi1vdmVydmlldyAub3ZlcnZpZXctYm90dG9tLFxuLmpvYi1vdmVydmlldyAub3ZlcnZpZXctdG9wIHtcbiAgcGFkZGluZzogMzVweDtcbn1cblxuLmpvYi1jb250ZW50IHVsIGxpIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgb3BhY2l0eTogMC43NTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmpvYi1jb250ZW50IHVsIGxpIHtcbiAgICBib3JkZXItYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbi5qb2ItY29udGVudCB1bCBsaSBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xufVxuXG4ubWItMzAge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "PXlN":
/*!**********************************************************!*\
  !*** ./src/app/user/CV/create-cv/create-cv.component.ts ***!
  \**********************************************************/
/*! exports provided: CreateCvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCvComponent", function() { return CreateCvComponent; });
/* harmony import */ var _raw_loader_create_cv_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./create-cv.component.html */ "waWb");
/* harmony import */ var _create_cv_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-cv.component.scss */ "tlmV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_cv_cv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/cv/cv.service */ "cxox");
/* harmony import */ var _service_workExp_work_exp_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/workExp/work-exp.service */ "fAU0");
/* harmony import */ var _service_skill_skill_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/skill/skill.service */ "6YXc");
/* harmony import */ var _security_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../security/token.service */ "zdrf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _dialog_CV_dialog_create_cv_dialog_create_cv_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../dialog/CV/dialog-create-cv/dialog-create-cv.component */ "/Vn9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dialog_CV_dialog_no_create_dialog_no_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../dialog/CV/dialog-no-create/dialog-no-create.component */ "81uI");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CreateCvComponent = /** @class */ (function () {
    function CreateCvComponent(cvService, workExpService, skillService, token, fb, dialog, router, tokenService) {
        this.cvService = cvService;
        this.workExpService = workExpService;
        this.skillService = skillService;
        this.token = token;
        this.fb = fb;
        this.dialog = dialog;
        this.router = router;
        this.tokenService = tokenService;
        this.status = "Vui lòng bổ sung các thông tin dưới đây để hoàn tất tài khoản.";
        this.error1 = {
            message: "user_da_ton_tai"
        };
        this.check = false;
        this.cvForm = this.fb.group({
            expYear: [],
            salaryExpectation: [],
            fileCV: [],
            userId: this.token.getIdGuest(),
            skills: this.fb.array([]),
            workExps: this.fb.array([])
        });
    }
    CreateCvComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(CreateCvComponent.prototype, "skills", {
        get: function () {
            return this.cvForm.get('skills');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateCvComponent.prototype, "workExps", {
        get: function () {
            return this.cvForm.get("workExps");
        },
        enumerable: false,
        configurable: true
    });
    CreateCvComponent.prototype.onUpLoadAvatar = function (event) {
        this.cvForm.value.fileCV = event;
    };
    CreateCvComponent.prototype.ngSubmit = function () {
        var _this = this;
        this.cvService.createCV(this.cvForm.value).subscribe(function (data) {
            if (JSON.stringify(data) == JSON.stringify(_this.error1)) {
                var dialogRef = _this.dialog.open(_dialog_CV_dialog_no_create_dialog_no_create_component__WEBPACK_IMPORTED_MODULE_11__["DialogNoCreateComponent"]);
                dialogRef.afterClosed().subscribe(function (result) {
                    _this.cvForm.reset();
                    _this.router.navigate(['detail-cv', _this.tokenService.getIdGuest()]);
                });
            }
            else {
                var dialogRef = _this.dialog.open(_dialog_CV_dialog_create_cv_dialog_create_cv_component__WEBPACK_IMPORTED_MODULE_9__["DialogCreateCvComponent"]);
                dialogRef.afterClosed().subscribe(function (result) {
                    _this.cvForm.reset();
                    _this.router.navigate(['detail-cv', _this.tokenService.getIdGuest()]);
                });
            }
        });
    };
    CreateCvComponent.prototype.addSkill = function () {
        var skillForm = this.fb.group({
            name: [''],
            proficiency: ['50%']
        });
        this.skills.push(skillForm);
    };
    CreateCvComponent.prototype.deleteSkill = function (index) {
        this.skills.removeAt(index);
    };
    CreateCvComponent.prototype.addWorkExp = function () {
        var workExpForm = this.fb.group({
            title: [''],
            startDate: [''],
            endDate: [''],
            content: ['']
        });
        this.workExps.push(workExpForm);
    };
    CreateCvComponent.prototype.deleteWorkExp = function (index) {
        this.workExps.removeAt(index);
    };
    CreateCvComponent.ctorParameters = function () { return [
        { type: _service_cv_cv_service__WEBPACK_IMPORTED_MODULE_3__["CVService"] },
        { type: _service_workExp_work_exp_service__WEBPACK_IMPORTED_MODULE_4__["WorkExpService"] },
        { type: _service_skill_skill_service__WEBPACK_IMPORTED_MODULE_5__["SkillService"] },
        { type: _security_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _security_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] }
    ]; };
    CreateCvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-cv',
            template: _raw_loader_create_cv_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_create_cv_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_cv_cv_service__WEBPACK_IMPORTED_MODULE_3__["CVService"],
            _service_workExp_work_exp_service__WEBPACK_IMPORTED_MODULE_4__["WorkExpService"],
            _service_skill_skill_service__WEBPACK_IMPORTED_MODULE_5__["SkillService"],
            _security_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _security_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"]])
    ], CreateCvComponent);
    return CreateCvComponent;
}());



/***/ }),

/***/ "PyfS":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/register-company/register-company.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-title-area\" style=\"height: 200px\">\r\n    <div class=\"container\">\r\n        <div class=\"page-title-content\">\r\n            <h2>Đăng Ký Công Ty</h2>\r\n        </div>\r\n    </div>\r\n    <div class=\"page-shape\">\r\n        <div class=\"shape1\">\r\n            <img src=\"assets/images/shape/1.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape3\">\r\n            <img src=\"assets/images/shape/3.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape4\">\r\n            <img src=\"assets/images/shape/4.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape5\">\r\n            <img src=\"assets/images/shape/5.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape6\">\r\n            <img src=\"assets/images/shape/6.png\" alt=\"shape\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"signup-area\" style=\"margin: 10px\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <div class=\"signup-form\">\r\n                    <form>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                                <mat-card class=\"text-center\">\r\n                                    <form #form=\"ngForm\"\r\n                                          (ngSubmit)=\"form.form.valid && ngSubmit(form)\" novalidate>\r\n                                        <!--                                        <mat-error class=\"alert alert-primary\">{{status}}</mat-error>-->\r\n                                        <mat-form-field style=\"width: 350px\" appearance=\"outline\">\r\n                                            <mat-label>Tài khoản</mat-label>\r\n                                            <input matInput placeholder=\"Nhập tài khoản\" name=\"username\"\r\n                                                   [(ngModel)]=\"data.username\" #username=\"ngModel\" required email>\r\n                                            <mat-icon color=\"black\" matSuffix>account_circle</mat-icon>\r\n                                            <mat-error *ngIf=\"username?.hasError('required')\">Không được bỏ trống\r\n                                            </mat-error>\r\n                                            <mat-error *ngIf=\"username?.hasError('email')\">Nhập đúng định dạng @\r\n                                            </mat-error>\r\n                                        </mat-form-field>\r\n                                        <br>\r\n                                        <mat-form-field style=\"width: 350px\" appearance=\"outline\">\r\n                                            <mat-label>Tên công ty</mat-label>\r\n                                            <input matInput placeholder=\"Nhập tên công ty\" name=\"name\"\r\n                                                   [(ngModel)]=\"data.name\" #name=\"ngModel\" required>\r\n                                            <mat-icon color=\"black\" matSuffix>business</mat-icon>\r\n                                            <mat-error *ngIf=\"name?.hasError('required')\">Không được bỏ trống\r\n                                            </mat-error>\r\n                                        </mat-form-field>\r\n                                        <br>\r\n                                        <mat-form-field style=\"width: 350px\" appearance=\"outline\">\r\n                                            <mat-label>Mô tả</mat-label>\r\n                                            <input matInput placeholder=\"Mô tả\" name=\"description\"\r\n                                                   [(ngModel)]=\"data.description\" #description=\"ngModel\"\r\n                                                   requiredrequired>\r\n                                            <mat-icon color=\"black\" matSuffix>description</mat-icon>\r\n                                            <mat-error *ngIf=\"description?.hasError('required')\">Không được bỏ trống\r\n                                            </mat-error>\r\n                                        </mat-form-field>\r\n                                        <br>\r\n                                        <mat-form-field style=\"width: 350px\" appearance=\"outline\">\r\n                                            <mat-label>Địa chỉ</mat-label>\r\n                                            <input matInput placeholder=\"Nhập địa chỉ\" name=\"address\"\r\n                                                   [(ngModel)]=\"data.address\">\r\n                                            <mat-icon color=\"black\" matSuffix>home</mat-icon>\r\n                                            <!--            <mat-error *ngIf=\"form.controls.username?.errors?.required\">Phải điền thông tin</mat-error>-->\r\n                                        </mat-form-field>\r\n                                        <br>\r\n                                        <mat-form-field style=\"width: 350px\" appearance=\"outline\">\r\n                                            <mat-label>Số lượng nhân viên</mat-label>\r\n                                            <mat-icon color=\"black\" matSuffix>people_alt</mat-icon>\r\n                                            <input matInput placeholder=\"Nhập số lượng nhân viên\"\r\n                                                   name=\"employeeQuantity\" [(ngModel)]=\"data.employeeQuantity\">\r\n                                        </mat-form-field>\r\n                                        <br>\r\n                                        <mat-form-field style=\"width: 350px\" appearance=\"outline\">\r\n                                            <mat-label>Link Google Map</mat-label>\r\n                                            <input matInput placeholder=\"Link\" name=\"linkMap\"\r\n                                                   [(ngModel)]=\"data.linkMap\">\r\n                                            <mat-icon color=\"black\" matSuffix>location_on</mat-icon>\r\n                                        </mat-form-field>\r\n                                        <br>\r\n                                        <mat-form-field appearance=\"outline\" style=\"width: 350px\">\r\n                                            <mat-label>Chọn thành phố</mat-label>\r\n                                            <mat-select [(ngModel)]=\"data.city\" name=\"city\">\r\n                                                <mat-option *ngFor=\"let city of cities\"\r\n                                                            [value]=\"city.id\">{{city.name}}</mat-option>\r\n                                            </mat-select>\r\n                                            <mat-icon color=\"black\" matSuffix>apartment</mat-icon>\r\n                                        </mat-form-field>\r\n                                        <br>\r\n                                        <mat-form-field style=\"width: 350px\" appearance=\"outline\">\r\n                                            <mat-label>Số điện thoại</mat-label>\r\n                                            <input matInput placeholder=\"Số điện thoại\" name=\"phone\"\r\n                                                   [(ngModel)]=\"data.phone\">\r\n                                            <!--            <mat-error *ngIf=\"form.controls.username?.errors?.required\">Phải điền thông tin</mat-error>-->\r\n                                            <mat-icon color=\"black\" matSuffix>phone</mat-icon>\r\n                                        </mat-form-field>\r\n                                        <br>\r\n                                        <app-upload-image (giveURLtoCreate)=\"onUpLoadAvatar($event)\">Ảnh\r\n                                        </app-upload-image>\r\n\r\n                                        <button mat-raised-button class=\"btn btn-primary\">Đăng ký</button>\r\n                                        <br>\r\n                                        <p></p>\r\n                                        <a routerLink=\"register-user\">Tạo tài khoản ứng viên</a>\r\n                                    </form>\r\n                                </mat-card>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "QGdh":
/*!*****************************************************************!*\
  !*** ./src/app/upload/upload-image/upload-image.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQtaW1hZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "QI2D":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/register-user/register-user.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-title-area\" style=\"height: 200px\">\r\n    <div class=\"container\">\r\n        <div class=\"page-title-content\">\r\n            <h2>Đăng Ký Ứng Viên</h2>\r\n        </div>\r\n    </div>\r\n    <div class=\"page-shape\">\r\n        <div class=\"shape1\">\r\n            <img src=\"assets/images/shape/1.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape3\">\r\n            <img src=\"assets/images/shape/3.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape4\">\r\n            <img src=\"assets/images/shape/4.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape5\">\r\n            <img src=\"assets/images/shape/5.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape6\">\r\n            <img src=\"assets/images/shape/6.png\" alt=\"shape\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"signup-area\" style=\"margin: 10px\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <div class=\"signup-form\">\r\n                    <form>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                                <mat-card class=\"text-center\">\r\n                                    <form class=\"create-category\" #form=\"ngForm\"\r\n                                          (ngSubmit)=\"form.form.valid && ngSubmit(form)\" novalidate>\r\n                                        <!--                                        <mat-error class=\"alert alert-primary\">{{status}}</mat-error>-->\r\n                                        <mat-form-field style=\"width: 350px\" appearance=\"outline\">\r\n                                            <mat-label>Tài khoản</mat-label>\r\n                                            <input matInput placeholder=\"username\" name=\"username\"\r\n                                                   [(ngModel)]=\"data.username\" #username=\"ngModel\" required email>\r\n                                            <mat-icon color=\"black\" matSuffix>account_circle</mat-icon>\r\n                                            <mat-error *ngIf=\"username?.hasError('required')\">Không được bỏ trống\r\n                                            </mat-error>\r\n                                            <mat-error *ngIf=\"username?.hasError('email')\">Nhập đúng định dạng @\r\n                                            </mat-error>\r\n                                        </mat-form-field>\r\n                                        <br>\r\n                                        <mat-form-field style=\"width: 350px\" appearance=\"outline\">\r\n                                            <mat-label>Tên người dùng</mat-label>\r\n                                            <input matInput placeholder=\"username\" name=\"name\" [(ngModel)]=\"data.name\"\r\n                                                   #name=\"ngModel\" required>\r\n                                            <mat-icon color=\"black\" matSuffix>badge</mat-icon>\r\n                                            <mat-error *ngIf=\"name?.hasError('required')\">Không được bỏ trống\r\n                                            </mat-error>\r\n                                        </mat-form-field>\r\n                                        <br>\r\n                                        <mat-form-field style=\"width: 350px\" appearance=\"outline\">\r\n                                            <mat-label>Số điện thoại</mat-label>\r\n                                            <input matInput placeholder=\"phone\" name=\"phone\" [(ngModel)]=\"data.phone\"\r\n                                                   #phone=\"ngModel\">\r\n                                            <mat-icon color=\"black\" matSuffix>dialpad</mat-icon>\r\n                                        </mat-form-field>\r\n                                        <br>\r\n                                        <mat-form-field style=\"width: 350px\" appearance=\"outline\">\r\n                                            <mat-label>Mật khẩu</mat-label>\r\n                                            <input matInput placeholder=\"password\" name=\"password\"\r\n                                                   [(ngModel)]=\"data.password\" #password=\"ngModel\" required\r\n                                                   [type]=\"hide ? 'password' : 'text'\">\r\n                                            <button mat-icon-button matSuffix (click)=\"hide = !hide\"\r\n                                                    [attr.aria-label]=\"'Hide password'\"\r\n                                                    [attr.aria-pressed]=\"hide\">\r\n                                                <mat-icon\r\n                                                        color=\"black\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                            </button>\r\n                                            <mat-error *ngIf=\"password?.hasError('required')\">Không được bỏ trống\r\n                                            </mat-error>\r\n                                        </mat-form-field>\r\n                                        <br>\r\n                                        <mat-form-field style=\"width: 350px\" appearance=\"outline\">\r\n                                            <mat-label>Nhập lại mật khẩu</mat-label>\r\n                                            <input matInput placeholder=\"confirmpassword\" name=\"confirmpassword\"\r\n                                                   [(ngModel)]=\"data.confirmpassword\" #confirmpassword=\"ngModel\"\r\n                                                   [type]=\"hide1 ? 'password' : 'text'\">\r\n                                            <button mat-icon-button matSuffix (click)=\"hide1 = !hide1\"\r\n                                                    [attr.aria-label]=\"'Hide password'\"\r\n                                                    [attr.aria-pressed]=\"hide1\">\r\n                                                <mat-icon\r\n                                                        color=\"black\">{{hide1 ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                            </button>\r\n                                        </mat-form-field>\r\n                                        <p>\r\n                                            <span matBadge=\"\" matBadgeSize=\"large\" *ngIf=\"checkPassword()\">Mật khẩu chính xác</span>\r\n                                        </p>\r\n                                        <p>\r\n                                            <span matBadge=\"\" matBadgeSize=\"large\" *ngIf=\"checkPassword() == false\">Mật khẩu không giống nhau</span>\r\n                                        </p>\r\n                                        <br>\r\n                                        <button mat-raised-button color=\"black\">Đăng ký</button>\r\n                                        <br>\r\n                                        <p></p>\r\n                                        <a routerLink=\"/register-company\">Tạo tài khoản doanh nghiệp</a>\r\n                                    </form>\r\n                                </mat-card>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "QQo1":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/active-status/active-status.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>active-status works!</p>\r\n");

/***/ }),

/***/ "R01X":
/*!**********************************************************************!*\
  !*** ./src/app/account/change-password/change-password.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _raw_loader_change_password_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./change-password.component.html */ "EAf1");
/* harmony import */ var _change_password_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.component.scss */ "BAZj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_account_changePassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/account/changePassword */ "padZ");
/* harmony import */ var _security_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../security/auth.service */ "JZt4");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(authService) {
        this.authService = authService;
        this.hide = true;
        this.hide1 = true;
        this.data = {
            newPassword: '',
            confirmPassword: ''
        };
        this.status = "";
        this.success = {
            message: "yes"
        };
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.ngSubmit = function (form) {
        var _this = this;
        if (this.checkPassword()) {
            this.changePassword = new _service_account_changePassword__WEBPACK_IMPORTED_MODULE_3__["ChangePassword"](this.data.newPassword);
            console.log(this.changePassword);
            this.authService.changePassword(this.changePassword).subscribe(function (data) {
                if (JSON.stringify(data) == JSON.stringify(_this.success)) {
                    // @ts-ignore
                    _this.status = 'Đổi mật khẩu thành công !';
                }
            });
        }
    };
    ChangePasswordComponent.prototype.checkPassword = function () {
        if (this.data.newPassword == this.data.confirmPassword && this.data.newPassword != '') {
            return true;
        }
        else if (this.data.newPassword != this.data.confirmPassword && this.data.newPassword != '' && this.data.confirmPassword != '') {
            return false;
        }
    };
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: _security_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-change-password',
            template: _raw_loader_change_password_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_change_password_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_security_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "S4+S":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dialog/dialogCreateCompany/dialog-create-company/dialog-create-company.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DialogCreateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogCreateCompanyComponent", function() { return DialogCreateCompanyComponent; });
/* harmony import */ var _raw_loader_dialog_create_company_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dialog-create-company.component.html */ "XddI");
/* harmony import */ var _dialog_create_company_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-create-company.component.scss */ "lOv3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogCreateCompanyComponent = /** @class */ (function () {
    function DialogCreateCompanyComponent() {
    }
    DialogCreateCompanyComponent.prototype.ngOnInit = function () {
    };
    DialogCreateCompanyComponent.ctorParameters = function () { return []; };
    DialogCreateCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dialog-create-company',
            template: _raw_loader_dialog_create_company_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dialog_create_company_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DialogCreateCompanyComponent);
    return DialogCreateCompanyComponent;
}());



/***/ }),

/***/ "SwKa":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialogApplyFail/dialog-apply-fail/dialog-apply-fail.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\" style=\"margin-top: 20px\">\r\n            <mat-card style=\"margin: 50px 0\">\r\n                <h4 class=\"alert alert-dark\">Bạn không có CV, Xin hãy tạo CV trước khi ứng tuyển</h4>\r\n                <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"false\">Đóng</button>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(document) {
        this.document = document;
        this.title = 'ngx-audio-player-demo';
    }
    AppComponent.prototype.loadStyle = function (styleName) {
        var head = this.document.getElementsByTagName('head')[0];
        var themeLink = this.document.getElementById('client-theme');
        if (themeLink) {
            themeLink.href = styleName;
        }
        else {
            var style = this.document.createElement('link');
            style.id = 'client-theme';
            style.rel = 'stylesheet';
            style.href = "" + styleName;
            head.appendChild(style);
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [Document])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "UVmH":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/recruitmentnew/update-recruitmentnew-company/update-recruitmentnew-company.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Start Page Title Area -->\r\n<div class=\"page-title-area\" style=\"height: 439px\">\r\n    <div class=\"container\">\r\n        <div class=\"page-title-content\">\r\n            <h2>SỬA TIN TUYỂN DỤNG</h2>\r\n            <ul>\r\n                <li>\r\n                    <a href=\"index.html\">\r\n                        Trang chủ\r\n                    </a>\r\n                </li>\r\n\r\n                <li>Tìm kiếm</li>\r\n\r\n                <li class=\"active\">Đăng nhập</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"page-shape\">\r\n        <div class=\"shape1\">\r\n            <img src=\"assets/images/shape/1.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape3\">\r\n            <img src=\"assets/images/shape/3.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape4\">\r\n            <img src=\"assets/images/shape/4.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape5\">\r\n            <img src=\"assets/images/shape/5.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape6\">\r\n            <img src=\"assets/images/shape/6.png\" alt=\"shape\">\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Page Title Area -->\r\n<!--create-recruitmentnew-->\r\n<section class=\"signup-area ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <div class=\"signup-form\">\r\n                    <div class=\"section-tittle text-center\">\r\n                        <h2>Cập nhật</h2>\r\n                        <p>Cập nhật tin tuyển dụng</p>\r\n                    </div>\r\n                    <form (ngSubmit)=\"onUpdate()\" novalidate>\r\n                        <div class=\"row\">\r\n                            <mat-error class=\"alert alert-primary\" style=\"text-align: center\">{{status}}</mat-error>\r\n\r\n                            <!--tiêu đề-->\r\n                            <div class=\"col-md-12 col-sm-12\">\r\n                                <mat-form-field style=\"width: 100%\" appearance=\"outline\">\r\n                                    <mat-label>Tiêu Đề:</mat-label>\r\n                                    <input matInput placeholder=\"Tiêu đề ...\" name=\"title\"\r\n                                           [(ngModel)]=\"recruitmentNew.title\">\r\n                                    <mat-icon color=\"#051242\" matSuffix>subtitles</mat-icon>\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <!--Thời Gian Làm Việc-->\r\n                            <div class=\"col-md-6 col-sm-6\">\r\n                                <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>Thời Gian Làm Việc</mat-label>\r\n                                    <mat-select [(value)]=\"recruitmentNew.workingTime.id\">\r\n                                        <mat-option *ngFor=\"let workingTime of workingTimes\"\r\n                                                    [value]=\"workingTime.id\">{{workingTime.name}}</mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <!--Lĩnh Vực Công Việc-->\r\n                            <div class=\"col-md-6 col-sm-6\">\r\n                                <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>Lĩnh Vực Công Việc</mat-label>\r\n                                    <mat-select [(value)]=\"recruitmentNew.field.id\">\r\n                                        <mat-option *ngFor=\"let field of fields\"\r\n                                                    [value]=\"field.id\">{{field.name}}</mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <!-- Vị Trí Tuyển Dụng-->\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>Vị Trí Tuyển Dụng</mat-label>\r\n                                <mat-select [(value)]=\"recruitmentNew.vacancies.id\" style=\"width: 100%\">\r\n                                    <mat-option *ngFor=\"let vacancies of vacancies1\"\r\n                                                [value]=\"vacancies.id\">{{vacancies.name}}</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n\r\n                            <!--hạn nộp hồ sơ-->\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>Hạn nộp hồ sơ</mat-label>\r\n                                <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"recruitmentNew.expDate\">\r\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #picker></mat-datepicker>\r\n                            </mat-form-field>\r\n\r\n                            <!--description-->\r\n                            <mat-form-field style=\"width: 100%\" appearance=\"outline\">\r\n                                <mat-label>Mô tả:</mat-label>\r\n                                <input matInput placeholder=\"Mô tả ...\" name=\"title\"\r\n                                       [(ngModel)]=\"recruitmentNew.description\">\r\n                                <mat-icon color=\"#051242\" matSuffix>subtitles</mat-icon>\r\n                            </mat-form-field>\r\n\r\n                            <!--số lượng nhân sự -->\r\n                            <div class=\"col-md-6 col-sm-6\">\r\n                                <mat-form-field style=\"width: 100%\" appearance=\"outline\">\r\n                                    <mat-label>Số Lượng Ứng Tuyển :</mat-label>\r\n                                    <input matInput placeholder=\"Số lượng ...\" name=\"quantity\"\r\n                                           [(ngModel)]=\"recruitmentNew.quantity\"\r\n                                           #quantity=\"ngModel\" required>\r\n                                    <mat-icon color=\"#051242\" matSuffix>person_add_alt</mat-icon>\r\n                                    <mat-error *ngIf=\"quantity.hasError('required')\">Bắt buộc phải nhập số lượng người\r\n                                        ứng tuyển\r\n                                    </mat-error>\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <!--mức lương -->\r\n                            <div class=\"col-md-6 col-sm-6\">\r\n                                <mat-form-field style=\"width: 100%\" appearance=\"outline\">\r\n                                    <mat-label>Mức Lương:</mat-label>\r\n                                    <input matInput placeholder=\"Mức Lương...\" name=\"description\"\r\n                                           [(ngModel)]=\"recruitmentNew.salary\"\r\n                                           #salary=\"ngModel\" required>\r\n                                    <mat-icon color=\"#051242\" matSuffix>local_atm</mat-icon>\r\n                                    <mat-error *ngIf=\"salary.hasError('required')\">Viết mức lương\r\n                                    </mat-error>\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <!--giới tính-->\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>Giới Tính Tuyển Dụng</mat-label>\r\n                                <mat-select [(value)]=\"recruitmentNew.gender\" style=\"width: 100%\" name=\"gender\">\r\n                                    <mat-option *ngFor=\"let gen of gender\" [value]=\"gen.id\">{{gen.name}}</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n\r\n\r\n                            <!--nơi làm việc-->\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>Nơi Làm Việc</mat-label>\r\n                                <mat-select [(ngModel)]=\"recruitmentNew.city.id\" style=\"width: 100%\" name=\"city\">\r\n                                    <mat-option *ngFor=\"let city of cities\" [value]=\"city.id\">{{city.name}}</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n                        <div class=\"col-12 text-center\">\r\n                            <button type=\"submit\" mat-stroked-button\r\n                                    class=\"mat-button-toggle-group btn-outline-primary\">\r\n                                Cập nhật\r\n                                <mat-icon matSuffix>edit</mat-icon>\r\n                            </button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<!--create-recruitmentnew-->\r\n");

/***/ }),

/***/ "UjLF":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload-file/upload-file.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div class=\"input-group col-lg-12 col-sm-12\">\r\n        <mat-label class=\"input-group-text\" for=\"inputGroupFile01\">File CV</mat-label>\r\n        <input type=\"file\" class=\"form-control\" id=\"inputGroupFile01\" (change)=\"onFileChanged($event)\">\r\n        <mat-spinner [diameter]=\"40\" class=\"text-center\" *ngIf=\"checkUpLoadFile\"></mat-spinner>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "UuER":
/*!********************************************************************!*\
  !*** ./src/app/company/apply-company/apply-company.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  background-color: #f8f9fa !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.mb-0, .my-0 {\n  margin-bottom: 0 !important;\n}\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n/* user-dashboard-info-box */\n\n.user-dashboard-info-box .candidates-list .thumb {\n  margin-right: 20px;\n}\n\n.user-dashboard-info-box .candidates-list .thumb img {\n  width: 80px;\n  height: 80px;\n  -o-object-fit: cover;\n  object-fit: cover;\n  overflow: hidden;\n  border-radius: 50%;\n}\n\n.user-dashboard-info-box .title {\n  display: flex;\n  align-items: center;\n  padding: 30px 0;\n}\n\n.user-dashboard-info-box .candidates-list td {\n  vertical-align: middle;\n}\n\n.user-dashboard-info-box td li {\n  margin: 0 4px;\n}\n\n.user-dashboard-info-box .table thead th {\n  border-bottom: none;\n}\n\n.table.manage-candidates-top th {\n  border: 0;\n}\n\n.user-dashboard-info-box .candidate-list-favourite-time .candidate-list-favourite {\n  margin-bottom: 10px;\n}\n\n.table.manage-candidates-top {\n  min-width: 650px;\n}\n\n.user-dashboard-info-box .candidate-list-details ul {\n  color: #969696;\n}\n\n/* Candidate List */\n\n.candidate-list {\n  background: #ffffff;\n  display: flex;\n  border-bottom: 1px solid #eeeeee;\n  align-items: center;\n  padding: 20px;\n  transition: all 0.3s ease-in-out;\n}\n\n.candidate-list:hover {\n  box-shadow: 0px 0px 34px 4px rgba(33, 37, 41, 0.06);\n  position: relative;\n  z-index: 99;\n}\n\n.candidate-list:hover a.candidate-list-favourite {\n  color: #e74c3c;\n  box-shadow: -1px 4px 10px 1px rgba(24, 111, 201, 0.1);\n}\n\n.candidate-list .candidate-list-image {\n  margin-right: 25px;\n  flex: 0 0 80px;\n  border: none;\n}\n\n.candidate-list .candidate-list-image img {\n  width: 80px;\n  height: 80px;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n\n.candidate-list-title {\n  margin-bottom: 5px;\n}\n\n.candidate-list-details ul {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 0px;\n}\n\n.candidate-list-details ul li {\n  margin: 5px 10px 5px 0px;\n  font-size: 13px;\n}\n\n.candidate-list .candidate-list-favourite-time {\n  margin-left: auto;\n  text-align: center;\n  font-size: 13px;\n  flex: 0 0 90px;\n}\n\n.candidate-list .candidate-list-favourite-time span {\n  display: block;\n  margin: 0 auto;\n}\n\n.candidate-list .candidate-list-favourite-time .candidate-list-favourite {\n  display: inline-block;\n  position: relative;\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  border: 1px solid #eeeeee;\n  border-radius: 100%;\n  text-align: center;\n  transition: all 0.3s ease-in-out;\n  margin-bottom: 20px;\n  font-size: 16px;\n  color: #646f79;\n}\n\n.candidate-list .candidate-list-favourite-time .candidate-list-favourite:hover {\n  background: #ffffff;\n  color: #e74c3c;\n}\n\n.candidate-banner .candidate-list:hover {\n  position: inherit;\n  box-shadow: inherit;\n  z-index: inherit;\n}\n\n.bg-white {\n  background-color: #ffffff !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.mb-0, .my-0 {\n  margin-bottom: 0 !important;\n}\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n.user-dashboard-info-box .candidates-list .thumb {\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHBseS1jb21wYW55LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUFDRjs7QUFDQTtFQUNFLDBCQUFBO0FBRUY7O0FBQUE7RUFDRSwyQkFBQTtBQUdGOztBQURBO0VBQ0UsOERBQUE7QUFJRjs7QUFEQSw0QkFBQTs7QUFDQTtFQUNFLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBRkE7RUFHRSxhQUFBO0VBR0EsbUJBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBRkE7RUFDRSxzQkFBQTtBQUtGOztBQUZBO0VBQ0UsYUFBQTtBQUtGOztBQUZBO0VBQ0UsbUJBQUE7QUFLRjs7QUFGQTtFQUNFLFNBQUE7QUFLRjs7QUFGQTtFQUNFLG1CQUFBO0FBS0Y7O0FBRkE7RUFDRSxnQkFBQTtBQUtGOztBQUZBO0VBQ0UsY0FBQTtBQUtGOztBQUZBLG1CQUFBOztBQUNBO0VBQ0UsbUJBQUE7RUFHQSxhQUFBO0VBQ0EsZ0NBQUE7RUFHQSxtQkFBQTtFQUNBLGFBQUE7RUFFQSxnQ0FBQTtBQUtGOztBQUhBO0VBRUUsbURBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFNRjs7QUFKQTtFQUNFLGNBQUE7RUFFQSxxREFBQTtBQU9GOztBQUpBO0VBQ0Usa0JBQUE7RUFHQSxjQUFBO0VBQ0EsWUFBQTtBQU9GOztBQUxBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBUUY7O0FBTEE7RUFDRSxrQkFBQTtBQVFGOztBQUxBO0VBR0UsYUFBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtBQVFGOztBQU5BO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBTkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUdBLGNBQUE7QUFTRjs7QUFQQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBVUY7O0FBUkE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVdGOztBQVRBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBWUY7O0FBVEE7RUFDRSxpQkFBQTtFQUVBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFZRjs7QUFUQTtFQUNFLG9DQUFBO0FBWUY7O0FBVkE7RUFDRSwwQkFBQTtBQWFGOztBQVhBO0VBQ0UsMkJBQUE7QUFjRjs7QUFaQTtFQUNFLDhEQUFBO0FBZUY7O0FBWkE7RUFDRSxrQkFBQTtBQWVGIiwiZmlsZSI6ImFwcGx5LWNvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEhaW1wb3J0YW50XHJcbn1cclxuLnAtNCB7XHJcbiAgcGFkZGluZzogMS41cmVtIWltcG9ydGFudDtcclxufVxyXG4ubWItMCwgLm15LTAge1xyXG4gIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xyXG59XHJcbi5zaGFkb3ctc20ge1xyXG4gIGJveC1zaGFkb3c6IDAgLjEyNXJlbSAuMjVyZW0gcmdiYSgwLDAsMCwuMDc1KSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIHVzZXItZGFzaGJvYXJkLWluZm8tYm94ICovXHJcbi51c2VyLWRhc2hib2FyZC1pbmZvLWJveCAuY2FuZGlkYXRlcy1saXN0IC50aHVtYiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi51c2VyLWRhc2hib2FyZC1pbmZvLWJveCAuY2FuZGlkYXRlcy1saXN0IC50aHVtYiBpbWcge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnVzZXItZGFzaGJvYXJkLWluZm8tYm94IC50aXRsZSB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMHB4IDA7XHJcbn1cclxuXHJcbi51c2VyLWRhc2hib2FyZC1pbmZvLWJveCAuY2FuZGlkYXRlcy1saXN0IHRkIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4udXNlci1kYXNoYm9hcmQtaW5mby1ib3ggdGQgbGkge1xyXG4gIG1hcmdpbjogMCA0cHg7XHJcbn1cclxuXHJcbi51c2VyLWRhc2hib2FyZC1pbmZvLWJveCAudGFibGUgdGhlYWQgdGgge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi50YWJsZS5tYW5hZ2UtY2FuZGlkYXRlcy10b3AgdGgge1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnVzZXItZGFzaGJvYXJkLWluZm8tYm94IC5jYW5kaWRhdGUtbGlzdC1mYXZvdXJpdGUtdGltZSAuY2FuZGlkYXRlLWxpc3QtZmF2b3VyaXRlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udGFibGUubWFuYWdlLWNhbmRpZGF0ZXMtdG9wIHtcclxuICBtaW4td2lkdGg6IDY1MHB4O1xyXG59XHJcblxyXG4udXNlci1kYXNoYm9hcmQtaW5mby1ib3ggLmNhbmRpZGF0ZS1saXN0LWRldGFpbHMgdWwge1xyXG4gIGNvbG9yOiAjOTY5Njk2O1xyXG59XHJcblxyXG4vKiBDYW5kaWRhdGUgTGlzdCAqL1xyXG4uY2FuZGlkYXRlLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWVlZTtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmNhbmRpZGF0ZS1saXN0OmhvdmVyIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMzRweCA0cHggcmdiYSgzMywgMzcsIDQxLCAwLjA2KTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDM0cHggNHB4IHJnYmEoMzMsIDM3LCA0MSwgMC4wNik7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG59XHJcbi5jYW5kaWRhdGUtbGlzdDpob3ZlciBhLmNhbmRpZGF0ZS1saXN0LWZhdm91cml0ZSB7XHJcbiAgY29sb3I6ICNlNzRjM2M7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDRweCAxMHB4IDFweCByZ2JhKDI0LCAxMTEsIDIwMSwgMC4xKTtcclxuICBib3gtc2hhZG93OiAtMXB4IDRweCAxMHB4IDFweCByZ2JhKDI0LCAxMTEsIDIwMSwgMC4xKTtcclxufVxyXG5cclxuLmNhbmRpZGF0ZS1saXN0IC5jYW5kaWRhdGUtbGlzdC1pbWFnZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XHJcbiAgLW1zLWZsZXg6IDAgMCA4MHB4O1xyXG4gIGZsZXg6IDAgMCA4MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uY2FuZGlkYXRlLWxpc3QgLmNhbmRpZGF0ZS1saXN0LWltYWdlIGltZyB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uY2FuZGlkYXRlLWxpc3QtdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmNhbmRpZGF0ZS1saXN0LWRldGFpbHMgdWwge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5jYW5kaWRhdGUtbGlzdC1kZXRhaWxzIHVsIGxpIHtcclxuICBtYXJnaW46IDVweCAxMHB4IDVweCAwcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uY2FuZGlkYXRlLWxpc3QgLmNhbmRpZGF0ZS1saXN0LWZhdm91cml0ZS10aW1lIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XHJcbiAgLW1zLWZsZXg6IDAgMCA5MHB4O1xyXG4gIGZsZXg6IDAgMCA5MHB4O1xyXG59XHJcbi5jYW5kaWRhdGUtbGlzdCAuY2FuZGlkYXRlLWxpc3QtZmF2b3VyaXRlLXRpbWUgc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmNhbmRpZGF0ZS1saXN0IC5jYW5kaWRhdGUtbGlzdC1mYXZvdXJpdGUtdGltZSAuY2FuZGlkYXRlLWxpc3QtZmF2b3VyaXRlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM2NDZmNzk7XHJcbn1cclxuLmNhbmRpZGF0ZS1saXN0IC5jYW5kaWRhdGUtbGlzdC1mYXZvdXJpdGUtdGltZSAuY2FuZGlkYXRlLWxpc3QtZmF2b3VyaXRlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjZTc0YzNjO1xyXG59XHJcblxyXG4uY2FuZGlkYXRlLWJhbm5lciAuY2FuZGlkYXRlLWxpc3Q6aG92ZXIge1xyXG4gIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5oZXJpdDtcclxuICBib3gtc2hhZG93OiBpbmhlcml0O1xyXG4gIHotaW5kZXg6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5iZy13aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5wLTQge1xyXG4gIHBhZGRpbmc6IDEuNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLm1iLTAsIC5teS0wIHtcclxuICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcclxufVxyXG4uc2hhZG93LXNtIHtcclxuICBib3gtc2hhZG93OiAwIC4xMjVyZW0gLjI1cmVtIHJnYmEoMCwwLDAsLjA3NSkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udXNlci1kYXNoYm9hcmQtaW5mby1ib3ggLmNhbmRpZGF0ZXMtbGlzdCAudGh1bWIge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "WbY4":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/list-company/list-company.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Start Page Title Area -->\r\n<div class=\"page-title-area\" style=\"height: 439px\">\r\n    <div class=\"container\">\r\n        <div class=\"page-title-content\">\r\n            <h2>DANH SÁCH CÁC CÔNG TY</h2>\r\n            <ul>\r\n                <li>\r\n                    <a href=\"index.html\">\r\n                        Home\r\n                    </a>\r\n                </li>\r\n\r\n                <li>Blog</li>\r\n\r\n                <li class=\"active\">Blog</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"page-shape\">\r\n        <div class=\"shape1\">\r\n            <img src=\"assets/images/shape/1.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape3\">\r\n            <img src=\"assets/images/shape/3.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape4\">\r\n            <img src=\"assets/images/shape/4.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape5\">\r\n            <img src=\"assets/images/shape/5.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape6\">\r\n            <img src=\"assets/images/shape/6.png\" alt=\"shape\">\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Page Title Area -->\r\n\r\n\r\n<!-- Blog Area -->\r\n<section class=\"home-blog-area ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"section-title\">\r\n            <span>Home</span>\r\n            <h2>TOP CÔNG TY</h2>\r\n            <p>Nơi bạn sẽ được trải nghiệm, thử thách bản thân tại những Top Công ty hàng đầu Việt Nam.</p>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-6\" *ngFor=\"let company of company\">\r\n                <div class=\"single-blog\">\r\n                    <div class=\"blog-img\">\r\n                        <a [routerLink]=\"['/web-company/', company.id]\">\r\n                            <img src=\"{{company.avatar}}\" alt=\"blog\" style=\"width: 100%;height: 100%\">\r\n                        </a>\r\n                    </div>\r\n\r\n                    <div class=\"content\">\r\n                        <ul>\r\n                            <li>\r\n                               {{company.codeCompany}}\r\n                            </li>\r\n                            <li>\r\n                                <a>{{company.address}}</a>\r\n                            </li>\r\n                        </ul>\r\n\r\n                        <a [routerLink]=\"['/web-company/', company.id]\">\r\n                            <h3>{{company.name}}</h3>\r\n                        </a>\r\n                        <p>{{company.description}}</p>\r\n\r\n                         <a [routerLink]=\"['/web-company/', company.id]\" class=\"line-bnt\">Chi tiết</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n<!--            test trang-->\r\n            <div class=\"col-lg-4 col-md-6\">\r\n                <div class=\"single-blog\">\r\n                    <div class=\"blog-img\">\r\n                        <a href=\"blog-details.html\">\r\n                         <img src=\"../../../assets/logo/logo-dep-muong-thanh.jpg\" alt=\"blog\" style=\"width: 100%;height: 100%\" >\r\n                        </a>\r\n                    </div>\r\n\r\n                    <div class=\"content\">\r\n                        <ul>\r\n                            <li>\r\n                                MTH15234\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">Hải Phòng</a>\r\n                            </li>\r\n                        </ul>\r\n\r\n                        <a href=\"blog-details.html\">\r\n                            <h3>MƯỜNG THANH</h3>\r\n                        </a>\r\n                        <p>Chuỗi khách sạn tư nhân lớn nhất Đông Dương.</p>\r\n\r\n                        <a href=\"blog-details.html\" class=\"line-bnt\">Chi tiết</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4 col-md-6\">\r\n                <div class=\"single-blog\">\r\n                    <div class=\"blog-img\">\r\n                        <a href=\"blog-details.html\">\r\n                      <img src=\"../../../assets/logo/logo-dep-viettel.jpg\" alt=\"blog\" style=\"width: 100%;height: 100%\">\r\n                        </a>\r\n                    </div>\r\n\r\n                    <div class=\"content\">\r\n                        <ul>\r\n                            <li>\r\n                                VTS15639\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">Nha Trang</a>\r\n                            </li>\r\n                        </ul>\r\n\r\n                        <a href=\"blog-details.html\">\r\n                            <h3>VIETTEL TELECOM</h3>\r\n                        </a>\r\n                        <p>Tập đoàn Công nghiệp – Viễn thông Quân đội</p>\r\n\r\n                        <a href=\"blog-details.html\" class=\"line-bnt\">Chi tiết</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-lg-4 col-md-6\">\r\n                <div class=\"single-blog\">\r\n                    <div class=\"blog-img\">\r\n                        <a href=\"blog-details.html\">\r\n                            <img src=\"../../../assets/logo/logo-dep-mb-bank.jpg\" alt=\"blog\" style=\"width: 100%;height: 100%\">\r\n                        </a>\r\n                    </div>\r\n\r\n                    <div class=\"content\">\r\n                        <ul>\r\n                            <li>\r\n                                MBB16879\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">Phú Quốc</a>\r\n                            </li>\r\n                        </ul>\r\n\r\n                        <a href=\"blog-details.html\">\r\n                            <h3>MB BANK</h3>\r\n                        </a>\r\n                        <p>Ngân hàng Quân đội</p>\r\n\r\n                        <a href=\"blog-details.html\" class=\"line-bnt\">Chi tiết</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n<!--    test trang-->\r\n\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"page-navigation-area\">\r\n                    <nav aria-label=\"Page navigation example text-center\">\r\n                        <ul class=\"pagination\">\r\n                            <li class=\"page-item\">\r\n                                <a class=\"page-link page-links\" href=\"#\">\r\n                                    <i class='bx bx-chevrons-left'></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"page-item active\">\r\n                                <a class=\"page-link\" href=\"#\">1</a>\r\n                            </li>\r\n                            <li class=\"page-item\">\r\n                                <a class=\"page-link\" href=\"#\">2</a>\r\n                            </li>\r\n                            <li class=\"page-item\">\r\n                                <a class=\"page-link\" href=\"#\">3</a>\r\n                            </li>\r\n                            <li class=\"page-item\">\r\n                                <a class=\"page-link\" href=\"#\">\r\n                                    <i class='bx bx-chevrons-right'></i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </nav>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Blog Area -->\r\n");

/***/ }),

/***/ "We65":
/*!*****************************************************************!*\
  !*** ./src/app/user/register-user/register-user.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci11c2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Wu36":
/*!******************************************************************!*\
  !*** ./src/app/company/apply-company/apply-company.component.ts ***!
  \******************************************************************/
/*! exports provided: ApplyCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyCompanyComponent", function() { return ApplyCompanyComponent; });
/* harmony import */ var _raw_loader_apply_company_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./apply-company.component.html */ "hzLh");
/* harmony import */ var _apply_company_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-company.component.scss */ "UuER");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_apply_apply_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/apply/apply.service */ "j6QF");
/* harmony import */ var _security_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../security/token.service */ "zdrf");
/* harmony import */ var _model_changeStatusApply__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/changeStatusApply */ "uRAZ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApplyCompanyComponent = /** @class */ (function () {
    function ApplyCompanyComponent(applyService, tokenService) {
        this.applyService = applyService;
        this.tokenService = tokenService;
        this.applyList = [];
        this.totalElements = 0;
        this.notify = null;
    }
    ApplyCompanyComponent.prototype.ngOnInit = function () {
        this.pageCategory({ page: 0, size: 3 });
    };
    ApplyCompanyComponent.prototype.pageCategory = function (nextPage) {
        var _this = this;
        this.idCompany = this.tokenService.getIdGuest();
        this.applyService.pageCompany(nextPage, this.idCompany).subscribe(function (data) {
            _this.applyList = data['content'];
            console.log(_this.applyList);
            _this.totalElements = data['totalElements'];
            console.log(_this.totalElements);
        });
    };
    ApplyCompanyComponent.prototype.nextPage = function (event) {
        console.log(event);
        var request = {};
        request['page'] = event.pageIndex.toString();
        request['size'] = event.pageSize.toString();
        this.pageCategory(request);
    };
    ApplyCompanyComponent.prototype.apcept = function (id) {
        var _this = this;
        // @ts-ignore
        var event = undefined;
        var changeStatus = new _model_changeStatusApply__WEBPACK_IMPORTED_MODULE_5__["ChangeStatusApply"](id, 1);
        this.applyService.apply(changeStatus).subscribe(function (data) {
            _this.notify = data.message;
            _this.pageCategory(event);
        });
    };
    ApplyCompanyComponent.prototype.reject = function (id) {
        var _this = this;
        var changeStatus = new _model_changeStatusApply__WEBPACK_IMPORTED_MODULE_5__["ChangeStatusApply"](id, 0);
        this.applyService.apply(changeStatus).subscribe(function (data) {
            _this.notify = data.message;
            _this.pageCategory(event);
        });
    };
    ApplyCompanyComponent.prototype.checkAccept = function (status) {
        if (status == "APCEPT" || status == "REJECT") {
            return false;
        }
        else {
            return true;
        }
    };
    ApplyCompanyComponent.ctorParameters = function () { return [
        { type: _service_apply_apply_service__WEBPACK_IMPORTED_MODULE_3__["ApplyService"] },
        { type: _security_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }
    ]; };
    ApplyCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-apply-company',
            template: _raw_loader_apply_company_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_apply_company_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_apply_apply_service__WEBPACK_IMPORTED_MODULE_3__["ApplyService"], _security_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], ApplyCompanyComponent);
    return ApplyCompanyComponent;
}());



/***/ }),

/***/ "XGBT":
/*!**********************************************!*\
  !*** ./src/app/dialog/dialog.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "XddI":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialogCreateCompany/dialog-create-company/dialog-create-company.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\" style=\"margin-top: 20px\">\r\n            <mat-card style=\"margin: 50px 0\">\r\n                <h4 class=\"alert alert-dark\">Bạn đã tạo mới tài khoản thành công.Vui lòng check Mail!</h4>\r\n                <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"false\">Đóng</button>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "Yd1Z":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/CV/dialog-create-cv/dialog-create-cv.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\" style=\"margin-top: 20px\">\r\n            <mat-card style=\"margin: 50px 0\">\r\n                <h4 class=\"alert alert-dark\">Hồ sơ của bạn đã tạo thành công!</h4>\r\n                <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"false\">Đóng</button>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "YmC8":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/company/recruitmentnew/update-recruitmentnew-company/update-recruitmentnew-company.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: UpdateRecruitmentnewCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRecruitmentnewCompanyComponent", function() { return UpdateRecruitmentnewCompanyComponent; });
/* harmony import */ var _raw_loader_update_recruitmentnew_company_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./update-recruitmentnew-company.component.html */ "UVmH");
/* harmony import */ var _update_recruitmentnew_company_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-recruitmentnew-company.component.scss */ "MmMu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_workingTime_working_time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/workingTime/working-time.service */ "oMkr");
/* harmony import */ var _service_field_field_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/field/field.service */ "3GXu");
/* harmony import */ var _service_vacancies_vacancies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/vacancies/vacancies.service */ "dL5G");
/* harmony import */ var _service_city_city_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/city/city.service */ "J7T8");
/* harmony import */ var _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/recruitmentNew/recruitment-new.service */ "FmPh");
/* harmony import */ var _security_token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../security/token.service */ "zdrf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UpdateRecruitmentnewCompanyComponent = /** @class */ (function () {
    function UpdateRecruitmentnewCompanyComponent(workingTimeService, fieldService, vacanciesService, cityService, recruitmentNewService, token, route, router) {
        this.workingTimeService = workingTimeService;
        this.fieldService = fieldService;
        this.vacanciesService = vacanciesService;
        this.cityService = cityService;
        this.recruitmentNewService = recruitmentNewService;
        this.token = token;
        this.route = route;
        this.router = router;
        this.form = {};
        this.status = "Mời bạn nhập thông tin cần sửa";
        this.workingTimes = [];
        this.fields = [];
        this.vacancies1 = [];
        this.cities = [];
        this.gender = [
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
        ];
        this.error1 = {
            message: "no_quantity"
        };
        this.error2 = {
            message: "no_salary"
        };
        this.success = {
            message: "yes"
        };
        this.showAllWorkingTime();
        this.showAllField();
        this.showAllVacancies();
        this.showAllCity();
    }
    UpdateRecruitmentnewCompanyComponent.prototype.showAllWorkingTime = function () {
        var _this = this;
        this.workingTimeService.showAll().subscribe(function (data) {
            _this.workingTimes = data;
        });
    };
    UpdateRecruitmentnewCompanyComponent.prototype.showAllField = function () {
        var _this = this;
        this.fieldService.showAll().subscribe(function (data1) {
            _this.fields = data1;
        });
    };
    UpdateRecruitmentnewCompanyComponent.prototype.showAllVacancies = function () {
        var _this = this;
        this.vacanciesService.showAll().subscribe(function (data2) {
            _this.vacancies1 = data2;
        });
    };
    UpdateRecruitmentnewCompanyComponent.prototype.showAllCity = function () {
        var _this = this;
        this.cityService.showAll().subscribe(function (data3) {
            _this.cities = data3;
        });
    };
    UpdateRecruitmentnewCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.recruitmentNewService.getRecruitmentNewById(this.id).subscribe(function (data) {
            _this.recruitmentNew = data;
        });
    };
    UpdateRecruitmentnewCompanyComponent.prototype.onUpdate = function () {
        var _this = this;
        this.recruitmentNewService.updateRecruitment(this.id, this.recruitmentNew).subscribe(function (data) {
            if (JSON.stringify(data) == JSON.stringify(_this.error1)) {
                // @ts-ignore
                _this.status = 'Vui lòng nhập số lượng người cần tuyển!';
            }
            if (JSON.stringify(data) == JSON.stringify(_this.error2)) {
                // @ts-ignore
                _this.status = 'Vui lòng nhập mức lương!';
            }
            if (JSON.stringify(data) == JSON.stringify(_this.success)) {
                // @ts-ignore
                _this.status = 'Cập nhật tin tuyển dụng thành công!';
            }
        });
    };
    UpdateRecruitmentnewCompanyComponent.ctorParameters = function () { return [
        { type: _service_workingTime_working_time_service__WEBPACK_IMPORTED_MODULE_3__["WorkingTimeService"] },
        { type: _service_field_field_service__WEBPACK_IMPORTED_MODULE_4__["FieldService"] },
        { type: _service_vacancies_vacancies_service__WEBPACK_IMPORTED_MODULE_5__["VacanciesService"] },
        { type: _service_city_city_service__WEBPACK_IMPORTED_MODULE_6__["CityService"] },
        { type: _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_7__["RecruitmentNewService"] },
        { type: _security_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    UpdateRecruitmentnewCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-update-recruitmentnew-company',
            template: _raw_loader_update_recruitmentnew_company_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_update_recruitmentnew_company_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_workingTime_working_time_service__WEBPACK_IMPORTED_MODULE_3__["WorkingTimeService"],
            _service_field_field_service__WEBPACK_IMPORTED_MODULE_4__["FieldService"],
            _service_vacancies_vacancies_service__WEBPACK_IMPORTED_MODULE_5__["VacanciesService"],
            _service_city_city_service__WEBPACK_IMPORTED_MODULE_6__["CityService"],
            _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_7__["RecruitmentNewService"],
            _security_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], UpdateRecruitmentnewCompanyComponent);
    return UpdateRecruitmentnewCompanyComponent;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: appRoutes, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var projects_ngx_audio_player_src_public_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! projects/ngx-audio-player/src/public_api */ "oilH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _security_auth_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./security/auth.interceptor */ "KyF4");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _company_detail_company_detail_company_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./company/detail-company/detail-company.component */ "pX3q");
/* harmony import */ var _company_recruitmentnew_list_recruitmentnew_company_list_recruitmentnew_company_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./company/recruitmentnew/list-recruitmentnew-company/list-recruitmentnew-company.component */ "EZ6k");
/* harmony import */ var _company_register_company_register_company_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./company/register-company/register-company.component */ "d9s0");
/* harmony import */ var _upload_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./upload/upload-image/upload-image.component */ "D6Qw");
/* harmony import */ var _account_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./account/change-password/change-password.component */ "R01X");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _company_recruitmentnew_create_recruitmentnew_create_recruitmentnew_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./company/recruitmentnew/create-recruitmentnew/create-recruitmentnew.component */ "ean+");
/* harmony import */ var _company_recruitmentnew_update_recruitmentnew_company_update_recruitmentnew_company_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./company/recruitmentnew/update-recruitmentnew-company/update-recruitmentnew-company.component */ "YmC8");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./dialog/dialog.component */ "ZYp2");
/* harmony import */ var _user_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./user/register-user/register-user.component */ "6UB0");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _user_recruitmentnew_list_recruitment_user_list_recruitment_user_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./user/recruitmentnew/list-recruitment-user/list-recruitment-user.component */ "0x/x");
/* harmony import */ var _user_CV_create_cv_create_cv_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./user/CV/create-cv/create-cv.component */ "PXlN");
/* harmony import */ var _user_apply_recruitmentnew_apply_recruitmentnew_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./user/apply-recruitmentnew/apply-recruitmentnew.component */ "6aLj");
/* harmony import */ var _dialog_dialogApplyFail_dialog_apply_fail_dialog_apply_fail_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./dialog/dialogApplyFail/dialog-apply-fail/dialog-apply-fail.component */ "NUjO");
/* harmony import */ var _dialog_dialogApplyFail_dialog_apply_dialog_apply_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./dialog/dialogApplyFail/dialog-apply/dialog-apply.component */ "pA9W");
/* harmony import */ var _admin_list_account_list_account_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./admin/list-account/list-account.component */ "lF5L");
/* harmony import */ var _admin_lock_unlock_recruiment_lock_unlock_recruiment_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./admin/lock-unlock-recruiment/lock-unlock-recruiment.component */ "g0Yg");
/* harmony import */ var _user_CV_detail_cv_detail_cv_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./user/CV/detail-cv/detail-cv.component */ "4T0K");
/* harmony import */ var _user_CV_edit_cv_edit_cv_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./user/CV/edit-cv/edit-cv.component */ "I/eY");
/* harmony import */ var _company_recruitmentnew_detail_recruitmentnew_detail_recruitmentnew_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./company/recruitmentnew/detail-recruitmentnew/detail-recruitmentnew.component */ "wR/+");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _dialog_dialogCreateCompany_dialog_create_company_dialog_create_company_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./dialog/dialogCreateCompany/dialog-create-company/dialog-create-company.component */ "S4+S");
/* harmony import */ var _company_list_company_list_company_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./company/list-company/list-company.component */ "r+ec");
/* harmony import */ var _user_active_status_active_status_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./user/active-status/active-status.component */ "FgHN");
/* harmony import */ var _dialog_apply_now_apply_now_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./dialog/apply-now/apply-now.component */ "0jf1");
/* harmony import */ var _company_web_company_web_company_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./company/web-company/web-company.component */ "ad86");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _user_apply_list_apply_list_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./user/apply-list/apply-list.component */ "r+kn");
/* harmony import */ var _dialog_CV_dialog_create_cv_dialog_create_cv_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./dialog/CV/dialog-create-cv/dialog-create-cv.component */ "/Vn9");
/* harmony import */ var _dialog_CV_dialog_edit_cv_dialog_edit_cv_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./dialog/CV/dialog-edit-cv/dialog-edit-cv.component */ "lIeo");
/* harmony import */ var _upload_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./upload/upload-file/upload-file.component */ "uIEu");
/* harmony import */ var _company_apply_company_apply_company_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./company/apply-company/apply-company.component */ "Wu36");
/* harmony import */ var _dialog_CV_dialog_no_create_dialog_no_create_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./dialog/CV/dialog-no-create/dialog-no-create.component */ "81uI");
/* harmony import */ var _dialog_dialog_match_dialog_match_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./dialog/dialog-match/dialog-match.component */ "erfy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



Object(_angular_common__WEBPACK_IMPORTED_MODULE_66__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2___default.a);
































































var appRoutes = [
    { path: 'register-user', component: _user_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_40__["RegisterUserComponent"] },
    { path: 'register-company', component: _company_register_company_register_company_component__WEBPACK_IMPORTED_MODULE_31__["RegisterCompanyComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"] },
    { path: 'list-recruitmentnew-company', component: _company_recruitmentnew_list_recruitmentnew_company_list_recruitmentnew_company_component__WEBPACK_IMPORTED_MODULE_30__["ListRecruitmentnewCompanyComponent"] },
    { path: 'list-recruitmentnew-user/:id', component: _user_recruitmentnew_list_recruitment_user_list_recruitment_user_component__WEBPACK_IMPORTED_MODULE_42__["ListRecruitmentUserComponent"] },
    { path: 'list-company', component: _company_list_company_list_company_component__WEBPACK_IMPORTED_MODULE_54__["ListCompanyComponent"] },
    { path: 'detail-company', component: _company_detail_company_detail_company_component__WEBPACK_IMPORTED_MODULE_29__["DetailCompanyComponent"] },
    { path: 'change-password', component: _account_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_33__["ChangePasswordComponent"] },
    { path: 'create-cv', component: _user_CV_create_cv_create_cv_component__WEBPACK_IMPORTED_MODULE_43__["CreateCvComponent"] },
    { path: 'update-cv/:id', component: _user_CV_edit_cv_edit_cv_component__WEBPACK_IMPORTED_MODULE_50__["EditCvComponent"] },
    { path: 'detail-cv/:id', component: _user_CV_detail_cv_detail_cv_component__WEBPACK_IMPORTED_MODULE_49__["DetailCvComponent"] },
    { path: 'create-recruitmentnew', component: _company_recruitmentnew_create_recruitmentnew_create_recruitmentnew_component__WEBPACK_IMPORTED_MODULE_36__["CreateRecruitmentnewComponent"] },
    { path: 'update-recruitmentnew/:id', component: _company_recruitmentnew_update_recruitmentnew_company_update_recruitmentnew_company_component__WEBPACK_IMPORTED_MODULE_37__["UpdateRecruitmentnewCompanyComponent"] },
    { path: 'register-user', component: _user_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_40__["RegisterUserComponent"] },
    { path: 'active-status/:id', component: _user_active_status_active_status_component__WEBPACK_IMPORTED_MODULE_55__["ActiveStatusComponent"] },
    { path: 'apply-list', component: _user_apply_list_apply_list_component__WEBPACK_IMPORTED_MODULE_59__["ApplyListComponent"] },
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_52__["HomepageComponent"] },
    { path: 'list-account', component: _admin_list_account_list_account_component__WEBPACK_IMPORTED_MODULE_47__["ListAccountComponent"] },
    { path: 'lockUnlockAdmin', component: _admin_lock_unlock_recruiment_lock_unlock_recruiment_component__WEBPACK_IMPORTED_MODULE_48__["LockUnlockRecruimentComponent"] },
    { path: 'web-company/:id', component: _company_web_company_web_company_component__WEBPACK_IMPORTED_MODULE_57__["WebCompanyComponent"] },
    { path: 'apply-company', component: _company_apply_company_apply_company_component__WEBPACK_IMPORTED_MODULE_63__["ApplyCompanyComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_26__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"],
                _company_detail_company_detail_company_component__WEBPACK_IMPORTED_MODULE_29__["DetailCompanyComponent"],
                _company_recruitmentnew_list_recruitmentnew_company_list_recruitmentnew_company_component__WEBPACK_IMPORTED_MODULE_30__["ListRecruitmentnewCompanyComponent"],
                _company_register_company_register_company_component__WEBPACK_IMPORTED_MODULE_31__["RegisterCompanyComponent"],
                _upload_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_32__["UploadImageComponent"],
                _company_recruitmentnew_create_recruitmentnew_create_recruitmentnew_component__WEBPACK_IMPORTED_MODULE_36__["CreateRecruitmentnewComponent"],
                _company_recruitmentnew_update_recruitmentnew_company_update_recruitmentnew_company_component__WEBPACK_IMPORTED_MODULE_37__["UpdateRecruitmentnewCompanyComponent"],
                _account_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_33__["ChangePasswordComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_39__["DialogComponent"],
                _user_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_40__["RegisterUserComponent"],
                _user_recruitmentnew_list_recruitment_user_list_recruitment_user_component__WEBPACK_IMPORTED_MODULE_42__["ListRecruitmentUserComponent"],
                _user_CV_create_cv_create_cv_component__WEBPACK_IMPORTED_MODULE_43__["CreateCvComponent"],
                _user_apply_recruitmentnew_apply_recruitmentnew_component__WEBPACK_IMPORTED_MODULE_44__["ApplyRecruitmentnewComponent"],
                _dialog_dialogApplyFail_dialog_apply_fail_dialog_apply_fail_component__WEBPACK_IMPORTED_MODULE_45__["DialogApplyFailComponent"],
                _dialog_dialogApplyFail_dialog_apply_dialog_apply_component__WEBPACK_IMPORTED_MODULE_46__["DialogApplyComponent"],
                _user_CV_edit_cv_edit_cv_component__WEBPACK_IMPORTED_MODULE_50__["EditCvComponent"],
                _user_CV_detail_cv_detail_cv_component__WEBPACK_IMPORTED_MODULE_49__["DetailCvComponent"],
                _company_recruitmentnew_detail_recruitmentnew_detail_recruitmentnew_component__WEBPACK_IMPORTED_MODULE_51__["DetailRecruitmentnewComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_52__["HomepageComponent"],
                _dialog_dialogCreateCompany_dialog_create_company_dialog_create_company_component__WEBPACK_IMPORTED_MODULE_53__["DialogCreateCompanyComponent"],
                _company_list_company_list_company_component__WEBPACK_IMPORTED_MODULE_54__["ListCompanyComponent"],
                _user_active_status_active_status_component__WEBPACK_IMPORTED_MODULE_55__["ActiveStatusComponent"],
                _admin_list_account_list_account_component__WEBPACK_IMPORTED_MODULE_47__["ListAccountComponent"],
                _admin_lock_unlock_recruiment_lock_unlock_recruiment_component__WEBPACK_IMPORTED_MODULE_48__["LockUnlockRecruimentComponent"],
                _dialog_apply_now_apply_now_component__WEBPACK_IMPORTED_MODULE_56__["ApplyNowComponent"],
                _company_web_company_web_company_component__WEBPACK_IMPORTED_MODULE_57__["WebCompanyComponent"],
                _user_apply_list_apply_list_component__WEBPACK_IMPORTED_MODULE_59__["ApplyListComponent"],
                _dialog_CV_dialog_create_cv_dialog_create_cv_component__WEBPACK_IMPORTED_MODULE_60__["DialogCreateCvComponent"],
                _dialog_CV_dialog_edit_cv_dialog_edit_cv_component__WEBPACK_IMPORTED_MODULE_61__["DialogEditCvComponent"],
                _upload_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_62__["UploadFileComponent"],
                _company_apply_company_apply_company_component__WEBPACK_IMPORTED_MODULE_63__["ApplyCompanyComponent"],
                _dialog_CV_dialog_no_create_dialog_no_create_component__WEBPACK_IMPORTED_MODULE_64__["DialogNoCreateComponent"],
                _dialog_dialog_match_dialog_match_component__WEBPACK_IMPORTED_MODULE_65__["DialogMatchComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_38__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                projects_ngx_audio_player_src_public_api__WEBPACK_IMPORTED_MODULE_13__["NgxAudioPlayerModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__["AngularFireStorageModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_19__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_20__["environment"].firebaseConfig),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { useHash: false }), _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MatDatepickerModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_41__["MatBadgeModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_58__["MatSliderModule"]
            ],
            providers: [_security_auth_interceptor__WEBPACK_IMPORTED_MODULE_25__["httpInterceptorProvider"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: "en-US" }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ZTFi":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ZYp2":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _raw_loader_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dialog.component.html */ "Ik+H");
/* harmony import */ var _dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog.component.scss */ "XGBT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.ctorParameters = function () { return []; };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dialog',
            template: _raw_loader_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "aQA9":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/web-company/web-company.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n<div class=\"container\">\r\n    <section class=\"member-details\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3 col-md-4\">\r\n                    <div class=\"card border-0 shadow\">\r\n                        <img src=\"{{companyCurrent.avatar}}\" alt=\"...\">\r\n                        <div class=\"card-body p-1-9 p-xl-5\">\r\n                            <div class=\"mb-4\">\r\n                                <h3 class=\"h4 mb-0\">{{companyCurrent.name}}</h3>\r\n                                <span class=\"text-primary\">MSDN: {{companyCurrent.codeCompany}}</span>\r\n                            </div>\r\n                            <ul class=\"list-unstyled mb-4\">\r\n                                <li class=\"mb-3\"><a href=\"#!\"><i\r\n                                        class=\"far fa-envelope display-25 me-3 text-secondary\"></i>{{companyCurrent.account.username}}</a>\r\n                                </li>\r\n                                <li class=\"mb-3\"><a href=\"#!\"><i\r\n                                        class=\"fas fa-mobile-alt display-25 me-3 text-secondary\"></i>{{companyCurrent.phone}}\r\n                                </a></li>\r\n                                <li><a href=\"#!\"><i\r\n                                        class=\"fas fa-map-marker-alt display-25 me-3 text-secondary\"></i>{{companyCurrent.address}}\r\n                                </a></li>\r\n                            </ul>\r\n                            <ul class=\"social-icon-style2 ps-0\">\r\n                                <li><a href=\"#!\" class=\"rounded-3\"><i class=\"fab fa-facebook-f\"></i></a></li>\r\n                                <li><a href=\"#!\" class=\"rounded-3\"><i class=\"fab fa-twitter\"></i></a></li>\r\n                                <li><a href=\"#!\" class=\"rounded-3\"><i class=\"fab fa-youtube\"></i></a></li>\r\n                                <li><a href=\"#!\" class=\"rounded-3\"><i class=\"fab fa-linkedin-in\"></i></a></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-9 col-md-8\">\r\n                    <div class=\"member_desc\">\r\n                        <h4 style=\"font-style: italic\">{{companyCurrent.name}}</h4>\r\n                        <p>\r\n                            {{companyCurrent.description}}\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"bg-image \"\r\n                         style=\"background-image: url('https://www.bootdey.com/img/Content/bg_element.jpg');\">\r\n                        <div class=\"member_contact\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-4  mb-3 mb-lg-0\">\r\n                                    <div class=\"media-box\">\r\n                                        <div class=\"media-icon\">\r\n                                            <i class=\"fa fa-tablet\" aria-hidden=\"true\"></i>\r\n                                        </div>\r\n                                        <div class=\"media-content\">\r\n                                            <h5>Phone</h5>\r\n                                            <p><a href=\"\">{{companyCurrent.phone}}</a></p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-4  mb-3 mb-lg-0\">\r\n                                    <div class=\"media-box\">\r\n                                        <div class=\"media-icon\">\r\n                                            <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\r\n                                        </div>\r\n                                        <div class=\"media-content\">\r\n                                            <h5>Email</h5>\r\n                                            <p><a href=\"\">{{companyCurrent.account.username}}</a></p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-4\">\r\n                                    <div class=\"social-icons\">\r\n                                        <button class=\"btn btn-social outlined\"><i class=\"fa fa-facebook-f\"></i>\r\n                                        </button>\r\n                                        <button class=\"btn btn-social outlined\"><i class=\"fa fa-twitter\"></i></button>\r\n                                        <button class=\"btn btn-social outlined\"><i class=\"fa fa-linkedin\"></i></button>\r\n                                        <button class=\"btn btn-social outlined\"><i class=\"fa fa-pinterest-p\"></i>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"member_desc\">\r\n                        <section class=\"home-service-area ptb-100\">\r\n                            <div class=\"container\">\r\n                                <div class=\"section-title\">\r\n                                    <span>Smart Services</span>\r\n                                    <h2>Tuyển Dụng</h2>\r\n                                    <p> Khi bạn gặp khó khăn hay bế tắc trong công việc thì đừng oán trách số phận. Điều bạn học được khi gặp trắc trở chính là kinh nghiệm\r\n                                        và bài học để lần sau không bao giờ mắc phải nữa.</p>\r\n                                      <p>- Bill Gates (Chủ tịch tập đoàn Microsoft) - </p>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-4 col-sm-6\" *ngFor=\"let rcm of recruitmentNews\">\r\n                                        <div class=\"single-service\">\r\n                                            <div class=\"service-img\">\r\n                                                <img src=\"{{companyCurrent.avatar}}\" alt=\"service\">\r\n                                            </div>\r\n                                            <div class=\"service-content\">\r\n                                                <h3>{{rcm.title}}</h3>\r\n                                                <p><b>Nơi làm việc:</b> {{rcm.city.name}}</p>\r\n                                                <p><b>Thời gian làm việc:</b> {{rcm.workingTime.name}}</p>\r\n                                                <p><b>Ngày ứng tuyển:</b> {{rcm.expDate}}</p>\r\n                                                <a class=\"line-bnt\"\r\n                                                   (click)=\"openDialogApply(rcm.id)\"><span\r\n                                                        class=\"btn btn-link\">Chi tiết</span>\r\n                                                </a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </section>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>\r\n");

/***/ }),

/***/ "ad86":
/*!**************************************************************!*\
  !*** ./src/app/company/web-company/web-company.component.ts ***!
  \**************************************************************/
/*! exports provided: WebCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebCompanyComponent", function() { return WebCompanyComponent; });
/* harmony import */ var _raw_loader_web_company_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./web-company.component.html */ "aQA9");
/* harmony import */ var _web_company_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-company.component.scss */ "FqlH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_company_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/company/company.service */ "KXKP");
/* harmony import */ var _security_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../security/token.service */ "zdrf");
/* harmony import */ var _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/recruitmentNew/recruitment-new.service */ "FmPh");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _user_apply_recruitmentnew_apply_recruitmentnew_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../user/apply-recruitmentnew/apply-recruitmentnew.component */ "6aLj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var WebCompanyComponent = /** @class */ (function () {
    function WebCompanyComponent(companyService, tokenService, activeRouter, recruitmentNewService, dialog) {
        var _this = this;
        this.companyService = companyService;
        this.tokenService = tokenService;
        this.activeRouter = activeRouter;
        this.recruitmentNewService = recruitmentNewService;
        this.dialog = dialog;
        this.recruitmentNews = [];
        this.id = 0;
        this.sub = this.activeRouter.paramMap.subscribe(function (paramMap) {
            _this.id = Number(paramMap.get('id'));
            _this.emailCompany = tokenService.getNameKey();
            _this.companyService.getCompanyNameById(_this.id).subscribe(function (data) {
                console.log(data);
                _this.companyCurrent = data;
            });
        });
    }
    WebCompanyComponent.prototype.ngOnInit = function () {
        this.getListRecruitmentNew();
    };
    WebCompanyComponent.prototype.getListRecruitmentNew = function () {
        var _this = this;
        this.recruitmentNewService.showAllListRecruitmentNew(this.id).subscribe(function (listRN) {
            _this.recruitmentNews = listRN;
            console.log(listRN);
        });
    };
    WebCompanyComponent.prototype.openDialogApply = function (id) {
        var dialogRef = this.dialog.open(_user_apply_recruitmentnew_apply_recruitmentnew_component__WEBPACK_IMPORTED_MODULE_7__["ApplyRecruitmentnewComponent"], {
            data: {
                id: id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    WebCompanyComponent.ctorParameters = function () { return [
        { type: _service_company_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
        { type: _security_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_5__["RecruitmentNewService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
    ]; };
    WebCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-web-company',
            template: _raw_loader_web_company_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_web_company_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_company_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"],
            _security_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_5__["RecruitmentNewService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], WebCompanyComponent);
    return WebCompanyComponent;
}());



/***/ }),

/***/ "bFRz":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/recruitmentnew/create-recruitmentnew/create-recruitmentnew.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Start Page Title Area -->\r\n<div class=\"page-title-area\" style=\"height: 439px\">\r\n    <div class=\"container\">\r\n        <div class=\"page-title-content\">\r\n            <h2>TẠO MỚI TIN TUYỂN DỤNG</h2>\r\n            <ul>\r\n                <li>\r\n                    <a href=\"index.html\">\r\n                        Trang chủ\r\n                    </a>\r\n                </li>\r\n\r\n                <li class=\"active\">Tìm kiếm</li>\r\n\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"page-shape\">\r\n        <div class=\"shape1\">\r\n            <img src=\"assets/images/shape/1.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape3\">\r\n            <img src=\"assets/images/shape/3.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape4\">\r\n            <img src=\"assets/images/shape/4.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape5\">\r\n            <img src=\"assets/images/shape/5.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape6\">\r\n            <img src=\"assets/images/shape/6.png\" alt=\"shape\">\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Page Title Area -->\r\n<!--create-recruitmentnew-->\r\n<section class=\"signup-area ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <div class=\"signup-form\">\r\n                    <div class=\"section-tittle text-center\">\r\n                        <h2>Tạo mới</h2>\r\n                        <p>Tạo mới tin tuyển dụng</p>\r\n                    </div>\r\n                    <form #f=\"ngForm\" (ngSubmit)=\"f.form.valid &&ngSubmit()\" novalidate>\r\n                        <div class=\"row\">\r\n                            <mat-error class=\"alert alert-primary\" style=\"text-align: center\">{{status}}</mat-error>\r\n\r\n                            <!--tiêu đề-->\r\n                            <div class=\"col-md-12 col-sm-12\">\r\n                                <mat-form-field style=\"width: 100%\" appearance=\"outline\">\r\n                                    <mat-label>Tiêu Đề:</mat-label>\r\n                                    <input matInput placeholder=\"Tiêu đề ...\" name=\"title\" [(ngModel)]=\"form.title\"\r\n                                           #title=\"ngModel\" required>\r\n                                    <mat-icon color=\"#051242\" matSuffix>subtitles</mat-icon>\r\n                                    <mat-error *ngIf=\"title.hasError('required')\">Không được để trống!</mat-error>\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <!--Thời Gian Làm Việc-->\r\n                            <div class=\"col-md-6 col-sm-6\">\r\n                                <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>Thời Gian Làm Việc</mat-label>\r\n                                    <mat-select [(ngModel)]=\"form.workingTime\" style=\"width: 100%\" name=\"workingTime\">\r\n                                        <mat-option *ngFor=\"let workingTime of workingTimes\"\r\n                                                    [value]=\"workingTime.id\">{{workingTime.name}}</mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <!--Lĩnh Vực Công Việc-->\r\n                            <div class=\"col-md-6 col-sm-6\">\r\n                                <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>Lĩnh Vực Công Việc</mat-label>\r\n                                    <mat-select [(ngModel)]=\"form.field\" style=\"width: 100%\" name=\"field\">\r\n                                        <mat-option *ngFor=\"let field of fields\"\r\n                                                    [value]=\"field.id\">{{field.name}}</mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <!-- Vị Trí Tuyển Dụng-->\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>Vị Trí Tuyển Dụng</mat-label>\r\n                                <mat-select [(ngModel)]=\"form.vacancies\" style=\"width: 100%\" name=\"vacancies\">\r\n                                    <mat-option *ngFor=\"let vacancies of vacancies1\"\r\n                                                [value]=\"vacancies.id\">{{vacancies.name}}</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n\r\n\r\n                            <!--hạn nộp hồ sơ-->\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>Hạn nộp hồ sơ</mat-label>\r\n                                <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"form.expDate\">\r\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #picker></mat-datepicker>\r\n                            </mat-form-field>\r\n\r\n                            <!--description-->\r\n                            <div class=\"col-md-6 col-sm-6\">\r\n                                <mat-form-field style=\"width: 100%\" appearance=\"outline\">\r\n                                    <mat-label>Mô Tả:</mat-label>\r\n                                    <input matInput placeholder=\"Mô tả ...\" name=\"description\"\r\n                                           [(ngModel)]=\"form.description\"\r\n                                           #description=\"ngModel\" required>\r\n                                    <mat-icon color=\"#051242\" matSuffix>description</mat-icon>\r\n                                    <mat-error *ngIf=\"description.hasError('required')\">Viết mô tả và chú thích công\r\n                                        việc\r\n                                    </mat-error>\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <!--mức lương -->\r\n                            <div class=\"col-md-6 col-sm-6\">\r\n                                <mat-form-field style=\"width: 100%\" appearance=\"outline\">\r\n                                    <mat-label>Mức Lương:</mat-label>\r\n                                    <input matInput placeholder=\"Mức Lương...\" name=\"description\"\r\n                                           [(ngModel)]=\"form.salary\"\r\n                                           #salary=\"ngModel\" required>\r\n                                    <mat-icon color=\"#051242\" matSuffix>local_atm</mat-icon>\r\n                                    <mat-error *ngIf=\"salary.hasError('required')\">Viết mức lương\r\n                                    </mat-error>\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <!--số lượng nhân sự -->\r\n                            <div class=\"col-md-12 col-sm-12\">\r\n                                <mat-form-field style=\"width: 100%\" appearance=\"outline\">\r\n                                    <mat-label>Số Lượng Ứng Tuyển :</mat-label>\r\n                                    <input matInput placeholder=\"Số lượng ...\" name=\"quantity\"\r\n                                           [(ngModel)]=\"form.quantity\"\r\n                                           #quantity=\"ngModel\" required>\r\n                                    <mat-icon color=\"#051242\" matSuffix>person_add_alt</mat-icon>\r\n                                    <mat-error *ngIf=\"quantity.hasError('required')\">Bắt buộc phải nhập số lượng người\r\n                                        ứng tuyển\r\n                                    </mat-error>\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <!--giới tính-->\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>Giới Tính Tuyển Dụng</mat-label>\r\n                                <mat-select [(ngModel)]=\"form.gender\" style=\"width: 100%\" name=\"gender\">\r\n                                    <mat-option *ngFor=\"let gen of gender\" [value]=\"gen.id\">{{gen.name}}</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n\r\n\r\n                            <!--nơi làm việc-->\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>Nơi Làm Việc</mat-label>\r\n                                <mat-select [(ngModel)]=\"form.city\" style=\"width: 100%\" name=\"city\">\r\n                                    <mat-option *ngFor=\"let city of cities\" [value]=\"city.id\">{{city.name}}</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n                        <div class=\"col-12 text-center\">\r\n                            <button type=\"submit\" mat-stroked-button\r\n                                    class=\"mat-button-toggle-group btn-outline-primary\">\r\n                                Đăng bài\r\n                                <mat-icon matSuffix>add</mat-icon>\r\n                            </button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<!--create-recruitmentnew-->\r\n");

/***/ }),

/***/ "cAuZ":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.column {\n  float: left;\n  width: 33.3%;\n  padding: 10px 10px;\n}\n.card {\n  box-shadow: 12px 12px 2px 1px rgba(60, 84, 255, 0.94);\n  text-align: center;\n  background-color: #17e8e8;\n}\ndiv.card {\n  padding: 10px;\n}\nbody {\n  background: #f5f5f5;\n  margin-top: 20px;\n}\n/* ===== Career ===== */\n.career-form {\n  background-color: hotpink;\n  border-radius: 5px;\n  padding: 0 16px;\n}\n.career-form .form-control {\n  background-color: rgba(255, 255, 255, 0.2);\n  border: 0;\n  padding: 12px 15px;\n  color: #fff;\n}\n.career-form .form-control::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #fff;\n}\n.career-form .form-control::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #fff;\n}\n.career-form .form-control:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #fff;\n}\n.career-form .form-control:-moz-placeholder {\n  /* Firefox 18- */\n  color: #fff;\n}\n.career-form .custom-select {\n  background-color: rgba(255, 255, 255, 0.2);\n  border: 0;\n  padding: 12px 15px;\n  color: #fff;\n  width: 100%;\n  border-radius: 5px;\n  text-align: left;\n  height: auto;\n  background-image: none;\n}\n.career-form .custom-select:focus {\n  box-shadow: none;\n}\n.career-form .select-container {\n  position: relative;\n}\n.career-form .select-container:before {\n  position: absolute;\n  right: 15px;\n  top: calc(50% - 14px);\n  font-size: 18px;\n  color: #ffffff;\n  content: \"\";\n  font-family: \"Material-Design-Iconic-Font\";\n}\n.filter-result .job-box {\n  box-shadow: 0 0 35px 0 rgba(130, 130, 130, 0.2);\n  border-radius: 10px;\n  padding: 10px 35px;\n}\nul {\n  list-style: none;\n}\n.list-disk li {\n  list-style: none;\n  margin-bottom: 12px;\n}\n.list-disk li:last-child {\n  margin-bottom: 0;\n}\n.job-box .img-holder {\n  height: 65px;\n  width: 65px;\n  background-color: #4e63d7;\n  background-image: linear-gradient(to right, rgba(78, 99, 215, 0.9) 0%, #5a85dd 100%);\n  font-family: \"Open Sans\", sans-serif;\n  color: #fff;\n  font-size: 22px;\n  font-weight: 700;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 65px;\n}\n.career-title {\n  background-color: #4e63d7;\n  color: #fff;\n  padding: 15px;\n  text-align: center;\n  border-radius: 10px 10px 0 0;\n  background-image: linear-gradient(to right, rgba(78, 99, 215, 0.9) 0%, #5a85dd 100%);\n}\n.job-overview {\n  box-shadow: 0 0 35px 0 rgba(130, 130, 130, 0.2);\n  border-radius: 10px;\n}\n@media (min-width: 992px) {\n  .job-overview {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 70px;\n  }\n}\n.job-overview .job-detail ul {\n  margin-bottom: 28px;\n}\n.job-overview .job-detail ul li {\n  opacity: 0.75;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n.job-overview .job-detail ul li i {\n  font-size: 20px;\n  position: relative;\n  top: 1px;\n}\n.job-overview .overview-bottom,\n.job-overview .overview-top {\n  padding: 35px;\n}\n.job-content ul li {\n  font-weight: 600;\n  opacity: 0.75;\n  border-bottom: 1px solid #ccc;\n  padding: 10px 5px;\n}\n@media (min-width: 768px) {\n  .job-content ul li {\n    border-bottom: 0;\n    padding: 0;\n  }\n}\n.job-content ul li i {\n  font-size: 20px;\n  position: relative;\n  top: 1px;\n}\n.mb-30 {\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUFBO0VBQ0UscURBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBR0Y7QUFEQTtFQUNFLGFBQUE7QUFJRjtBQURBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQUlGO0FBRkEsdUJBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBS0Y7QUFGQTtFQUNFLDBDQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUtGO0FBRkE7RUFDRSx3QkFBQTtFQUNBLFdBQUE7QUFLRjtBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBS0Y7QUFGQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBS0Y7QUFGQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUtGO0FBRkE7RUFDRSwwQ0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUtGO0FBRkE7RUFFRSxnQkFBQTtBQUtGO0FBRkE7RUFDRSxrQkFBQTtBQUtGO0FBRkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0FBS0Y7QUFGQTtFQUVFLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUtGO0FBRkE7RUFDRSxnQkFBQTtBQUtGO0FBRkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBS0Y7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7QUFGQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFFQSxvRkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUdBLGFBQUE7RUFHQSx1QkFBQTtFQUdBLG1CQUFBO0VBQ0EsbUJBQUE7QUFLRjtBQUZBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFFQSxvRkFBQTtBQUtGO0FBRkE7RUFFRSwrQ0FBQTtFQUNBLG1CQUFBO0FBS0Y7QUFGQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxnQkFBQTtJQUNBLFNBQUE7RUFLRjtBQUNGO0FBRkE7RUFDRSxtQkFBQTtBQUlGO0FBREE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUlGO0FBREE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBSUY7QUFEQTs7RUFFRSxhQUFBO0FBSUY7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFJRjtBQURBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLFVBQUE7RUFJRjtBQUNGO0FBREE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBR0Y7QUFEQTtFQUNFLG1CQUFBO0FBSUYiLCJmaWxlIjoiaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzMy4zJTtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIGJveC1zaGFkb3c6IDEycHggMTJweCAycHggMXB4IHJnYmEoNjAsIDg0LCAyNTUsIDAuOTQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2U4ZTg7XG59XG5cbmRpdi5jYXJkIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi8qID09PT09IENhcmVlciA9PT09PSAqL1xuLmNhcmVlci1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaG90cGluaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG5cbi5jYXJlZXItZm9ybSAuZm9ybS1jb250cm9sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jYXJlZXItZm9ybSAuZm9ybS1jb250cm9sOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNhcmVlci1mb3JtIC5mb3JtLWNvbnRyb2w6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNhcmVlci1mb3JtIC5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSUUgMTArICovXG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2FyZWVyLWZvcm0gLmZvcm0tY29udHJvbDotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jYXJlZXItZm9ybSAuY3VzdG9tLXNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbi5jYXJlZXItZm9ybSAuY3VzdG9tLXNlbGVjdDpmb2N1cyB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNhcmVlci1mb3JtIC5zZWxlY3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZWVyLWZvcm0gLnNlbGVjdC1jb250YWluZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiBjYWxjKDUwJSAtIDE0cHgpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjb250ZW50OiBcIu+LuVwiO1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnRcIjtcbn1cblxuLmZpbHRlci1yZXN1bHQgLmpvYi1ib3gge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzNXB4IDAgcmdiYSgxMzAsIDEzMCwgMTMwLCAwLjIpO1xuICBib3gtc2hhZG93OiAwIDAgMzVweCAwIHJnYmEoMTMwLCAxMzAsIDEzMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweCAzNXB4O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5saXN0LWRpc2sgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4ubGlzdC1kaXNrIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uam9iLWJveCAuaW1nLWhvbGRlciB7XG4gIGhlaWdodDogNjVweDtcbiAgd2lkdGg6IDY1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTYzZDc7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKHJnYmEoNzgsIDk5LCAyMTUsIDAuOSkpLCB0bygjNWE4NWRkKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg3OCwgOTksIDIxNSwgMC45KSAwJSwgIzVhODVkZCAxMDAlKTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2NXB4O1xufVxuXG4uY2FyZWVyLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlNjNkNztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20ocmdiYSg3OCwgOTksIDIxNSwgMC45KSksIHRvKCM1YTg1ZGQpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDc4LCA5OSwgMjE1LCAwLjkpIDAlLCAjNWE4NWRkIDEwMCUpO1xufVxuXG4uam9iLW92ZXJ2aWV3IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMzVweCAwIHJnYmEoMTMwLCAxMzAsIDEzMCwgMC4yKTtcbiAgYm94LXNoYWRvdzogMCAwIDM1cHggMCByZ2JhKDEzMCwgMTMwLCAxMzAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuam9iLW92ZXJ2aWV3IHtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDcwcHg7XG4gIH1cbn1cbi5qb2Itb3ZlcnZpZXcgLmpvYi1kZXRhaWwgdWwge1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuXG4uam9iLW92ZXJ2aWV3IC5qb2ItZGV0YWlsIHVsIGxpIHtcbiAgb3BhY2l0eTogMC43NTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmpvYi1vdmVydmlldyAuam9iLWRldGFpbCB1bCBsaSBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xufVxuXG4uam9iLW92ZXJ2aWV3IC5vdmVydmlldy1ib3R0b20sXG4uam9iLW92ZXJ2aWV3IC5vdmVydmlldy10b3Age1xuICBwYWRkaW5nOiAzNXB4O1xufVxuXG4uam9iLWNvbnRlbnQgdWwgbGkge1xuICBmb250LXdlaWdodDogNjAwO1xuICBvcGFjaXR5OiAwLjc1O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMTBweCA1cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuam9iLWNvbnRlbnQgdWwgbGkge1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuLmpvYi1jb250ZW50IHVsIGxpIGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxcHg7XG59XG5cbi5tYi0zMCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59Il19 */");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    apiBaseUrl: 'https://c821h1.herokuapp.com',
    firebaseConfig: {
        apiKey: "AIzaSyD8-xixCVrK-1RrA6G-Ob5j88HoD72s0g0",
        authDomain: "employee-app-f2600.firebaseapp.com",
        projectId: "employee-app-f2600",
        storageBucket: "employee-app-f2600.appspot.com",
        messagingSenderId: "652664345747",
        appId: "1:652664345747:web:40dd0895de56628b33e966",
        measurementId: "G-853TR2HBGP"
    }
};


/***/ }),

/***/ "cxox":
/*!******************************************!*\
  !*** ./src/app/service/cv/cv.service.ts ***!
  \******************************************/
/*! exports provided: CVService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CVService", function() { return CVService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CVService = /** @class */ (function () {
    function CVService(http) {
        this.http = http;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl;
    }
    CVService.prototype.createCV = function (cv) {
        return this.http.post(this.apiServerUrl + "/CV/createCV", cv);
    };
    CVService.prototype.updateCV = function (userId, cv) {
        return this.http.put(this.apiServerUrl + "/CV/" + userId, cv);
    };
    CVService.prototype.findByUserId = function (id) {
        return this.http.get(this.apiServerUrl + "/CV/user/" + id);
    };
    CVService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CVService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CVService);
    return CVService;
}());



/***/ }),

/***/ "d9s0":
/*!************************************************************************!*\
  !*** ./src/app/company/register-company/register-company.component.ts ***!
  \************************************************************************/
/*! exports provided: RegisterCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterCompanyComponent", function() { return RegisterCompanyComponent; });
/* harmony import */ var _raw_loader_register_company_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./register-company.component.html */ "PyfS");
/* harmony import */ var _register_company_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-company.component.scss */ "O1OE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/account */ "gGTi");
/* harmony import */ var _security_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../security/auth.service */ "JZt4");
/* harmony import */ var _model_company__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/company */ "p4Ci");
/* harmony import */ var _service_city_city_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/city/city.service */ "J7T8");
/* harmony import */ var _dialog_dialogCreateCompany_dialog_create_company_dialog_create_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialog/dialogCreateCompany/dialog-create-company/dialog-create-company.component */ "S4+S");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterCompanyComponent = /** @class */ (function () {
    function RegisterCompanyComponent(authService, cityService, dialog) {
        this.authService = authService;
        this.cityService = cityService;
        this.dialog = dialog;
        this.data = {
            avatar: '',
            password: ''
        };
        this.cities = [];
        this.status = '';
        this.success = {
            message: "yes"
        };
        this.showAllCity();
    }
    RegisterCompanyComponent.prototype.showAllCity = function () {
        var _this = this;
        this.cityService.showAll().subscribe(function (data3) {
            _this.cities = data3;
            console.log(data3);
        });
    };
    RegisterCompanyComponent.prototype.ngOnInit = function () {
    };
    RegisterCompanyComponent.prototype.ngSubmit = function (form) {
        var _this = this;
        console.log();
        var roles = ['company'];
        // @ts-ignore
        this.account = new _model_account__WEBPACK_IMPORTED_MODULE_3__["Account"](this.data.username, this.data.password, roles);
        this.authService.signUp(this.account).subscribe(function (data1) {
            console.log(data1);
            _this.idAccount = data1.id;
            _this.create();
            form.reset();
        }, function (error) { return alert(error); });
    };
    RegisterCompanyComponent.prototype.create = function () {
        var _this = this;
        var city = {
            id: this.data.city
        };
        console.log(city);
        this.account.id = this.idAccount;
        var account11 = {
            id: this.idAccount
        };
        this.company = new _model_company__WEBPACK_IMPORTED_MODULE_5__["Company"](this.data.name, this.data.avatar, this.data.description, this.data.address, this.data.employeeQuantity, city, this.data.linkMap, this.data.phone, account11);
        console.log(this.company);
        this.authService.registerCompany(this.company).subscribe(function (data2) {
            console.log(data2);
            if (JSON.stringify(data2) == JSON.stringify(_this.success)) {
                // @ts-ignore
                var dialogRef1 = _this.dialog.open(_dialog_dialogCreateCompany_dialog_create_company_dialog_create_company_component__WEBPACK_IMPORTED_MODULE_7__["DialogCreateCompanyComponent"]);
                dialogRef1.afterClosed().subscribe(function (result) {
                    console.log('The dialog was closed');
                });
            }
        });
    };
    RegisterCompanyComponent.prototype.onUpLoadAvatar = function (event) {
        this.data.avatar = event;
    };
    RegisterCompanyComponent.ctorParameters = function () { return [
        { type: _security_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _service_city_city_service__WEBPACK_IMPORTED_MODULE_6__["CityService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }
    ]; };
    RegisterCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register-company',
            template: _raw_loader_register_company_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_register_company_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_security_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _service_city_city_service__WEBPACK_IMPORTED_MODULE_6__["CityService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
    ], RegisterCompanyComponent);
    return RegisterCompanyComponent;
}());



/***/ }),

/***/ "dL5G":
/*!********************************************************!*\
  !*** ./src/app/service/vacancies/vacancies.service.ts ***!
  \********************************************************/
/*! exports provided: VacanciesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacanciesService", function() { return VacanciesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VacanciesService = /** @class */ (function () {
    function VacanciesService(http) {
        this.http = http;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl;
    }
    VacanciesService.prototype.showAll = function () {
        return this.http.get(this.apiServerUrl + "/vacancies/showAll");
    };
    VacanciesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    VacanciesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VacanciesService);
    return VacanciesService;
}());



/***/ }),

/***/ "e6NR":
/*!****************************************************************************!*\
  !*** ./src/app/dialog/CV/dialog-no-create/dialog-no-create.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctbm8tY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "ean+":
/*!*************************************************************************************************!*\
  !*** ./src/app/company/recruitmentnew/create-recruitmentnew/create-recruitmentnew.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CreateRecruitmentnewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRecruitmentnewComponent", function() { return CreateRecruitmentnewComponent; });
/* harmony import */ var _raw_loader_create_recruitmentnew_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./create-recruitmentnew.component.html */ "bFRz");
/* harmony import */ var _create_recruitmentnew_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-recruitmentnew.component.scss */ "4kZh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_workingTime_working_time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/workingTime/working-time.service */ "oMkr");
/* harmony import */ var _service_field_field_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/field/field.service */ "3GXu");
/* harmony import */ var _service_vacancies_vacancies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/vacancies/vacancies.service */ "dL5G");
/* harmony import */ var _service_city_city_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/city/city.service */ "J7T8");
/* harmony import */ var _model_recruitmentNew__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../model/recruitmentNew */ "6cG4");
/* harmony import */ var _security_token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../security/token.service */ "zdrf");
/* harmony import */ var _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/recruitmentNew/recruitment-new.service */ "FmPh");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CreateRecruitmentnewComponent = /** @class */ (function () {
    function CreateRecruitmentnewComponent(workingTimeService, fieldService, vacanciesService, cityService, recruitmentNewService, token) {
        this.workingTimeService = workingTimeService;
        this.fieldService = fieldService;
        this.vacanciesService = vacanciesService;
        this.cityService = cityService;
        this.recruitmentNewService = recruitmentNewService;
        this.token = token;
        this.form = {};
        this.workingTimes = [];
        this.fields = [];
        this.vacancies1 = [];
        this.cities = [];
        this.status = "Mời bạn nhập thông tin bài viết";
        this.gender = [
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
        ];
        this.error1 = {
            message: "no_quantity"
        };
        this.error2 = {
            message: "no_salary"
        };
        this.success = {
            message: "yes"
        };
        this.showAllWorkingTime();
        this.showAllField();
        this.showAllVacancies();
        this.showAllCity();
    }
    CreateRecruitmentnewComponent.prototype.showAllWorkingTime = function () {
        var _this = this;
        this.workingTimeService.showAll().subscribe(function (data) {
            _this.workingTimes = data;
            console.log(data);
        });
    };
    CreateRecruitmentnewComponent.prototype.showAllField = function () {
        var _this = this;
        this.fieldService.showAll().subscribe(function (data1) {
            _this.fields = data1;
            console.log(data1);
        });
    };
    CreateRecruitmentnewComponent.prototype.showAllVacancies = function () {
        var _this = this;
        this.vacanciesService.showAll().subscribe(function (data2) {
            _this.vacancies1 = data2;
            console.log(data2);
        });
    };
    CreateRecruitmentnewComponent.prototype.showAllCity = function () {
        var _this = this;
        this.cityService.showAll().subscribe(function (data3) {
            _this.cities = data3;
            console.log(data3);
        });
    };
    CreateRecruitmentnewComponent.prototype.ngOnInit = function () {
    };
    CreateRecruitmentnewComponent.prototype.ngSubmit = function () {
        var _this = this;
        var city = {
            id: this.form.city
        };
        var workingTime = {
            id: this.form.workingTime
        };
        var vacancies = {
            id: this.form.vacancies
        };
        var field = {
            id: this.form.field
        };
        var company = {
            id: this.token.getIdGuest()
        };
        this.recruitmentNew = new _model_recruitmentNew__WEBPACK_IMPORTED_MODULE_7__["RecruitmentNew"](this.form.title, workingTime, field, company, vacancies, this.form.expDate, this.form.description, city, this.form.quantity, this.form.gender, this.form.salary);
        console.log(this.recruitmentNew);
        this.recruitmentNewService.createRecruitmentNew(this.recruitmentNew).subscribe(function (data) {
            console.log(data);
            if (JSON.stringify(data) == JSON.stringify(_this.error1)) {
                // @ts-ignore
                _this.status = 'Vui lòng nhập số lượng người cần tuyển!';
            }
            if (JSON.stringify(data) == JSON.stringify(_this.error2)) {
                // @ts-ignore
                _this.status = 'Vui lòng nhập mức lương!';
            }
            if (JSON.stringify(data) == JSON.stringify(_this.success)) {
                // @ts-ignore
                _this.status = 'Tạo mới tin tuyển dụng thành công!';
            }
        });
    };
    CreateRecruitmentnewComponent.ctorParameters = function () { return [
        { type: _service_workingTime_working_time_service__WEBPACK_IMPORTED_MODULE_3__["WorkingTimeService"] },
        { type: _service_field_field_service__WEBPACK_IMPORTED_MODULE_4__["FieldService"] },
        { type: _service_vacancies_vacancies_service__WEBPACK_IMPORTED_MODULE_5__["VacanciesService"] },
        { type: _service_city_city_service__WEBPACK_IMPORTED_MODULE_6__["CityService"] },
        { type: _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_9__["RecruitmentNewService"] },
        { type: _security_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"] }
    ]; };
    CreateRecruitmentnewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-recruitmentnew',
            template: _raw_loader_create_recruitmentnew_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_create_recruitmentnew_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_workingTime_working_time_service__WEBPACK_IMPORTED_MODULE_3__["WorkingTimeService"],
            _service_field_field_service__WEBPACK_IMPORTED_MODULE_4__["FieldService"],
            _service_vacancies_vacancies_service__WEBPACK_IMPORTED_MODULE_5__["VacanciesService"],
            _service_city_city_service__WEBPACK_IMPORTED_MODULE_6__["CityService"],
            _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_9__["RecruitmentNewService"],
            _security_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"]])
    ], CreateRecruitmentnewComponent);
    return CreateRecruitmentnewComponent;
}());



/***/ }),

/***/ "erfy":
/*!***************************************************************!*\
  !*** ./src/app/dialog/dialog-match/dialog-match.component.ts ***!
  \***************************************************************/
/*! exports provided: DialogMatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogMatchComponent", function() { return DialogMatchComponent; });
/* harmony import */ var _raw_loader_dialog_match_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dialog-match.component.html */ "v1pD");
/* harmony import */ var _dialog_match_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-match.component.scss */ "NSQK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogMatchComponent = /** @class */ (function () {
    function DialogMatchComponent() {
    }
    DialogMatchComponent.prototype.ngOnInit = function () {
    };
    DialogMatchComponent.ctorParameters = function () { return []; };
    DialogMatchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dialog-match',
            template: _raw_loader_dialog_match_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dialog_match_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DialogMatchComponent);
    return DialogMatchComponent;
}());



/***/ }),

/***/ "fAU0":
/*!*****************************************************!*\
  !*** ./src/app/service/workExp/work-exp.service.ts ***!
  \*****************************************************/
/*! exports provided: WorkExpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExpService", function() { return WorkExpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkExpService = /** @class */ (function () {
    function WorkExpService(http) {
        this.http = http;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl;
    }
    WorkExpService.prototype.createWorkExp = function (workExp) {
        return this.http.post(this.apiServerUrl + "/WorkExp", workExp);
    };
    WorkExpService.prototype.findAllByCvId = function (id) {
        return this.http.get(this.apiServerUrl + "/WorkExp/cv/" + id);
    };
    WorkExpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    WorkExpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WorkExpService);
    return WorkExpService;
}());



/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./header.component.html */ "kjkU");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ "8PEf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _security_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../security/token.service */ "zdrf");
/* harmony import */ var _service_company_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/company/company.service */ "KXKP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/service/user.service */ "sQRL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(tokenService, companyService, userService, router) {
        this.tokenService = tokenService;
        this.companyService = companyService;
        this.userService = userService;
        this.router = router;
        this.checkLogin = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.tokenService.getTokenKey()) {
            this.checkLogin = true;
            this.idGuest = this.tokenService.getIdGuest();
            if (this.idGuest == -10) {
                this.checkRole = 'ADMIN';
                this.name = "ADMIN";
            }
            else {
                for (var i = 0; i < this.tokenService.getRoleKey().length; i++) {
                    if (this.tokenService.getRoleKey()[i] == 'COMPANY') {
                        this.companyService.getCompanyNameById(this.idGuest).subscribe(function (data) {
                            console.log(data);
                            _this.company = data;
                            _this.checkRole = 'COMPANY';
                            _this.name = _this.company.name;
                        });
                    }
                    if (this.tokenService.getRoleKey()[i] == 'USER') {
                        this.userService.getUserById(this.idGuest).subscribe(function (data) {
                            console.log(data);
                            _this.user = data;
                            _this.checkRole = 'USER';
                            _this.name = _this.user.name;
                        });
                    }
                }
            }
        }
    };
    HeaderComponent.prototype.logOut = function () {
        window.sessionStorage.clear();
        this.router.navigate(['login']).then(function () {
            window.location.reload();
        });
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _security_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
        { type: _service_company_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"] },
        { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-header',
            template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_security_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _service_company_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"],
            _user_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "HhuZ");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ "pUeC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "fqbY":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialogApplyFail/dialog-apply/dialog-apply.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\" style=\"margin-top: 20px\">\r\n            <mat-card style=\"margin: 50px 0\">\r\n                <h4 class=\"alert alert-dark\">Bạn đã ứng tuyển thành công, hãy đợi công ty thông báo</h4>\r\n                <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"false\">Đóng</button>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "g0Yg":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/lock-unlock-recruiment/lock-unlock-recruiment.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LockUnlockRecruimentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockUnlockRecruimentComponent", function() { return LockUnlockRecruimentComponent; });
/* harmony import */ var _raw_loader_lock_unlock_recruiment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./lock-unlock-recruiment.component.html */ "pmBc");
/* harmony import */ var _lock_unlock_recruiment_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lock-unlock-recruiment.component.scss */ "LhTi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _service_account_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/account/account.service */ "/DSI");
/* harmony import */ var _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/recruitmentNew/recruitment-new.service */ "FmPh");
/* harmony import */ var _security_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../security/token.service */ "zdrf");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LockUnlockRecruimentComponent = /** @class */ (function () {
    function LockUnlockRecruimentComponent(accountService, recruitmentNewService, token) {
        this.accountService = accountService;
        this.recruitmentNewService = recruitmentNewService;
        this.token = token;
        this.displayedColumns = ['id', 'title', 'editStatus'];
        this.recruitmentNews = [];
    }
    LockUnlockRecruimentComponent.prototype.ngOnInit = function () {
        this.getListRecruitmentNew();
    };
    LockUnlockRecruimentComponent.prototype.getListRecruitmentNew = function () {
        var _this = this;
        this.accountService.showAllAdminRecruitment().subscribe(function (listAdminRecruitment) {
            _this.recruitmentNews = listAdminRecruitment;
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.recruitmentNews);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    LockUnlockRecruimentComponent.prototype.changeStatus = function (id) {
        var _this = this;
        this.accountService.changeStatusById2(id).subscribe(function (data) {
            _this.getListRecruitmentNew();
        });
    };
    LockUnlockRecruimentComponent.ctorParameters = function () { return [
        { type: _service_account_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] },
        { type: _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_5__["RecruitmentNewService"] },
        { type: _security_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] }
    ]; };
    LockUnlockRecruimentComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"],] }]
    };
    LockUnlockRecruimentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-lock-unlock-recruiment',
            template: _raw_loader_lock_unlock_recruiment_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_lock_unlock_recruiment_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_account_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"],
            _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_5__["RecruitmentNewService"],
            _security_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"]])
    ], LockUnlockRecruimentComponent);
    return LockUnlockRecruimentComponent;
}());



/***/ }),

/***/ "gGTi":
/*!**********************************!*\
  !*** ./src/app/model/account.ts ***!
  \**********************************/
/*! exports provided: Account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
var Account = /** @class */ (function () {
    function Account(username, password, roles) {
        this.username = username;
        this.password = password;
        this.roles = roles;
    }
    return Account;
}());



/***/ }),

/***/ "gWNC":
/*!****************************************************************!*\
  !*** ./src/app/admin/list-account/list-account.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsaXN0LWFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoibGlzdC1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "hZMr":
/*!********************************************************!*\
  !*** ./src/app/user/CV/edit-cv/edit-cv.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".left-profile-card .user-profile {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  margin: auto;\n  margin-bottom: 20px;\n}\n\n.left-profile-card h3 {\n  font-size: 18px;\n  margin-bottom: 0;\n  font-weight: 700;\n}\n\n.left-profile-card p {\n  margin-bottom: 5px;\n}\n\n.left-profile-card .progress-bar {\n  background-color: var(--main-color);\n}\n\n.personal-info {\n  margin-bottom: 30px;\n}\n\n.personal-info .personal-list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.personal-list li {\n  margin-bottom: 5px;\n}\n\n.personal-info h3 {\n  margin-bottom: 10px;\n}\n\n.personal-info p {\n  margin-bottom: 5px;\n  font-size: 14px;\n}\n\n.personal-info i {\n  font-size: 15px;\n  color: var(--main-color);\n  margin-right: 15px;\n  width: 18px;\n}\n\n.skill {\n  margin-bottom: 30px;\n}\n\n.skill h3 {\n  margin-bottom: 15px;\n}\n\n.skill p {\n  margin-bottom: 5px;\n}\n\n.languages h3 {\n  margin-bottom: 15px;\n}\n\n.languages p {\n  margin-bottom: 5px;\n}\n\n.right-profile-card .nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: var(--main-color);\n}\n\n.right-profile-card .nav > li {\n  float: left;\n  margin-right: 10px;\n}\n\n.right-profile-card .nav-pills .nav-link {\n  border-radius: 26px;\n}\n\n.right-profile-card h3 {\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 15px;\n}\n\n.right-profile-card h4 {\n  font-size: 16px;\n  margin-bottom: 15px;\n}\n\n.right-profile-card i {\n  font-size: 15px;\n  margin-right: 10px;\n}\n\n.right-profile-card .work-container {\n  border-bottom: 1px solid #eee;\n  margin-bottom: 20px;\n  padding: 10px;\n}\n\n/*timeline*/\n\n.img-circle {\n  border-radius: 50%;\n}\n\n.timeline-centered {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.timeline-centered:before,\n.timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before,\n.timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 4px;\n  background: #f5f5f6;\n  /*left: 50%;*/\n  top: 20px;\n  bottom: 20px;\n  margin-left: 30px;\n}\n\n.timeline-centered .timeline-entry {\n  position: relative;\n  /*width: 50%;\n      float: right;*/\n  margin-top: 5px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n  clear: both;\n}\n\n.timeline-centered .timeline-entry:before,\n.timeline-centered .timeline-entry:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered .timeline-entry:after {\n  clear: both;\n}\n\n.timeline-centered .timeline-entry:before,\n.timeline-centered .timeline-entry:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered .timeline-entry:after {\n  clear: both;\n}\n\n.timeline-centered .timeline-entry.begin {\n  margin-bottom: 0;\n}\n\n.timeline-centered .timeline-entry.left-aligned {\n  float: left;\n}\n\n.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner {\n  margin-left: 0;\n  margin-right: -18px;\n}\n\n.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-time {\n  left: auto;\n  right: -100px;\n  text-align: left;\n}\n\n.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-icon {\n  float: right;\n}\n\n.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-label {\n  margin-left: 0;\n  margin-right: 70px;\n}\n\n.timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-label:after {\n  left: auto;\n  right: 0;\n  margin-left: 0;\n  margin-right: -9px;\n  transform: rotate(180deg);\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner {\n  position: relative;\n  margin-left: -20px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner:before,\n.timeline-centered .timeline-entry .timeline-entry-inner:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner:after {\n  clear: both;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner:before,\n.timeline-centered .timeline-entry .timeline-entry-inner:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner:after {\n  clear: both;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-time {\n  position: absolute;\n  left: -100px;\n  text-align: right;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span {\n  display: block;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span:first-child {\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span:last-child {\n  font-size: 12px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {\n  background: #fff;\n  color: #737881;\n  display: block;\n  width: 40px;\n  height: 40px;\n  -webkit-background-clip: padding-box;\n  -moz-background-clip: padding;\n  background-clip: padding-box;\n  border-radius: 20px;\n  text-align: center;\n  box-shadow: 0 0 0 5px #f5f5f6;\n  line-height: 40px;\n  font-size: 15px;\n  float: left;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-primary {\n  background-color: #303641;\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-secondary {\n  background-color: #ee4749;\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-success {\n  background-color: #00a651;\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-info {\n  background-color: #21a9e1;\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-warning {\n  background-color: #fad839;\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-danger {\n  background-color: #cc2424;\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {\n  position: relative;\n  background: #f5f5f6;\n  padding: 1em;\n  margin-left: 60px;\n  -webkit-background-clip: padding-box;\n  -moz-background-clip: padding;\n  background-clip: padding-box;\n  border-radius: 3px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 9px 9px 9px 0;\n  border-color: transparent #f5f5f6 transparent transparent;\n  left: 0;\n  top: 10px;\n  margin-left: -9px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2,\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p {\n  color: #737881;\n  font-size: 12px;\n  margin: 0;\n  line-height: 1.428571429;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p + p {\n  margin-top: 15px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 {\n  font-size: 16px;\n  margin-bottom: 10px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 a {\n  color: #303641;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 span {\n  -webkit-opacity: 0.6;\n  -moz-opacity: 0.6;\n  opacity: 0.6;\n  -ms-filter: alpha(opacity=60);\n  filter: alpha(opacity=60);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZWRpdC1jdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTs7RUFFRSxXQUFBO0VBQ0EsbUNBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFBRjs7QUFJQSxXQUFBOztBQUVBO0VBQ0Usa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTs7RUFFRSxZQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtBQUZGOztBQUtBOztFQUVFLFlBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0E7b0JBQUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTs7RUFFRSxZQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtBQUZGOztBQUtBOztFQUVFLFlBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLFVBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBS0EseUJBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTs7RUFFRSxZQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtBQUZGOztBQUtBOztFQUVFLFlBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFHQSxzQkFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFHQSxtQkFBQTtFQUNBLGtCQUFBO0VBR0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBR0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx5REFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTs7RUFFRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtBQUZGOztBQUtBO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FBRkYiLCJmaWxlIjoiZWRpdC1jdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWZ0LXByb2ZpbGUtY2FyZCAudXNlci1wcm9maWxlIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5sZWZ0LXByb2ZpbGUtY2FyZCBoMyB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmxlZnQtcHJvZmlsZS1jYXJkIHAge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmxlZnQtcHJvZmlsZS1jYXJkIC5wcm9ncmVzcy1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG59XHJcblxyXG4ucGVyc29uYWwtaW5mbyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnBlcnNvbmFsLWluZm8gLnBlcnNvbmFsLWxpc3Qge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnBlcnNvbmFsLWxpc3QgbGkge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnBlcnNvbmFsLWluZm8gaDMge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wZXJzb25hbC1pbmZvIHAge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5wZXJzb25hbC1pbmZvIGkge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbjtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbn1cclxuXHJcbi5za2lsbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnNraWxsIGgzIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uc2tpbGwgcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ubGFuZ3VhZ2VzIGgzIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubGFuZ3VhZ2VzIHAge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnJpZ2h0LXByb2ZpbGUtY2FyZCAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsXHJcbi5uYXYtcGlsbHMgLnNob3c+Lm5hdi1saW5rIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxufVxyXG5cclxuLnJpZ2h0LXByb2ZpbGUtY2FyZCAubmF2PmxpIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1wcm9maWxlLWNhcmQgLm5hdi1waWxscyAubmF2LWxpbmsge1xyXG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XHJcbn1cclxuXHJcbi5yaWdodC1wcm9maWxlLWNhcmQgaDMge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5yaWdodC1wcm9maWxlLWNhcmQgaDQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ucmlnaHQtcHJvZmlsZS1jYXJkIGkge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1wcm9maWxlLWNhcmQgLndvcmstY29udGFpbmVyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4vKnRpbWVsaW5lKi9cclxuXHJcbi5pbWctY2lyY2xlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZDpiZWZvcmUsXHJcbi50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZDpiZWZvcmUsXHJcbi50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjY7XHJcbiAgLypsZWZ0OiA1MCU7Ki9cclxuICB0b3A6IDIwcHg7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyp3aWR0aDogNTAlO1xyXG4gICAgICBmbG9hdDogcmlnaHQ7Ki9cclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeTpiZWZvcmUsXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnk6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5OmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeTpiZWZvcmUsXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnk6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5OmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeS5iZWdpbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeS5sZWZ0LWFsaWduZWQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5LmxlZnQtYWxpZ25lZCAudGltZWxpbmUtZW50cnktaW5uZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogLTE4cHg7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkubGVmdC1hbGlnbmVkIC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtdGltZSB7XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogLTEwMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkubGVmdC1hbGlnbmVkIC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5LmxlZnQtYWxpZ25lZCAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkubGVmdC1hbGlnbmVkIC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWw6YWZ0ZXIge1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtOXB4O1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXI6YmVmb3JlLFxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lcjphZnRlciB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyOmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXI6YmVmb3JlLFxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lcjphZnRlciB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyOmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLXRpbWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS10aW1lPnNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtdGltZT5zcGFuOmZpcnN0LWNoaWxkIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS10aW1lPnNwYW46bGFzdC1jaGlsZCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbiB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzczNzg4MTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDVweCAjZjVmNWY2O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmNWY1ZjY7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmNWY1ZjY7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5iZy1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzNjQxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5iZy1zZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTQ3NDk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmJnLXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGE2NTE7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmJnLWluZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMWE5ZTE7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmJnLXdhcm5pbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWQ4Mzk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmJnLWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjMjQyNDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNjtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWw6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDlweCA5cHggOXB4IDA7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZjVmNWY2IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtOXB4O1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIsXHJcbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBwIHtcclxuICBjb2xvcjogIzczNzg4MTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIHArcCB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIGEge1xyXG4gIGNvbG9yOiAjMzAzNjQxO1xyXG59XHJcblxyXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIgc3BhbiB7XHJcbiAgLXdlYmtpdC1vcGFjaXR5OiAuNjtcclxuICAtbW96LW9wYWNpdHk6IC42O1xyXG4gIG9wYWNpdHk6IC42O1xyXG4gIC1tcy1maWx0ZXI6IGFscGhhKG9wYWNpdHk9NjApO1xyXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT02MCk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "hqhz":
/*!*******************************************************************************!*\
  !*** ./src/app/user/apply-recruitmentnew/apply-recruitmentnew.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBseS1yZWNydWl0bWVudG5ldy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "hzLh":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/apply-company/apply-company.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"page-title-area\" style=\"height: 200px\">\r\n    <div class=\"container\">\r\n        <div class=\"page-title-content\">\r\n            <h2>Danh sách nhân viên ứng tuyển</h2>\r\n        </div>\r\n    </div>\r\n    <div class=\"page-shape\">\r\n        <div class=\"shape1\">\r\n            <img src=\"assets/images/shape/1.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape3\">\r\n            <img src=\"assets/images/shape/3.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape4\">\r\n            <img src=\"assets/images/shape/4.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape5\">\r\n            <img src=\"assets/images/shape/5.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape6\">\r\n            <img src=\"assets/images/shape/6.png\" alt=\"shape\">\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container mt-3 mb-4\">\r\n    <mat-error class=\"text-center\" *ngIf=\"notify != null\">{{notify}}</mat-error>\r\n    <div class=\"col-lg-12 mt-4 mt-lg-0\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm\">\r\n                    <table class=\"table manage-candidates-top mb-0\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th>Thông tin người ứng tuyển</th>\r\n                            <th class=\"text-center\">Trạng thái</th>\r\n                            <th class=\"action text-right\">Hoạt động</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr class=\"candidates-list\" *ngFor=\"let apply of applyList\">\r\n                            <td class=\"title\">\r\n                                <div class=\"thumb\">\r\n                                    <img class=\"img-fluid\" src=\"{{apply.avatar}}\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"candidate-list-details\">\r\n                                    <div class=\"candidate-list-info\">\r\n                                        <div class=\"candidate-list-title\">\r\n                                            <h5 class=\"mb-0\"><a [routerLink]=\"['/detail-cv/',apply.userId]\">{{apply.nameUser}}</a></h5>\r\n                                        </div>\r\n                                        <div class=\"candidate-list-option\">\r\n                                            <ul class=\"list-unstyled\">\r\n                                                <li><i class=\"fas fa-briefcase\"></i> {{apply.title}}</li>\r\n                                                <li><i class=\"fas fa-user-tie\"></i>{{apply.vacanciesName}}</li>\r\n                                                <li><i class=\"far fa-clock\"></i> {{apply.date}}</li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"candidate-list-favourite-time text-center\">\r\n                                <a class=\"candidate-list-favourite order-2 text-danger\" href=\"#\"><i class=\"fas fa-heart\"></i></a>\r\n                                <span class=\"candidate-list-time order-1\">{{apply.status}}</span>\r\n                            </td>\r\n                            <td>\r\n                                <ul class=\"list-unstyled mb-0 d-flex justify-content-end\">\r\n                                    <button *ngIf=\"checkAccept(apply.status)\" (click)=\"apcept(apply.id)\" mat-raised-button color=\"primary\">Duyệt</button>\r\n                                    <button *ngIf=\"checkAccept(apply.status)\" (click)=\"reject(apply.id)\"  mat-raised-button color=\"warn\">Từ chối</button>\r\n                                </ul>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <div class=\"text-center mt-3 mt-sm-3\">\r\n\r\n<!--                            <mat-paginator [length]=\"totalElements\"-->\r\n<!--                                           [pageSize]=\"3\"-->\r\n<!--                                           [pageSizeOptions]=\"[3, 6, 9, 12]\"-->\r\n<!--                                           (page)=\"nextPage($event)\"-->\r\n<!--                                           aria-label=\"Select page\">-->\r\n<!--                            </mat-paginator>-->\r\n                        <mat-paginator [pageSizeOptions]=\"[3,6,9,12,15]\"\r\n                                       [length]=\"totalElements\"\r\n                                       (page)=\"nextPage($event)\">\r\n                        </mat-paginator>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- SignUp -->\r\n<section class=\"signup-area ptb-100\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"signup-form\">\r\n          <div class=\"section-tittle text-center\">\r\n            <h2>Đăng nhập</h2>\r\n            <p>Với tài khoản mạng xã hội</p>\r\n          </div>\r\n          <form #f=\"ngForm\" (ngSubmit)=\"f.form.valid && onLogin()\">\r\n            <mat-error  style=\"text-align: center\">{{status}}</mat-error>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12\">\r\n                <div class=\"form-group\">\r\n                  <mat-form-field style=\"width: 100%\" appearance=\"outline\">\r\n                    <mat-label>Email:</mat-label>\r\n                    <input matInput placeholder=\"Email ...\" name=\"username\" [(ngModel)]=\"form.username\" [formControl]=\"emailFormControl\" required>\r\n                    <mat-icon color=\"black\" matSuffix>email</mat-icon>\r\n                    <mat-error *ngIf=\"emailFormControl.hasError('required')\">Bắt buộc phải nhập email!</mat-error>\r\n                    <mat-error *ngIf=\"emailFormControl.hasError('email')\">Email không đúng định dạng!</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12 col-sm-12\">\r\n                  <mat-form-field style=\"width: 100%\" appearance=\"outline\">\r\n                      <mat-label>Nhập mật khẩu của bạn</mat-label>\r\n                      <input name=\"password\" [(ngModel)]=\"form.password\" #password=\"ngModel\" matInput\r\n                             [type]=\"hide ? 'password' : 'text'\" required>\r\n                      <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\r\n                              [attr.aria-pressed]=\"hide\">\r\n                          <mat-icon color=\"black\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                      </button>\r\n                      <mat-error *ngIf=\"password.hasError('required')\">Bắt buộc phải nhập mật khẩu!</mat-error>\r\n                  </mat-form-field>\r\n              </div>\r\n              <div class=\"col-12 text-center\">\r\n                <button class=\"box-btn signup-btn\">\r\n                  Đăng nhập\r\n                </button>\r\n              </div>\r\n              <div class=\"col-12 text-center\">\r\n                <p class=\"al-acc\">\r\n                  Bạn chưa có tài khoản?\r\n                  <a type=\"button\" style=\"color: #083bec; text-decoration: underline\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\">\r\n                    Đăng ký\r\n                  </a>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- End SignUp -->\r\n\r\n<!-- Start Go Top Area -->\r\n<div class=\"go-top\">\r\n  <i class='bx bx-chevrons-up'></i>\r\n  <i class='bx bx-chevrons-up'></i>\r\n</div>\r\n<!-- End Go Top Area -->\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Bạn muốn đăng ký ... ?</h5>\r\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n      </div>\r\n      <div class=\"modal-body\" style=\"margin: 0 auto\">\r\n        <a type=\"button\" routerLink=\"/register-user\" data-bs-dismiss=\"modal\" mat-button>Đăng ký ứng viên</a>\r\n        <br>\r\n        <a type=\"button\" routerLink=\"/register-company\" data-bs-dismiss=\"modal\" mat-button>Đăng ký công ty</a>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "j6QF":
/*!************************************************!*\
  !*** ./src/app/service/apply/apply.service.ts ***!
  \************************************************/
/*! exports provided: ApplyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyService", function() { return ApplyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApplyService = /** @class */ (function () {
    function ApplyService(http) {
        this.http = http;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl;
    }
    ApplyService.prototype.createCV = function (apply) {
        return this.http.post(this.apiServerUrl + "/applies", apply);
    };
    ApplyService.prototype.pageCompany = function (request, id) {
        var params = request;
        return this.http.get(this.apiServerUrl + "/applies/findAllByCompanyID/" + id, { params: params });
    };
    ApplyService.prototype.apply = function (changeStatusApply) {
        return this.http.post(this.apiServerUrl + "/applies/changeStatusApply", changeStatusApply);
    };
    ApplyService.prototype.pageApply = function (nextPage, id) {
        var params = nextPage;
        return this.http.get(this.apiServerUrl + "/applies/showAllApply/" + id, { params: params });
    };
    ApplyService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ApplyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApplyService);
    return ApplyService;
}());



/***/ }),

/***/ "jVqi":
/*!***********************************************************!*\
  !*** ./src/app/dialog/apply-now/apply-now.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBseS1ub3cuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "kjkU":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Header Area -->\r\n<header class=\"header-area\">\r\n    <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-lg-2 col-sm-0\">\r\n                <div class=\"logo\">\r\n                    <a href=\"index.html\"><img src=\"assets/images/logo.png\" alt=\"logo\"></a>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-8 col-sm-8 text-right pr-0\">\r\n                <div class=\"header-content-right\">\r\n                    <ul class=\"header-contact\">\r\n                        <li><a href=\"tel:+1123456789\"><i class=\"bx bxs-phone-call\"></i> 024 62538829</a></li>\r\n                        <li><a href=\"mailto:hello@paso.com\"><i class=\"bx bxs-envelope\"></i> info@codegym.vn</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-2 col-sm-4 text-right pl-0\">\r\n                <div class=\"header-content-right\">\r\n                    <ul class=\"header-social\">\r\n                        <li>\r\n                            <a href=\"#\" target=\"_blank\"><i class=\"bx bxl-facebook\"></i></a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\" target=\"_blank\"><i class=\"bx bxl-twitter\"></i></a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\" target=\"_blank\"> <i class=\"bx bxs-envelope\"></i></a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\" target=\"_blank\"> <i class=\"bx bxl-youtube\"></i></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>\r\n<!-- End Header Area -->\r\n\r\n<!--Navbar Area -->\r\n<div class=\"navbar-area\">\r\n    <div class=\"mobile-nav\">\r\n        <a href=\"index.html\" class=\"logo\">\r\n            <img src=\"assets/images/logo.png\" alt=\"logo\">\r\n        </a>\r\n    </div>\r\n    <div class=\"main-nav\" style=\"background: #051242\">\r\n        <div class=\"container\">\r\n            <nav class=\"navbar navbar-expand-md navbar-light\">\r\n                <div class=\"collapse navbar-collapse mean-menu\" id=\"navbarSupportedContent\">\r\n                    <ul class=\"navbar-nav text-left\">\r\n                        <li class=\"nav-item\">\r\n                            <!--                            <a *ngIf=\"checkRole == 'COMPANY'\" routerLink=\"list-recruitmentnew-company\"-->\r\n                            <!--                               class=\"nav-link dropdown-toggle active\">Trang chủ</a>-->\r\n                            <a routerLink=\"home\"\r\n                               class=\"nav-link dropdown-toggle active\">Trang chủ</a>\r\n                        </li>\r\n                        <li *ngIf=\"checkRole == 'ADMIN'\" class=\"nav-item\">\r\n                            <a routerLink=\"/list-recruitmentnew-user/xxx\" class=\"nav-link\">Việc làm</a>\r\n                        </li>\r\n                        <li *ngIf=\"checkRole == 'ADMIN'\" class=\"nav-item\">\r\n                            <a routerLink=\"/list-account\" class=\"nav-link\">Quản lý tài khoản</a>\r\n                        </li>\r\n                        <li *ngIf=\"checkRole == 'ADMIN'\" class=\"nav-item\">\r\n                            <a routerLink=\"/lockUnlockAdmin\" class=\"nav-link\">Quản lý tin tuyển dụng</a>\r\n                        </li>\r\n                        <li *ngIf=\"checkRole == 'USER'\" class=\"nav-item\">\r\n                            <a routerLink=\"/list-recruitmentnew-user/xxx\" class=\"nav-link\">Việc làm</a>\r\n                        </li>\r\n                        <li *ngIf=\"checkRole == 'COMPANY'\" class=\"nav-item\">\r\n                            <a class=\"nav-link dropdown-toggle\">Việc làm</a>\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li class=\"nav-item\">\r\n                                    <a routerLink=\"/list-recruitmentnew-user/xxx\" class=\"nav-link\">Danh sách việc làm</a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a routerLink=\"/apply-company\" class=\"nav-link\">Danh sách ứng tuyển</a>\r\n                                </li>\r\n                            </ul>\r\n                        </li>\r\n\r\n\r\n                        <li *ngIf=\"checkRole == 'COMPANY'\" class=\"nav-item\">\r\n                            <a class=\"nav-link dropdown-toggle\">Bài Đăng</a>\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li *ngIf=\"checkRole == 'COMPANY'\" class=\"nav-item\">\r\n                                    <a routerLink=\"list-recruitmentnew-company\" class=\"nav-link\">Quản lý bài đăng</a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a routerLink=\"/create-recruitmentnew\" class=\"nav-link\">Viết Bài Đăng</a>\r\n                                </li>\r\n\r\n                            </ul>\r\n                        </li>\r\n                        <li *ngIf=\"checkRole == 'USER'\" class=\"nav-item\">\r\n                            <a class=\"nav-link dropdown-toggle\">Hồ Sơ Ứng Tuyển</a>\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li class=\"nav-item\">\r\n                                    <a routerLink=\"create-cv\"  class=\"nav-link\">Viết Hồ Sơ Ứng Tuyển</a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a [routerLink]=\"['/detail-cv/', idGuest]\" class=\"nav-link\">Hồ sơ của bạn</a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a routerLink=\"apply-list\" class=\"nav-link\">Dách sách ứng tuyển</a>\r\n                                </li>\r\n                            </ul>\r\n                        </li>\r\n                        <li *ngIf=\"checkRole == 'COMPANY'\" class=\"nav-item\">\r\n                            <a routerLink=\"list-recruitmentnew-user\" class=\"nav-link\">Việc làm</a>\r\n                        </li>\r\n                        <li *ngIf=\"checkRole == 'USER'||'COMPANY'\" class=\"nav-item\">\r\n                            <a class=\"nav-link dropdown-toggle\">Công ty</a>\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li class=\"nav-item\">\r\n                                    <a routerLink=\"list-company\" class=\"nav-link\">Danh sách công ty</a>\r\n                                </li>\r\n                            </ul>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div *ngIf=\"!checkLogin\">\r\n                    <a routerLink=\"/login\" class=\"box-btn\">Đăng nhập</a>\r\n                </div>\r\n                <div *ngIf=\"checkLogin\" class=\"nav-btn dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" style=\"background: #007bff\" type=\"button\"\r\n                            id=\"dropdownMenuButton1\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">{{name}}\r\n                    </button>\r\n\r\n                    <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\" *ngIf=\"checkRole == 'COMPANY'\">\r\n                        <li><a class=\"dropdown-item\" routerLink=\"detail-company\">Quản lý hồ sơ</a></li>\r\n                        <li><a class=\"dropdown-item\" routerLink=\"change-password\">Đổi mật khẩu</a></li>\r\n                        <li><a class=\"dropdown-item\" (click)=\"logOut()\">Đăng xuất</a></li>\r\n                    </ul>\r\n                    <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\" *ngIf=\"checkRole == 'USER'\">\r\n                        <li><a class=\"dropdown-item\" [routerLink]=\"['/detail-cv/', idGuest]\" >Quản lý hồ sơ</a></li>\r\n                        <li><a class=\"dropdown-item\" routerLink=\"change-password\">Đổi mật khẩu</a></li>\r\n                        <li><a class=\"dropdown-item\" (click)=\"logOut()\">Đăng xuất</a></li>\r\n                    </ul>\r\n                    <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\" *ngIf=\"checkRole == 'ADMIN'\">\r\n                        <li><a class=\"dropdown-item\" routerLink=\"change-password\">Đổi mật khẩu</a></li>\r\n                        <li><a class=\"dropdown-item\" (click)=\"logOut()\">Đăng xuất</a></li>\r\n                    </ul>\r\n                </div>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- End Navbar Area -->\r\n");

/***/ }),

/***/ "kl1M":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(name, phone, account) {
        this.name = name;
        this.phone = phone;
        this.account = account;
    }
    return User;
}());



/***/ }),

/***/ "kti8":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload-image/upload-image.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div class=\"input-group mb-3\" style=\"width: 350px;margin-left: 40px\">\r\n        <label class=\"input-group-text\" for=\"inputGroupFile01\">Ảnh</label>\r\n        <input type=\"file\" class=\"form-control\" id=\"inputGroupFile01\" (change)=\"onFileChanged($event)\">\r\n        <mat-spinner [diameter]=\"40\" class=\"text-center\" *ngIf=\"checkUpLoadFile\"></mat-spinner>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "lF5L":
/*!**************************************************************!*\
  !*** ./src/app/admin/list-account/list-account.component.ts ***!
  \**************************************************************/
/*! exports provided: ListAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAccountComponent", function() { return ListAccountComponent; });
/* harmony import */ var _raw_loader_list_account_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./list-account.component.html */ "OLWM");
/* harmony import */ var _list_account_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-account.component.scss */ "gWNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _service_account_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/account/account.service */ "/DSI");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListAccountComponent = /** @class */ (function () {
    function ListAccountComponent(accountService) {
        this.accountService = accountService;
        this.displayedColumns = ['id', 'name', 'editStatus'];
        this.accounts = [];
    }
    ListAccountComponent.prototype.ngOnInit = function () {
        this.getListAccount();
    };
    ListAccountComponent.prototype.getListAccount = function () {
        var _this = this;
        this.accountService.showAll().subscribe(function (listCompany) {
            _this.accounts = listCompany;
            console.log(_this.accounts);
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.accounts);
            _this.dataSource.paginator = _this.paginator;
            console.log(listCompany);
        });
    };
    ListAccountComponent.prototype.changeStatus = function (id) {
        var _this = this;
        this.accountService.changeStatusById(id).subscribe(function (data) {
            _this.getListAccount();
        });
    };
    ListAccountComponent.ctorParameters = function () { return [
        { type: _service_account_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }
    ]; };
    ListAccountComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"],] }]
    };
    ListAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list-account',
            template: _raw_loader_list_account_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_list_account_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_account_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]])
    ], ListAccountComponent);
    return ListAccountComponent;
}());



/***/ }),

/***/ "lIeo":
/*!**********************************************************************!*\
  !*** ./src/app/dialog/CV/dialog-edit-cv/dialog-edit-cv.component.ts ***!
  \**********************************************************************/
/*! exports provided: DialogEditCvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogEditCvComponent", function() { return DialogEditCvComponent; });
/* harmony import */ var _raw_loader_dialog_edit_cv_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dialog-edit-cv.component.html */ "1vL1");
/* harmony import */ var _dialog_edit_cv_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-edit-cv.component.scss */ "CZ5x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogEditCvComponent = /** @class */ (function () {
    function DialogEditCvComponent() {
    }
    DialogEditCvComponent.prototype.ngOnInit = function () {
    };
    DialogEditCvComponent.ctorParameters = function () { return []; };
    DialogEditCvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dialog-edit-cv',
            template: _raw_loader_dialog_edit_cv_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dialog_edit_cv_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DialogEditCvComponent);
    return DialogEditCvComponent;
}());



/***/ }),

/***/ "lOv3":
/*!*******************************************************************************************************!*\
  !*** ./src/app/dialog/dialogCreateCompany/dialog-create-company/dialog-create-company.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctY3JlYXRlLWNvbXBhbnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "m1uw":
/*!****************************************************************************!*\
  !*** ./src/app/dialog/CV/dialog-create-cv/dialog-create-cv.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctY3JlYXRlLWN2LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "n2qO":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/CV/detail-cv/detail-cv.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top: 100px\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-3 \">\r\n            <div class=\"card left-profile-card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"text-center\">\r\n                        <img src=\"https://bootdey.com/img/Content/avatar/avatar2.png\" alt=\"\" class=\"user-profile\">\r\n                        <h3>{{cv?.fullName}}</h3>\r\n                        <div class=\"d-flex align-items-center justify-content-center mb-3\">\r\n                            <i class=\"fas fa-star text-info\"></i>\r\n                            <i class=\"fas fa-star text-info\"></i>\r\n                            <i class=\"fas fa-star text-info\"></i>\r\n                            <i class=\"fas fa-star text-info\"></i>\r\n                            <i class=\"fas fa-star text-info\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"personal-info\">\r\n                        <h3>Thông tin cá nhân</h3>\r\n                        <ul class=\"personal-list\">\r\n                            <li><i class=\"fas fa-briefcase \"></i><span><b>Năm kinh nghiệm: </b>{{cv?.expYear}}</span></li>\r\n                            <li><i class=\"fas fa-map-marker-alt \"></i><span><b>Lương mong muốn: </b>{{cv?.salaryExpectation| currency:'VND' : true : '1.0-0': 'en-US'\r\n                                }}</span></li>\r\n                            <li><i class=\"far fa-envelope \"></i><span>{{cv?.username}}</span></li>\r\n                            <li><i class=\"fas fa-mobile \"></i><span>{{cv?.phone}}</span></li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"skill\">\r\n                        <h3>Kỹ năng</h3>\r\n                        <div *ngFor=\"let skill of cv?.skills\">\r\n                            <p>{{skill.name}}</p>\r\n                            <div class=\"progress mb-3\">\r\n                                <div class=\"progress-bar\" role=\"progressbar\" [style.width]=\"skill.proficiency\"\r\n                                     [style.background]=\"'rgb(5 18 66)'\" aria-valuenow=\"50\" aria-valuemin=\"0\"\r\n                                     aria-valuemax=\"100\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-9\">\r\n            <div class=\"card right-profile-card\">\r\n                <div class=\"card-header alert-primary d-flex justify-content-between\">\r\n                    <h2>Kinh nghiệm cá nhân</h2>\r\n                    <a class=\"btn btn-light\" *ngIf=\"checkRole == 'USER'\" [routerLink]=\"['/update-cv/', idUser]\">Sửa hồ sơ</a>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"tab-content\" id=\"pills-tabContent\">\r\n                        <div class=\"tab-pane fade show active\" id=\"pills-home\" role=\"tabpanel\"\r\n                             aria-labelledby=\"pills-home-tab\">\r\n                            <div *ngFor=\"let workExp of cv?.workExps\" class=\"work-container\">\r\n                                <h3>{{workExp.title}}</h3>\r\n                                <h4><i class=\"far fa-calendar-alt\"></i>{{workExp.startDate}} to <span\r\n                                        class=\"badge badge-info\">{{workExp.endDate}}</span></h4>\r\n                                <p>{{workExp.content}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "o2zm":
/*!**********************************************************************!*\
  !*** ./projects/ngx-audio-player/src/lib/ngx-audio-player.module.ts ***!
  \**********************************************************************/
/*! exports provided: NgxAudioPlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAudioPlayerModule", function() { return NgxAudioPlayerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipe_seconds_to_minutes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipe/seconds-to-minutes */ "+gvS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _component_ngx_audio_player_ngx_audio_player_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/ngx-audio-player/ngx-audio-player.component */ "HZ/q");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var NgxAudioPlayerModule = /** @class */ (function () {
    function NgxAudioPlayerModule() {
    }
    NgxAudioPlayerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_pipe_seconds_to_minutes__WEBPACK_IMPORTED_MODULE_9__["SecondsToMinutesPipe"], _component_ngx_audio_player_ngx_audio_player_component__WEBPACK_IMPORTED_MODULE_12__["AudioPlayerComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"]],
            exports: [_component_ngx_audio_player_ngx_audio_player_component__WEBPACK_IMPORTED_MODULE_12__["AudioPlayerComponent"]]
        })
    ], NgxAudioPlayerModule);
    return NgxAudioPlayerModule;
}());



/***/ }),

/***/ "oMkr":
/*!*************************************************************!*\
  !*** ./src/app/service/workingTime/working-time.service.ts ***!
  \*************************************************************/
/*! exports provided: WorkingTimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkingTimeService", function() { return WorkingTimeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkingTimeService = /** @class */ (function () {
    function WorkingTimeService(http) {
        this.http = http;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl;
    }
    WorkingTimeService.prototype.showAll = function () {
        return this.http.get(this.apiServerUrl + "/workingTime/showAll");
    };
    WorkingTimeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    WorkingTimeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WorkingTimeService);
    return WorkingTimeService;
}());



/***/ }),

/***/ "oilH":
/*!*****************************************************!*\
  !*** ./projects/ngx-audio-player/src/public_api.ts ***!
  \*****************************************************/
/*! exports provided: AudioPlayerComponent, NgxAudioPlayerModule, Track */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_component_ngx_audio_player_ngx_audio_player_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/component/ngx-audio-player/ngx-audio-player.component */ "HZ/q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudioPlayerComponent", function() { return _lib_component_ngx_audio_player_ngx_audio_player_component__WEBPACK_IMPORTED_MODULE_0__["AudioPlayerComponent"]; });

/* harmony import */ var _lib_ngx_audio_player_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ngx-audio-player.module */ "o2zm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxAudioPlayerModule", function() { return _lib_ngx_audio_player_module__WEBPACK_IMPORTED_MODULE_1__["NgxAudioPlayerModule"]; });

/* harmony import */ var _lib_model_track_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/model/track.model */ "566h");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return _lib_model_track_model__WEBPACK_IMPORTED_MODULE_2__["Track"]; });

/*
 * Public API Surface of ngx-audio-player
 */





/***/ }),

/***/ "p4Ci":
/*!**********************************!*\
  !*** ./src/app/model/company.ts ***!
  \**********************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
var Company = /** @class */ (function () {
    function Company(name, avatar, description, address, employeeQuantity, city, linkMap, phone, account) {
        this.name = name;
        this.avatar = avatar;
        this.description = description;
        this.address = address;
        this.employeeQuantity = employeeQuantity;
        this.city = city;
        this.linkMap = linkMap;
        this.phone = phone;
        this.account = account;
    }
    return Company;
}());



/***/ }),

/***/ "pA9W":
/*!*******************************************************************************!*\
  !*** ./src/app/dialog/dialogApplyFail/dialog-apply/dialog-apply.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DialogApplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogApplyComponent", function() { return DialogApplyComponent; });
/* harmony import */ var _raw_loader_dialog_apply_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dialog-apply.component.html */ "fqbY");
/* harmony import */ var _dialog_apply_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-apply.component.scss */ "qQLI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogApplyComponent = /** @class */ (function () {
    function DialogApplyComponent() {
    }
    DialogApplyComponent.prototype.ngOnInit = function () {
    };
    DialogApplyComponent.ctorParameters = function () { return []; };
    DialogApplyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dialog-apply',
            template: _raw_loader_dialog_apply_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dialog_apply_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DialogApplyComponent);
    return DialogApplyComponent;
}());



/***/ }),

/***/ "pUeC":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "pX3q":
/*!********************************************************************!*\
  !*** ./src/app/company/detail-company/detail-company.component.ts ***!
  \********************************************************************/
/*! exports provided: DetailCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCompanyComponent", function() { return DetailCompanyComponent; });
/* harmony import */ var _raw_loader_detail_company_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./detail-company.component.html */ "sS4U");
/* harmony import */ var _detail_company_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-company.component.scss */ "E0Y7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_company_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/company/company.service */ "KXKP");
/* harmony import */ var _security_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../security/token.service */ "zdrf");
/* harmony import */ var _model_editCompany__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/editCompany */ "rIih");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DetailCompanyComponent = /** @class */ (function () {
    function DetailCompanyComponent(router, companyService, tokenService) {
        var _this = this;
        this.router = router;
        this.companyService = companyService;
        this.tokenService = tokenService;
        this.check = true;
        this.idCustom = tokenService.getIdGuest();
        this.companyService.getCompanyNameById(this.idCustom).subscribe(function (data) {
            _this.companyCurrent = data;
        });
    }
    DetailCompanyComponent.prototype.ngOnInit = function () {
    };
    DetailCompanyComponent.prototype.ngSubmit = function (form) {
        var _this = this;
        console.log(this.companyCurrent);
        this.editCompany = new _model_editCompany__WEBPACK_IMPORTED_MODULE_6__["EditCompany"](this.companyCurrent.name, this.companyCurrent.avatar, this.companyCurrent.description, this.companyCurrent.address, this.companyCurrent.employeeQuantity, this.companyCurrent.linkMap, this.companyCurrent.phone);
        console.log(this.editCompany);
        this.companyService.editCompany(this.idCustom, this.editCompany).subscribe(function (data) {
            console.log(data);
            _this.check = true;
        });
    };
    DetailCompanyComponent.prototype.onUpLoadAvatar = function (event) {
        this.companyCurrent.avatar = event;
    };
    DetailCompanyComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_company_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"] },
        { type: _security_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }
    ]; };
    DetailCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detail-company',
            template: _raw_loader_detail_company_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_detail_company_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_company_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"],
            _security_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]])
    ], DetailCompanyComponent);
    return DetailCompanyComponent;
}());



/***/ }),

/***/ "padZ":
/*!***************************************************!*\
  !*** ./src/app/service/account/changePassword.ts ***!
  \***************************************************/
/*! exports provided: ChangePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassword", function() { return ChangePassword; });
var ChangePassword = /** @class */ (function () {
    function ChangePassword(password) {
        this.password = password;
    }
    return ChangePassword;
}());



/***/ }),

/***/ "pm72":
/*!***************************************!*\
  !*** ./src/app/model/forwardApply.ts ***!
  \***************************************/
/*! exports provided: ForwardApply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForwardApply", function() { return ForwardApply; });
var ForwardApply = /** @class */ (function () {
    function ForwardApply(idUser, idCompany) {
        this.idUser = idUser;
        this.idCompany = idCompany;
    }
    return ForwardApply;
}());



/***/ }),

/***/ "pmBc":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/lock-unlock-recruiment/lock-unlock-recruiment.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Banner Area -->\r\n<section class=\"banner-area\">\r\n    <div class=\"d-table\">\r\n        <div class=\"d-table-cell\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row align-items-center\">\r\n                    <div class=\"col-lg-6\">\r\n                        <div class=\"banner-content\">\r\n                           <h1>you are admin</h1>\r\n                            <div class=\"banner-btn\">\r\n                                <a href=\"contact.html\" class=\"box-btn\">Contact Us</a>\r\n                                <a href=\"about.html\" class=\"box-btn border-btn\">Know More</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6\">\r\n                        <div class=\"banner-img\">\r\n                            <img src=\"../../../../assets/images/home-bg-1-img.png\" alt=\"banner-img\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"home-shape\">\r\n        <div class=\"shape1\">\r\n            <img src=\"../../../../assets/images/shape/1.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape2\">\r\n            <img src=\"../../../../assets/images/shape/2.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape3\">\r\n            <img src=\"../../../../assets/images/shape/3.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape4\">\r\n            <img src=\"../../../../assets/images/shape/4.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape5\">\r\n            <img src=\"../../../../assets/images/shape/5.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape6\">\r\n            <img src=\"../../../../assets/images/shape/6.png\" alt=\"shape\">\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Banner Area -->\r\n\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\" style=\"margin-top: 20px\">\r\n            <mat-card style=\"margin: 50px 0;\">\r\n                <h2 style=\"text-align: center\">Danh Sách Bài Đăng Tuyển Dụng Dành Cho Admin</h2>\r\n                <div class=\"mat-elevation-z8\">\r\n                    <table mat-table [dataSource]=\"dataSource\">\r\n\r\n                        <!-- Position Column -->\r\n                        <ng-container matColumnDef=\"id\">\r\n                            <th mat-header-cell *matHeaderCellDef> No.</th>\r\n                            <td mat-cell *matCellDef=\"let element; let i = index\"> {{i + 1}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"title\">\r\n                            <th mat-header-cell *matHeaderCellDef>Tiêu đề</th>\r\n                            <td mat-cell *matCellDef=\"let element\"><span\r\n                                    class=\"btn btn-link\">{{element.title}}</span></td>\r\n                        </ng-container>\r\n\r\n\r\n                        <ng-container matColumnDef=\"editStatus\">\r\n                            <th mat-header-cell *matHeaderCellDef> UnLock/Lock</th>\r\n                            <td mat-cell *matCellDef=\"let element\">\r\n                                <button (click)=changeStatus(element.id) *ngIf=\"element.status\" mat-icon-button\r\n                                        class=\"btn btn-danger\">\r\n                                    <mat-icon>lock_open</mat-icon>\r\n                                </button>\r\n                                <button (click)=changeStatus(element.id) *ngIf=\"!element.status\" mat-icon-button\r\n                                        class=\"btn btn-success\">\r\n                                    <mat-icon>lock</mat-icon>\r\n                                </button>\r\n                            </td>\r\n                        </ng-container>\r\n\r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    </table>\r\n\r\n                    <mat-paginator [pageSizeOptions]=\"[6, 10, 20, 30]\"\r\n                                   showFirstLastButtons\r\n                                   aria-label=\"Select page of periodic elements\">\r\n                    </mat-paginator>\r\n                </div>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- Company Area -->\r\n<section class=\"home-company-area bg-color\">\r\n    <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-lg-6 col-md-12\">\r\n                <div class=\"company-content\">\r\n                    <div class=\"company-tittle\">\r\n                        <span>Our Company</span>\r\n                        <h2>Innovative It Helping Service All Over the World</h2>\r\n\r\n                        <p>It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.</p>\r\n\r\n                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form variations passages.</p>\r\n                    </div>\r\n\r\n                    <a href=\"#\" class=\"box-btn\">\r\n                        Know More\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-12\">\r\n                <div class=\"company-img\">\r\n                    <img src=\"./assets/images/company/company-img.jpg\" alt=\"company\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Company Area -->\r\n\r\n\r\n<!-- Process Area -->\r\n<section class=\"home-process-area pt-100 pb-70\">\r\n    <div class=\"container\">\r\n        <div class=\"section-title\">\r\n            <span>Working Process</span>\r\n            <h2>We are popular because of our way of working</h2>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"single-process\">\r\n                    <div class=\"icon\">\r\n                        <img src=\"assets/images/process/p1.png\" alt=\"process\">\r\n                        <span>\r\n                                        <img src=\"assets/images/process/next.png\" alt=\"shape\">\r\n                                    </span>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <h3>Research Product</h3>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"single-process\">\r\n                    <div class=\"icon\">\r\n                        <img src=\"assets/images/process/p2.png\" alt=\"process\">\r\n                        <span class=\"pro-span\">\r\n                                        <img src=\"assets/images/process/next.png\" alt=\"shape\">\r\n                                    </span>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <h3>User Testing</h3>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"single-process\">\r\n                    <div class=\"icon\">\r\n                        <img src=\"assets/images/process/p3.png\" alt=\"process\">\r\n                        <span>\r\n                                        <img src=\"assets/images/process/next.png\" alt=\"shape\">\r\n                                    </span>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <h3>Development</h3>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"single-process\">\r\n                    <div class=\"icon\">\r\n                        <img src=\"assets/images/process/p4.png\" alt=\"process\">\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <h3>Product Handover</h3>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Process Area -->\r\n");

/***/ }),

/***/ "ptxN":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/recruitmentnew/list-recruitmentnew-company/list-recruitmentnew-company.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Banner Area -->\r\n<section class=\"banner-area\">\r\n    <div class=\"d-table\">\r\n        <div class=\"d-table-cell\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row align-items-center\">\r\n                    <div class=\"col-lg-6\">\r\n                        <div class=\"banner-content\">\r\n                            <h1>\r\n                                Chào mừng <span style=\"font-weight: bold\">{{nameCompany}}</span> đến với Paso\r\n                            </h1>\r\n                            <p>\r\n                                {{descriptionCompany}}\r\n                            </p>\r\n                            <div class=\"banner-btn\">\r\n                                <a routerLink=\"home\" class=\"box-btn\">Trang chủ</a>\r\n                                <a routerLink=\"/list-recruitmentnew-user/xxx\" class=\"box-btn border-btn\">Tìm kiếm</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6\">\r\n                        <div class=\"banner-img\">\r\n                            <img src=\"../../../../assets/images/home-bg-1-img.png\" alt=\"banner-img\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"home-shape\">\r\n        <div class=\"shape1\">\r\n            <img src=\"../../../../assets/images/shape/1.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape2\">\r\n            <img src=\"../../../../assets/images/shape/2.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape3\">\r\n            <img src=\"../../../../assets/images/shape/3.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape4\">\r\n            <img src=\"../../../../assets/images/shape/4.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape5\">\r\n            <img src=\"../../../../assets/images/shape/5.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape6\">\r\n            <img src=\"../../../../assets/images/shape/6.png\" alt=\"shape\">\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Banner Area -->\r\n\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\" style=\"margin-top: 20px\">\r\n            <mat-card style=\"margin: 50px 0;\">\r\n                <h2 style=\"text-align: center\">Danh Sách Bài Đăng Tuyển Dụng</h2>\r\n                <div class=\"mat-elevation-z8\">\r\n                    <table mat-table [dataSource]=\"dataSource\">\r\n\r\n                        <!-- Position Column -->\r\n                        <ng-container matColumnDef=\"id\">\r\n                            <th mat-header-cell *matHeaderCellDef> No.</th>\r\n                            <td mat-cell *matCellDef=\"let element; let i = index\"> {{i + 1}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"title\">\r\n                            <th mat-header-cell *matHeaderCellDef>Tiêu đề</th>\r\n                            <td mat-cell *matCellDef=\"let element\"><a (click)=\"openDialogDetails(element.id)\"><span\r\n                                    class=\"btn btn-link\">{{element.title}}</span></a></td>\r\n                        </ng-container>\r\n\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"expDate\">\r\n                            <th mat-header-cell *matHeaderCellDef>Ngày hết hạn</th>\r\n                            <td mat-cell *matCellDef=\"let element\"> {{element.expDate}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"status\">\r\n                            <th mat-header-cell *matHeaderCellDef>Trạng thái</th>\r\n                            <td mat-cell *matCellDef=\"let element\"><span *ngIf=\"element.status==true\">UNLOCK</span></td>\r\n                            <td mat-cell *matCellDef=\"let element\"><span *ngIf=\"element.status == false\">LOCK</span>\r\n                            </td>\r\n                        </ng-container>\r\n\r\n                        <!--             Symbol Column -->\r\n                        <ng-container matColumnDef=\"edit\">\r\n                            <th mat-header-cell *matHeaderCellDef>Sửa</th>\r\n                            <td mat-cell *matCellDef=\"let element\">\r\n                                <button [routerLink]=\"['/update-recruitmentnew/',element.id]\" mat-icon-button\r\n                                        color=\"primary\"\r\n                                        aria-label=\"Example icon button with a heart icon\" class=\"btn btn-primary\">\r\n                                    <mat-icon color=\"primary\">edit</mat-icon>\r\n                                </button>\r\n                            </td>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"delete\">\r\n                            <th mat-header-cell *matHeaderCellDef>Xóa</th>\r\n                            <td mat-cell *matCellDef=\"let element\">\r\n                                <button (click)=\"openDialog(element.id)\" mat-icon-button class=\"btn btn-danger\">\r\n                                    <mat-icon color=\"warn\">delete</mat-icon>\r\n                                </button>\r\n                            </td>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"editStatus\">\r\n                            <th mat-header-cell *matHeaderCellDef> Mở khóa/Khóa</th>\r\n                            <td mat-cell *matCellDef=\"let element\">\r\n                                <button (click)=changeStatus(element.id) *ngIf=\"element.status\" mat-icon-button\r\n                                        class=\"btn btn-danger\">\r\n                                    <mat-icon>lock_open</mat-icon>\r\n                                </button>\r\n                                <button (click)=changeStatus(element.id) *ngIf=\"!element.status\" mat-icon-button\r\n                                        class=\"btn btn-success\">\r\n                                    <mat-icon>lock</mat-icon>\r\n                                </button>\r\n                            </td>\r\n                        </ng-container>\r\n\r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    </table>\r\n\r\n                    <mat-paginator [pageSizeOptions]=\"[3, 10, 20, 30]\"\r\n                                   showFirstLastButtons\r\n                                   aria-label=\"Select page of periodic elements\">\r\n                    </mat-paginator>\r\n                </div>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- Company Area -->\r\n<section class=\"home-company-area bg-color\">\r\n    <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-lg-6 col-md-12\">\r\n                <div class=\"company-content\">\r\n                    <div class=\"company-tittle\">\r\n                        <span>Our Company</span>\r\n                        <h2>Innovative It Helping Service All Over the World</h2>\r\n\r\n                        <p>It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.</p>\r\n\r\n                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form variations passages.</p>\r\n                    </div>\r\n\r\n                    <a href=\"#\" class=\"box-btn\">\r\n                        Know More\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-12\">\r\n                <div class=\"company-img\">\r\n                    <img src=\"./assets/images/company/company-img.jpg\" alt=\"company\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Company Area -->\r\n\r\n\r\n<!-- Process Area -->\r\n<section class=\"home-process-area pt-100 pb-70\">\r\n    <div class=\"container\">\r\n        <div class=\"section-title\">\r\n            <span>Working Process</span>\r\n            <h2>We are popular because of our way of working</h2>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"single-process\">\r\n                    <div class=\"icon\">\r\n                        <img src=\"assets/images/process/p1.png\" alt=\"process\">\r\n                        <span>\r\n                                        <img src=\"assets/images/process/next.png\" alt=\"shape\">\r\n                                    </span>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <h3>Research Product</h3>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"single-process\">\r\n                    <div class=\"icon\">\r\n                        <img src=\"assets/images/process/p2.png\" alt=\"process\">\r\n                        <span class=\"pro-span\">\r\n                                        <img src=\"assets/images/process/next.png\" alt=\"shape\">\r\n                                    </span>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <h3>User Testing</h3>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"single-process\">\r\n                    <div class=\"icon\">\r\n                        <img src=\"assets/images/process/p3.png\" alt=\"process\">\r\n                        <span>\r\n                                        <img src=\"assets/images/process/next.png\" alt=\"shape\">\r\n                                    </span>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <h3>Development</h3>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-6\">\r\n                <div class=\"single-process\">\r\n                    <div class=\"icon\">\r\n                        <img src=\"assets/images/process/p4.png\" alt=\"process\">\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        <h3>Product Handover</h3>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Process Area -->\r\n");

/***/ }),

/***/ "qQLI":
/*!*********************************************************************************!*\
  !*** ./src/app/dialog/dialogApplyFail/dialog-apply/dialog-apply.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctYXBwbHkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "r+ec":
/*!****************************************************************!*\
  !*** ./src/app/company/list-company/list-company.component.ts ***!
  \****************************************************************/
/*! exports provided: ListCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCompanyComponent", function() { return ListCompanyComponent; });
/* harmony import */ var _raw_loader_list_company_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./list-company.component.html */ "WbY4");
/* harmony import */ var _list_company_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-company.component.scss */ "AzJW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_company_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/company/company.service */ "KXKP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListCompanyComponent = /** @class */ (function () {
    function ListCompanyComponent(companyService, activeRouter) {
        this.companyService = companyService;
        this.activeRouter = activeRouter;
        this.company = [];
        this.id = 0;
    }
    ListCompanyComponent.prototype.ngOnInit = function () {
        this.getListCompany();
    };
    ListCompanyComponent.prototype.getListCompany = function () {
        var _this = this;
        this.companyService.getAllCompany().subscribe(function (listCompany) {
            _this.company = listCompany;
        });
    };
    ListCompanyComponent.ctorParameters = function () { return [
        { type: _service_company_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    ListCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list-company',
            template: _raw_loader_list_company_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_list_company_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_company_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ListCompanyComponent);
    return ListCompanyComponent;
}());



/***/ }),

/***/ "r+kn":
/*!*********************************************************!*\
  !*** ./src/app/user/apply-list/apply-list.component.ts ***!
  \*********************************************************/
/*! exports provided: ApplyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyListComponent", function() { return ApplyListComponent; });
/* harmony import */ var _raw_loader_apply_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./apply-list.component.html */ "Ki41");
/* harmony import */ var _apply_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-list.component.scss */ "H2Zj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_apply_apply_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/apply/apply.service */ "j6QF");
/* harmony import */ var _security_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../security/token.service */ "zdrf");
/* harmony import */ var _company_recruitmentnew_detail_recruitmentnew_detail_recruitmentnew_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../company/recruitmentnew/detail-recruitmentnew/detail-recruitmentnew.component */ "wR/+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApplyListComponent = /** @class */ (function () {
    function ApplyListComponent(applyService, token, dialog) {
        this.applyService = applyService;
        this.token = token;
        this.dialog = dialog;
        this.applis = [];
        this.totalElements = 0;
    }
    ApplyListComponent.prototype.ngOnInit = function () {
        this.pageApply({ page: 0, size: 3 });
    };
    ApplyListComponent.prototype.pageApply = function (nextPage) {
        var _this = this;
        this.idGuest = this.token.getIdGuest();
        this.applyService.pageApply(nextPage, this.idGuest).subscribe(function (data) {
            _this.applis = data['content'];
            _this.totalElements = data['totalElements'];
            console.log(data);
        });
    };
    ApplyListComponent.prototype.nextPage = function (event) {
        var request = {};
        request['page'] = event.pageIndex.toString();
        request['size'] = event.pageSize.toString();
        this.pageApply(request);
    };
    ApplyListComponent.prototype.openDialogDetails = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_company_recruitmentnew_detail_recruitmentnew_detail_recruitmentnew_component__WEBPACK_IMPORTED_MODULE_5__["DetailRecruitmentnewComponent"], {
            data: {
                id: id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.pageApply({ page: 0, size: 3 });
            console.log('The dialog was closed');
        });
    };
    ApplyListComponent.ctorParameters = function () { return [
        { type: _service_apply_apply_service__WEBPACK_IMPORTED_MODULE_3__["ApplyService"] },
        { type: _security_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
    ]; };
    ApplyListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-apply-list',
            template: _raw_loader_apply_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_apply_list_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_apply_apply_service__WEBPACK_IMPORTED_MODULE_3__["ApplyService"],
            _security_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], ApplyListComponent);
    return ApplyListComponent;
}());



/***/ }),

/***/ "rIih":
/*!**************************************!*\
  !*** ./src/app/model/editCompany.ts ***!
  \**************************************/
/*! exports provided: EditCompany */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCompany", function() { return EditCompany; });
var EditCompany = /** @class */ (function () {
    function EditCompany(name, avatar, description, address, employeeQuantity, linkMap, phone) {
        this.name = name;
        this.avatar = avatar;
        this.description = description;
        this.address = address;
        this.employeeQuantity = employeeQuantity;
        // this.city = city;
        this.linkMap = linkMap;
        this.phone = phone;
    }
    return EditCompany;
}());



/***/ }),

/***/ "sQRL":
/*!**********************************************!*\
  !*** ./src/app/user/service/user.service.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiServerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl;
    }
    UserService.prototype.getUserById = function (id) {
        return this.http.get(this.apiServerUrl + "/user/" + id);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "sS4U":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/detail-company/detail-company.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-title-area\" style=\"height: 439px\">\r\n    <div class=\"container\">\r\n        <div class=\"page-title-content\">\r\n            <h2>Thông tin tài khoản</h2>\r\n            <ul>\r\n                <li>\r\n                    <a routerLink=\"/list-recruitmentnew-company\">\r\n                        Home\r\n                    </a>\r\n                </li>\r\n                <li class=\"active\">Quản lý hồ sơ</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"page-shape\">\r\n        <div class=\"shape1\">\r\n            <img src=\"assets/images/shape/1.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape3\">\r\n            <img src=\"assets/images/shape/3.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape4\">\r\n            <img src=\"assets/images/shape/4.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape5\">\r\n            <img src=\"assets/images/shape/5.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape6\">\r\n            <img src=\"assets/images/shape/6.png\" alt=\"shape\">\r\n        </div>\r\n    </div>\r\n</div>\r\n<br>\r\n<section *ngIf=\"check\" class=\"home-contact-area home-2-contact pb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6\">\r\n                <div class=\"content\">\r\n                    <form>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Tên công ty</label>\r\n                                    <input type=\"text\" name=\"name\"  class=\"form-control\"  disabled [(ngModel)]=\"companyCurrent.name\"  >\r\n                                    <div class=\"help-block with-errors\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-12 col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Địa chỉ</label>\r\n                                    <input type=\"text\" name=\"address\"  class=\"form-control\"  disabled [(ngModel)]=\"companyCurrent.address\"  >\r\n                                    <div class=\"help-block with-errors\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-12 col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Mã công ty</label>\r\n                                    <input type=\"text\" name=\"codeCompany\"  class=\"form-control\" disabled [(ngModel)]=\"companyCurrent.codeCompany\"  >\r\n                                    <div class=\"help-block with-errors\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-12 col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Mô tả</label>\r\n                                    <input type=\"text\" name=\"description\"  class=\"form-control\" disabled [(ngModel)]=\"companyCurrent.description\"  >\r\n                                    <div class=\"help-block with-errors\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-12 col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Số lượng nhân viên</label>\r\n                                    <input type=\"text\" name=\"employeeQuantity\"  class=\"form-control\" disabled [(ngModel)]=\"companyCurrent.employeeQuantity\"  >\r\n                                    <div class=\"help-block with-errors\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-12 col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Link Google Map</label>\r\n                                    <input type=\"text\" name=\"linkMap\"  class=\"form-control\" disabled [(ngModel)]=\"companyCurrent.linkMap\"  >\r\n                                    <div class=\"help-block with-errors\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-12 col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Số điện thoại</label>\r\n                                    <input type=\"text\" name=\"phone\"  class=\"form-control\" disabled [(ngModel)]=\"companyCurrent.phone\"  >\r\n                                    <div class=\"help-block with-errors\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-12 col-md-12\">\r\n                                <button type=\"submit\" (click)=\"check = !check\" class=\"default-btn page-btn box-btn\">\r\n                                    Sửa\r\n                                </button>\r\n                                <div class=\"h3 text-center hidden\"></div>\r\n                                <div class=\"clearfix\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6\">\r\n                    <img src=\"{{companyCurrent.avatar}}g\" alt=\"contact\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section *ngIf=\"!check\" class=\"home-contact-area home-2-contact pb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6\">\r\n                <div class=\"content\">\r\n                    <form #form=\"ngForm\" (ngSubmit)=\"form.form.valid && ngSubmit(form)\" novalidate>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Tên công ty</label>\r\n                                    <input type=\"text\" name=\"name\"  class=\"form-control\" required [(ngModel)]=\"companyCurrent.name\" #name=\"ngModel\" >\r\n                                    <mat-error *ngIf=\"name?.hasError('required')\">Không được bỏ trống</mat-error>\r\n                                    <div class=\"help-block with-errors\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-12 col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Địa chỉ</label>\r\n                                    <input type=\"text\" name=\"address\"  class=\"form-control\" [(ngModel)]=\"companyCurrent.address\"  >\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-12 col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Mô tả</label>\r\n                                    <input type=\"text\" name=\"description\"  class=\"form-control\"  [(ngModel)]=\"companyCurrent.description\"  >\r\n                                    <div class=\"help-block with-errors\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-12 col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Số lượng nhân viên</label>\r\n                                    <input type=\"text\" name=\"employeeQuantity\"  class=\"form-control\" required=\"\" [(ngModel)]=\"companyCurrent.employeeQuantity\"  >\r\n                                    <div class=\"help-block with-errors\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-12 col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Link Google Map</label>\r\n                                    <input type=\"text\" name=\"linkMap\"  class=\"form-control\" required=\"\" [(ngModel)]=\"companyCurrent.linkMap\"  >\r\n                                    <div class=\"help-block with-errors\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-12 col-sm-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Số điện thoại</label>\r\n                                    <input type=\"text\" name=\"phone\"  class=\"form-control\" required=\"\" [(ngModel)]=\"companyCurrent.phone\"  >\r\n                                    <div class=\"help-block with-errors\"></div>\r\n                                </div>\r\n                            </div><div class=\"col-lg-12 col-sm-12\" >\r\n                                <div class=\"form-group\">\r\n                                    <app-upload-image (giveURLtoCreate)=\"onUpLoadAvatar($event)\">Ảnh</app-upload-image>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-12 col-md-12\">\r\n                                <button class=\"default-btn page-btn box-btn\">\r\n                                    Submit\r\n                                </button>\r\n                                <div id=\"msgSubmit\" class=\"h3 text-center hidden\"></div>\r\n                                <div class=\"clearfix\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6\">\r\n                <img src=\"{{companyCurrent.avatar}}g\" alt=\"contact\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "tlmV":
/*!************************************************************!*\
  !*** ./src/app/user/CV/create-cv/create-cv.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtY3YuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "uIEu":
/*!*************************************************************!*\
  !*** ./src/app/upload/upload-file/upload-file.component.ts ***!
  \*************************************************************/
/*! exports provided: UploadFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function() { return UploadFileComponent; });
/* harmony import */ var _raw_loader_upload_file_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./upload-file.component.html */ "UjLF");
/* harmony import */ var _upload_file_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-file.component.scss */ "uP7J");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadFileComponent = /** @class */ (function () {
    function UploadFileComponent(afStorage) {
        this.afStorage = afStorage;
        this.checkUpLoadFile = false;
        this.giveURLtoCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    UploadFileComponent.prototype.ngOnInit = function () {
    };
    UploadFileComponent.prototype.onFileChanged = function (event) {
        this.selectFile = event.target.files[0];
        this.onUpLoad();
    };
    UploadFileComponent.prototype.onUpLoad = function () {
        var _this = this;
        this.checkUpLoadFile = true;
        var id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref(id);
        this.ref.put(this.selectFile).then(function (snapshot) {
            return snapshot.ref.getDownloadURL();
        }).then(function (downloadURL) {
            _this.checkUpLoadFile = false;
            _this.downloadURL = downloadURL;
            _this.giveURLtoCreate.emit(_this.downloadURL);
            console.log(_this.downloadURL);
            return downloadURL;
        }).catch(function (error) {
            console.log('Fail Upload ' + error);
        });
    };
    UploadFileComponent.ctorParameters = function () { return [
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }
    ]; };
    UploadFileComponent.propDecorators = {
        giveURLtoCreate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    UploadFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-upload-file',
            template: _raw_loader_upload_file_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_upload_file_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]])
    ], UploadFileComponent);
    return UploadFileComponent;
}());



/***/ }),

/***/ "uP7J":
/*!***************************************************************!*\
  !*** ./src/app/upload/upload-file/upload-file.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQtZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "uRAZ":
/*!********************************************!*\
  !*** ./src/app/model/changeStatusApply.ts ***!
  \********************************************/
/*! exports provided: ChangeStatusApply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeStatusApply", function() { return ChangeStatusApply; });
var ChangeStatusApply = /** @class */ (function () {
    function ChangeStatusApply(id, status) {
        this.id = id;
        this.status = status;
    }
    return ChangeStatusApply;
}());



/***/ }),

/***/ "v1pD":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog-match/dialog-match.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\" style=\"margin-top: 20px\">\r\n            <mat-card style=\"margin: 50px 0\">\r\n                <h4 class=\"alert alert-dark\">Bạn đã ứng tuyển công việc này rồi</h4>\r\n                <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"false\">Đóng</button>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss */ "ZTFi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _security_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../security/auth.service */ "JZt4");
/* harmony import */ var _security_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../security/token.service */ "zdrf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _security_SignInForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../security/SignInForm */ "4btf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, tokenService, router) {
        this.authService = authService;
        this.tokenService = tokenService;
        this.router = router;
        this.hide = true;
        this.form = {};
        this.status = '';
        this.errorLock = {
            message: "LOCK"
        };
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required
        ]);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.signInForm = new _security_SignInForm__WEBPACK_IMPORTED_MODULE_6__["SignInForm"](this.form.username, this.form.password);
        this.authService.signIn(this.signInForm).subscribe(function (data) {
            console.log("dinh", data);
            if (JSON.stringify(data) == JSON.stringify(_this.errorLock)) {
                _this.status = 'Tài khoản của bạn đang bị khoá. Chuyển khoản đến stk này để mở khóa. !';
                return;
            }
            if (data.token != undefined) {
                _this.tokenService.setIdAccount(data.idAccount);
                _this.tokenService.setIdGuest(data.idGuest);
                _this.tokenService.setTokenKey(data.token);
                _this.tokenService.setNameKey(data.username);
                _this.tokenService.setRoleKey(data.roles);
                for (var i = 0; i < _this.tokenService.getRoleKey().length; i++) {
                    if (_this.tokenService.getRoleKey()[i] == 'COMPANY') {
                        _this.router.navigate(['home']).then(function () {
                            window.location.reload();
                        });
                    }
                    if (_this.tokenService.getRoleKey()[i] == 'USER') {
                        _this.authService.findById(_this.tokenService.getIdAccount()).subscribe(function (data) {
                            if (data == 'NON_ACTIVE') {
                                window.sessionStorage.clear();
                                _this.router.navigate(['login']).then(function () {
                                    window.location.reload();
                                });
                            }
                        });
                        _this.router.navigate(['home']).then(function () {
                            window.location.reload();
                        });
                    }
                    if (_this.tokenService.getRoleKey()[i] == 'ADMIN') {
                        _this.router.navigate(['home']).then(function () {
                            window.location.reload();
                        });
                    }
                }
            }
        });
        this.status = 'Bạn nhập sai tài khoản hoặc mật khẩu!';
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _security_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _security_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_security_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _security_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "wR/+":
/*!*************************************************************************************************!*\
  !*** ./src/app/company/recruitmentnew/detail-recruitmentnew/detail-recruitmentnew.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DetailRecruitmentnewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailRecruitmentnewComponent", function() { return DetailRecruitmentnewComponent; });
/* harmony import */ var _raw_loader_detail_recruitmentnew_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./detail-recruitmentnew.component.html */ "1AE3");
/* harmony import */ var _detail_recruitmentnew_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-recruitmentnew.component.scss */ "2dVa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/recruitmentNew/recruitment-new.service */ "FmPh");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailRecruitmentnewComponent = /** @class */ (function () {
    function DetailRecruitmentnewComponent(rcms, router, data, dialogRef) {
        var _this = this;
        this.rcms = rcms;
        this.router = router;
        this.data = data;
        this.dialogRef = dialogRef;
        this.rcms.getRecruitmentNewById(data.id).subscribe(function (data) {
            _this.recruitmentNew = data;
            console.log(_this.recruitmentNew);
        });
    }
    DetailRecruitmentnewComponent.prototype.ngOnInit = function () {
    };
    DetailRecruitmentnewComponent.prototype.back = function () {
    };
    DetailRecruitmentnewComponent.ctorParameters = function () { return [
        { type: _service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_5__["RecruitmentNewService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
    ]; };
    DetailRecruitmentnewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detail-recruitmentnew',
            template: _raw_loader_detail_recruitmentnew_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_detail_recruitmentnew_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_recruitmentNew_recruitment_new_service__WEBPACK_IMPORTED_MODULE_5__["RecruitmentNewService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
    ], DetailRecruitmentnewComponent);
    return DetailRecruitmentnewComponent;
}());



/***/ }),

/***/ "waWb":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/CV/create-cv/create-cv.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Start Page Title Area -->\r\n<div class=\"page-title-area\" style=\"height: 439px\">\r\n    <div class=\"container\">\r\n        <div class=\"page-title-content\">\r\n            <h2>Hồ Sơ Ứng Tuyển</h2>\r\n            <ul>\r\n                <li>\r\n                    <a routerLink=\"list-recruitmentnew-user/xxx\">\r\n                        Home\r\n                    </a>\r\n                </li>\r\n\r\n                <li>Pages</li>\r\n\r\n                <li class=\"active\">FAQ</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"page-shape\">\r\n        <div class=\"shape1\">\r\n            <img src=\"assets/images/shape/1.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape3\">\r\n            <img src=\"assets/images/shape/3.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape4\">\r\n            <img src=\"assets/images/shape/4.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape5\">\r\n            <img src=\"assets/images/shape/5.png\" alt=\"shape\">\r\n        </div>\r\n        <div class=\"shape6\">\r\n            <img src=\"assets/images/shape/6.png\" alt=\"shape\">\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Page Title Area -->\r\n\r\n\r\n<p></p>\r\n\r\n<!-- Home Contact Area -->\r\n<section class=\"home-contact-area home-2-contact pb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"section-title\">\r\n            <span></span>\r\n            <h2>Hãy Bắt Đầu Tạo CV Ngay Hôm Nay!</h2>\r\n            <p style=\"color: red\">{{status}}</p>\r\n        </div>\r\n        <div class=\"content\" style=\"margin-left: 130px;margin-right: 130px;\">\r\n            <form [formGroup]=\"cvForm\" (ngSubmit)=\"ngSubmit()\" id=\"contactForm\" class=\"create-category\"\r\n                  novalidate>\r\n                <div id=\"container\" class=\"row\">\r\n                    <div class=\"col-lg-6 col-sm-6\">\r\n                        <mat-form-field style=\"width: 100%\" appearance=\"outline\">\r\n                            <!--                            NĂM KINH NGHIỆM-->\r\n                            <mat-label>Năm kinh nghiệm</mat-label>\r\n                            <input matInput placeholder=\"Nhập năm kinh nghiệm\" formControlName=\"expYear\">\r\n                            <mat-icon color=\"black\" matSuffix>business_center</mat-icon>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <!--LƯƠNG MONG MUỐN-->\r\n                    <div class=\"col-lg-6 col-sm-6\">\r\n                        <mat-form-field style=\"width: 100%\" appearance=\"outline\">\r\n                            <mat-label>Lương mong muốn</mat-label>\r\n                            <input matInput placeholder=\"Nhập lương mong muốn\" formControlName=\"salaryExpectation\">\r\n                            <mat-icon color=\"black\" matSuffix>monetization_on</mat-icon>\r\n                        </mat-form-field>\r\n                    </div>\r\n\r\n                    <!--                    KĨ NĂNG CÁ NHÂN-->\r\n                    <p style=\"text-align: center;color: #3e8acc\">Kỹ năng cá nhân</p>\r\n                    <div formArrayName=\"skills\">\r\n                        <div style=\"border: 1px solid black\">\r\n                            <ng-container formArrayName=\"skills\">\r\n                                <ng-container *ngFor=\"let skillForm of skills.controls; let i = index\">\r\n                                    <div [formGroup]=\"skillForm\">\r\n                                        <div class=\"col-lg-12 col-sm-12\">\r\n                                            <mat-form-field style=\"width: 100%\" appearance=\"outline\">\r\n                                                <mat-label>Kỹ năng làm việc</mat-label>\r\n                                                <input formControlName=\"name\" matInput\r\n                                                       placeholder=\"Nhập kỹ năng làm việc\">\r\n                                                <mat-icon color=\"black\" matSuffix>stream</mat-icon>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"col-lg-12 col-sm-12\">\r\n                                            <mat-form-field style=\"width: 100%\" appearance=\"outline\">\r\n                                                <mat-label>Mức độ thành thạo</mat-label>\r\n                                                <input formControlName=\"proficiency\" matInput\r\n                                                       placeholder=\"Nhập mức độ làm việc\">\r\n                                                <mat-icon color=\"black\" matSuffix>stream</mat-icon>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <button style=\"width: 50px; height: 50px; padding: 0; margin-bottom: 20px\"\r\n                                                (click)=\"deleteSkill(i)\" mat-raised-button>\r\n                                            Xóa\r\n                                        </button>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n\r\n                        <button style=\"width: 200px; height: 50px; padding: 0; margin-bottom: 20px\" type=\"button\"\r\n                                (click)=\"addSkill()\"\r\n                                mat-raised-button>\r\n                            Thêm kỹ năng mới\r\n                        </button>\r\n                    </div>\r\n\r\n                    <!--                    //------------------------------------------------------------------------>\r\n                    <p style=\"text-align: center;color: #3e8acc\">Kinh nghiệm bản thân</p>\r\n                    <div formArrayName=\"workExps\">\r\n                        <div style=\"border: 1px solid black\">\r\n                            <ng-container formControlName=\"workExps\">\r\n                                <ng-container *ngFor=\"let workExpForm of workExps.controls; let i = index\">\r\n                                    <div [formGroup]=\"workExpForm\">\r\n                                        <div class=\"col-lg-12 col-sm-12\">\r\n                                            <mat-form-field style=\"width: 100%\" appearance=\"outline\">\r\n                                                <mat-label>Công việc</mat-label>\r\n                                                <input formControlName=\"title\" matInput\r\n                                                       placeholder=\"Nhập kinh nghiệm làm việc\">\r\n                                                <mat-icon color=\"black\" matSuffix>workspace_premium</mat-icon>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"col-lg-12 col-sm-12\">\r\n                                            <mat-form-field appearance=\"outline\" style=\"width: 100%\">\r\n                                                <mat-label>Ngày bắt đầu công việc</mat-label>\r\n                                                <input formControlName=\"startDate\" matInput [matDatepicker]=\"picker\">\r\n                                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                                <mat-datepicker #picker></mat-datepicker>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"col-lg-12 col-sm-12\">\r\n                                            <mat-form-field appearance=\"outline\" style=\"width: 100%\">\r\n                                                <mat-label>Ngày kết thúc công việc</mat-label>\r\n                                                <input formControlName=\"endDate\" matInput [matDatepicker]=\"picker1\">\r\n                                                <mat-datepicker-toggle matSuffix\r\n                                                                       [for]=\"picker1\"></mat-datepicker-toggle>\r\n                                                <mat-datepicker #picker1></mat-datepicker>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"col-lg-12 col-sm-12\">\r\n                                            <mat-form-field style=\"width: 100%\" appearance=\"outline\">\r\n                                                <mat-label>Nội dung</mat-label>\r\n                                                <input formControlName=\"content\" matInput placeholder=\"Nội dung\">\r\n                                                <mat-icon color=\"black\" matSuffix>sort</mat-icon>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <button style=\"width: 50px; height: 50px; padding: 0; margin-bottom: 20px\"\r\n                                                (click)=\"deleteWorkExp(i)\" mat-raised-button>\r\n                                            Xóa\r\n                                        </button>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </div>\r\n                        <button type=\"button\" style=\"width: 200px; height: 50px; padding: 0; margin-bottom: 20px\"\r\n                                (click)=\"addWorkExp()\"\r\n                                mat-raised-button>\r\n                            Thêm kinh nghiệm mới\r\n                        </button>\r\n                    </div>\r\n\r\n                    <div class=\"file-cv col-lg-12 col-sm-12\">\r\n                        <mat-form-field appearance=\"outline\" style=\"width: 50%\">\r\n                            <input matInput\r\n                                   hidden\r\n                                   placeholder=\"Placeholder\">\r\n                            <app-upload-file style=\"width: 100%\"\r\n                                              (giveURLtoCreate)=\"onUpLoadAvatar($event)\"></app-upload-file>\r\n                            <mat-icon color=\"black\" matSuffix>add_photo_alternate</mat-icon>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <button type=\"submit\" class=\"default-btn page-btn box-btn\">\r\n                        Tạo CV\r\n                    </button>\r\n                    <div id=\"msgSubmit\" class=\"h3 text-center hidden\"></div>\r\n                    <div class=\"clearfix\"></div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtbmF2YmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zdrf":
/*!*******************************************!*\
  !*** ./src/app/security/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ID_ACCOUNT = 'Id_Account';
var ID_GUEST = 'Id_Guest';
var USERNAME_KEY = 'Username_Key';
var TOKEN_KEY = 'Token_Key';
var ROLE_KEY = 'Role_Key';
var TokenService = /** @class */ (function () {
    function TokenService() {
    }
    TokenService.prototype.setIdAccount = function (id) {
        // @ts-ignore
        window.sessionStorage.removeItem(id);
        // @ts-ignore
        window.sessionStorage.setItem(ID_ACCOUNT, id);
    };
    TokenService.prototype.getIdAccount = function () {
        // @ts-ignore
        return window.sessionStorage.getItem(ID_ACCOUNT);
    };
    TokenService.prototype.setIdGuest = function (id) {
        // @ts-ignore
        window.sessionStorage.removeItem(id);
        // @ts-ignore
        window.sessionStorage.setItem(ID_GUEST, id);
    };
    TokenService.prototype.getIdGuest = function () {
        // @ts-ignore
        return window.sessionStorage.getItem(ID_GUEST);
    };
    TokenService.prototype.setNameKey = function (name) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, name);
    };
    TokenService.prototype.getNameKey = function () {
        // @ts-ignore
        return window.sessionStorage.getItem(USERNAME_KEY);
    };
    TokenService.prototype.setTokenKey = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenService.prototype.getTokenKey = function () {
        // @ts-ignore
        return window.sessionStorage.getItem(TOKEN_KEY);
    };
    TokenService.prototype.setRoleKey = function (roles) {
        window.sessionStorage.removeItem(ROLE_KEY);
        window.sessionStorage.setItem(ROLE_KEY, JSON.stringify(roles));
    };
    TokenService.prototype.getRoleKey = function () {
        // @ts-ignore
        var roles = [];
        if (sessionStorage.getItem(TOKEN_KEY)) {
            // @ts-ignore
            JSON.parse(sessionStorage.getItem(ROLE_KEY)).forEach(function (role) {
                roles.push(role.authority);
            });
        }
        // @ts-ignore
        return roles;
    };
    TokenService.ctorParameters = function () { return []; };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map