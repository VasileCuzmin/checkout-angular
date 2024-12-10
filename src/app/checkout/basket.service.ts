import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasketInterface } from './BasketInterface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  url = 'http://localhost:55555/api/baskets'
  currentOpenBasket? = new BehaviorSubject<BasketInterface | null>(null);

  constructor(private http: HttpClient) { }

  getBasket(id: string) {
    return this.http.get<BasketInterface>(`${this.url}/${id}`);
  }

  getBasketByCustomerName(customerName: string) {
    return this.http.get<BasketInterface>(`${this.url}/${customerName}`);
  }

  openNewBasket(customerName: string, paysVAT: boolean) {
    return this.http.post(`${this.url}`, { customerName, paysVAT }).subscribe();
  }
}
