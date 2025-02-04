//Soldier 
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.damage = damage
        this.health -= damage
    }
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        this.health -= damage

        if (this.health) { return `${this.name} has received ${damage} points of damage` }
        else { return `${this.name} has died in act of combat` }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}
// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) { return `A Saxon has received ${damage} points of damage` }
        else { return `A Saxon has died in combat` }
    }
}
// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        let randomVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let randomSax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let vikAttackSax = randomSax.receiveDamage(randomVik.attack())

        if (randomSax.health <= 0) {
            this.saxonArmy.splice(randomSax)
        }
        return vikAttackSax
    }
    saxonAttack() {
        let saxAttackVik = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].attack())
        if (this.vikingArmy[0].health <= 0) {
            this.vikingArmy.splice(0)
        }
        return saxAttackVik
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else if (this.saxonArmy.length && this.vikingArmy.length === 1) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}