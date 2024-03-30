/**
 * TODO = Kontrollieren ob die Fähigkeit genutzt werden kann und ob sie Schaden anrichtet oder nicht und ob der Gegner besiegt wurde. 
 * TODO = Implementieren der Fähigkeiten der Charaktere aus Dragonball Z in JavaScript, um ein einfaches Kampfspiel zu erstellen.
 * TODO verbesserung in den einzelnen Klassen und Methoden sowie die Logik der Fähigkeiten und Charaktere kontrollieren.
 * TODO = Implementieren von Fähigkeiten, die nur von bestimmten Charakteren verwendet werden können.
 * TODO = Implementieren von Fähigkeiten, die nur unter bestimmten Bedingungen aktiviert werden können.
 * TODO = Implementieren von Fähigkeiten, die nur einmal pro Kampf verwendet werden können.
 * TODO = Implementieren von Fähigkeiten, die nur einmal pro Kampf und nur unter bestimmten Bedingungen aktiviert werden können.
 * 
 **/
class Ability {
  constructor(name, damage, effect) {
    this.name = name;
    this.damage = damage;
    this.effect = effect; // Sollte ein Funktionsname als String sein
  }

  activate(target, character) {
    if (
      this.canUseAbility(character) &&
      this.effect &&
      typeof this[this.effect] === "function"
    ) {
      this[this.effect](target);
    }
  }
 
  canUseAbility(character) {
    // Prüfe, ob der Charakter die Fähigkeit nutzen kann
    return character.abilities.includes(this.name);
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
    this.applyDamage(target, 50);
  }

  superGenkidama(target) {
    //soll nur funktionieren wenn charakter Goku ist
    this.applyDamage(target, 70);
  }

  destructoDisk(target) {
    //soll nur funktionieren wenn charakter Krillin ist
    this.applyDamage(target, 20);
  }

  höllenspirale(target) {
    //soll nur funktionieren wenn charakter Piccolo ist
    this.applyDamage(target, 60);
  }

  planetenkanone(target) {
    this.applyDamage(target, 40);
  }

  bigBangAttack(target) {
    //soll nur funktionieren wenn charakter Vegeta ist
    this.applyDamage(target, 40);
  }

  finalFlash(target) {
    //soll nur funktionieren wenn charakter Vegeta ist
    this.applyDamage(target, 50);
  }

  galickGun(target) {
    //soll nur funktionieren wenn charakter Vegeta ist
    this.applyDamage(target, 35);
  }

  burningAttack(target) {
    //soll nur funktionieren wenn charakter Trunks ist
    this.applyDamage(target, 30);
  }

  finishBuster(target) {
    //soll nur funktionieren wenn charakter Trunks ist
    this.applyDamage(target, 45);
  }

  masenko(target) {
    //soll nur funktionieren wenn charakter Gohan oder Piccolo ist
    this.applyDamage(target, 25);
  }

  VaterSohnKamehameha(target) {
    //soll nur funktionieren wenn charakter Gohan ist und nur wenn superSaiyajin2 aktiviert ist.
    this.applyDamage(target, 65);
  }

  WednesdayCrush(target) {
    //soll nur funktionieren wenn charakter Raditz oder Boo ist
    this.applyDamage(target, 30);
  }

  deathBeam(target) {
    //soll nur funktionieren wenn charakter Freezer oder Cooler ist
    this.applyDamage(target, 25);
  }

  deathBall(target) {
    //soll nur funktionieren wenn charakter Freezer oder Cooler ist
    this.applyDamage(target, 40);
  }

  supernova(target) {
    //soll nur funktionieren wenn charakter Freezer oder Cooler ist
    this.applyDamage(target, 50);
  }

  deathSlicer(target) {
    //soll nur funktionieren wenn charakter Cooler ist
    this.applyDamage(target, 35);
  }

  chocoBeam(target) {
    //soll nur funktionieren wenn charakter Boo ist
    this.applyDamage(target, 20);
  }

