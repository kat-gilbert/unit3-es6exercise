class Room {
    constructor(name, length, width, capacity) {
        this.name = name;
        this.length = length;
        this.width = width;
        //phase3
        this.capacity = 15;
    }
        available = true;

    getArea() {
        console.log(this.length * this.width);
    }

    getPerimeter() {
        console.log((this.length * 2) + (this.width * 2));
    }
    }

let room1 = new Room ("Sun", 30, 20);
let room2 = new Room ("Green", 15, 20);

room1.getArea();
room2.getArea();
room1.getPerimeter();
room2.getPerimeter();

//phase2
room2.available = false;
console.log(room1.available);
console.log(room2.available);

//phase3
room2.capacity = 18;
console.log(room1.capacity);
console.log(room2.capacity);

console.log(room1);
console.log(room2);





