import { NgIf } from '@angular/common';
import { Component, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EventEmitter } from 'stream';
import { BasketComponent } from '../../page/basket/basket.component';
import { EcommerceServiceService } from '../../services/ecommerce-service.service';
import { IUser } from '../../interfaces/IUser';
import { zip } from 'rxjs';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    ReactiveFormsModule],
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.css'
})
export class CheckoutFormComponent {
  // @Output()
  // output = new EventEmitter<any>();
  constructor(private router: Router, private commerceService: EcommerceServiceService) {}
  cancel() {
    BasketComponent.basketContent = []
  }
  confirm() {
    let user:IUser = {
      lastname : this.lastname! as unknown as string,
      firstname : this.firstname! as unknown as string,
      adress : this.adress! as unknown as string,
      zipcode: this.postcode!as unknown as string,
      city: this.city!as unknown as string,
      card : this.cardNumber!as unknown as string,
      cardDate : this.cardValidity!as unknown as string
    };
    let content = BasketComponent.basketContent;
    this.commerceService.postOrder(content,user).subscribe(
      {
        next: (res) => {
          this.router.navigate(['/']);
        },
        error: (err: any) => {
          console.log(err);
        }
      }
    )
  }
  fg = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    adress: new FormControl('', [Validators.required]),
    postcode: new FormControl('', [Validators.minLength(10000), Validators.required, Validators.maxLength(99999)]),
    city: new FormControl('', [Validators.required]),
    cardNumber: new FormControl('', Validators.compose([Validators.min(1000000000000000), Validators.required, Validators.max(9999999999999999)])),
    cardValidity: new FormControl('', [Validators.required]),
  });  
  get firstname() {
    return this.fg.get('firstname');
  }
  get lastname() {
    return this.fg.get('lastname');
  }
  get adress() {
    return this.fg.get('adress');
  }
  get postcode() {
    return this.fg.get('postcode');
  }
  get city() {
    return this.fg.get('city');
  }
  get cardNumber() {
    return this.fg.get('cardNumber');
  }
  get cardValidity() {
    return this.fg.get('cardValidity');
  }
}
