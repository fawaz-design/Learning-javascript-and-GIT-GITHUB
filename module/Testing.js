class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    drive() {
        console.log(`${this.make} ${model} driving.`)
    }
}
//The Car class inherits from the Vehicle class. This means that Car has access to the properties and methods defined in Vehicle
class Car extends Vehicle {
    constructor(make, model, year, color) {
        super(make, model, year);
        this.color = color;
    }
    getColor() {
        console.log(`Color of ${this.make} ${this.model} is ${this.color}`)
    }
}
const myCar = new Car('Tata', 'Punch', '2024', 'Grey');
myCar.getColor()
