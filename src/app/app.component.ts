import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OrdersService} from "./service/orders.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'episen-sca-ape-front';
  order: string;

  constructor(private router: Router, private route: ActivatedRoute, private ordersService: OrdersService ) {
  }


  sendOrder() {
    this.ordersService.addOrder(this.order);
    console.log(this.order);

  }
}
