import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestService} from "./rest.service";

@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  constructor(protected http: HttpClient) {
  }

  addOrder(order: string): void {
     this.http.post<any>('http://back:8080/add/order', order).subscribe(data=>{
       console.log("got it")
     });
  }


}
