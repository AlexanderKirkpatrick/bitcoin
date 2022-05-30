export default class BitcoinCompanies {
  static getCoinInfo() {
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}


// export default class BitcoinCompanies {
//   static async getCoinInfo() {
//     try {
//       const response = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1`);
//       if(!response.ok) {
//         throw Error(response.statusText);
//       }
//       return response.json(); 
//     } catch(error) {
//       return error.message;
//     }
//   }
// }

