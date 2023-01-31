let seattleStore = {
  location: 'Seattle',
  hours: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  minCust: 23,
  maxCust: 65,
  aveOrderSize: 6.3,
  salesByHour: [],
  calcRandNumOfCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  calcCookiesSold: function () {
    return Math.floor(this.calcRandNumOfCust() * this.aveOrderSize);
  },
  calcSalesByHour: function () {
    for (let i = 0; i < this.hours.length; i++) {
      this.salesByHour.push(this.calcCookiesSold())
    }
    return this.salesByHour;
  },
  calcSumOfSales: function () {
    let runningTotal = 0;
    for (let i = 0; i < this.salesByHour.length; i++) {
      runningTotal += parseInt(this.salesByHour[i]);
    }
    return runningTotal;
  }
};

let tokyoStore = {
  location: 'Tokyo',
  hours: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  minCust: 3,
  maxCust: 24,
  aveOrderSize: 1.2,
  salesByHour: [],
  calcRandNumOfCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  calcCookiesSold: function () {
    return Math.floor(this.calcRandNumOfCust() * this.aveOrderSize);
  },
  calcSalesByHour: function () {
    for (let i = 0; i < this.hours.length; i++) {
      this.salesByHour.push(this.calcCookiesSold())
    }
    return this.salesByHour;
  },
  calcSumOfSales: function () {
    let runningTotal = 0;
    for (let i = 0; i < this.salesByHour.length; i++) {
      runningTotal += parseInt(this.salesByHour[i]);
    }
    return runningTotal;
  }
};

let dubaiStore = {
  location: 'Dubai',
  hours: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  minCust: 11,
  maxCust: 38,
  aveOrderSize: 3.7,
  salesByHour: [],
  calcRandNumOfCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  calcCookiesSold: function () {
    return Math.floor(this.calcRandNumOfCust() * this.aveOrderSize);
  },
  calcSalesByHour: function () {
    for (let i = 0; i < this.hours.length; i++) {
      this.salesByHour.push(this.calcCookiesSold())
    }
    return this.salesByHour;
  },
  calcSumOfSales: function () {
    let runningTotal = 0;
    for (let i = 0; i < this.salesByHour.length; i++) {
      runningTotal += parseInt(this.salesByHour[i]);
    }
    return runningTotal;
  }
};

let parisStore = {
  location: 'Paris',
  hours: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  minCust: 20,
  maxCust: 38,
  aveOrderSize: 2.3,
  salesByHour: [],
  calcRandNumOfCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  calcCookiesSold: function () {
    return Math.floor(this.calcRandNumOfCust() * this.aveOrderSize);
  },
  calcSalesByHour: function () {
    for (let i = 0; i < this.hours.length; i++) {
      this.salesByHour.push(this.calcCookiesSold())
    }
    return this.salesByHour;
  },
  calcSumOfSales: function () {
    let runningTotal = 0;
    for (let i = 0; i < this.salesByHour.length; i++) {
      runningTotal += parseInt(this.salesByHour[i]);
    }
    return runningTotal;
  }
};

let limaStore = {
  location: 'Lima',
  hours: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  minCust: 2,
  maxCust: 16,
  aveOrderSize: 4.6,
  salesByHour: [],
  calcRandNumOfCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  calcCookiesSold: function () {
    return Math.floor(this.calcRandNumOfCust() * this.aveOrderSize);
  },
  calcSalesByHour: function () {
    for (let i = 0; i < this.hours.length; i++) {
      this.salesByHour.push(this.calcCookiesSold())
    }
    return this.salesByHour;
  },
  calcSumOfSales: function () {
    let runningTotal = 0;
    for (let i = 0; i < this.salesByHour.length; i++) {
      runningTotal += parseInt(this.salesByHour[i]);
    }
    return runningTotal;
  }
};

function addToList(storeLocation) {
  // creates the list itself
  let myList = document.createElement('ul');
  let myTitle = document.createElement('h3')
  myTitle.appendChild(document.createTextNode(storeLocation.location))
  myList.appendChild(myTitle)

  for (let i = 0; i < seattleStore.salesByHour.length; i++) {
    // creates the li element
    let item = document.createElement('li');
    // creates the content by using index of i
    item.appendChild(document.createTextNode(`${storeLocation.hours[i]}: ${storeLocation.salesByHour[i]} cookies`));
    // adds it to the list
    myList.appendChild(item);
  }
  // OUTSIDE of the loop total the sales and return the full list
  let item = document.createElement('li');
  // creates the content by using index of i
  item.appendChild(document.createTextNode(`Total: ${storeLocation.calcSumOfSales()} cookies`));
  // adds it to the list
  myList.appendChild(item);
  return myList;
}

function generateSalesReport(storeLocation) {
  storeLocation.calcSalesByHour();
  storeLocation.calcSumOfSales();
  salesList.appendChild(addToList(storeLocation));
}
let salesList = document.getElementById('sales');

let storeArr = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore]

for (let k = 0; k < storeArr.length; k++){
  generateSalesReport(storeArr[k]);
}


