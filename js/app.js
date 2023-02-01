'use strict'

function franchiseLocation(location, minCust, maxCust, aveOrderSize) {
  this.storeLocation = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveOrderSize = aveOrderSize;
  this.salesByHour = [];
  this.calcRandNumOfCust = function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.calcCookiesSold = function () {
    return Math.floor(this.calcRandNumOfCust() * this.aveOrderSize);
  };
  this.calcHourlySales = function () {
    for (let i = 0; i < hours.length; i++) {
      this.salesByHour.push(this.calcCookiesSold());
    }
    return this.salesByHour;
  };
  this.calcSumOfHourlySales = function () {
    let runningTotal = 0;
    for (let i = 0; i < this.salesByHour.length; i++) {
      runningTotal += this.salesByHour[i];
    }
    return runningTotal;
  };
  this.renderTable = function () {
    //Selects the html element table
    let salesTable = document.querySelector('table');
    //Creates a table row and saves it as variable tr
    let tr = document.createElement('tr');
    //Creates a table head cell, saves it as variable thName
    let thName = document.createElement('th');
    //Sets the text content of variable thName to storeLocation
    thName.textContent = this.storeLocation;
    //appends the variable th to the table row tr
    tr.appendChild(thName);
    for (let i = 0; i < hours.length; i++) {
      //INSIDE THE LOOP, Creates a table data cell, save it as variable td
      let td = document.createElement('td');
      // Sets the content to object.salesByHour at the index of the loop number
      td.textContent = this.salesByHour[i];
      // Appends my td variable to the tr I created on line 32
      tr.appendChild(td);
    }
    //Creates new table data cell, save it as variable dailySum
    let dailySum = document.createElement('th');
    //Set the text content of variable dailySum as this.calcSumOfHourlySales
    dailySum.textContent = this.calcSumOfHourlySales();
    //Append dailySum to the tr row
    tr.appendChild(dailySum);
    //OUTSIDE THE LOOP, appends my tr row to the table
    salesTable.appendChild(tr);

  };
};
// global variable hours
let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];



let seattleFranchiseLocation = new franchiseLocation('Seattle', 23, 65, 6.3);
let tokyoFranchiseLocation = new franchiseLocation('Tokyo', 3, 24, 1.2);
let dubaiFranchiseLocation = new franchiseLocation('Dubai', 11, 38, 3.7);
let parisFranchiseLocation = new franchiseLocation('Paris', 20, 38, 2.3);
let limaFranchiseLocation = new franchiseLocation('Lima', 2, 16, 4.6);


let allFranchisesArr = [seattleFranchiseLocation, tokyoFranchiseLocation, dubaiFranchiseLocation, parisFranchiseLocation, limaFranchiseLocation];

for (let i = 0; i < allFranchisesArr.length; i++){
  allFranchisesArr[i].calcHourlySales();
  allFranchisesArr[i].renderTable();
}