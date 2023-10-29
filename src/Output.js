import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from './Message';

class Output {
  printMessage;

  constructor() {
    this.printMessage = (message) => {
      MissionUtils.Console.print(message);
    };
  }

  printInputNameMessage() {
    this.printMessage(MESSAGE.inputName);
  }

  printInputRoundMessage() {
    this.printMessage(MESSAGE.inputRound);
  }

  printTotalRound(round) {
    this.printMessage(round.toString());
  }

  printPlayMessage() {
    this.printMessage(MESSAGE.gameResult);
  }

  printPlayResult({ name, movement }) {
    this.printMessage(`${name} : ${movement.join('')}`);
  }

  printWinner(winnerArray) {
    const winnerSentence = winnerArray.join(', ');
    this.printMessage(`${MESSAGE.winner}${winnerSentence}`);
  }
}

export default Output;
