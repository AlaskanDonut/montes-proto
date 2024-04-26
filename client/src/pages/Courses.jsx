import { useState, useEffect } from 'react'
import { getCourses } from '../api/courses/getCourses.js'
import axios from 'axios'

export default function Courses() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    console.log('useEffect() called')
    const fetchData = () => {
      let data = getCourses()
      setCourses(data)
    }

    // const fetchData = () => {
    //   console.log('fetchData() called')
    //   let data = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
    //   data
    //     .then(res => {
    //       let data = res.json()
    //       data.then((res) => setCourses(res))
    //     })
    // }
    fetchData()
    return () => console.log('will unmount')
  }, [])

  return (
    <div>
      Courses:
      { courses.length > 0 ? courses.map(course => (<div key={course.name}>{course.name}</div>)) : null}
    </div>
  )
}