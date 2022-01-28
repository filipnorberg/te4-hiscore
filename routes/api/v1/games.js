const express = require('express');
const router = express.Router();
const { Game, Score } = require('../../../models/');

router.get('/', async (req, res) => {
    const games = await Game.findAll();
    res.json({games});
});


router.get('/:id', async (req, res) => {
    const highscores = await Score.findAll({ where: { gameId: req.params.id } });
    if (highscores.length === 0) {
      res.status(204).json('No highscores for this game yet');
      return;
    }
    res.status(200).json({ highscores });
  });


router.post('/', async (req, res) => {
    console.log(req.query);
    const name = req.query.name;
    const url = req.query.url;
    const createdAt = new Date();
    const updatedAt = new Date();
  
    await Game.create({
      name: name,
      url: url,
      createdAt: createdAt,
      updatedAt: updatedAt,
    });
  
    res.status(201).json('Created game');
  });
  

module.exports = router;