// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0;
let customerId = 0;
let mealId = 0;
let deliveryId = 0;

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = neighborhoodId++;
    store.neighborhoods.push(this);
  }

  deliveries() {
    return store.deliveries.filter(delivery => delivery.neighborhoodId === this.id);
  }

  customers() {
    return store.customers.filter(customer => customer.neighborhoodId === this.id)
  }
}

class Customer {
  constructor(name, neighborhoodId) {
    this.name = name;
    this.neighborhoodId = neighborhoodId;
    this.id = customerId++;
    store.customers.push(this);
  }

  deliveries() {
    store.deliveries.filter(delivery => delivery.customerId === this.id)
  }

  meals() {
    return this.deliveries().map(function(delivery) {
      return delivery.meal()
    })
  }
}

class Meal {
  constructor(title, price) {
    this.title = title
    this.price = parseInt(price)
    this.id = mealId++
    store.meals.push(this)
  }
}

class Delivery {
  constructor(mealId, customerId, neighborhoodId) {
    this.mealId = mealId
    this.customerId = customerId
    this.neighborhoodId = neighborhoodId
    this.id = deliveryId++
    store.deliveries.push(this)

  }

  meal() {
    return store.meals.find(meal => meal.id === this.mealId)
  }

  customer() {
    return store.customers.find(
      customer => customer.id === this.customerId
      // debugger;
    )
  }

  neighborhood() {
    return store.neighborhoods.find(neighborhood => neighborhood.id === this.neighborhoodId)
  }
}
