class Room {
    constructor(name, length, width, capacity) {
        this.name = name;
        this.length = length;
        this.width = width;
        //phase3
        this.capacity = 15;
    }

    getArea() {
        return length * width;
    }

    getPerimeter() {
        return (length * 2) + (width * 2);
    }
    // phase2
    available = true;
}

let room1 = new Room ("Sun", 30, 20);
let room2 = new Room ("Green", 15, 20);

console.log(room1);
console.log(room2);

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





