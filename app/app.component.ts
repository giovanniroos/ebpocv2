import {Component} from 'angular2/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from 'angular2/router';
import { RouteConfig } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; //Load all features
import 'rxjs/add/operator/map';

import { HomeComponent } from './home/home.component';
import { SchemeService } from './scheme/scheme.service';
import { MemberComponent } from './member/member.component';
import { MemberService } from './member/member.service';
import { CoversComponent } from './covers/covers.component';

@Component({
  selector: 'eb-app',
    template: `<div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Home']">Home</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, SchemeService, MemberService]
})

@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/members/:id', name: 'Members', component: MemberComponent},
    { path: '/covers/:id', name: 'Covers', component: CoversComponent}
])

export class AppComponent{
  pageTitle: string = "Employer benefits";
}
