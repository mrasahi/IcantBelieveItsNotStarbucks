const router = require('express').Router()
const { Syrup, Drink } = require('../models')
// GET all pets
router.get('/syrups', (req, res) => {
    Syrup.findAll()
        .then(syrups => res.json(syrups))
        .catch(err => console.log(err))
})
router.get('/syrups/:id', (req, res) => {
    Syrup.findOne({ where: { id: req.params.id }, include: [Drink] })
        .then(syrup => res.json(syrup))
        .catch(err => console.log(err))
})
router.post('/syrups', (req, res) => {
    Syrup.create(req.body)
        .then(syrup => res.json(syrup))
        .catch(err => console.log(err))
})
router.put('/syrups/:id', (req, res) => {
    Syrup.update(req.body, { where: { id: req.params.id } })
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
})
// router.delete('/syrups/:id', (req, res) => {
//     Syrup.destroy({ where: { id: req.params.id } })
//         .then(() => res.sendStatus(200))
//         .catch(err => console.log(err))
// })
module.exports = router