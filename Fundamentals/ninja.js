class Ninja {
    constructor(name, health = 0) {
        this.name = name;
        this.health = health;
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


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1.health);









