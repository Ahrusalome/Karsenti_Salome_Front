import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EcommerceServiceService } from '../../services/ecommerce-service.service';
import {IArticle} from '../../interfaces/IArticle'
import {IArticlePanier} from '../../interfaces/IArticlePanier'
import { ArticleComponent } from '../../component/article/article.component';
import { BasketComponent } from '../basket/basket.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    ArticleComponent,
    BasketComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public resultArticles: IArticle[] = [];
  constructor(private commerceService: EcommerceServiceService) {}
  ngOnInit(): void {
      this.loadArticles();
  }
  loadArticles() {
    this.commerceService.getAllArticles().subscribe(
      {
        next: (res) => {
          this.resultArticles = res;
        },
        error: (err: any) => {
          console.log(err);
        }
      }
    )
  }
  addItemToBasket(number: number, article: IArticle) {
    if (this.isInBasket(article)) {
      let articleToUpdate = BasketComponent.basketContent.find((e: {["id"]: string;})=> e["id"] == article["Unique Entry ID"])!;
      articleToUpdate.quantity+=number;
      articleToUpdate.totalPrice+=number*parseInt(article.Buy)
    }
      
    else{
      let articlePanier:IArticlePanier = {
        id:article["Unique Entry ID"],
        name:article.Name,
        quantity:number,
        price:article.Buy,
        totalPrice:number*parseInt(article.Buy)
      }
      BasketComponent.basketContent.push(articlePanier);
    }
  }
  RemoveItemFromBasket(article: IArticle) {
    BasketComponent.basketContent = BasketComponent.basketContent.filter((e: {["id"]: string;})=> e["id"] != article["Unique Entry ID"])
  }
  isInBasket(article: IArticle) {
    return BasketComponent.basketContent.filter((e: { ["id"]: string; }) => e["id"] === article["Unique Entry ID"]).length > 0;
  }
}
