export class Vehicle {
    tyres = 4;
    runsOn = "Fuel";
    info() {
        console.log(`Vehicle have ${this.tyres} wheels and runs on ${this.runsOn}.`);
    }
}
let vehh = new Vehicle;
