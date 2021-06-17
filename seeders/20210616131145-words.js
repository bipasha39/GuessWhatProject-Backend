'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Words', [{
         value: 'Syntax',
         createdAt: new Date(),
          updatedAt: new Date()
       },{
         value: 'Return',
         createdAt: new Date(),
          updatedAt: new Date()
       },{
         value: 'Git Push',
         createdAt: new Date(),
          updatedAt: new Date()
        },{
          value: '!False',
          createdAt: new Date(),
           updatedAt: new Date()
         },{
          value: 'For Loop',
          createdAt: new Date(),
           updatedAt: new Date()
         },{
          value: 'While Loop',
          createdAt: new Date(),
           updatedAt: new Date()
         },{
          value: 'Parenthesis',
          createdAt: new Date(),
           updatedAt: new Date()
         },{
          value: 'Integer',
          createdAt: new Date(),
           updatedAt: new Date()
         },{
          value: 'Terminal',
          createdAt: new Date(),
           updatedAt: new Date()
         },{
          value: 'Props',
          createdAt: new Date(),
           updatedAt: new Date()
         },{
          value: 'Parameter',
          createdAt: new Date(),
           updatedAt: new Date()
         },
         {
          value: 'Variable',
          createdAt: new Date(),
           updatedAt: new Date()
         },

         {
         value: 'Array',
         createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          value: 'Object',
          createdAt: new Date(),
           updatedAt: new Date()
         },
         {
          value: 'React FrameWork',
          createdAt: new Date(),
           updatedAt: new Date()
         },
         {
          value: 'CamelCase',
          createdAt: new Date(),
           updatedAt: new Date()
         },
         {
          value: 'Return Value',
          createdAt: new Date(),
           updatedAt: new Date()
         },
         {
          value: 'If statement',
          createdAt: new Date(),
           updatedAt: new Date()
         },{
          value: 'Main function',
          createdAt: new Date(),
           updatedAt: new Date()
         },{
          value: 'Argument',
          createdAt: new Date(),
           updatedAt: new Date()
         }
        
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Words', null, {});
  }
};
