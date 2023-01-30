let seattleStore = {
  location: 'Seattle',
  hours: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  minCust: 23,
  maxCust: 65,
  aveOrderSize: 6.3,
  salesByHour: [],
  calcRandNumOfCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust); 
  },
  calcCookiesSold: function() {
    return Math.floor(this.calcRandNumOfCust() * this.aveOrderSize);
  },
  calcSalesByHour: function() {
    for (let i = 0; i < this.hours.length; i++){
      this.salesByHour.push(this.calcCookiesSold())
    }
    return this.salesByHour;
  },
  calcSumOfSales: function() {
    let runningTotal = 0;
    for (let i = 0; i < this.salesByHour.length; i++) {
      return runningTotal += parseInt(this.salesByHour[i]);
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
  calcRandNumOfCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust); 
  },
  calcCookiesSold: function() {
    return Math.floor(this.calcRandNumOfCust() * this.aveOrderSize);
  },
  calcSalesByHour: function() {
    for (let i = 0; i < this.hours.length; i++){
      this.salesByHour.push(this.calcCookiesSold())
    }
    return this.salesByHour;
  },
  calcSumOfSales: function() {
    let runningTotal = 0;
    for (let i = 0; i < this.salesByHour.length; i++) {
      return runningTotal += parseInt(this.salesByHour[i]);
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
  calcRandNumOfCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust); 
  },
  calcCookiesSold: function() {
    return Math.floor(this.calcRandNumOfCust() * this.aveOrderSize);
  },
  calcSalesByHour: function() {
    for (let i = 0; i < this.hours.length; i++){
      this.salesByHour.push(this.calcCookiesSold())
    }
    return this.salesByHour;
  },
  calcSumOfSales: function() {
    let runningTotal = 0;
    for (let i = 0; i < this.salesByHour.length; i++) {
      return runningTotal += parseInt(this.salesByHour[i]);
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
  calcRandNumOfCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust); 
  },
  calcCookiesSold: function() {
    return Math.floor(this.calcRandNumOfCust() * this.aveOrderSize);
  },
  calcSalesByHour: function() {
    for (let i = 0; i < this.hours.length; i++){
      this.salesByHour.push(this.calcCookiesSold())
    }
    return this.salesByHour;
  },
  calcSumOfSales: function() {
    let runningTotal = 0;
    for (let i = 0; i < this.salesByHour.length; i++) {
      return runningTotal += parseInt(this.salesByHour[i]);
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
  calcRandNumOfCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust); 
  },
  calcCookiesSold: function() {
    return Math.floor(this.calcRandNumOfCust() * this.aveOrderSize);
  },
  calcSalesByHour: function() {
    for (let i = 0; i < this.hours.length; i++){
      this.salesByHour.push(this.calcCookiesSold())
    }
    return this.salesByHour;
  },
  calcSumOfSales: function() {
    let runningTotal = 0;
    for (let i = 0; i < this.salesByHour.length; i++) {
      return runningTotal += parseInt(this.salesByHour[i]);
    }
    return runningTotal;
  }
};