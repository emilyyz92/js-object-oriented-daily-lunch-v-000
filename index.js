// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborId = 0;
let customerId = 0;
let mealId = 0;

class Neighborhood {
  constructor(name) {
    this.name = name
    this.id = neighborId++
    store.neighborhoods.push(this)
  }
}

class Customer {
  constructor(name, neighborhoodId) {
    this.name = name
    this.neighborhoodId = neighborhoodId
    store.customers.push(this)
    this.id = customerId++
  }
}

class Meal {
  constructor(title, price) {
    this.title = title
    this.price = price

  }
}
