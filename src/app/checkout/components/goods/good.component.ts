import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { BasketService } from '../../basket.service';
import { GoodsService } from '../../goods.service';
import { GoodInterface } from '../../GoodInterface';

@Component({
    selector: 'app-backet',
    standalone: false,
    templateUrl: './good.component.html',
})
export class GoodComponent implements OnInit {

    url = 'http://localhost:55555/api'

    goods$ = new BehaviorSubject<GoodInterface[]>([]);

    constructor(private goodsService: GoodsService) { }

    ngOnInit(): void {
        this.goodsService.get().subscribe(goods => {
            this.goods$.next(goods)
        })
    }

    addToBasket = (good: GoodInterface) => {
        //get the current open basket from the basket service
        console.log(good.id)
    }

}
