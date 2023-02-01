'use strict'

function franchiseLocation(location, minCust, maxCust, aveOrderSize) {
  this.storeLocation = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveOrderSize = aveOrderSize;
  this.hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
  this.salesByHour = [];
  this.calcRandNumOfCust = function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.calcCookiesSold = function () {
    return Math.floor(this.calcRandNumOfCust() * this.aveOrderSize);
  };
  this.calcHourlySales = function () {
    for (let i = 0; i < this.hours.length; i++) {
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
  this.renderTable = function() {
    let salesTable = document.querySelector('table');
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    tdName.textContent = this.storeLocation;
    for (let i = 0; i < this.hours.length; i++){
      let td = document.createElement('td');
      td.textContent = this.salesByHour[i];
      tr.appendChild(td);
    }
    salesTable.appendChild(tr);
  };
};

let seattleFranchiseLocation = new franchiseLocation('Seattle', 23, 65, 6.3);
let tokyoFranchiseLocation = new franchiseLocation('Tokyo', 3, 24, 1.2);
let dubaiFranchiseLocation = new franchiseLocation('Dubai', 11, 38, 3.7);
let parisFranchiseLocation = new franchiseLocation('Paris', 20, 38, 2.3);
let limaFranchiseLocation = new franchiseLocation('Lima', 2, 16, 4.6);

let franchiseArray = [seattleFranchiseLocation, tokyoFranchiseLocation, dubaiFranchiseLocation, parisFranchiseLocation, limaFranchiseLocation]

for (let i = 0; i < franchiseArray.length; i++){
  let franchise = franchiseArray[i];
  franchise.calcHourlySales();
  franchise.renderTable();
}


