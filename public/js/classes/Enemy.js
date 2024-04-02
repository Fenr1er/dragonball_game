class Enemy {
  constructor(name, stage, health, damage, cards = []) {
    this.name = name;
    this.stage = stage;
    this.health = health;
    this.damage = damage;
    this.cards = cards; // Stellt sicher, dass cards initialisiert wird
  }

  chooseCard() {
    if (this.stage < 3) {
      return this.cards[Math.floor(Math.random() * this.cards.length)];
    } else {
      if (this.health < 50) {
        return (
          this.cards.find((card) => card.type === "defense") || this.cards[0]
        );
      } else {
        return (
          this.cards.find((card) => card.type === "attack") || this.cards[0]
        );
      }
    }
  }

  act() {
    const card = this.chooseCard();
    if (card) {
      console.log(`${this.name} setzt ${card.name} ein.`);
    }
  }
  // Methode zum Setzen der Stage, die die Werte für health und damage anpasst
  setStage(stage) {
    const stages = {
      1: { health: 100, damage: 0 },
      2: { health: 200, damage: 2 },
      3: { health: 300, damage: 4 },
      4: { health: 400, damage: 6 },
      5: { health: 500, damage: 8 },
      6: { health: 600, damage: 10 },
      7: { health: 700, damage: 12 },
      8: { health: 800, damage: 14 },
      9: { health: 900, damage: 16 },
      10: { health: 1000, damage: 18 },
    };
    // Überprüft, ob die übergebene Stage existiert
    const currentStage = stages[stage];
    if (currentStage) {
      this.stage = stage;
      this.health = currentStage.health;
      this.damage = currentStage.damage;
    } else {
      // Wenn der übergebene Wert für die Stage nicht existiert, wird der Gegner auf die erste Stage zurückgesetzt
      this.health = 100;
      this.damage = 0;
    }
  }
}
