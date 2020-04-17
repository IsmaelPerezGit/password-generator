import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  useLetters = false;
  useSymbols = false;
  useNumbers = false;
  passwordLength = 0;

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyx';
    const symbols = '!@#$%^&*';

    let validChars = '';
    if (this.useLetters) {
      validChars += letters;
    }

    if (this.useNumbers) {
      validChars += numbers;
    }

    if (this.useSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.passwordLength = parsedValue;
    }
  }
}
