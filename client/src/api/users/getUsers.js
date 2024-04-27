// get-all function that should *not* be used in any real app.
import backend from '../index.js'

export default () => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await backend.get('/user')
      resolve(response)
    } catch(error) {
      reject(error)
    }
  })
}