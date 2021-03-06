import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from './services/api-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  order: string;

  constructor(private router: Router, private route: ActivatedRoute, private  apiService: ApiService) {

  }

  sendOrder(): void {
    this.apiService.sendOrder(this.order);
  }
}
