import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText = 'Texto Inicial'
  inputType = 'text'
  isDisabled = false
  buttonTitle = "Titulo do botão"
  buttonDisable = true
  widthButton = "100px"
  widthButtonPx = 130
  backgroundColorButton = "red"
  stylesObj = { width: '160px', backgroundColor: 'grey' }
  isRedButton = true
  isGreen = true

  enableInput() {
    this.isDisabled = true;
  }

  disableInput() {
    this.isDisabled = false
  }

  showPassword() {
    this.inputType = 'password'
  }

  showText() {
    this.inputType = 'text'
  }

  // handleInputKeyup(event: KeyboardEvent) {
  //   const currentText = (event.target as HTMLInputElement).value
  //   console.log(currentText)
  // }

  handleInputEvent(event: Event) {
    const currentText = (event.target as HTMLInputElement).value
    console.log(currentText)
  }

  onButtonClick() {
    this.buttonTitle = "Titulo Ateradoooooooooo"
    this.buttonDisable = !this.buttonDisable
  }

  updateStyleObj(){
    this.stylesObj.width = '200px'
    this.stylesObj.backgroundColor = 'red'
  }
  updateStyleObjCorrect() {
    this.stylesObj = {
      width: '180px',
      backgroundColor: 'red'
    }
  }

  updateWidth() {
    this.widthButtonPx = 200
  }
}
