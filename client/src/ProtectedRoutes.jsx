import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function ProtectedRoutes() {
  const navigate = useNavigate()
  let auth = { token: true }

  useEffect(() => {
    if (!auth.token) {
      navigate('/login')
    } else { null }
  }, [])

  if (auth.token) {
    return (
      <Outlet />
    )
  } else {
    return <></>
  }
}