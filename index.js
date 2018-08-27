// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborId = 0;
let customerId = 0;
let mealId = 0;
let deliveryId = 0;

class Neighborhood {
  constructor(name) {
    this.name = name
    this.id = neighborId++
    store.neighborhoods.push(this)
  }

  deliveries() {
    return store.deliveries.filter(delivery => 
    { return delivery.neighborhoodId == this.id})
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
    this.price = parseInt(price)
    store.meals.push(this)
    this.id = mealId++
  }
}

class Delivery {
  constructor(mealId, customerId, neighborhoodId) {
    this.mealId = mealId
    this.customerId = customerId
    this.neighborhoodId = neighborhoodId
    store.deliveries.push(this)
    this.id = deliveryId++
  }
}
