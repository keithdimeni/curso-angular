import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true, alias: 'plan' })
  planType: string = ''

  @Input({ required: true, alias: 'price' })
  planPrice: number = 0

  @Input({ required: true, alias: 'style'})
  cardStyle: 'orange' | 'purple' = 'purple'

  @Output('buttonClicked')
  buttonClickEmitt = new EventEmitter<void>()

  onButtonClicked() {
    this.buttonClickEmitt.emit()
  }
}
