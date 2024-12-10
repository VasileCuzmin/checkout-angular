import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodComponent } from './components/goods/good.component';
import { BacketComponent } from './components/backet/backet.component';

const routes: Routes = [{
  path: 'goods', component: GoodComponent,
},
{
  path: 'basket', component: BacketComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
