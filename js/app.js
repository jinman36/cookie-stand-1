'use strict';


// global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var seattleList = document.getElementById('seattle');
// var tokyoList = document.getElementById('tokyo');
// var dubaiList = document.getElementById('dubai');
// var parisList = document.getElementById('paris');
// var limaList = document.getElementById('lima');
var storeTable = document.getElementById('table');
var tableHeader = document.getElementById('header');
var stores = [];

// create constructor function to create store
function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlySales = [];
  this.dailyTotal = 0;
  stores.push(this);
}

Store.prototype.getRandomNumber = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Store.prototype.calculateHourlySales = function () {
  for (var i = 0; i < hours.length; i++) {
    var hourlyTotal = Math.ceil(this.getRandomNumber() * this.avg);
    this.hourlySales[i] = hourlyTotal;
    this.dailyTotal += hourlyTotal;
  }
};

Store.prototype.render = function () {
  this.calculateHourlySales();
  //create row and append to the DOM
  var trElement = document.createElement('tr');
  storeTable.appendChild(trElement);
  //create first cell in row, give it name and append to DOM
  var thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);
  //iteratively create, give hourly sales content, and append to the DOM
  for (var i = 0; i < this.hourlySales.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = this.hourlySales[i];
    trElement.appendChild(tdElement);
  }
  // add total to the end of the row
  tdElement = document.createElement('td');
  tdElement.textContent = this.dailyTotal;
  trElement.appendChild(tdElement);
};

