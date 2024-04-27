// import backend from '../axios.js'
import axios from 'axios'
import backend from '../index.js'

export default function getCourses() {
  const options = {
    method: 'GET',
    url: 'https://urban-dictionary7.p.rapidapi.com/v0/define',
    params: {term: 'hella'},
    headers: {
      'X-RapidAPI-Key': 'aa5487fbdemshb09f4e808f356b9p1a758bjsn20e733591aa8',
      'X-RapidAPI-Host': 'urban-dictionary7.p.rapidapi.com'
    }
  };

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.request(options)
      resolve(response)
    } catch(error) {
      reject(error.stack)
    }
  })
}