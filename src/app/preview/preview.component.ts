import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ShopData } from 'src/typings';

const ShopFormValueSubject = new BehaviorSubject<{ helmet: string, chest: string, glove: string, boot: string}>(null);
export const ShopFormValue = ShopFormValueSubject.asObservable();

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit, OnDestroy {
  @Input() data: ShopData = null;
  private shopFormValueSubscription: Subscription;

  shopForm = new FormGroup({
    helmet: new FormControl(null),
    chest: new FormControl(null),
    glove: new FormControl(null),
    boot: new FormControl(null),
  });

  constructor() {}

  ngOnInit(): void {
    this.shopFormValueSubscription = this.shopForm.valueChanges.subscribe(value => {
      console.log("preview"+value);
      ShopFormValueSubject.next(value);
    });
  }

  ngOnDestroy(): void {
    if (this.shopFormValueSubscription && !this.shopFormValueSubscription.closed) {
      this.shopFormValueSubscription.unsubscribe();
    }
  }
}
