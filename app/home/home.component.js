System.register(['angular2/core', 'angular2/router', '../scheme/scheme.service', '../scheme/scheme-filter.pipe'], function(exports_1, context_1) {
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
    var core_1, router_1, scheme_service_1, scheme_filter_pipe_1;
    var HomeComponent;
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
            function (scheme_filter_pipe_1_1) {
                scheme_filter_pipe_1 = scheme_filter_pipe_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_schemeService) {
                    this._schemeService = _schemeService;
                    this.pageTitle = "Schemes for Carl Chemaly";
                    this.listFilter = '';
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // console.log('In OnInit');
                    this._schemeService.getSchemes()
                        .subscribe(function (schemes) { return _this.schemes = schemes; }, function (error) { return _this.errorMessage = error; });
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/home/home.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: [scheme_filter_pipe_1.SchemeFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [scheme_service_1.SchemeService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map