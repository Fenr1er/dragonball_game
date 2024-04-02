class Ability {
    constructor(name, damage, effect) {
      this.name = name;
      this.damage = damage;
      this.effect = effect; // Sollte ein Funktionsname als String sein
      this.used = false; // Ob die Fähigkeit bereits verwendet wurde
    }
  
    activate(target, character) {
      if (
        this.canUseAbility(character) &&
        typeof this[this.effect] === "function"
      ) {
        this.effect.call(this, target, character);
      }
    }
  
    canUseAbility(character) {
      // Hier könnte eine Logik stehen, die überprüft, ob die Fähigkeit charakterspezifisch ist
      return character.abilities.includes(this) && this.isCharacterEligible(character);
  }
  
  
    applyDamage(target, damage) {
      if (this.rollDice() > target.defense) {
        target.health -= damage;
        console.log(`${target.name} received ${damage} damage.`);
        this.checkDefeat(target);
      } else {
        console.log(`${target.name} dodged the attack!`);
      }
    }
  
    checkDefeat(target) {
      if (target.health <= 0) {
        console.log(`${target.name} has been defeated!`);
      }
    }
  
    rollDice() {
      return Math.floor(Math.random() * 20) + 1;
    }
  
    kiBlast(target) {
      this.applyDamage(target, 15);
    }
  
    kamehameha(target) {
      this.applyDamage(target, 30);
    }
  
    superKamehameha(target) {
      this.applyDamage(target, 40);
    }
  
    genkidama(target) {
      //soll nur funktionieren wenn charakter Goku ist
      if (this.name === "Goku") {
        this.applyDamage(target, 50);
      }
    }
  
    superGenkidama(target) {
      //soll nur funktionieren wenn charakter Goku ist
      if (this.name === "Goku") {
        this.applyDamage(target, 70);
      }
    }
  
    destructoDisk(target) {
      //soll nur funktionieren wenn charakter Krillin ist
      if (this.name === "Krillin") {
        this.applyDamage(target, 20);
      }
    }
  
    höllenspirale(target) {
      //soll nur funktionieren wenn charakter Piccolo ist
      if (this.name === "Piccolo") {
        this.applyDamage(target, 60);
      }
    }
  
    planetenkanone(target) {
      if (this.name === "Frezzer") {
        this.applyDamage(target, 40);
      }
    }
  
    bigBangAttack(target) {
      //soll nur funktionieren wenn charakter Vegeta ist
      if (this.name === "Vegeta") {
        this.applyDamage(target, 40);
      }
    }
  
    finalFlash(target) {
      //soll nur funktionieren wenn charakter Vegeta ist
      if (this.name === "Vegeta") {
        this.applyDamage(target, 50);
      }
    }
  
    galickGun(target) {
      //soll nur funktionieren wenn charakter Vegeta ist
      if (this.name === "Vegeta") {
        this.applyDamage(target, 35);
      }
    }
  
    burningAttack(target) {
      //soll nur funktionieren wenn charakter Trunks ist
      if (this.name === "Trunks") {
        this.applyDamage(target, 30);
      }
    }
  
    finishBuster(target) {
      //soll nur funktionieren wenn charakter Trunks ist
      if (this.name === "Trunks") {
        this.applyDamage(target, 45);
      }
    }
    masenko(target) {
      //soll nur funktionieren wenn charakter Gohan oder Piccolo ist
      if (this.name === "Gohan" || this.name === "Piccolo") {
        this.applyDamage(target, 25);
      }
    }
  
    VaterSohnKamehameha(target) {
      //soll nur funktionieren wenn charakter Gohan ist und nur wenn superSaiyajin2 aktiviert ist.
      if (this.name === "Gohan" && this.superSaiyajin2 === true) {
        this.applyDamage(target, 65);
      }
    }
  
    WednesdayCrush(target) {
      //soll nur funktionieren wenn charakter Raditz oder Boo ist
      if (this.name === "Raditz" || this.name === "Boo") {
        this.applyDamage(target, 30);
      }
    }
  
    deathBeam(target) {
      //soll nur funktionieren wenn charakter Freezer oder Cooler ist
      if (this.name === "Freezer" || this.name === "Cooler") {
        this.applyDamage(target, 25);
      }
    }
  
    deathBall(target) {
      //soll nur funktionieren wenn charakter Freezer oder Cooler ist
      if (this.name === "Freezer" || this.name === "Cooler") {
        this.applyDamage(target, 40);
      }
    }
    supernova(target) {
      //soll nur funktionieren wenn charakter Freezer oder Cooler ist
      if (this.name === "Freezer" || this.name === "Cooler") {
        this.applyDamage(target, 50);
      }
    }
  
    deathSlicer(target) {
      //soll nur funktionieren wenn charakter Cooler ist
      if (this.name === "Cooler") {
        this.applyDamage(target, 35);
      }
    }
  
    chocoBeam(target) {
      //soll nur funktionieren wenn charakter Boo ist
      if (this.name === "Boo") {
        this.applyDamage(target, 20);
      }
    }
  
    multibleKiBlaster(target) {
      //soll nur funktionieren wenn charakter Boo oder Vegeta ist
      // feuert 10 Kugeln auf den Gegner ab würfelt für jede Kugel ob sie trifft
      if (this.name === "Boo" || this.name === "Vegeta") {
        for (let i = 0; i < 10; i++) {
          if (this.rollDice() > target.defense) {
            this.applyDamage(target, 5);
            console.log(`Kugel ${i + 1} trifft!`);
          } else {
            console.log(`Kugel ${i + 1} verfehlt.`);
          }
        }
      }
    }
  
    finalRebellionCannon(target) {
      //soll nur funktionieren wenn charakter Bardock ist
      this.applyDamage(target, 40);
    }
  
    finalSpiritCannon(target) {
      //soll nur funktionieren wenn charakter Bardock ist und HP unter 50%
      this.applyDamage(target, 65);
    }
  
    nappaSmash(target) {
      //soll nur funktionieren wenn charakter Nappa ist
      this.applyDamage(target, 20);
    }
  
    nappaBomb(target) {
      //soll nur funktionieren wenn charakter Nappa ist
      //trifft immer außer wenn gegner instantTransmission oder evade aktiviert hat
      this.applyDamage(target, 15);
    }
  
    perfectShot(target) {
      //soll nur funktionieren wenn charakter Cell ist
      this.applyDamage(target, 30);
    }
  
    perfectKamehameha(target) {
      //soll nur funktionieren wenn charakter Cell ist
      this.applyDamage(target, 40);
    }
  
    solarKamehameha(target) {
      //soll nur funktionieren wenn charakter Cell ist und rekanerieren aktiviert ist
      this.applyDamage(target, 70);
    }
  
    hellGrenade(target) {
      //soll nur funktionieren wenn charakter Piccolo ist
      // feuert 10 Kugeln auf den Gegner ab würfelt für jede Kugel ob sie trifft
      for (let i = 0; i < 10; i++) {
        if (this.rollDice() > target.defense) {
          this.applyDamage(target, 5);
          console.log(`Kugel ${i + 1} trifft!`);
        } else {
          console.log(`Kugel ${i + 1} verfehlt.`);
        }
      }
    }
  
    timeSkip(target) {
      //soll nur funktionieren wenn charakter Hit ist
      this.applyDamage(target, 30);
    }
  
    timeCage(target) {
      //soll nur funktionieren wenn charakter Hit ist
      this.applyDamage(target, 40);
    }
  
    timeSkipMolotov(target) {
      //soll nur funktionieren wenn charakter Hit ist
      this.applyDamage(target, 50);
    }
  
    jirenPunch(target) {
      //soll nur funktionieren wenn charakter Jiren ist
      if (health <= 50) {
        this.applyDamage(target, 40);
      } else {
        this.applyDamage(target, 20);
      }
    }
  
    jirenBomb(target) {
      //soll nur funktionieren wenn charakter Jiren ist
      if (health <= 50) {
        this.applyDamage(target, 50);
      } else {
        this.applyDamage(target, 30);
      }
    }
  
    kombination_1(target) {
      // Sollten alle Charaktere können
      // Fügt 3 Schläge zu je 5 Schaden
      // Würfelt für jeden Schlag, ob er trifft
      for (let i = 0; i < 3; i++) {
        if (this.rollDice() > target.defense) {
          this.applyDamage(target, 5);
          console.log(`Schlag ${i + 1} trifft!`);
        } else {
          console.log(`Schlag ${i + 1} verfehlt.`);
        }
      }
    }
    kombination_2(target) {
      //sollen alle charaktere können
      //soll im hintergrund gewürfelt werden ob es funktioniert 1-20 wenn höher als gegner roll dann funktioniert es wenn nicht dann nicht.
      //fügt 2 schläge dann 4 kicks und einen kiBlast zu
      //würfelt für jeden schlag, kick und kiBlast ob er trifft
  
      //2 Schläge
      for (let i = 0; i < 2; i++) {
        if (this.rollDice() > target.defense) {
          this.applyDamage(target, 5);
          console.log(`Schlag ${i + 1} trifft!`);
        } else {
          console.log(`Schlag ${i + 1} verfehlt.`);
        }
      }
      //4 Kicks
      for (let i = 0; i < 4; i++) {
        if (this.rollDice() > target.defense) {
          this.applyDamage(target, 6);
          console.log(`Kick ${i + 1} trifft!`);
        } else {
          console.log(`Kick ${i + 1} verfehlt.`);
        }
      }
      //1 KiBlast
      if (this.rollDice() > target.defense) {
        this.applyDamage(target, 15);
        console.log(`KiBlast trifft!`);
      } else {
        console.log(`KiBlast verfehlt.`);
      }
    }
    kombination_3(target) {
      //sollen alle charaktere können
      //soll im hintergrund gewürfelt werden ob es funktioniert 1-20 wenn höher als gegner roll dann funktioniert es wenn nicht dann nicht.
      //fügt 2 kiBlasts, 4 kicks und einen punch zu
      //würfelt für jeden kiBlast, kick und punch ob er trifft
      for (let i = 0; i < 2; i++) {
        if (this.rollDice() > target.defense) {
          this.applyDamage(target, 15);
          console.log(`KiBlast ${i + 1} trifft!`);
        } else {
          console.log(`KiBlast ${i + 1} verfehlt.`);
        }
      }
      for (let i = 0; i < 4; i++) {
        if (this.rollDice() > target.defense) {
          this.applyDamage(target, 6);
          console.log(`Kick ${i + 1} trifft!`);
        } else {
          console.log(`Kick ${i + 1} verfehlt.`);
        }
      }
      if (this.rollDice() > target.defense) {
        this.applyDamage(target, 5);
        console.log(`Punch trifft!`);
      } else {
        console.log(`Punch verfehlt.`);
      }
    }
  
    regeneration(self) {
      // Soll nur funktionieren, wenn Charakter Boo oder Cell ist
      if (!["Boo", "Cell"].includes(self.name)) {
        console.log(`${self.name} kann Regeneration nicht nutzen.`);
        return;
      }
  
      // Würfeln, um die Regenerationsmenge zu bestimmen
      const roll = this.rollDice();
      let healAmount;
      if (roll === 20) {
        healAmount = 100;
      } else if (roll >= 16) {
        healAmount = 40;
      } else if (roll >= 11) {
        healAmount = 30;
      } else if (roll >= 6) {
        healAmount = 20;
      } else if (roll >= 2) {
        healAmount = 10;
      } else {
        this.applyDamage = 10; // Fall, dass die Regeneration fehlschlägt
      }
  
      self.health += healAmount;
      console.log(`${self.name} regeneriert ${healAmount} HP.`);
    }
  
    rekanerieren(self) {
      // Soll nur funktionieren, wenn Charakter Boo oder Cell ist und einmal pro Kampf
      if (!["Boo", "Cell"].includes(self.name) || self.rekaneriert) {
        console.log(`${self.name} kann Rekanerieren nicht nutzen.`);
        return;
      }
  
      if (self.health <= 0) {
        self.health = self.maxHealth * 0.5; // 50% der maximalen Gesundheit wiederherstellen
        self.rekaneriert = true; // Markiere, dass Rekanerieren verwendet wurde
        console.log(
          `${self.name} wurde rekaneriert und hat jetzt ${self.health} HP.`
        );
      }
    }
  
    legendarySuperSaiyajin(self) {
      //soll nur funktionieren wenn charakter Broly ist
      //soll nur einmal pro kampf funktionieren und bei aktivierung soll der schaden vervierfacht werden und nur wenn die gesundheit unter 70% ist regeneriert sich 5HP pro runde
      // Implementiere die Logik für legendarySuperSaiyajin
      if (self.health <= 70) {
        self.damage = self.damage * 4;
        self.healAmount = 5;
        console.log(
          `${self.name} hat Legendary Super Saiyajin aktiviert und fügt jetzt Vervierfachten Schaden zu.`
        );
      }
    }
  
    legendarySuperSaiyajinFullPower(self) {
      //soll nur funktionieren wenn charakter Broly ist
      //soll nur einmal pro kampf funktionieren und bei aktivierung soll der schaden verfünffacht werden und nur wenn die gesundheit unter 20% ist regeneriert 70HP einmal pro kampf
      // Implementiere die Logik für legendarySuperSaiyajinFullPower
      if (self.health <= 20) {
        self.damage = self.damage * 5;
        self.healAmount = 70;
        console.log(
          `${self.name} hat Legendary Super Saiyajin Full Power aktiviert und fügt jetzt fünffachen Schaden zu.`
        );
      }
    }
  
    superSaiyajin(self) {
      //soll nur funktionieren wenn charakter Goku, Gohan, Vegeta, Trunks, Goten ist
      //soll nur einmal pro kampf funktionieren und bei aktivierung soll der schaden verdoppelt werden und nur wenn die gesundheit unter 50% ist
      // Implementiere die Logik für superSaiyajin
      if (self.health <= 50) {
        self.damage = self.damage * 1.5;
        self.healAmount = 10;
        console.log(
          `${self.name} hat Super Saiyajin aktiviert und fügt jetzt Erhöhten Schaden zu.`
        );
      }
    }
    superSaiyajin2(self) {
      //soll nur funktionieren wenn charakter Goku, Gohan, Vegeta, Trunks ist
      //soll nur einmal pro kampf funktionieren und bei aktivierung soll der schaden verdoppelt werden und nur wenn die gesundheit unter 40% ist und nur wenn superSaiyajin aktiviert ist.
      // Implementiere die Logik für superSaiyajin2
      if (self.health <= 40 && self.superSaiyajin === true) {
        self.damage = self.damage * 2; // Schadenswert für superSaiyajin2
        self.healAmount = 20;
        console.log(
          `${self.name} hat Super Saiyajin 2 aktiviert und fügt jetzt doppelten Schaden zu.`
        );
      }
    }
    superSaiyajin3(self) {
      //soll nur funktionieren wenn charakter Goku ist
      //soll nur einmal pro kampf funktionieren und bei aktivierung soll der schaden verdoppelt werden und nur wenn die gesundheit unter 30% ist und nur wenn superSaiyajin2 aktiviert ist.
      // Implementiere die Logik für superSaiyajin3
      if (self.health <= 30 && self.superSaiyajin2 === true) {
        self.damage = self.damage * 3; // Schadenswert für superSaiyajin3
        self.healAmount = 30;
        console.log(
          `${self.name} hat Super Saiyajin 3 aktiviert und fügt jetzt dreifachen Schaden zu.`
        );
      }
    }
  
    superSaiyajinBlue(self) {
      //soll nur funktionieren wenn charakter Goku, Vegeta ist
      //soll nur einmal pro kampf funktionieren und bei aktivierung soll der schaden verfünffacht werden und nur wenn die gesundheit unter 20%.
      // Implementiere die Logik für superSaiyajinBlue
      if ((self.health <= 20 && this.name === "Goku") || this.name === "Vegeta") {
        self.damage = self.damage * 5; // Schadenswert für superSaiyajinBlue
        self.healAmount = 50;
        console.log(
          `${self.name} hat Super Saiyajin Blue aktiviert und fügt jetzt fünffachen Schaden zu.`
        );
      }
    }
  
    punch(target) {
      this.applyDamage(target, 5);
    }
    kick(target) {
      this.applyDamage(target, 6);
    }
  
    evade(self) {
      //sollen alle charaktere können als Vedeidigung
      self.defense = this.rollDice() - 3;
    }
    instantTransmission(self) {
      //soll nur funktionieren wenn charakter Goku ist und ist eine Verteidigung
      //soll im hintergrund gewürfelt werden ob es funktioniert 1-20 wenn höher als gegner roll dann funktioniert es wenn nicht dann nicht.
  
      // Implementiere die Logik für instantTransmission
      self.defense = this.rollDice() + 3;
    }
    block(self) {
      //sollen alle charaktere können als Vedeidigung
      //soll im hintergrund gewürfelt werden ob es funktioniert 1-20 wenn höher als gegner roll dann funktioniert es wenn nicht dann nicht.
      self.defense = this.rollDice();
      if (self.defense > this.applyDamage(target, damage)) {
        health -= Math.round(damage / 4);
        console.log(
          `${self.name} has blocked the attack and received ${this.applyDamage} damage.`
        );
      } else {
        health -= Math.round(damage / 2);
        console.log(
          `${self.name} has blocked the attack and received ${this.applyDamage} damage.`
        );
      }
    }
    moveCharacter(event) {
      //sollen alle charaktere können
      // Implementiere die Logik für moveCharacter
      const player = document.getElementById("player");
      // Initialisiere die Position der Spielfiguren
      let bottom = 0;
      let back = 0;
      let front = 0;
      let top = 0;
      const step = 20; // Schrittgröße
      //bewegungsfunktion
      switch (event.key) {
        //positionierungs buttons
        case "moveFront":
          front += step;
          break;
        case "moveTopFront":
          top += step;
          front += step;
          break;
        case "moveTop":
          top += step;
          break;
        case "moveTopBack":
          top += step;
          back += step;
          break;
        case "moveBack":
          back += step;
          break;
        case "moveBottomBack":
          bottom += step;
          back += step;
          break;
        case "moveBottom":
          bottom += step;
          break;
        case "moveBottomFront":
          bottom += step;
          front += step;
          break;
      }
    }
  }

  class Deck {
    constructor(cards) {
      this.cards = cards;
      this.shuffle();
    }

    shuffle() {
      this.cards.sort(() => Math.random() - 0.5);
  }

  drawCard() {
    return this.cards.length > 0 ? this.cards.shift() : null;
  }
}