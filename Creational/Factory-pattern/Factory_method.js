function Vechile(type, wheel) {
    this.type = type;
    this.wheel = wheel;
    this.getDetails = function () {
        return `Type: ${this.type}, Wheels: ${this.wheel}`;
    }

}

function CreateVechile(type) {
    switch (type) {
        case "car":
            return new Vechile("Car", 4);
            break;
        case "bike":
            return new Vechile("Bike", 2);
            break;
        case "truck":
            return new Vechile("Truck", 6);
            break;
        case "bus":
            return new Vechile("Bus", 8);
            break;

        default:
            return null;
            break;
    }
}

let vechile1 = CreateVechile("bike");
console.log(vechile1.getDetails());