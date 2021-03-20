import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { environment } from 'src/environments/environment';
import { ApiEnum, ApiParams } from '../config/apiConfig';
import { catchError } from 'rxjs/internal/operators/catchError';
import { retry } from 'rxjs/internal/operators/retry';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  accessParams: HttpParams;
  constructor(private http: HttpClient) { 
  }
  
  getAllCharacters(): Observable<Character[]> {
    
    // return this.httpDataService.get$<Country[]>(ApiEnum.API_ROOT, environment.endpoint.countries)
    
    return this.http.get<Character[]>(environment.api.dataRoot + ApiEnum.API_ONE+ApiEnum.PUBLIC+environment.endpoint.characters, {params:this.getAccessApiParams()});
    
  }
  
  getAccessApiParams(extraParam?:object) {
    let accessParams = new HttpParams();
    for (let param in ApiParams) {
    accessParams = accessParams.set(param, ApiParams[param]);
    }
    // if (!!extraParam && typeof(extraParam) === "object") {
    //   for (let param in extraParam) {
    //     accessParams = this.accessParams.set(param, ApiParams[param]);
    //     } 
    // }
    return accessParams;
  }
}


