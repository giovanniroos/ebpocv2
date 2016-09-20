System.register(['angular2/core', 'angular2/router', '../member/member.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, member_service_1;
    var CoversComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (member_service_1_1) {
                member_service_1 = member_service_1_1;
            }],
        execute: function() {
            CoversComponent = (function () {
                function CoversComponent(_router, _routeParams, _memberService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._memberService = _memberService;
                    this.pageTitle = 'Covers for ';
                }
                CoversComponent.prototype.ngOnInit = function () {
                    var id = +this._routeParams.get('id');
                    console.log("Selected member case key " + id);
                    this.getMember(id);
                };
                CoversComponent.prototype.getMember = function (id) {
                    var _this = this;
                    this._memberService.getMember(id).subscribe(function (posts) {
                        console.log(posts);
                        _this.member = _this.createMemberDetails(posts);
                    });
                };
                //this 'transforms' the member data
                CoversComponent.prototype.createMemberDetails = function (objArr) {
                    return objArr.memberDetails;
                };
                CoversComponent.prototype.onBack = function () {
                    this._router.navigate(['Home']);
                };
                CoversComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/covers/cover.component.html',
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, member_service_1.MemberService])
                ], CoversComponent);
                return CoversComponent;
            }());
            exports_1("CoversComponent", CoversComponent);
        }
    }
});
//# sourceMappingURL=covers.component.js.map