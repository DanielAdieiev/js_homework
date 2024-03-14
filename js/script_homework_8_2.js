const services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",
  price: function() {
    let total = 0;
    for (let prices in services) {
      let min = Infinity;
      let price = parseInt(services[prices]);
      if (!isNaN(price) && price < min) {
        total += price;
      }
    }
    return total;
  },
  minPrice: function() {
    let min = Infinity;
    for (let prices in services) {
      let price = parseInt(services[prices]);
      if (!isNaN(price) && price < min) {
        min = price;
      }
    }
    return min;
  },
  maxPrice: function() {
    let max = -Infinity;
    for (let prices in services) {
      let price = parseInt(services[prices]);
      if (!isNaN(price) && price > max) {
        max = price;
      }
    }
    return max;
  }
};
services['Розбити скло'] = "20 грн";
console.log("Total = ", services.price() + " грн");
console.log("Min price = ", services.minPrice() + " грн");
console.log("Max price = ", services.maxPrice() + " грн");
