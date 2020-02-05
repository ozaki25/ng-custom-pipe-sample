import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>{{ cardNumber | mask: 2 }}</h1>',
})
export class AppComponent {
  cardNumber = '1111-1111-1111-1111';
}
