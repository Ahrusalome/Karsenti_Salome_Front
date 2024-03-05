import { Component } from '@angular/core';
import { IArticle } from '../../interfaces/IArticle';
import { NgFor } from '@angular/common';
import { BasketArticleComponent } from '../../component/basket-article/basket-article.component';
import { IArticlePanier } from '../../interfaces/IArticlePanier';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [
    RouterLink,
    NgFor,
    BasketArticleComponent],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  static basketContent: Array<IArticlePanier> = [];
  basketOui = BasketComponent.basketContent;

  addItemToBasket(number: number, article: IArticlePanier) {
    if (article.quantity == 1 && number == -1)
      return;
    let articleToUpdate = BasketComponent.basketContent.find((e: {["id"]: string;})=> e["id"] == article["id"])!;
    articleToUpdate.quantity+= number == 1? 1 : -1
    articleToUpdate.totalPrice += number == 1? parseInt(article.price) : parseInt(article.price)*-1
  }
  emptyBasket() {
    BasketComponent.basketContent = []
    this.basketOui = []
  }
}