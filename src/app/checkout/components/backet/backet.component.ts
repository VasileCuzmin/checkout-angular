import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../basket.service';
import { BasketInterface } from '../../BasketInterface';

@Component({
  selector: 'app-backet',
  standalone: false,

  templateUrl: './backet.component.html',
})
export class BacketComponent implements OnInit {
  currentOpenBasket?: BasketInterface
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    //check if the user have an open basket
    //if not then open a new basket for this user

    //get the user from the context
    var model = { customerName: 'John', paysVAT: true }

    this.basketService.getBasketByCustomerName(model.customerName).subscribe(basket => {
      this.basketService.currentOpenBasket?.next(basket);
    });

    if (!this.currentOpenBasket) {
      this.basketService.openNewBasket(model.customerName, model.paysVAT)
      //this operation will publish an event BasketCreated(id, customerName) - this event will be pushed in the client side using SignalR
      //when the event is handled in the client side then will call getBasketByCustomerName and update the currentOpenBasket state
    }
  }
}
