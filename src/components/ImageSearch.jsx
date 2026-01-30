import React from 'react'

const ImageSearch = () => {
  return (
    <div className='border-2 border-gray-200' >
      <form action="">
        <div className='flex justify-center p-3 gap-4'>
          <input className='p-2 border-2 border-gray-300 rounded-lg outline-0' type="text" placeholder='Enter an item'  />
          <button className='p-2 bg-sky-500 text-white font-semibold tracking-wide rounded-lg cursor-pointer hover:opacity-75 '>SUBMIT</button>
        </div>
      </form>
    </div>
  )
}

export default ImageSearch