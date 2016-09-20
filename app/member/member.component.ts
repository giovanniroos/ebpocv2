import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import { SchemeService } from '../scheme/scheme.service';
import { MemberService } from './member.service';
import { MemberFilterPipe } from './member-filter.pipe';
import { ISchemeDetailsObject } from '../scheme/objects/schemeDetailsObject';
import { IMemberObject } from './objects/memberObject';

@Component({
    templateUrl: 'app/member/member.component.html',
    pipes: [MemberFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class MemberComponent implements OnInit {
    pageTitle: string = 'Member list for ';
    listFilter: string;
    frontendScheme: ISchemeDetailsObject;
    errorMessage: string;
    members: IMemberObject[];
    data: any;

    constructor(private _router: Router,
        private _routeParams: RouteParams,
        private _schemeService: SchemeService,
        private _memberService: MemberService) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        console.log("Selected scheme case key " + id);
        this.getScheme(id);
        this.getMembers(id);
        this.data = this.getData();
    }

    getScheme(id){
      this._schemeService.getScheme(id).subscribe(posts => {
        this.frontendScheme = this.createSchemeDetails(posts);
      })
    }

    getMembers(id){
      this._memberService.getMembers(id).subscribe(posts => {
          this.members = this.createMemberDetailsArr(posts);
      });
    }

    //this 'transforms' the scheme data
    private createSchemeDetails(objArr : any) :ISchemeDetailsObject{
            return objArr.schemeDetails;
        }

    //this 'transforms' the member data
    private createMemberDetailsArr(objArr : any) : IMemberObject[]{
            let arr : IMemberObject[] = [];
            for(let obj of objArr.data){
                arr.push(obj.memberDetails);
            }
            return arr;
        }

    private getData(){
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve('Received data');
                }, 5000);
            })
        }

    onBack(): void {
        this._router.navigate(['Home']);
    }
}
