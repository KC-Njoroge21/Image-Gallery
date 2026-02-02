import React, { createContext, useContext, useEffect, useState } from 'react'
import Card from './components/Card'
import ImageSearch from './components/ImageSearch'
import { GlobalContext } from './Context/Context'



const App = () => {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const {term, setTerm} = useContext(GlobalContext)
  

  const url = `https://pixabay.com/api/?key=54404498-00c670ba71927140ff4d25e5e&q=${term}&image_type=photo&pretty=true`


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
  }, [term])

  console.log(images)

  return (
    <div className=''>
      <ImageSearch searchText={() => {setTerm(text)}} />

{
  !isLoading && images.length === 0 && <div className='text-center font-semibold text-lg'>No Images found</div>
}


      {
        isLoading ? <div className='text-center font-semibold text-lg'>Loading Please Wait...</div> :
        <div className='grid lg:grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1 p-8'>
        {
          images.map((img, ) => {
            return (
              <Card key={img.id} image={img}/>
            )
          })
        
        }
      </div>
      }
      
    </div>
  )
}

export default App