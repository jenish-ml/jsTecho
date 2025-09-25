class Animal {
    name = "Animals";

    constructor (names) {
        this.names = names
    }

    eat() {
        console.log(`${this.names} is eating.`);
    }
    sleep() {
        console.log(`is sleeping.`);
    }
}

class Dog extends Animal {
    constructor(names) {
        super(names);
    }

}

obj1 = new Dog("Cat");
obj1.eat();
obj1.sleep();
console.log(obj1.name);
