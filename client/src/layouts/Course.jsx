// React Router
import { Outlet, useParams, Link } from 'react-router-dom'
// Components
import CardContainer from '../components/CardContainer.jsx'

export default function Course() {
  const { id } = useParams()

  return (
    <div className="max-h-screen my-5 mr-5">
      <CardContainer>
        <h2>Course {id}</h2>
        <Outlet />
      </CardContainer>
    </div>
  )
}