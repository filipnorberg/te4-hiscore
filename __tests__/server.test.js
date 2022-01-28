const supertest = require("supertest");
const app = require('../app');
const { Game, Score } = require('../models/');

beforeAll(async () => {
    await Game.sync({ force: true });
    await Score.sync({ force: true });
});

test('GET /api/v1/games', async () => {
    await Game.create({name: 'name', url: 'url' });
    await supertest(app).get("/api/v1/games").expect(200);
});

test('GET /api/v1/scores', async () => {
    await Score.create({gameId: 1, player: 'player', points: 1337 });
    await supertest(app).get("/api/v1/scores").expect(200);
});