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
                    console.log("Selected scheme case key " + id);
                    // this.getScheme(id);
                    // this._schemeService.getScheme(id)
                    //         .then(schemeDetails => {
                    //             this.frontendScheme = this.createSchemeDetails(schemeDetails);
                    //             console.log("CORRECT? 1--> " + this.frontendScheme.scheme.schemeNo);
                    //         });
                    // console.log("CORRECT? 2--> ");
                    this._memberService.getMembers(id)
                        .then(function (memberDetails) {
                        _this.members = _this.createMemberDetailsArr(memberDetails);
                    });
                };
                MemberComponent.prototype.onBack = function () {
                    this._router.navigate(['Home']);
                };
                MemberComponent.prototype.getScheme = function (id) {
                    var _this = this;
                    this._schemeService.getScheme(id)
                        .then(function (schemeDetails) {
                        _this.frontendScheme = _this.createSchemeDetails(schemeDetails);
                        console.log("CORRECT? 1--> " + _this.frontendScheme.scheme.schemeNo);
                    });
                };
                //this 'transforms' the data
                MemberComponent.prototype.createSchemeDetails = function (objArr) {
                    return objArr.schemeDetails;
                };
                //this 'transforms' the data
                MemberComponent.prototype.createMemberDetailsArr = function (objArr) {
                    var arr = [];
                    for (var _i = 0, objArr_1 = objArr; _i < objArr_1.length; _i++) {
                        var obj = objArr_1[_i];
                        arr.push(obj.memberDetails);
                    }
                    return arr;
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