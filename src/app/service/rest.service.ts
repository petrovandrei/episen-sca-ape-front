import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class RestService {

  protected backUrl: string = "";
  protected headers = new HttpHeaders({'content-type': 'application/json'});

  constructor(protected http: HttpClient) {
    this.backUrl = "http://localhost:8080/add/order";
  }

  create(entity: any): Observable<any> {
   return this.http.post(this.backUrl, JSON.stringify(entity), {headers: this.headers});
  }

  f
}
