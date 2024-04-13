import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-plano'
  cardPlanType: string = "Simples"
  cardPlanPrice: number = 100

  handlePlanType(text: string) {
    this.cardPlanType = text
  }
}
