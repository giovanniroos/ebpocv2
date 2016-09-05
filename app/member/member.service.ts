import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {IMemberObject} from './objects/memberObject';

@Injectable()
export class MemberService {
    private _url = "api/members/memberList.json";

    constructor(private _http: Http) {

    }

    getMembers(): Observable<IMemberObject[]> {
        return this._http.get(this._url)
            .map((response: Response) => <IMemberObject[]>response.json())
            // .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error('ERROR LOGGER ' + error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getMember(id: string): Observable<IMemberObject> {
      console.log(id);
        return this.getMembers()
            .map((members: IMemberObject[]) => members.find(s => s.memberDetails.schemeMember.member.caseMbrKey === id));
    }
}
