const router = require('express').Router()
const { Bean, Drink } = require('../models')
// GET all pets
router.get('/beans', (req, res) => {
  Bean.findAll()
    .then(beans => res.json(beans))
    .catch(err => console.log(err))
})
router.get('/beans/:id', (req, res) => {
  Bean.findOne({ where: { id: req.params.id }, include: [Drink] })
    .then(bean => res.json(bean))
    .catch(err => console.log(err))
})
router.post('/beans', (req, res) => {
  Bean.create(req.body)
    .then(bean => res.json(bean))
    .catch(err => console.log(err))
})
router.put('/beans/:id', (req, res) => {
  Bean.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})
router.delete('/bean/:id', (req, res) => {
  Bean.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})
module.exports = router