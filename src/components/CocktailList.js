import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  if(loading) {
    return <Loading/>
  }
  if(cocktails.length < 1){
    <h1 className='section-title'>Searchterm invalid</h1>
  }
 
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <h2 className='section-title'>cocktail list</h2>
      <div className='cocktails-center'>
        {cocktails.map((item)=>{
          return <Cocktail key={item.id}{...item}/>
        })}
      </div>
    </section>
  )
}

export default CocktailList
