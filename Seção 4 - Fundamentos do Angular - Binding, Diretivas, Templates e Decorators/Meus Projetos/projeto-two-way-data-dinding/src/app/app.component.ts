import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-two-way-data-dinding';
  name: string = "Teste"

  saida(event: string) {
    // this.name = event
  }
}
