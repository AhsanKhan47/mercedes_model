import { Vehicle } from "./vehicle.js";
import { Car } from "./car.js";
import { Offroad1 } from "./offroad1.js";
const veh = new Vehicle;
const car = new Car;
const offroad1 = new Offroad1(true);
veh.info();
car.info();
offroad1.info();
offroad1.start();
offroad1.info();
// console.log(veh.info());  //parent class method
// console.log(car.info())  // child class method
//  Class Hiearchary
//  Vehicle > Car > Offroad1 > Offroad2 > Offroad3
