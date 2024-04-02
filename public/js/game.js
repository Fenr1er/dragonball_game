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

import { Ability } from "./classes/Ability.js";
import { Card } from "./classes/Card.js";
import { Character } from "./classes/Character.js";
import { Deck } from "./classes/Deck.js";
import { Enemy } from "./classes/Enemy.js";
import { Battle } from "./classes/Battle.js";



const GAME_STATES = {
  PLAYER_TURN: "playerTurn",
  ENEMY_TURN: "enemyTurn",
  GAME_OVER: "gameOver",
};
function playerAction(target) {
  // Use selected ability on target
  selectedAbility.activate(target);
  // Switch to enemy turn
  gameState = GAME_STATES.ENEMY_TURN;
}

function enemyAction(target) {
  // Use selected ability on target
  selectedAbility.activate(target);
  // Switch to player turn
  gameState = GAME_STATES.PLAYER_TURN;
}
function gameLoop() {
  while (gameState !== GAME_STATES.GAME_OVER) {
    if (gameState === GAME_STATES.PLAYER_TURN) {
      // Wait for player to select an action, then call playerAction()
    } else if (gameState === GAME_STATES.ENEMY_TURN) {
      // AI selects an action, then call enemyAction()
    }

    // Check if game is over
    if (player.health <= 0 || enemy.health <= 0) {
      gameState = GAME_STATES.GAME_OVER;
    }
  }
}

// Beispielnutzung
const kamehameha = new Ability("Kamehameha", 30, kamehameha);
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


// Beispiel für die Nutzung
const goku = new Character("Goku", 100, [
  kamehameha,
  superKamehameha,
  genkidama,
  superGenkidama,
  punch,
  kick,
  kombination_1,
  kombination_2,
  kombination_3,
  evade,
  instantTransmission,
  block,
  moveCharacter,
  superSaiyajin,
  superSaiyajin2,
  superSaiyajin3,
  superSaiyajinBlue,
]);
const vegeta = new Character("Vegeta", 100, [
  "galickGun",
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
