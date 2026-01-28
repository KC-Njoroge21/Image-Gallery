import React from 'react'

const Card = () => {
  return (
    <div className=''>
      <img className='' src="https://fastly.picsum.photos/id/308/300/200.jpg?hmac=eKnwYo1eUzMt3_g3nuv7UuhC8xbc7meak7wPj9sdQdk" alt="img" />

      <div>
        <div>
          Photo by John Doe
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            4000
          </li>
          <li>
            <strong>Downloads:</strong>
            4000
          </li>
          <li>
            <strong>Likes:</strong>
            4000
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