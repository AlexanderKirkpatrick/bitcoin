export class BitcoinCompanies {
  static async getCoinInfo(userInput) {
    try {
      const response = await fetch `https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&ids=${userInput}`;

      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();      
    } catch(error) {
      return error.message;

    }
  }
}








