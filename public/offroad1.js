import { Car } from "./car.js";
export class Offroad1 extends Car {
    startCar;
    make = 1980;
    model = "Maybach G650";
    constructor(param) {
        super();
        this.startCar = param;
        this.sunroof = "Yes";
        this.brakeSystem = "ABS";
        this.wheels = "Alloy wheels";
        this.fourWheel = true;
    }
    start() {
        if (this.startCar = true) {
            console.log(`Starting ${this.brand} ${this.model}`);
        }
        else {
            console.log(`The car is stopped`);
        }
    }
    info() {
        console.log(`This is  ${this.brand} ${this.model} and It is made from ${this.material} which runs on ${this.runsOn}.\nIt
        has ${this.brakeSystem} brake system.`);
    }
}
