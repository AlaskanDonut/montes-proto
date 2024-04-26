import express from 'express'
import cors from 'cors'

const app = express()
const port = 8080

// Routers
import courses from './routes/courses/courses.js'

app.use(cors())
app.use(courses)

app.get('/', (req, res) => {
  res.send('hey')
})

app.listen(port, () => {
  console.log('Listening on port ' + port)
})