import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {
  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>()

  onButtonClick() {
    // console.log("Binding no componente filho sem nada de novo");
    this.buttonClickEmitter.emit(true)
  }
}
