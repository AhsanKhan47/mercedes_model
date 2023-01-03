import { Vehicle } from "./vehicle.js";
export class Car extends Vehicle {
    brand = "Mercedes";
    material = "High Strength Steel";
    laneAssist;
    sunroof;
    brakeSystem;
    wheels;
    fourWheel;
    constructor() {
        super(); //super call for parent class Vehicle
    }
    info() {
        console.log(`This is the ${this.brand} brand and It is made from ${this.material} which runs on ${this.runsOn}.`);
    }
}
