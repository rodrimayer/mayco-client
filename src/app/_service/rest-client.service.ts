import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';

@Injectable()
export class RestClientService {

    private INSERT = 1;
    private DELETE = 2;

    constructor(private _http: Http) { }

    public list(url_base: string, url_resource: string): Observable<Response> {
        return this._http.get(url_base + url_resource);
    }

    public insert(aObject: any, url_base: string, url_resource: string): Observable<Response> {
        return this.insertOrDelete(aObject, url_base, url_resource, this.INSERT);
    }


    public delete(aObject: any, url_base: string, url_resource: string): Observable<Response> {
        return this.insertOrDelete(aObject, url_base, url_resource, this.DELETE);
    }

    private insertOrDelete
        (aObject: any, url_base: string, url_resource: string, operation: number): Observable<Response> {

        const url: string = url_base + url_resource;
        const body = JSON.stringify(aObject);
        const headers0: Headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers0 });

        switch (operation) {

            case this.INSERT:
                console.log('INSERT');
                return this._http.post(`${url}/`, body, options);

            case this.DELETE:
                console.log('DELETE');
                return this._http.delete(`${url}/${aObject.getId}`, options);
        }
    }
}
