import React from 'react'
import { IMAGE_URL } from '../Utils/constants'


const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 h-74 cursor-pointer'>
        <img src={IMAGE_URL + posterPath} alt="" className='w-full h-full object-cover rounded ' />
    </div>  
  )
}

export default MovieCard