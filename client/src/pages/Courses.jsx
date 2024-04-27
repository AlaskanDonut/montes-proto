import { useState, useEffect } from 'react'
import { getCourses } from '../api/courses/getCourses.js'

export default function Courses() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    console.log('useEffect() called')
    const fetchData = () => {
      let data = getCourses()
      setCourses(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      Courses:
      { courses.length > 0 ? courses.map(course => (<div key={course.name}>{course.name}</div>)) : null}
    </div>
  )
}