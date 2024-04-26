import backend from '../axios.js'

export function getCourses() {
  fetch('https://www.boredapi.com/api/activity')
    .then((res) => res.json())
    .then((res) => console.log(res))
  // return new Promise((resolve, reject) => {
  //   try {
  //     backend.get('/courses')
  //   } catch(err) {
  //     console.log('axios request failed: ' + err)
  //   }
  // })
}