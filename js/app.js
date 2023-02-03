'use strict'

function FranchiseLocation(location = {}, minCust, maxCust, aveOrderSize) {
  this.storeLocation = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveOrderSize = aveOrderSize;
  this.salesByHour = [];
  this.calcRandNumOfCust = function () {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.calcCookiesSold = function () {
    return Math.ceil(this.calcRandNumOfCust() * this.aveOrderSize);
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

function createHeading(){
  // Selects the html element table
  let salesTable = document.querySelector('table');
  // Creates a table heading element, saves it as variable tHead
  let tHead = document.createElement('thead');
  //Append tHead to the table
  salesTable.appendChild(tHead);
  // Create a table row element save it as variable headingRow
  let headingRow = document.createElement('tr');
  // Append headingRow to tHead element
  tHead.appendChild(headingRow);
  // Create a table header element, save it as hElement
  let hElement = document.createElement('th');
  // Set Textcontent of first hElement to 'Location'
  hElement.textContent = 'Location';
  // Append hElement to headingRow
  headingRow.appendChild(hElement);
  //Create for loop, loop through hours array and create a new hElement for each Hour
  for (let i = 0; i < hours.length; i++){
    let hourElement = document.createElement('th');
    hourElement.textContent = hours[i];
    headingRow.appendChild(hourElement);
  }
  //OUTSIDE THE LOOP Create new hElement
  let lastElement = document.createElement('th');
  // Set text content
  lastElement.textContent = 'Total Daily Sales';
  // Append Child
  headingRow.appendChild(lastElement);
}

function createTableBody() {
  for (let i = 0; i < allFranchisesArr.length; i++){
    allFranchisesArr[i].calcHourlySales();
    allFranchisesArr[i].renderTable();
  }
}

function createFooter() {
  // Selects the HTML element table
  let salesTable = document.querySelector('table');
  // Creates a table footer element, saves it as variable tFoot
  let tFoot = document.createElement('tfoot');
  // Appends tFoot to the table
  salesTable.appendChild(tFoot);
  // Creates a table row element, saves it as variable footerRow
  let footerRow = document.createElement('tr');
  // Append footerRow to tFoot element
  tFoot.appendChild(footerRow);
  // Create a table header element, save it as footLabel
  let footLabel = document.createElement('th');
  // Set textcontent of first footLabel to 'Total Hourly Sales'
  footLabel.textContent = 'Totals';
  // Append footLabel to footerRow
  footerRow.appendChild(footLabel);
  let sales = allFranchisesArr;
  //Create foor loop that loops through sales[j], then salesByHour[i]. Using hours.length so it loops through for every hour
  for (let i = 0; i < hours.length; i++){
    let runningTotal = 0;
    for (let j = 0; j < sales.length; j++){
      runningTotal += sales[j].salesByHour[i];
    }
    // Create table data element, saves it as variable totalByHour
    let totalByHour = document.createElement('td');
    // Set the text content of totalByHour to runningTotal
    totalByHour.textContent = runningTotal;
    //Append Total by hour to footerRow
    footerRow.appendChild(totalByHour);
  }
  //Calculate Total for All Locations
  let sumOfAllStores = 0;
  for (let i = 0; i < allFranchisesArr.length; i++) {
    sumOfAllStores += allFranchisesArr[i].calcSumOfHourlySales();
  }
  //Create a new table data element, save it as allStoresSales
  let allStoresSales = document.createElement('th');
  allStoresSales.textContent = sumOfAllStores;
  footerRow.appendChild(allStoresSales);
}

function updateFooter() {
  // Selects the table from the dom
  let salesTable = document.querySelector('table');
  // Selects the previous footer from the dom
  let oldFooter = document.querySelector('tfoot');
  // Removes old child from the dom
  salesTable.removeChild(oldFooter);
  let tFoot = document.createElement('tfoot');
  // Appends tFoot to the table
  salesTable.appendChild(tFoot);
  // Creates a table row element, saves it as variable footerRow
  let footerRow = document.createElement('tr');
  // Append footerRow to tFoot element
  tFoot.appendChild(footerRow);
  // Create a table header element, save it as footLabel
  let footLabel = document.createElement('th');
  // Set textcontent of first footLabel to 'Total Hourly Sales'
  footLabel.textContent = 'Totals';
  // Append footLabel to footerRow
  footerRow.appendChild(footLabel);
  let sales = allFranchisesArr;
  //Create foor loop that loops through sales[j], then salesByHour[i]. Using hours.length so it loops through for every hour
  for (let i = 0; i < hours.length; i++){
    let runningTotal = 0;
    for (let j = 0; j < sales.length; j++){
      runningTotal += sales[j].salesByHour[i];
    }
    // Create table data element, saves it as variable totalByHour
    let totalByHour = document.createElement('td');
    // Set the text content of totalByHour to runningTotal
    totalByHour.textContent = runningTotal;
    //Append Total by hour to footerRow
    footerRow.appendChild(totalByHour);
  }
  //Calculate Total for All Locations
  let sumOfAllStores = 0;
  for (let i = 0; i < allFranchisesArr.length; i++) {
    sumOfAllStores += allFranchisesArr[i].calcSumOfHourlySales();
  }
  //Create a new table data element, save it as allStoresSales
  let allStoresSales = document.createElement('th');
  allStoresSales.textContent = sumOfAllStores;
  footerRow.appendChild(allStoresSales);
}
//global variable
let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

// All object instances initialized here

let seattleFranchiseLocation = new FranchiseLocation('Seattle', 23, 65, 6.3);
let tokyoFranchiseLocation = new FranchiseLocation('Tokyo', 3, 24, 1.2);
let dubaiFranchiseLocation = new FranchiseLocation('Dubai', 11, 38, 3.7);
let parisFranchiseLocation = new FranchiseLocation('Paris', 20, 38, 2.3);
let limaFranchiseLocation = new FranchiseLocation('Lima', 2, 16, 4.6);

let allFranchisesArr = [seattleFranchiseLocation, tokyoFranchiseLocation, dubaiFranchiseLocation, parisFranchiseLocation, limaFranchiseLocation];

let form = document.querySelector('form')
let handleSubmit = function(event) {
  event.preventDefault();
  //Grabs user data after the submit button is pressed
  // event.target.<name-of-label>.value
  let newLocationName = event.target.location.value;
  let newMinCust = parseInt(event.target.minCust.value);
  let newMaxCust = parseInt(event.target.maxCust.value);
  let newAveOrderSize = parseInt(event.target.aveOrder.value);
  //Creates a new instance of FranchiseLocation
  let newFranchiseLocation = new FranchiseLocation(newLocationName, newMinCust, newMaxCust, newAveOrderSize);
  allFranchisesArr.push(newFranchiseLocation);
  newFranchiseLocation.calcRandNumOfCust();
  newFranchiseLocation.calcHourlySales();
  newFranchiseLocation.calcSumOfHourlySales();
  newFranchiseLocation.renderTable();
  updateFooter();
};
form.addEventListener('submit', handleSubmit);


createHeading();
createTableBody();
createFooter();
