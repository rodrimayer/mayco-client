import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Project } from '../../_model/project.model';
import { RestClientService } from '../../_service/rest-client.service';
import { SERVER, URL_ADD, URL_BASE, URL_LIST } from '../../../environments/rest-environment';

@Injectable()
export class ProjectService {

    constructor(private _restClientServcice: RestClientService) { }

    public listData(): Observable<Project[]> {
        const obs: Observable<Response> = this._restClientServcice.list(URL_BASE, URL_LIST);
        obs.subscribe(rs => console.log(rs));
        return obs.map((res: Response) => <Project[]>res.json())
            .do(data => console.log('data' + JSON.stringify(data)));
    }


    insert(project: Project): Observable<Response> {
        return this._restClientServcice.insert(
            project,
            URL_BASE, URL_ADD
        );
    }

}
