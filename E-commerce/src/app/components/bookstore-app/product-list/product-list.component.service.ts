import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/book";

@Injectable()

export class BookService
{
    getBook(){
        return this.http.get(this._url)
    };

    private _url = 'http://localhost:4200/';
    
    HttpOptions = {
        Headers: new HttpHeaders({'content-type':'application/json'})
    };

    constructor(private http:HttpClient){};


};

