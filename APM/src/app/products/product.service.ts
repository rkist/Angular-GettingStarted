import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { ErrorObservable } from "rxjs/observable/ErrorObservable";

@Injectable()
export class ProductService
{
    private _productUrl = './api/products/products.json';

    constructor(private _http: HttpClient)
    {        
    }

    getProducts(): Observable<IProduct[]>
    {
        return this._http.get<IProduct[]>(this._productUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) : ErrorObservable
    {
        console.log(err.name + ' : ' + err.message)
        return Observable.throw(err.message);
    }
}