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
      } else {
        console.log(`${this.name} hat keine Karten und greift normal an.`);
      }
    }
  
    setStage(stage) {
      switch (stage) {
        case 1: //stage 1 = schwach
          this.name = this.name;
          this.health = 100;
          this.damage = +0;
          break;
        case 2: //stage 2 = mittel
          this.name = this.name;
          this.health = 150;
          this.damage = +2;
          break;
        case 3: //stage 3 = stark
          this.name = this.name;
          this.health = 200;
          this.damage = +3;
          break;
        case 4: //stage 4 = sehr stark
          this.name = this.name;
          this.health = 250;
          this.damage = +4;
          break;
        case 5: //stage 5 = ultra stark
          this.name = this.name;
          this.health = 300;
          this.damage = +5;
          break;
        case 6: //stage 6 = Gott
          this.name = this.name;
          this.health = 350;
          this.damage = +6;
          break;
        case 7: //stage 7 = Engel
          this.name = this.name;
          this.health = 400;
          this.damage = +7;
          break;
        case 8: //stage 8 = Zerstörer
          this.name = this.name;
          this.health = 450;
          this.damage = +8;
          break;
        case 9: //stage 9 = Großpriester
          this.name = this.name;
          this.health = 500;
          this.damage = +9;
          break;
        case 10: //stage 10 = Zen-Oh
          this.name = this.name;
          this.health = 1000;
          this.damage = +10;
          break;
        default:
          this.name = this.name;
          this.health = 100;
          this.damage = +0;
          break;
      }
    }
  }