function renderHeader(){
  var trElement = document.createElement('tr');
  tableHeader.appendChild(trElement);
  var thElement = document.createElement('th');
  thElement.textContent = 'Stores';
  trElement.appendChild(thElement);
  for (var i = 0; i < hours.length; i++){
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
  //Add Daily Location Total in cell at end of header
  thElement = document.createElement('th');
  thElement.textContent = 'Daily Location Total';
  trElement.appendChild(thElement);
}

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

function renderAll(){
  for (var i = 0; i < stores.length; i++){
    stores[i].render();
  }
}

renderAll();
renderHeader();

// //1st object - Seattle Store
// var seattleStore = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   hourlySales: [],
//   dailyTotal: 0,

//   //get random number between min and max for number of customers
//   getRandomNumber: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   //calculate hourlysales total and populate hourly sales aray
//   calculateHourlySales() {
//     for (var i = 0; i < hours.length; i++) {
//       // console.log(this.getRandomNumber());
//       // var calcSales = this.getRandomNumber() * this.avg;
//       var hourlyTotal = Math.ceil(this.getRandomNumber() * this.avg);
//       // console.log(hourlyTotal);
//       this.hourlySales[i] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   },

//   //render list with total at the end
//   render: function () {
//     this.calculateHourlySales();
//     for (var i = 0; i < this.hourlySales.length; i++) {
//       //Proof I can get here!
//       // console.log('inside render method');
//       //create element
//       var liElement = document.createElement('li');
//       //give it content
//       liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
//       //append it to the DOM
//       seattleList.appendChild(liElement);
//     }
//     // render daily total
//     liElement = document.createElement('li');
//     // give it content
//     liElement.textContent = `Total: ${this.dailyTotal} cookies`;
//     // append it to the DOM
//     seattleList.appendChild(liElement);
//   }
// };

// seattleStore.render();
// console.log(seattleStore.hourlySales);

// //2nd object - Tokyo Store
// var tokyoStore = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   hourlySales: [],
//   dailyTotal: 0,

//   //get random number between min and max for number of customers
//   getRandomNumber: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   //calculate hourlysales total and populate hourly sales aray
//   calculateHourlySales() {
//     for (var i = 0; i < hours.length; i++) {
//       // console.log(this.getRandomNumber());
//       // var calcSales = this.getRandomNumber() * this.avg;
//       var hourlyTotal = Math.ceil(this.getRandomNumber() * this.avg);
//       // console.log(hourlyTotal);
//       this.hourlySales[i] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   },

//   //render list with total at the end
//   render: function () {
//     this.calculateHourlySales();
//     for (var i = 0; i < this.hourlySales.length; i++) {
//       //Proof I can get here!
//       // console.log('inside render method');
//       //create element
//       var liElement = document.createElement('li');
//       //give it content
//       liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
//       //append it to the DOM
//       tokyoList.appendChild(liElement);
//     }
//     // render daily total
//     liElement = document.createElement('li');
//     // give it content
//     liElement.textContent = `Total: ${this.dailyTotal} cookies`;
//     // append it to the DOM
//     tokyoList.appendChild(liElement);
//   }
// };

// tokyoStore.render();

// //3rd object - Dubai
// var dubaiStore = {
//   name: 'dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   hourlySales: [],
//   dailyTotal: 0,

//   //get random number between min and max for number of customers
//   getRandomNumber: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   //calculate hourlysales total and populate hourly sales aray
//   calculateHourlySales() {
//     for (var i = 0; i < hours.length; i++) {
//       // console.log(this.getRandomNumber());
//       // var calcSales = this.getRandomNumber() * this.avg;
//       var hourlyTotal = Math.ceil(this.getRandomNumber() * this.avg);
//       // console.log(hourlyTotal);
//       this.hourlySales[i] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   },

//   //render list with total at the end
//   render: function () {
//     this.calculateHourlySales();
//     for (var i = 0; i < this.hourlySales.length; i++) {
//       //Proof I can get here!
//       // console.log('inside render method');
//       //create element
//       var liElement = document.createElement('li');
//       //give it content
//       liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
//       //append it to the DOM
//       dubaiList.appendChild(liElement);
//     }
//     // render daily total
//     liElement = document.createElement('li');
//     // give it content
//     liElement.textContent = `Total: ${this.dailyTotal} cookies`;
//     // append it to the DOM
//     dubaiList.appendChild(liElement);
//   }
// };

// dubaiStore.render();


// //4th object - Paris
// var parisStore = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   hourlySales: [],
//   dailyTotal: 0,

//   //get random number between min and max for number of customers
//   getRandomNumber: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   //calculate hourlysales total and populate hourly sales aray
//   calculateHourlySales() {
//     for (var i = 0; i < hours.length; i++) {
//       // console.log(this.getRandomNumber());
//       // var calcSales = this.getRandomNumber() * this.avg;
//       var hourlyTotal = Math.ceil(this.getRandomNumber() * this.avg);
//       // console.log(hourlyTotal);
//       this.hourlySales[i] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   },

//   //render list with total at the end
//   render: function () {
//     this.calculateHourlySales();
//     for (var i = 0; i < this.hourlySales.length; i++) {
//       //Proof I can get here!
//       // console.log('inside render method');
//       //create element
//       var liElement = document.createElement('li');
//       //give it content
//       liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
//       //append it to the DOM
//       parisList.appendChild(liElement);
//     }
//     // render daily total
//     liElement = document.createElement('li');
//     // give it content
//     liElement.textContent = `Total: ${this.dailyTotal} cookies`;
//     // append it to the DOM
//     parisList.appendChild(liElement);
//   }
// };

// parisStore.render();


// //5th object - Lima
// var limaStore = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   hourlySales: [],
//   dailyTotal: 0,

//   //get random number between min and max for number of customers
//   getRandomNumber: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   //calculate hourlysales total and populate hourly sales aray
//   calculateHourlySales() {
//     for (var i = 0; i < hours.length; i++) {
//       // console.log(this.getRandomNumber());
//       // var calcSales = this.getRandomNumber() * this.avg;
//       var hourlyTotal = Math.ceil(this.getRandomNumber() * this.avg);
//       // console.log(hourlyTotal);
//       this.hourlySales[i] = hourlyTotal;
//       this.dailyTotal += hourlyTotal;
//     }
//   },

//   //render list with total at the end
//   render: function () {
//     this.calculateHourlySales();
//     for (var i = 0; i < this.hourlySales.length; i++) {
//       //Proof I can get here!
//       // console.log('inside render method');
//       //create element
//       var liElement = document.createElement('li');
//       //give it content
//       liElement.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
//       //append it to the DOM
//       limaList.appendChild(liElement);
//     }
//     // render daily total
//     liElement = document.createElement('li');
//     // give it content
//     liElement.textContent = `Total: ${this.dailyTotal} cookies`;
//     // append it to the DOM
//     limaList.appendChild(liElement);
//   }
// };

// limaStore.render();


