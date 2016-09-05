import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {ISchemeObject} from './schemeObject';

@Injectable()
export class SchemeService {
    private _url = "api/schemes/schemeList.json";

    constructor(private _http: Http) {

    }

    getSchemes(): Observable<ISchemeObject[]> {
        return this._http.get(this._url)
            .map((response: Response) => <ISchemeObject[]>response.json())
            // .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error('ERROR LOGGER ' + error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getScheme(id: number): Observable<ISchemeObject> {
      console.log(id);
        return this.getSchemes()
            .map((schemess: ISchemeObject[]) => schemess.find(s => s.schemeDetails.scheme.caseKey === id));
    }
}
