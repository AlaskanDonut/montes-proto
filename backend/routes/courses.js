import express from 'express'

const router = express.Router()

// dummy data
const coursesData = [
  { id: 1, name: 'PSY 270: Abnormal Psychology', instructor: 'Dr. Krystal St. Peter' },
  { id: 2, name: 'PSY 200: Introduction to Cool Psychology', instructor: 'Dr. Krystal St. Peter' },
  { id: 3, name: 'PSY 410: Cognitive Pychology', instructor: 'Dr. Krystal St. Peter' },
]

router.get('/:courseId', (req, res) => {
  let courseId = Number(req.params.courseId)
  let course = coursesData.filter((c) => c.id === courseId)
  res.send(course)
})

router.get('/', (req, res) => {
  res.send(coursesData)
}) // A "get all" end-point shouldn't exist

export default router;