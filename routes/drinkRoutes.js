const router = require('express').Router()
const { Drink, Bean, Syrup, Topping } = require('../models')

// GET all drinks
router.get('/drinks', (req, res) => {
  Drink.findAll()
    .then(drinks => res.json(drinks))
    .catch(err => console.log(err))
})
module.exports = router