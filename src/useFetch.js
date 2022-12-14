import { useState, useEffect } from 'react'
import paginate from './util'
import axios from 'axios'
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    // setData(data)
    setData(paginate(data))
    setLoading(false)
  }
// const getProfile=()=>{
//     axios.get(url)
//     .then(
//         (response)=>setData(paginate(response.data)) )
//         setLoading(false)
// }
  useEffect(() => {
    getProducts()
  }, [])
  return { loading, data }
}






