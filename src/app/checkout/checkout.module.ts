import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { BacketComponent } from './components/backet/backet.component';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { GoodComponent } from './components/goods/good.component';
import { BasketService } from './basket.service';
import { GoodsService } from './goods.service';

@NgModule({
    declarations: [
        BacketComponent,
        GoodComponent
    ],
    imports: [
        BrowserModule,
        CheckoutRoutingModule,
        CommonModule
    ],
    providers: [provideHttpClient(), BasketService, GoodsService],
    exports: [BacketComponent]
})
export class CheckoutModule { }
