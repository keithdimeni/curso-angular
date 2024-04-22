import { NgModule } from "@angular/core"
import { CardComponent } from "./card/card.component";
import { ButtonComponent } from "./button/button.component";

@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent
  ],
  exports: [
    CardComponent,
    ButtonComponent
  ]
})

export class ComponentsModule {}
