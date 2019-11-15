// bowling.spec.js
import Game from './bowling';

let g;
beforeEach(() => (g = new Game()));

test("gutter game", () => {
    rollMany(20, 0);
    expect(g.score()).toBe(0);
});

test("all ones", () => {
    rollMany(20, 1);
    expect(g.score()).toBe(20);
})

function rollMany(rolls, pins) {
    for (let i = 0; i < rolls; i += 1)
        g.roll(pins);
}
