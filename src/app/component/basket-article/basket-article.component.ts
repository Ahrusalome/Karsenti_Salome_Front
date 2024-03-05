import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BasketComponent } from '../../page/basket/basket.component';

@Component({
  selector: 'app-basket-article',
  standalone: true,
  imports: [NgIf],
  templateUrl: './basket-article.component.html',
  styleUrl: './basket-article.component.css'
})
export class BasketArticleComponent {
  @Input()
  id?: string;
  @Input()
  name?: string;
  @Input()
  quantity?: number;
  @Input()
  price?: any;
  @Input()
  totalPrice?: any;
  @Output()
  addItemEvent = new EventEmitter<number>();
  @Output()
  emptyEvent = new EventEmitter<boolean>();

  AddArticleToBasket(value: number) {
    if (this.quantity! <= 1 && value == -1)
      return;
    this.addItemEvent.emit(value);
  }

}
