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
  },

};

seattleStore.calcSalesByHour();
console.log(seattleStore.salesByHour);