import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CabinetApi {

    basePath = 'http://localhost:8088/rest';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    public setBasePath(){

  }

    /**
     * Returns a CabinetAccountInfo based on authorisation
     * @summary Get current Account Info
     * @param cabinetApiKey Cabinet API key
     */
    public getAccountInfo(cabinetApiKey: string, extraHttpRequestParams?: any): Observable<models.CabinetAccountInfo> {
        //noinspection TypeScriptValidateTypes
        return this.getAccountInfoWithHttpInfo(cabinetApiKey, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Sign in to customer cabinet
     * @summary sign in
     * @param username username
     * @param password password
     * @param rememberMe rememberMe
     */
    public signIn(username: string, password: string, rememberMe?: boolean, extraHttpRequestParams?: any): Observable<models.CabinetAuthorizationDetails> {
        //noinspection TypeScriptValidateTypes
        return this.signInWithHttpInfo(username, password, rememberMe, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Get current Account Info
     * Returns a CabinetAccountInfo based on authorisation
     * @param cabinetApiKey Cabinet API key
     */
    public getAccountInfoWithHttpInfo(cabinetApiKey: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/cabinet/api/v1/account-info';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'cabinetApiKey' is not null or undefined
        if (cabinetApiKey === null || cabinetApiKey === undefined) {
            throw new Error('Required parameter cabinetApiKey was null or undefined when calling getAccountInfo.');
        }
        if (cabinetApiKey !== undefined) {
            queryParameters.set('cabinetApiKey', <any>cabinetApiKey);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        var result = this.http.request(path, requestOptions);
        return result;
    }

    /**
     * sign in
     * Sign in to customer cabinet
     * @param username username
     * @param password password
     * @param rememberMe rememberMe
     */
    public signInWithHttpInfo(username: string, password: string, rememberMe?: boolean, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/cabinet/api/v1/signin';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'username' is not null or undefined
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling signIn.');
        }
        // verify required parameter 'password' is not null or undefined
        if (password === null || password === undefined) {
            throw new Error('Required parameter password was null or undefined when calling signIn.');
        }
        if (username !== undefined) {
            queryParameters.set('username', <any>username);
        }

        if (password !== undefined) {
            queryParameters.set('password', <any>password);
        }

        if (rememberMe !== undefined) {
            queryParameters.set('rememberMe', <any>rememberMe);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // headers.append('Content-Type', 'application/json');

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        // headers.append('Accept', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
