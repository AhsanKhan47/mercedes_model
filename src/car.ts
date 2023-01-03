import { Vehicle } from "./vehicle.js";


export class Car extends Vehicle{
    readonly brand : string = "Mercedes";
    material :string = "High Strength Steel";
    laneAssist! : string;
    sunroof!:  string;
    brakeSystem! : string;
    wheels!: string;
    fourWheel! : boolean;

    constructor(){
        super();       //super call for parent class Vehicle

    }
    info(){           // overridden method with car info properties
        console.log( `This is the ${this.brand} brand and It is made from ${this.material} which runs on ${this.runsOn}.`)
    }


}