import { ErrorHandler } from './../app.error-handler';
import { MEAT_API } from './../app.api';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Restaurant } from "./restaurant/restaurant.model";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class RestaurantService {
    
    rests: Restaurant[] = []
    constructor(private http: Http) {}

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}