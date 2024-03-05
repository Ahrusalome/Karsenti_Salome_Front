import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketArticleComponent } from './basket-article.component';

describe('BasketArticleComponent', () => {
  let component: BasketArticleComponent;
  let fixture: ComponentFixture<BasketArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasketArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
