import { Component } from '@angular/core';

interface IPlano {
  infos: IInfo
}

interface IInfo {
  tipo: string
  preco: number
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  plano:IPlano = {
    infos: {
      tipo: "Simples",
      preco: 100,
    }
  }
}
