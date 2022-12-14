import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image, name, id, glass, info}) => {
  return (
    <article className='cocktail'>
      <div className="image-container">
        <img src={image} alt={name} className="image-drink"/>
        
      </div>
      <div className='cocktail-footer'>
      <h3>{name}</h3>
        <h4>{info}</h4>
        <p>{glass}</p>
      </div>
      <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">Details</Link>
    </article>
  )
}

export default Cocktail
