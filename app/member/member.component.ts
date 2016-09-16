import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { SchemeService } from '../scheme/scheme.service';
import { MemberService } from './member.service';
import { MemberFilterPipe } from './member-filter.pipe';
import { ISchemeDetailsObject } from '../scheme/objects/schemeDetailsObject';
import { IMemberObject } from './objects/memberObject';

@Component({
    templateUrl: 'app/member/member.component.html',
    pipes: [MemberFilterPipe]
})
export class MemberComponent implements OnInit {
    pageTitle: string = 'Member list for ';
    listFilter: string;
    frontendScheme: ISchemeDetailsObject;
    errorMessage: string;
    members: IMemberObject[];

    constructor(private _router: Router,
        private _routeParams: RouteParams,
        private _schemeService: SchemeService,
        private _memberService: MemberService) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        console.log("Selected scheme case key " + id);
        // this.getScheme(id);
        // this._schemeService.getScheme(id)
        //         .then(schemeDetails => {
        //             this.frontendScheme = this.createSchemeDetails(schemeDetails);
        //             console.log("CORRECT? 1--> " + this.frontendScheme.scheme.schemeNo);
        //         });
        // console.log("CORRECT? 2--> ");

        this._memberService.getMembers(id)
            .then(memberDetails => {
                this.members = this.createMemberDetailsArr(memberDetails);
            });
    }

    onBack(): void {
        this._router.navigate(['Home']);
    }

    getScheme(id){
         this._schemeService.getScheme(id)
                .then(schemeDetails => {
                    this.frontendScheme = this.createSchemeDetails(schemeDetails);
                    console.log("CORRECT? 1--> " + this.frontendScheme.scheme.schemeNo);
                });
    }

    //this 'transforms' the data
    private createSchemeDetails(objArr : any) : ISchemeDetailsObject{
            return objArr.schemeDetails;
        }

    //this 'transforms' the data
    private createMemberDetailsArr(objArr : any) : IMemberObject[]{
            let arr : IMemberObject[] = [];
            for(let obj of objArr){
                arr.push(obj.memberDetails);
            }
            return arr;
        }
}
