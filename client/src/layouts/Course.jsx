// React Router
import { Outlet, Link } from 'react-router-dom'

export default function Course() {
  return (
    <div>
      <h2>Course</h2>
      <Outlet />
    </div>
  )
}