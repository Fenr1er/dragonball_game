class Battle {
    constructor(player, enemy) {
        this.player = player;
        this.enemy = enemy;
    }
  
    start() {
        // Starte den Kampf und steuere den Kampffluss
        while (this.player.health > 0 && this.enemy.health > 0) {
            this.playerTurn();
            if (this.enemy.health > 0) {
                this.enemyTurn();
            }
        }
        this.end();
    }
  
    playerTurn() {
        // Logik für den Spielerzug
        console.log(`\n${this.player.name}'s Zug:`);
        const card = this.player.drawCard(); // Spieler zieht eine Karte
        card.use(this.player, this.enemy); // Verwende die gezogene Karte
    }
  
    enemyTurn() {
        // Logik für den Zug des Gegners
        console.log(`\n${this.enemy.name}'s Zug:`);
        const card = this.enemy.drawCard(); // Gegner zieht eine Karte
        card.use(this.enemy, this.player); // Verwende die gezogene Karte
    }
  
    end() {
        // Kampfende
        if (this.player.health <= 0) {
            console.log(`${this.player.name} wurde besiegt!`);
        } else if (this.enemy.health <= 0) {
            console.log(`${this.enemy.name} wurde besiegt!`);
        }
    }
  }