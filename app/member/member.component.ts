import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { SchemeService } from '../scheme/scheme.service';
import { MemberService } from './member.service';
import { MemberFilterPipe } from './member-filter.pipe';
import { ISchemeObject } from '../scheme/schemeObject';
import { IMemberObject } from './objects/memberObject';

@Component({
    templateUrl: 'app/member/member.component.html',
    pipes: [MemberFilterPipe]
})
export class MemberComponent implements OnInit {
    pageTitle: string = 'Member list for ';
    listFilter: string;
    scheme: ISchemeObject;
    errorMessage: string;
    members: IMemberObject[];

    constructor(private _router: Router,
        private _routeParams: RouteParams,
        private _schemeService: SchemeService,
        private _memberService: MemberService) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this.getScheme(id);

        this._memberService.getMembers()
            .subscribe(
            members => this.members = members,
            error => this.errorMessage = <any>error
            );
    }

    onBack(): void {
        this._router.navigate(['Home']);
    }

    getScheme(id) {
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
        }

        // this._schemeService.getScheme(id)
        //       .subscribe(
        //       scheme => this.scheme = scheme,
        //       error => this.errorMessage = <any>error);
    }


}
