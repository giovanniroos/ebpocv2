import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {ISchemeDetailsObject} from './objects/schemeDetailsObject';

@Injectable()
export class SchemeService {
    private _url = "http://localhost:3000/api/document/v1/schemes";
    private _singleSchemeUrl = "http://localhost:3000/api/document/v1/schemes/23332";

    constructor(private _http: Http) {
    }

    getSchemes (): Observable<ISchemeDetailsObject[]>{
        return this._http.get(this._url)
        .map(res => res.json())
        .catch(this.handleError);
    }

    getScheme (id: number): Observable<ISchemeDetailsObject> {
        return this._http.get(this._singleSchemeUrl)
                .map(res => res.json())
                .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error('ERROR LOGGER ' + error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
