'use strict';
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

module.exports = {
    up: async (queryInterface, Sequelize) => {
      const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
            await queryInterface.bulkInsert(
                'Scores',
                [
                    {
                        gameId: 1,
                        player: randomName,
                        points: Math.random() * 100,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        gameId: 2,
                        player: randomName,
                        points: Math.random() * 100,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        gameId: 3,
                        player: randomName,
                        points: Math.random() * 100,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                ],
                {}
            );
        },

    down: async (queryInterface, Sequelize) =>{
        await queryInterface.bulkDelete('Scores', null, {});
    },
};