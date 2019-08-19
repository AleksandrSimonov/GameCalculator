import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ShopData } from '../../typings';

const ShopFormValueSubject = new BehaviorSubject<{ helmet: string }>(null);
export const ShopFormValue = ShopFormValueSubject.asObservable();

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit, OnDestroy {
  @Input() data: ShopData = null;
  private shopFormSubscription: Subscription;
  equipmentCost = '0';

  shopForm = new FormGroup({
    helmet: new FormControl(null),
    chest: new FormControl(null),
    glove: new FormControl(null),
    boot: new FormControl(null),
  });

  constructor() {}

  ngOnInit(): void {
    this.equipmentCost = '0';
    this.shopFormSubscription = this.shopForm.valueChanges.subscribe(value => {
      console.log(value);
      ShopFormValueSubject.next(value);
    });
  }

  ngOnDestroy(): void {
    if (this.shopFormSubscription && !this.shopFormSubscription.closed) {
      this.shopFormSubscription.unsubscribe();
    }
  }
}
