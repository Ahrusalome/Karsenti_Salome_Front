import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IArticle } from '../interfaces/IArticle';
import { IUser } from '../interfaces/IUser';
import { IArticlePanier } from '../interfaces/IArticlePanier';
import { error } from 'console';
import e from 'express';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class EcommerceServiceService {

  constructor(private http: HttpClient) { }
  private apiRoutes: any = {
    articles: "https://www.eleguen.ovh/api/v1/articles",
    order:"https://www.eleguen.ovh/api/v1/purchase"
  }

  public getAllArticles(): Observable<IArticle[]> {
    return this.http.get(this.apiRoutes.articles).pipe(map((data:any) => data as IArticle[]))
  }
  public postOrder(panier: IArticlePanier[], user: IUser): Observable<any> {
    console.log(panier, user)
    return this.http.post(this.apiRoutes.order, JSON.stringify({panier, user})).pipe();
  }
}
