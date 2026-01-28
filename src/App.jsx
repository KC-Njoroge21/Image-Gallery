import React, { useEffect, useState } from 'react'
import Card from './components/Card'



const App = () => {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [term, setTerm] = useState('')

  const url = `https://pixabay.com/api/?key=54404498-00c670ba71927140ff4d25e5e&q=yellow+flowers&image_type=photo&pretty=true`


  const fetchData = async () =>  {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setImages(data.hits)
      setIsLoading(false)
    } catch (e) {
      console.log(e)
      setIsLoading(false)
    }
  }


  useEffect(() => {
    fetchData()
  }, [])

  console.log(images)

  return (
    <div className=''>
      <div className='grid grid-cols-3 gap-4'>
        {
          images.map((img, ) => {
            return (
              <Card key={img.id} image={img}/>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default App