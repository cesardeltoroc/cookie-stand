'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

//Seattle

let seattle = {
  name:'Seattle',
  min: 23,
  max: 65,
  avgSale: 6.3,
  cookiesEachHour:[],
  getRandomCookies: function (){
    // console.log(this.name);
    let oneHour = Math.ceil(getRandomCust(this.min, this.max) * this.avgSale);
    // console.log(oneHour);
    return oneHour;
  },
  calcCookiesEachHour: function (){
    for(let i = 1; i < hours.length; i++){
      let cookies = this.getRandomCookies();
      this.cookiesEachHour.push(cookies);
      this.dailyTotal += cookies;
    }
  },
  render: function () {
    for(let i = 0; i < hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]} : ${this.cookiesEachHour[i]}`;
      const ul = document.getElementById('Cookies') ;
      ul.appendChild(li);
    }
    const h1 = document.getElementById('Seattle');
    hi.textContent = 'Seattle';
    
  }
};


seattle.getRandomCookies();
seattle.calcCookiesEachHour();
seattle.render();




// // //Tokyo
// let tokyo = {
//   name: 'Tokyo',
//   min:3,
//   max:34,
//   avgSale:1.2,
//   cookieEachHour: [],
//   getRandomCookies: function (){
//     console.log(this.name);
//     let oneHour = Math.ceil(getRandomCust(this.min, this.max) * this.avgSale);
//     console.log(oneHour);
//     return oneHour;
//   },
//   calcCookiesEachHour: function () {
//     for( let i =1; i < hours.length; i++){
//       let cookies = this.getRandomCookies();
//       this.cookieEachHour.push(cookies);
//       this.dailytotal += cookies;
//     }
//   }
// };
// tokyo.getRandomCookies();
// tokyo.calcCookiesEachHour();


// //Dubai
// let dubai = {
//   name: 'Dubai',
//   min:11,
//   max:38,
//   avgSale:3.7,
//   cookieEachHour: [],
//   getRandomCookies: function (){
//     console.log(this.name);
//     let oneHour = Math.ceil(getRandomCust(this.min, this.max) * this.avgSale);
//     console.log(oneHour);
//     return oneHour;
//   },
//   calcCookiesEachHour: function () {
//     for( let i =1; i < hours.length; i++){
//       let cookies = this.getRandomCookies();
//       this.cookieEachHour.push(cookies);
//       this.dailytotal += cookies;
//     }
//   }
// };
// dubai.getRandomCookies();
// dubai.calcCookiesEachHour();

// //Paris
// let paris = {
//   name: 'Paris',
//   min:20,
//   max:38,
//   avgSale:2.3,
//   cookieEachHour: [],
//   getRandomCookies: function (){
//     console.log(this.name);
//     let oneHour = Math.ceil(getRandomCust(this.min, this.max) * this.avgSale);
//     console.log(oneHour);
//     return oneHour;
//   },
//   calcCookiesEachHour: function () {
//     for( let i =1; i < hours.length; i++){
//       let cookies = this.getRandomCookies();
//       this.cookieEachHour.push(cookies);
//       this.dailytotal += cookies;
//     }
//   }
// };
// paris.getRandomCookies();
// paris.calcCookiesEachHour();

// //Lima
// let lima = {
//   name: 'Lima',
//   min:2,
//   max:16,
//   avgSale:4.6,
//   cookieEachHour: [],
//   getRandomCookies: function (){
//     console.log(this.name);
//     let oneHour = Math.ceil(getRandomCust(this.min, this.max) * this.avgSale);
//     console.log(oneHour);
//     return oneHour;
//   },
//   calcCookiesEachHour: function () {
//     for( let i =1; i < hours.length; i++){
//       let cookies = this.getRandomCookies();
//       this.cookieEachHour.push(cookies);
//       this.dailytotal += cookies;
//     }
//   }
// };
// lima.getRandomCookies();
// lima.calcCookiesEachHour();

function getRandomCust(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}
