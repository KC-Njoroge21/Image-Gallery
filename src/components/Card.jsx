import React from 'react'
import { FaEye } from "react-icons/fa";
import { IoDownload } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";


const Card = (props) => {

  const tags = props.image.tags.split(',')
  

  return (
    <div className='p-3 shadow-xl rounded-lg'>
      <img className='' src={props.image.webformatURL} alt="img" />

      <div>
        <div className='flex gap-3 items-center'>
          <CgProfile size={20} />
         <h1 className='text-blue-500 font-semibold text-lg'>
           Photo by {props.image.user}
         </h1>
        </div>
        <ul className='flex flex-col gap-2'>
          <li className='flex items-center'>
            <strong className='flex gap-1  items-center '>views <FaEye size={15} />:</strong>
            {props.image.views}
          </li>
          <li className='flex items-center'>
            <strong  className='flex gap-1  items-center '>Downloads <IoDownload />:</strong>
            {props.image.downloads}
          </li>
          <li className='flex items-center '>
            <strong className='flex gap-1  items-center  '>Likes <FcLike />:</strong>
            {props.image.likes}
          </li>
        </ul>
      </div>
      <div className='flex gap-3 flex-wrap' >
        {
          tags.map((tag, index) => {
            return (
              <span key={index} className='p-2 bg-gray-200 rounded-lg'>
                #{tag}
              </span>
            )
          })
        }
      </div>

    </div>
  )
}

export default Card