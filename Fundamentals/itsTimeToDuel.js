class Card {
    constructor(name,cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        target.resilience -= this.power;
    }
}

        

class Effect extends Card {
    constructor(name, cost, stat, magnitude, text) {
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
        this.text = text;
    }
    effectAttack(target, stat) {
        if(stat === "resilience") {
            target.resilience += this.magnitude;
        } else if(stat === "power") {
            target.power += this.magnitude;
        
        }
    }
}





redBeltNinja = new Unit("red belt ninja", 3, 3, 4);
console.table(redBeltNinja);

hardAlgorithm = new Effect("hard algorithm", 2, "resilience", +3);
hardAlgorithm.effectAttack(redBeltNinja, "resilience");
console.table(redBeltNinja);


blackBeltNinja = new Unit("black belt ninja", 4, 5, 4);
console.table(blackBeltNinja);

unhandledPromiseRejection = new Effect("unhandled promise rejection", 2, "resilience", -2);
unhandledPromiseRejection.effectAttack(redBeltNinja, "resilience");
console.table(redBeltNinja);

pairProgramming = new Effect("pair programming", 3, "power", +2);
pairProgramming.effectAttack(redBeltNinja, "power");
console.table(redBeltNinja);

redBeltNinja.attack(blackBeltNinja);
console.table(blackBeltNinja);

