'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'Games',
            [
                {
                  name: 'Conterstirk 7',
                  url: 'https://store.steampowered.com/404',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
                {
                  name: 'League of lagnends 2',
                  url: 'https://store.steampowered.com/405',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
                {
                  name: 'Nota 2',
                  url: 'https://store.steampowered.com/406',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Games', null, {});
    },
};
