export default class Game {
    _rolls = [];

    roll(pins) {
        this._rolls.push(pins);
    }

    score() {
        const rolls = this._rolls;
        let score = 0;
        for (let i = 0; i < this._rolls.length; i++) {
            if (rolls[i] + rolls[i+1])
                score +=  rolls[i] + rolls[i + 1] // spare
            score += this._rolls[i];
        }
        return score;
    }
}