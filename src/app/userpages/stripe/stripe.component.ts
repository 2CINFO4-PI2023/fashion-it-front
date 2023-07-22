import {Component, Input, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss']
})
export class StripeComponent implements OnInit{
  @Input() totalAmount: number;

  handler: any = null;
  constructor(
    private toastr:ToastrService
  ) {
  }

  ngOnInit() {
    this.loadStripe();
  }

  pay(amount: any) {
    const handler = (<any>window).StripeCheckout.configure({
      key: 'sk_test_51NQV6mI1OqZaz5EKRStYZb5vbq7rFmbi86Y8ZISfvbKrGju7Z5kTf2szqJK3HFdr93IRzPj3w0uVovGb4oNzy1yq00y0wKwtWr',
      locale: 'auto',
      token: function (token: any) {
        console.log(token);
        alert('Payment Success!!');
      }
    });

    handler.open({
      image: './assets/images/logos/dark-logo.png',
      name: 'Fashion IT',
      description: 'Payment',
      amount: amount * 100,
      email:localStorage.getItem('email')
    });
  }

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'sk_test_51NQV6mI1OqZaz5EKRStYZb5vbq7rFmbi86Y8ZISfvbKrGju7Z5kTf2szqJK3HFdr93IRzPj3w0uVovGb4oNzy1yq00y0wKwtWr',
          locale: 'auto',
          token: function (token: any) {
            console.log(token);
            this.toastr.success('Payment received successfully')
          }
        });
      };

      window.document.body.appendChild(s);
    }
  }
}
