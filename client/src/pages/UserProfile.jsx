import { useState, useEffect } from 'react'
// React Router
import { useParams } from 'react-router-dom'
import getUser from '../api/users/getUser.js'

export default function UserProfile() {
  const { id } = useParams()
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const fetch = async () => {
      try {
        let user = await getUser(id)
        setUserData(user)
      } catch(error) {
        console.log(error.stack)
      }
    }
    fetch()
  }, [])

  return (
    <div>
      User Profile
      { Object.keys(userData).length !== 0 ? ( <div>Username: { userData.username } </div> ) : null }
      { id }
    </div>
  )
}