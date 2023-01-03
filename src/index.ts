import { Vehicle } from "./vehicle.js";
import { Car} from "./car.js";
import { Offroad1 } from "./offroad1.js";
import { Offroad2 } from "./offroad2.js";
import { Offroad3 } from "./offroad3.js";


//  Class hierarchy
//  Vehicle > Car > Offroad1 > Offroad2 > Offroad3

const veh = new Vehicle;
const car = new Car;
const offroad1 = new Offroad1(true);
const offroad2 = new Offroad1(true);


veh.info()
car.info()
offroad1.info()

offroad2.start()
offroad2.info()



