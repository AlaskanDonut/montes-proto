import { useState, useEffect } from 'react'
import getCourses from '../api/courses/getCourses.js'

export default function Courses() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await getCourses()
        setCourses(response.data.list)
      } catch(error) {
        console.log('Could not get courses.')
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      Courses:
      { courses.length > 0 ?
        courses.map(course => (
          <div key={course.word}>
            <h1>{course.word}</h1>
            <p>Definition: {course.definition}</p>
          </div>
        )) : null}
    </div>
  )
}