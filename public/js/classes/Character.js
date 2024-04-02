class Character {
  constructor(name, health, abilities) {
    this.name = name;
    this.health = health;
    this.energy = 100;
    this.abilities = abilities;
    this.deck = this.initDeck();
  }

  initDeck() {
    let cards = this.abilities.map((ability) => {
      let ability = new Ability(
        ability.name,
        ability.type,
        ability.energyCost,
        ability.effect
      );
      return new Card(ability);
    });
    return new Deck(cards);
  }

  drawCard() {
    return this.deck.drawCard();
  }
}


