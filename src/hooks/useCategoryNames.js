import { useEffect, useState } from 'react'

function useCategoryNames() {
  const [catNames, setCatNames] = useState(null)
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    setStatus('loading')
    try {
      //fetch data here
      setStatus('success')
    } catch (error) {
      console.log(error)
      setStatus('error')
    }
  }
}

export default useCategoryNames
