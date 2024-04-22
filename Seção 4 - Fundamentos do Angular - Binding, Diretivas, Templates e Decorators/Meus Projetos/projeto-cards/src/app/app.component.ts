import { Component } from '@angular/core';

interface ICard {
  plan: string
  price: number
  style: 'orange' | 'purple'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-cards'

  cardPurple: ICard = {
    plan: 'plus',
    price: 799,
    style: 'purple'
  }

  cardOrange: ICard = {
    plan: 'Enterprise',
    price: 1999,
    style: 'orange'
  }

  buttonClicked() {
    console.log('Funcionou!')
  }

  onCardButtonClicked() {
    console.log('OnCardButtonClicked')
  }
}
