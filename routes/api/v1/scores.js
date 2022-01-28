const { query } = require('express');
const express = require('express');
const router = express.Router();
const { Score, Game } = require('../../../models/');

router.get('/', async (req, res) => {
    res.json('scores');
});

router.get('/:id', async (req, res) => {
    const scores = await Score.findAll(
        {
            where: {
                gameId: req.params.id
            },
            include: [
                {
                    model: Game,
                    attributes: ['name']
                },
            ]
        });

        res.json({scores});
});

router.post('/', async (req, res) => {
    console.log(req.query);
    const gameId = req.query.gameId;
    const player = req.query.player;
    const points = req.query.points;
    const createdAt = new Date();
    const updatedAt = new Date();
  
    await Score.create({
      gameId: gameId,
      player: player,
      points: points,
      createdAt: createdAt,
      updatedAt: updatedAt,
    });
  
    res.status(201).json('Added score!');
  });


module.exports = router;