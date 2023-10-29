import Car from './Car';
import Input from './Input';
import Output from './Output';
import Referee from './Referee';

class Game {
  totalRound = 0;

  currentRound = 0;

  carArray = [];

  input = new Input();

  output = new Output();

  referee = new Referee();

  setCarArray(nameArray) {
    this.carArray = nameArray.map((n) => new Car(n));
    this.output.printMessage(nameArray.join(','));
  }

  async setTotalRound() {
    this.output.printInputRoundMessage();
    await this.input.readText(true);
    this.totalRound = this.input.round;
    this.output.printTotalRound(this.input.round);
  }

  async start() {
    this.output.printInputNameMessage();
    await this.input.readText(false);
    this.setCarArray(this.input.nameArray);
    await this.setTotalRound();
  }

  play() {
    const updateCarArray = this.carArray.map((c) => {
      c.handleMovement();
      return c;
    });
    updateCarArray.forEach((c) => this.output.printPlayResult(c));
    this.currentRound += 1;
    this.carArray = updateCarArray;
  }

  decideWinner() {
    this.referee.comparePoint(this.carArray);
    this.referee.showWinner();
  }
}

export default Game;
