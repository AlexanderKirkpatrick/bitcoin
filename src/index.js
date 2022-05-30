import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BitcoinCompanies from './bitcoin';

function clearFields() {
  $('#coin').val("");
}

$(document).ready(function() {
  $('#bitGet').submit(function(event){
    event.preventDefault();
    let coin = $('#coin').val();
    clearFields();
    let promise = BitcoinCompanies.getCoinInfo(coin);
    promise.then(function(response){
      const responseData = JSON.parse(response);
      for  (let i = 0; i < 10; i++) {
      $('.showCompany').append(`${responseData[i].id}`);
      }
    });
  });
});

// function getElements(response) {
//   if (response.id) {
//     $('.showCompany').text(`The humidity in ${response.id}`);
//   } else {
//     $('.showErrors').text(`There was an error: ${response}`);
//   }
// }

// async function makeApiCall() {
//   const response = await BitcoinCompanies.getCoinInfo();
//   getElements(response);
// }

// $(document).ready(function() {
//   $('#bitGet').submit(function() {
//     //let company = "BTC"; //$('#coin').val();
//     //console.log(company);
//     clearFields();
//     makeApiCall();

//   });
// });



