// Class for the cards that the player can use in the game, which are created from abilities.
class Card {
  constructor(ability) {
    this.ability = ability;
  }
  // Method to use the card, which activates the ability of the card, if the user has enough energy, and reduces the user's energy by the energy cost of the ability.
  use(user, target) {
    if (user.energy >= this.ability.energyCost) {
      user.energy -= this.ability.energyCost;
      this.ability.activate(target, user);
    } else {
      console.log(
        `${user.name} hat nicht genug Energie, um ${this.ability.name} zu verwenden.`
      );
    }
  }
}
// Path: public/js/classes/Deck.js