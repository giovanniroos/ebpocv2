System.register(['angular2/core', 'angular2/router', 'angular2/http', 'rxjs/Rx', 'rxjs/add/operator/map', './home/home.component', './scheme/scheme.service', './member/member.component', './member/member.service', './covers/covers.component'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, http_1, home_component_1, scheme_service_1, member_component_1, member_service_1, covers_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (scheme_service_1_1) {
                scheme_service_1 = scheme_service_1_1;
            },
            function (member_component_1_1) {
                member_component_1 = member_component_1_1;
            },
            function (member_service_1_1) {
                member_service_1 = member_service_1_1;
            },
            function (covers_component_1_1) {
                covers_component_1 = covers_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = "Employer benefits";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'eb-app',
                        template: "<div>\n        <nav class='navbar navbar-default'>\n            <div class='container-fluid'>\n                <a class='navbar-brand'>{{pageTitle}}</a>\n                <ul class='nav navbar-nav'>\n                    <li><a [routerLink]=\"['Home']\">Home</a></li>\n                </ul>\n            </div>\n        </nav>\n        <div class='container'>\n            <router-outlet></router-outlet>\n        </div>\n     </div>",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, scheme_service_1.SchemeService, member_service_1.MemberService]
                    }),
                    router_2.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/members/:id', name: 'Members', component: member_component_1.MemberComponent },
                        { path: '/covers/:id', name: 'Covers', component: covers_component_1.CoversComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map