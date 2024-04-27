export default (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(`https://dummyjson.com/users/${id}`)
      let json = await response.json()
      resolve(json)
      // fetch('https://dummyjson.com/users/20') // You can use this instead if async/await is an antipattern/bad practice.
      //   .then(res => res.json())
      //   .then(json => resolve(json))
      //   .catch(error => reject(error))
    } catch(error) {
      console.log(error.stack)
    }
  })
}