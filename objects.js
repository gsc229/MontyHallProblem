class GameObject {
  constructor(attritbutes) {
    this.createdAt = attritbutes.createdAt;
    this.name = attritbutes.name;
    this.dimensions = attritbutes.dimensions;
    this.gamePhotos = attritbutes.gamePhotos;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(stats) {
    super(stats);
    this.healthPoints = stats.healthPoints;
    this.miss = stats.miss;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Door {
  constructor(attritbutes) {
    this.class = attritbutes.class;
    this.id = attritbutes.id;
    this.number = attritbutes.number;
    this.open = attritbutes.open;
    this.selected = attritbutes.selected;
    this.inside = attritbutes.inside;
    this.background = attritbutes.background;
  }
  close() {
    this.open = false;
  }
  goat() {
    document.getElementById(this.id).appendChild;
  }
}
