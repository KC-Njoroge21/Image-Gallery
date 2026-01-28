import React from 'react'

const Card = (props) => {
  return (
    <div className=''>
      <img className='' src={props.image.webformatURL} alt="img" />

      <div>
        <div>
          Photo by {props.image.user}
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            {props.image.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {props.image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {props.image.likes}
          </li>
        </ul>
      </div>
      <div>
        <span></span>
      </div>

    </div>
  )
}

export default Card