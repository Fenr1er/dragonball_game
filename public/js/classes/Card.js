class Card {
    constructor(name, type, energyCost, effect) {
        this.name = name;
        this.type = type;
        this.energyCost = energyCost;
        this.effect = effect; // Funktion, die den Effekt der Karte ausführt
    }
  
    use(user, target) {
        if (user.energy >= this.energyCost) {
            user.energy -= this.energyCost;
            this.effect(user, target);
            console.log(`${user.name} verwendet ${this.name} auf ${target.name}.`);
        } else {
            console.log(`${user.name} hat nicht genug Energie, um ${this.name} zu verwenden.`);
        }
    }
  }