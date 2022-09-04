export class BitcoinCompanies {
  static async getCoinInfo(userInput) {
    try {
      const response = await fetch `https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&ids=${userInput}&interval=1d,30d&convert=USD&platform-currency=BTC&per-page=100&page=1`;

      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();      
    } catch(error) {
      return error.message;

    }
  }
}








