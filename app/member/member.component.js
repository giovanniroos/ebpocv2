System.register(['angular2/core', 'angular2/router', '../scheme/scheme.service', './member.service', './member-filter.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, scheme_service_1, member_service_1, member_filter_pipe_1;
    var MemberComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (scheme_service_1_1) {
                scheme_service_1 = scheme_service_1_1;
            },
            function (member_service_1_1) {
                member_service_1 = member_service_1_1;
            },
            function (member_filter_pipe_1_1) {
                member_filter_pipe_1 = member_filter_pipe_1_1;
            }],
        execute: function() {
            MemberComponent = (function () {
                function MemberComponent(_router, _routeParams, _schemeService, _memberService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._schemeService = _schemeService;
                    this._memberService = _memberService;
                    this.pageTitle = 'Member list for ';
                }
                MemberComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this.getScheme(id);
                    this._memberService.getMembers()
                        .subscribe(function (members) { return _this.members = members; }, function (error) { return _this.errorMessage = error; });
                };
                MemberComponent.prototype.onBack = function () {
                    this._router.navigate(['Home']);
                };
                MemberComponent.prototype.getScheme = function (id) {
                    console.log(id);
                    this.scheme = {
                        "schemeDetails": {
                            "scheme": {
                                "caseKey": 23332,
                                "schemeNo": "6600001480"
                            },
                            "entityNumber": "1028596771",
                            "schemeName": "GR(Default 6600001480",
                            "startDate": "2008-07-01",
                            "reviewDate": "2015-07-01",
                            "lifePlan": "Group Risk",
                            "industry": "Service - Information, Media And Technology",
                            "natureOfBusiness": "IT COMPANY",
                            "nsbcIndicator": "No",
                            "adiPeriod": "90",
                            "statusCode": "Active",
                            "statusDate": "2008-07-01",
                            "billing_Sent": "2015-08-01",
                            "lastUploadDate": "2015-07-01",
                            "employerName": "COBMCKGLHJJB",
                            "costingType": "Percentage of Payroll"
                        }
                    };
                    // this._schemeService.getScheme(id)
                    //       .subscribe(
                    //       scheme => this.scheme = scheme,
                    //       error => this.errorMessage = <any>error);
                };
                MemberComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/member/member.component.html',
                        pipes: [member_filter_pipe_1.MemberFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, scheme_service_1.SchemeService, member_service_1.MemberService])
                ], MemberComponent);
                return MemberComponent;
            }());
            exports_1("MemberComponent", MemberComponent);
        }
    }
});
//# sourceMappingURL=member.component.js.map