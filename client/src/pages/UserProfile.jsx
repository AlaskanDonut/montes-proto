import { useState, useEffect } from 'react'
import getUser from '../api/users/getUser.js'

export default function UserProfile() {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const fetch = async () => {
      try {
        let user = await getUser()
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
    </div>
  )
}