// get-all function that should *not* be used in any real app.
import backend from '../index.js'

export default (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Add validation that checks the id content.
      let response = await backend.get(`/user/${id}`)
      resolve(response)
    } catch(error) {
      reject(error)
    }
  })
}