import { Component } from '@angular/core';
import { CheckoutFormComponent } from '../../component/checkout-form/checkout-form.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CheckoutFormComponent
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

}
