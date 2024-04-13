import { Component, Input } from '@angular/core';

function handlePlanType(value: string) {
  console.log(value)
  return value.toUpperCase()
}


/**
 * @Input(): é a forma como criamos o atributo/propriedade em nosso componente
 * permitindo o componente pai passar valor/dados para o mesmo
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  // private _planType: string = ''

  @Input({ required: true, alias: 'planPrice' }) planPrice: number = 0

  @Input({ alias: 'planType', transform: (value: string) => handlePlanType(value) }) planType: string = ''

  // @Input('planType') set planType(value: string) {
  //   this._planType = value.toUpperCase()
  // }

  // get planType() {
  //   return this._planType;
  // }


  buttonClicked(valueEmitted: boolean) {
    console.log('Botão clicado: ', valueEmitted)
  }
}
