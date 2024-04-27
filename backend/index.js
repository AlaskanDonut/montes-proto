import express from 'express'
import cors from 'cors'

const app = express()
const port = 8080

// Routers
import users from './routes/users.js'
import courses from './routes/courses.js'

app.use(cors())
app.use('/user', users)
app.use('/course', courses)

app.get('/', (req, res) => {
  res.send('Default route.')
})

app.listen(port, () => {
  console.log('Listening on port ' + port)
})