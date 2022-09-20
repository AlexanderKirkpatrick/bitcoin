import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {BitcoinCompanies} from './bitcoin';

// function clearFields() {
//   $('#coin').val("");
// }



$(document).ready(function() {
  $('#bitGet').submit(function(event){
    event.preventDefault();
    let coin = $('#coin').val();
    $('#coin').val("");

    let companies = new BitcoinCompanies();
    

    $('.showName').text(`${coin} is ${companies}`);
    $('.showErrors').text("");
    // $('.showErrors').text(`There was an error processing your request`); 
    console.log(companies);
  });
});


// function getElements (response) {
//   if (response.name) {
//     $('.showName').text(`The humidity in ${response.name}`);
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



// let promise = BitcoinCompanies.getCoinInfo(coin);
//     promise.then(function(response) {
//       const responseData = JSON.parse(response);
//       $('.showNameBtc').append(`${responseData[0].id.name.price}`);
//       // $('.showNameEth').append(`${responseData[1].name}`);
//       // $('.showNameDoge').append(`${responseData[9].name}`);
//       // for  (let i = 0; i < 10; i++) {
//       //   $('.showName').append(`${responseData[i].name}`);
//       // }