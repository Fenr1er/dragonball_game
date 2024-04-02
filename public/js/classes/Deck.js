class Deck {
    constructor(cards) {
        this.cards = cards;
    }
  
    shuffle() {
        // Mische die Karten
        this.cards.sort(() => Math.random() - 0.5);
    }
  
    draw() {
        // Ziehe die oberste Karte
        return this.cards.shift();
    }
  }