import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    

    const {loading, data:images} = useFetchGifs( category );  // data:images is a destructuring assignment

    console.log(loading);




  return (
    <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>
        
        <div className='card-grid'>

            { loading && <p className='animate__animated animate__flash'>Loading...</p> }
            
            
            {
            images.map( img => (
                <GifGridItem 
                    key={img.id} 
                    {...img}
                />
            ))
            }
            
        </div>
    </>
  )
}
