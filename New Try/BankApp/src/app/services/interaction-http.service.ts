import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Interaction} from '../models/interaction';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InteractionHttpService {

  url: string;

  constructor(private httpClient: HttpClient)
  {
    this.url = environment.apiEndpointUrl + '/api/interaction';
  }

  getAll(): Observable<Interaction[]> {
    return this.httpClient.get(this.url).pipe(map(response => {
      return response as Interaction[];
    }));
  }

  get(id): Observable<Interaction> {
    return this.httpClient.get(this.url + '/' + id).pipe(map(response => {
      return response as Interaction;
    }));
  }

  put(id, person): Observable<Interaction> {
    return this.httpClient.put(this.url + '/' + person.id, person).pipe(map(response => {
      return response as Interaction;
    }));
  }

  post(person): Observable<Interaction> {
    return this.httpClient.post(this.url, person).pipe(map(response => {
      return response as Interaction;
    }));
  }
}
