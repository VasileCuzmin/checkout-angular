import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { GoodInterface } from './GoodInterface';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  url = 'http://localhost:55555/api/goods'

  constructor(private http: HttpClient) { }

  get(): Observable<GoodInterface[]> {
    return this.http.get<GoodInterface[]>(`${this.url}`);
  }
}