  multibleKiBlaster(target) {
    //soll nur funktionieren wenn charakter Boo oder Vegeta ist
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
class Card {
  constructor(ability) {
    this.ability = ability;
  }

  use(target) {
    this.ability.activate(target);
  }
}

class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  draw() {
    return this.cards.pop(); // Zieht die oberste Karte vom Stapel
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}

// Beispielnutzung
const kamehameha = new Ability("Kamehameha", 30, "Starker Energieangriff");
const superKamehameha = new Ability(
  "Super Kamehameha",
  40,
  "Gokus stärkster Angriff"
);
const genkidama = new Ability(
  "Genkidama",
  50,
  "Sammelt Energie für einen mächtigen Schlag"
);
const superGenkidama = new Ability(
  "Super Genkidama",
  70,
  "Gokus ultimativer Angriff"
);
const destructoDisk = new Ability(
  "Destructo Disk",
  20,
  "Krillins Spezialangriff"
);
const höllenspirale = new Ability(
  "Höllenspirale",
  60,
  "Piccolos Spezialangriff"
);
const planetenkanone = new Ability(
  "Planetenkanone",
  40,
  "Vegetas Spezialangriff"
);
const bigBangAttack = new Ability(
  "Big Bang Attack",
  40,
  "Vegetas Spezialangriff"
);
const galickGun = new Ability("Galick Gun", 35, "Vegetas Spezialangriff");
const finalFlash = new Ability("Final Flash", 40, "Vegetas stärkster Angriff");
const masenko = new Ability("Masenko", 25, "Gohans Spezialangriff");
const VaterSohnKamehameha = new Ability(
  "Vater-Sohn-Kamehameha",
  65,
  "Gohans stärkster Angriff"
);
const WednesdayCrush = new Ability(
  "Wednesday Crush",
  30,
  "Raditz Spezialangriff"
);
const punch = new Ability("Punch", 5, "Einfacher Schlag");
const kick = new Ability("Kick", 6, "Einfacher Tritt");
const evade = new Ability("Evade", 0, "Verteidigung");
const instantTransmission = new Ability(
  "Instant Transmission",
  0,
  "Verteidigung"
);
const block = new Ability("Block", 0, "Verteidigung");
const moveCharacter = new Ability("Move Character", 0, "Bewegung");
const superSaiyajin = new Ability("Super Saiyajin", 0, "Gokus Spezialangriff");
const superSaiyajin2 = new Ability(
  "Super Saiyajin 2",
  0,
  "Gokus Spezialangriff"
);
const superSaiyajin3 = new Ability(
  "Super Saiyajin 3",
  0,
  "Gokus Spezialangriff"
);
const superSaiyajinBlue = new Ability(
  "Super Saiyajin Blue",
  0,
  "Gokus Spezialangriff"
);
const legendarySuperSaiyajin = new Ability(
  "Legendary Super Saiyajin",
  0,
  "Brolys Spezialangriff"
);
const legendarySuperSaiyajinFullPower = new Ability(
  "Legendary Super Saiyajin Full Power",
  0,
  "Brolys Spezialangriff"
);
const kombination_1 = new Ability(
  "Kombination 1",
  15,
  "Kombination aus Schlägen und Tritten"
);
const kombination_2 = new Ability(
  "Kombination 2",
  20,
  "Kombination aus Schlägen, Tritten und Ki-Blasts"
);
const kombination_3 = new Ability(
  "Kombination 3",
  25,
  "Kombination aus Ki-Blasts, Tritten und Schlägen"
);
const nappaSmash = new Ability("Nappa Smash", 20, "Nappas Spezialangriff");
const nappaBomb = new Ability("Nappa Bomb", 15, "Nappas Selbstzerstörung");
const deathBeam = new Ability("Death Beam", 25, "Freezers Spezialangriff");
const deathBall = new Ability("Death Ball", 40, "Freezers stärkster Angriff");
const supernova = new Ability("Supernova", 50, "Freezers ultimativer Angriff");
const deathSlicer = new Ability("Death Slicer", 35, "Coolers Spezialangriff");
const chocoBeam = new Ability("Choco Beam", 20, "Boos Spezialangriff");
const multibleKiBlaster = new Ability(
  "Multible Ki-Blaster",
  15,
  "Boos Spezialangriff"
);
const finalRebellionCannon = new Ability(
  "Final Rebellion Cannon",
  40,
  "Bardocks Spezialangriff"
);
const finalSpiritCannon = new Ability(
  "Final Spirit Cannon",
  65,
  "Bardocks stärkster Angriff"
);
const perfectShot = new Ability("Perfect Shot", 30, "Cells Spezialangriff");
const perfectKamehameha = new Ability(
  "Perfect Kamehameha",
  40,
  "Cells stärkster Angriff"
);
const solarKamehameha = new Ability(
  "Solar Kamehameha",
  70,
  "Cells ultimativer Angriff"
);
const hellGrenade = new Ability("Hell Grenade", 60, "Piccolos Spezialangriff");
const timeSkip = new Ability("Time Skip", 30, "Hits Spezialangriff");
const timeCage = new Ability("Time Cage", 40, "Hits stärkster Angriff");
const timeSkipMolotov = new Ability(
  "Time Skip Molotov",
  50,
  "Hits ultimativer Angriff"
);
const jirenPunch = new Ability("Jiren Punch", 40, "Jirens Spezialangriff");
const jirenBomb = new Ability("Jiren Bomb", 50, "Jirens stärkster Angriff");

const deck = new Deck([new Card(kamehameha), new Card(genkidama)]);

deck.shuffle(); // Mischen des Decks

const player = { name: "Goku", health: 100 };
const card = deck.draw(); // Spieler zieht eine Karte

console.log(`Gezogene Karte: ${card.ability.name}`);
card.use(player); // Verwende die gezogene Karte auf dem Spieler
class Character {
  constructor(name, health, abilities) {
    this.name = name;
    this.health = health;
    this.abilities = abilities;
  }
}
// Beispiel für die Nutzung
const goku = new Character("Goku", 100, [
  "kamehameha",
  "superKamehameha",
  "genkidama",
  "superGenkidama",
  "punch",
  "kick",
  "kombination_1",
  "kombination_2",
  "kombination_3",
  "evade",
  "instantTransmission",
  "block",
  "moveCharacter",
  "superSaiyajin",
  "superSaiyajin2",
  "superSaiyajin3",
  "superSaiyajinBlue",
]);
const vegeta = new Character("Vegeta", 100, [
  "galaickGun",
  "finalFlash",
  "bigBangAttack",
  "multibleKiBlaster",
  "punch",
  "kick",
  "kombination_1",
  "kombination_2",
  "kombination_3",
  "evade",
  "block",
  "moveCharacter",
  "superSaiyajin",
  "superSaiyajin2",
  "superSaiyajinBlue",
]);
const gohan = new Character("Gohan", 100, [
  "masenko",
  "VaterSohnKamehameha",
  "punch",
  "kick",
  "kombination_1",
  "kombination_2",
  "kombination_3",
  "evade",
  "block",
  "moveCharacter",
  "superSaiyajin",
  "superSaiyajin2",
]);
const trunks = new Character("Trunks", 100, [
  "burningAttack",
  "finishBuster",
  "punch",
  "kick",
  "kombination_1",
  "kombination_2",
  "kombination_3",
  "evade",
  "block",
  "moveCharacter",
  "superSaiyajin",
  "superSaiyajin2",
]);
const piccolo = new Character("Piccolo", 100, [
  "höllenspirale",
  "hellGrenade",
  "punch",
  "kick",
  "kombination_1",
  "kombination_2",
  "kombination_3",
  "evade",
  "block",
  "moveCharacter",
]);
const krillin = new Character("Krillin", 100, [
  "destructoDisk",
  "punch",
  "kick",
  "kombination_1",
  "kombination_2",
  "kombination_3",
  "evade",
  "block",
  "moveCharacter",
]);
const boo = new Character("Boo", 100, [
  "chocoBeam",
  "multibleKiBlaster",
  "punch",
  "kick",
  "kombination_1",
  "kombination_2",
  "kombination_3",
  "evade",
  "block",
  "moveCharacter",
  "regeneration",
]);
const cell = new Character("Cell", 100, [
  "perfectShot",
  "perfectKamehameha",
  "solarKamehameha",
  "punch",
  "kick",
  "kombination_1",
  "kombination_2",
  "kombination_3",
  "evade",
  "block",
  "moveCharacter",
  "rekanerieren",
]);
const freezer = new Character("Freezer", 100, [
  "deathBeam",
  "deathBall",
  "supernova",
  "punch",
  "kick",
  "kombination_1",
  "kombination_2",
  "kombination_3",
  "evade",
  "block",
  "moveCharacter",
]);
const cooler = new Character("Cooler", 100, [
  "deathSlicer",
  "punch",
  "kick",
  "kombination_1",
  "kombination_2",
  "kombination_3",
  "evade",
  "block",
  "moveCharacter",
]);
const nappa = new Character("Nappa", 100, [
  "nappaSmash",
  "nappaBomb",
  "punch",
  "kick",
  "kombination_1",
  "kombination_2",
  "kombination_3",
  "evade",
  "block",
  "moveCharacter",
]);
const raditz = new Character("Raditz", 100, [
  "WednesdayCrush",
  "punch",
  "kick",
  "kombination_1",
  "kombination_2",
  "kombination_3",
  "evade",
  "block",
  "moveCharacter",
]);
const gokuBlack = new Character("GokuBlack", 100, [
  "kamehameha",
  "superKamehameha",
  "genkidama",
  "superGenkidama",
  "punch",
  "kick",
  "kombination_1",
  "kombination_2",
  "kombination_3",
  "evade",
  "instantTransmission",
  "block",
  "moveCharacter",
  "superSaiyajin",
  "superSaiyajin2",
  "superSaiyajin3",
  "superSaiyajinBlue",
]);
const broly = new Character("Broly", 100, [
  "legendarySuperSaiyajin",
  "legendarySuperSaiyajinFullPower",
  "punch",
  "kick",
  "kombination_1",
  "kombination_2",
  "kombination_3",
  "evade",
  "block",
  "moveCharacter",
]);
const jiren = new Character("Jiren", 100, [
  "jirenPunch",
  "jirenBomb",
  "punch",
  "kick",
  "kombination_1",
  "kombination_2",
  "kombination_3",
  "evade",
  "block",
  "moveCharacter",
]);
const hit = new Character("Hit", 100, [
  "timeSkip",
  "timeCage",
  "timeSkipMolotov",
  "punch",
  "kick",
  "kombination_1",
  "kombination_2",
  "kombination_3",
  "evade",
  "block",
  "moveCharacter",
]);
const beerus = new Character("Beerus", 100, [
  "punch",
  "kick",
  "kombination_1",
  "kombination_2",
  "kombination_3",
  "evade",
  "block",
  "moveCharacter",
]);
const whis = new Character("Whis", 100, [
  "punch",
  "kick",
  "kombination_1",
  "kombination_2",
  "kombination_3",
  "evade",
  "block",
  "moveCharacter",
]);

ability.activate(vegeta, goku); // Aktiviere die Fähigkeit, wenn möglich

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
          return this.cards.find(card => card.type === 'defense') || this.cards[0];
        } else {
          return this.cards.find(card => card.type === 'attack') || this.cards[0];
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
       this.name = "Schwacher Feind";
        this.health = 100;
        this.damage = +0;
        break;
      case 2: //stage 2 = mittel
        this.name = "Mittlerer Feind";
        this.health = 150;
        this.damage = +2;
        break;
      case 3: //stage 3 = stark
        this.name = "Starker Feind";
        this.health = 200;
        this.damage = +3;
        break;
      case 4: //stage 4 = sehr stark
        this.name = "Sehr starker Feind";
        this.health = 250;
        this.damage = +4;
        break;
      case 5: //stage 5 = ultra stark
        this.name = "Ultra starker Feind";
        this.health = 300;
        this.damage = +5;
        break;
      case 6: //stage 6 = Gott
        this.name = "Gott";
        this.health = 350;
        this.damage = +6;
        break;
      case 7: //stage 7 = Engel
        this.name = "Engel";
        this.health = 400;
        this.damage = +7;
        break;
      case 8: //stage 8 = Zerstörer
        this.name = "Zerstörer";
        this.health = 450;
        this.damage = +8;
        break;
      case 9: //stage 9 = Großpriester
        this.name = "Großpriester";
        this.health = 500;
        this.damage = +9;
        break;
      case 10: //stage 10 = Zen-Oh
        this.name = "Zen-Oh";
        this.health = 1000;
        this.damage = +10;
        break;
      default:
        this.name = "Unbekannter Feind";
        this.health = 100;
        this.damage = +0;
        break;
    }
  }
}
