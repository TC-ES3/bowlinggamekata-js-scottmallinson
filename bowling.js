export default class Game {
    _rolls = [];

    roll(pins) {
        this._rolls.push(pins);
    }

    score() {
        const rolls = this._rolls;
        let score = 0;
        let frameIndex = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (isSpare(rolls, frameIndex)) {
                score += 10 + rolls[frameIndex + 2];
                frameIndex += 2;
            } else {
                score +=  rolls[frameIndex] + rolls[frameIndex + 1]
                frameIndex += 2;
            }
        }
        return score;
    }
}

function isSpare(rolls, frameIndex) {
    return rolls[frameIndex] + rolls[frameIndex + 1] == 10;
}