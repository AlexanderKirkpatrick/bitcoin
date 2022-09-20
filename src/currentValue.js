import {BitcoinCompanies} from './bitcoin';

export class CurrentValue {
  constructor(userInput) {
    this.userInput = userInput;
    this.currentValue;
  }

  async getCurrentValue() {
    
    let response = await BitcoinCompanies.getCoinInfo(this.userInput);

    if (response.result === "success") {
      this.currentValue = response;
    } else {
      this.error = response;
    }
  }
}