import express from 'express'

// dummy data
import users from '../data/users.json' with { type: "json" }

const router = express.Router()

// Note: Add controllers

// Routes

router.get('/', (req, res) => {
  let result = users.slice(0, 25)
  res.send(result)
})

router.get('/:id', (req, res) => {
  let result = users.filter((user) => user.id === Number(req.params.id))
  if (result.length > 0) {
    res.send(result)
  } else {
    throw new Error(`Error: user with id ${req.params.id} not found.`)
  }
})

export default router