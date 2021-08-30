class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(this.name, this.strength, this.speed, this.health);

    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.wisdom = 10;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in a month, two programmers can do in two months");
    }
}


// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// console.log(ninja1.health);

const sensei1 = new Sensei("Master Splinter")
sensei1.speakWisdom();
console.log(sensei1.health);
console.log(`Your health is: ${sensei1.health}, Your wisdom is: ${sensei1.wisdom},
Your speed is: ${sensei1.speed}, Your strength is: ${sensei1.strength} `)
sensei1.sayName();








