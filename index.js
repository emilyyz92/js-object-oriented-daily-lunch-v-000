// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborId = 0;

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
  }
}