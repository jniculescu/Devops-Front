import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Interaction} from '../models/interaction';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {InteractionHttpService} from './interaction-http.service';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor(private httpService: InteractionHttpService) {
  }

  getInteraction(id): Observable<Interaction> {
    return this.httpService.get(id);
  }

  getAllInteractions(): Observable<Interaction[]> {
    return this.httpService.getAll();
  }

  updateInteraction(id, person): Observable<Interaction> {
    return this.httpService.put(id, person);
  }
  createInteraction(person): Observable<Interaction> {
    return this.httpService.post(person);
  }
}
