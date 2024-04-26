import express from 'express'

const router = express.Router()

// Note: Add controllers

// Routes

router.get('/', (req, res) => {
  res.send('Default /user route.')
})

router.get('/:id', (req, res) => {
  res.send(`Got user with id: ${req.params.id}`)
})

export default router