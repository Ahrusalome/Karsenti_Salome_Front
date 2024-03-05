import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NgIf],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  public numberToAdd : number = 1;
  @Input()
  name?: string;
  @Input()
  image?: string;
  @Input()
  season?: string;
  @Input()
  price?: string;
  @Input()
  isInBasket?: boolean;
  @Output()
  addItemEvent = new EventEmitter<number>();
  @Output()
  removeItemEvent = new EventEmitter<boolean>();
  
  AddArticleToBasket(value: number) {
    this.addItemEvent.emit(value);
  }

  RemoveFromBasket() {
    this.removeItemEvent.emit(true);
  }

  AddArticle() {
    this.numberToAdd++;
  }
  RemoveArticle() {
    if (this.numberToAdd <= 1)
      return;
    this.numberToAdd--;
  }
}
