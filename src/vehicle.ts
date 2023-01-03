export class Vehicle{
    
    tyres : number = 4;
    runsOn : string = "Fuel";

    info(){
        console.log( `Vehicle have ${this.tyres} wheels and runs on ${this.runsOn}.`)
    }


}
let vehh = new Vehicle;