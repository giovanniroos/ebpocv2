import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {ISchemeDetailsObject} from './objects/schemeDetailsObject';

@Injectable()
export class SchemeService {
    private _url = "http://localhost:3000/api/document/v1/schemes";
    //private _url = "api/schemes/schemeList.json";

    constructor(private _http: Http) {

    }

    getSchemeDetails (): Promise<ISchemeDetailsObject[]> {
        return this._http.get(this._url)
                  .toPromise()
                  .then(response => {return response.json().data})
                  .catch(this.handleError);
    }

    // getSchemes(): Observable<ISchemeDetailsObject[]> {
    //     return this._http.get(this._url)
    //         .map((response: Response) => <ISchemeDetailsObject[]>response.json())
    //         .do(data => console.log('All: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }

    private handleError(error: Response) {
        console.error('ERROR LOGGER ' + error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getScheme(id: number): Observable<ISchemeDetailsObject> {
        return;
        //   console.log(id);
        //     return this.getSchemes()
        //         .map((schemess: ISchemeDetailsObject[]) => schemess.find(s => s.scheme.caseKey === id));
    }
}
