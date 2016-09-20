import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';


import { MemberService } from '../member/member.service';
import { IMemberObject } from '../member/objects/memberObject';

@Component({
    templateUrl: 'app/covers/cover.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class CoversComponent implements OnInit {
    pageTitle: string = 'Covers for ';
    errorMessage: string;
    member: IMemberObject;

    constructor(private _router: Router,
        private _routeParams: RouteParams,
        private _memberService: MemberService) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        console.log("Selected member case key " + id);
        this.getMember(id);
    }

    getMember(id){
      this._memberService.getMember(id).subscribe(posts => {
        console.log(posts);
          this.member = this.createMemberDetails(posts);
      });
    }

    //this 'transforms' the member data
    private createMemberDetails(objArr : any) : IMemberObject{
        return objArr.memberDetails;
    }

    onBack(): void {
      this._router.navigate(['Home']);
    }
}
