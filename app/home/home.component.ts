import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import { SchemeService } from '../scheme/scheme.service';
import { ISchemeDetailsObject } from '../scheme/objects/schemeDetailsObject';
import { SchemeFilterPipe } from '../scheme/scheme-filter.pipe';

@Component({
    templateUrl: 'app/home/home.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [SchemeFilterPipe]
})
export class HomeComponent implements OnInit {
    public pageTitle: string = "Schemes for Carl Chemaly";
    schemes: ISchemeDetailsObject[];
    errorMessage: string;
    listFilter: string = '';

    constructor(private _schemeService: SchemeService) {
    }

    //this invokes the service and then calls the method that transforms the data to map to the object
    ngOnInit() : void{
        this._schemeService.getSchemes().subscribe(posts => {
            this.schemes = this.createSchemeDetailsArr(posts);
        });
    }

    //this 'transforms' the data
    private createSchemeDetailsArr(objArr : any) : ISchemeDetailsObject[]{
            let schemeDetailsArr : ISchemeDetailsObject[] = [];
            for(let obj of objArr.data){
                schemeDetailsArr.push(obj.schemeDetails);
            }
            return schemeDetailsArr;
        }
}
