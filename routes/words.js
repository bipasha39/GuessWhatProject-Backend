const express = require("express");
const sequelize = require('sequelize');
const models = require('../models');
const Word = models.Word;

const router = express.Router();

 // getting random word from english table

router.get("/random", (req, res, next) => {
  Word.findOne({order: sequelize.literal('random()'),
})
    .then(word => {
      res.status(200).json(word);
    })
    .catch(next);
});

// shows specific word
router.get("/:id", (req, res, next) => {
    Word.findByPk(req.params.id)
    
      .then(word => {
        res.status(200).json(word);
      })
      .catch(next);
  });
 
 // insert new word in the table
 
  router.post("/add",async(req,res,next)=>{
      console.log(req.body,"hello")
      const funWord = await Word.create({word:req.body.funWord})
      res.status(200).json(funWord)
  })
  module.exports = router;
