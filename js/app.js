'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Seattle

let seattle = {
  name:'Seattle',
  min: 23,
  max: 65,
  avgSale: 6.3,
  cookiesEachHour:[],
  dailyTotal: 0,
  getRandomCookies: function (){
    // console.log(this.name);
    let oneHour = Math.ceil(getRandomCust(this.min, this.max) * this.avgSale);
    // console.log(oneHour);
    return oneHour;
  },
  calcCookiesEachHour: function (){
    for(let i = 0; i < hours.length; i++){
      let cookies = this.getRandomCookies();
      this.cookiesEachHour.push(cookies);
      this.dailyTotal += cookies;
    }
  },
  render: function () {
    for(let i = 0; i < hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]} : ${this.cookiesEachHour[i]}`;
      const ul = document.getElementById('Seattle') ;
      ul.appendChild(li); }
    let li = document.getElementById('Total Seattle');
    li.textContent= `Total ${this.dailyTotal}`;
  }
};


seattle.getRandomCookies();
seattle.calcCookiesEachHour();
seattle.render();




// //Tokyo
let tokyo = {
  name: 'Tokyo',
  min:3,
  max:34,
  avgSale:1.2,
  cookiesEachHour: [],
  dailyTotal: 0,
  getRandomCookies: function (){
    let oneHour = Math.ceil(getRandomCust(this.min, this.max) * this.avgSale);
    return oneHour;
  },
  calcCookiesEachHour: function () {
    for( let i =0; i < hours.length; i++){
      let cookies = this.getRandomCookies();
      this.cookiesEachHour.push(cookies);
      this.dailytotal += cookies;
    }
  },
  render: function () {
    for(let i = 0; i < hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]} : ${this.cookiesEachHour[i]}`;
      const ul = document.getElementById('Tokyo') ;
      ul.appendChild(li); }
    let li = document.getElementById('Total Tokyo');
    li.textContent= `Total ${this.dailyTotal}`;
  }
};
tokyo.getRandomCookies();
tokyo.calcCookiesEachHour();
tokyo.render();


//Dubai
let dubai = {
  name: 'Dubai',
  min:11,
  max:38,
  avgSale:3.7,
  cookiesEachHour: [],
  dailyTotal: 0,
  getRandomCookies: function (){
    // console.log(this.name);
    let oneHour = Math.ceil(getRandomCust(this.min, this.max) * this.avgSale);
    // console.log(oneHour);
    return oneHour;
  },
  calcCookiesEachHour: function () {
    for( let i =0; i < hours.length; i++){
      let cookies = this.getRandomCookies();
      this.cookiesEachHour.push(cookies);
      this.dailytotal += cookies;
    }
  },
  render: function () {
    for(let i = 0; i < hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]} : ${this.cookiesEachHour[i]}`;
      const ul = document.getElementById('Dubai') ;
      ul.appendChild(li); }
    let li = document.getElementById('Total Dubai');
    li.textContent= `Total ${this.dailyTotal}`;
  }
};
dubai.getRandomCookies();
dubai.calcCookiesEachHour();
dubai.render();

// //Paris
let paris = {
  name: 'Paris',
  min:20,
  max:38,
  avgSale:2.3,
  cookiesEachHour: [],
  dailyTotal: 0,
  getRandomCookies: function (){
    // console.log(this.name);
    let oneHour = Math.ceil(getRandomCust(this.min, this.max) * this.avgSale);
    // console.log(oneHour);
    return oneHour;
  },
  calcCookiesEachHour: function () {
    for( let i =0; i < hours.length; i++){
      let cookies = this.getRandomCookies();
      this.cookiesEachHour.push(cookies);
      this.dailytotal += cookies;
    }
  },
  render: function () {
    for(let i = 0; i < hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]} : ${this.cookiesEachHour[i]}`;
      const ul = document.getElementById('Paris') ;
      ul.appendChild(li); }
    let li = document.getElementById('Paris Total');
    li.textContent= `Total ${this.dailyTotal}`;
  }
};
paris.getRandomCookies();
paris.calcCookiesEachHour();
paris.render();

// //Lima
let lima = {
  name: 'Lima',
  min:2,
  max:16,
  avgSale:4.6,
  cookiesEachHour: [],
  dailyTotal: 0,
  getRandomCookies: function (){
    // console.log(this.name);
    let oneHour = Math.ceil(getRandomCust(this.min, this.max) * this.avgSale);
    // console.log(oneHour);
    return oneHour;
  },
  calcCookiesEachHour: function () {
    for( let i =0; i < hours.length; i++){
      let cookies = this.getRandomCookies();
      this.cookiesEachHour.push(cookies);
      this.dailytotal += cookies;
    }
  },
  render: function () {
    for(let i = 0; i < hours.length; i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]} : ${this.cookiesEachHour[i]}`;
      const ul = document.getElementById('Lima') ;
      ul.appendChild(li); }
    let li = document.getElementById('Lima Total');
    li.textContent= `Total ${this.dailyTotal}`;
  }
};
lima.getRandomCookies();
lima.calcCookiesEachHour();
lima.render();

function getRandomCust(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}
