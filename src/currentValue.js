import {BitcoinCompanies} from './bitcoin';

export class CurrentValue {
  constructor(userInput) {
    this.userInput = userInput;
    this.currentValue;
  }

  async getCurrentVale() {
    
    let response = await BitcoinCompanies.getCoinInfo(this.userInput);

    if (response.result === "success") {
      this.currentValue = response.price;
    } else {
      this.error = response;
    }
  }
}