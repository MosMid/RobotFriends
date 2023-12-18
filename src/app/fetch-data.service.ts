import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './IFriend';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  baseUrl: string = 'https://api-zabibu-training-project.up.railway.app/api/users/'
  apiKey: string = '?apiKey=566ec5c0-471e-11ee-be56-0242ac120002'

  constructor(private http: HttpClient) { }

  getData(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+this.apiKey)
  }

  getDataById(id: number): Observable<User>{
    return this.http.get<User>(this.baseUrl+id+this.apiKey)
  }

  toggleFav(id: number): Observable<User>{
    return this.http.patch<User>(this.baseUrl+'toggle-favorite/'+id+this.apiKey, {id})
  }
}