import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {IMemberObject} from './objects/memberObject';

@Injectable()
export class MemberService {
    // private _url = "api/members/memberList.json";
    private _url = "http://localhost:3000/api/document/v1/schemes/23332/members";

    constructor(private _http: Http) {

    }

    getMembers (id: number): Promise<IMemberObject[]> {
        return this._http.get(this._url)
                  .toPromise()
                  .then(response => {return response.json().data})
                  .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error('ERROR LOGGER ' + error);
        return Observable.throw(error.json().error || 'Server error');
    }

    
}
