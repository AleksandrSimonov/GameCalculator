import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShopData } from '../typings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: ShopData = null;

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('./assets/test.json').subscribe((data: ShopData) => {
      console.log(data);
      this.data = data;
    });
  }

  sayHello(eventValue): void {
    console.log('hello world', eventValue);
  }
}
