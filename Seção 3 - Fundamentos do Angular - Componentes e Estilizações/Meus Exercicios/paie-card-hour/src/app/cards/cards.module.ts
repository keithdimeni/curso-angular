import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CircleChartComponent } from '../circle-chart/circle-chart.component';



@NgModule({
  declarations: [
    CardComponent,
    CircleChartComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent,
  ]
})
export class CardsModule { }
