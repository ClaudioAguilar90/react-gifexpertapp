import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = ()=>{ //Agregar al arreglo un anime mas
    //     //setcategories([...categories, 'HunterXHunter']); esta funciona tmb
    //     setcategories(cats => [...cats, 'HunterXHunter']);
    // }





  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr></hr>

        {/* <button onClick={ handleAdd }>Agregar</button> */}

        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                    key={category}
                    category={ category } >

                    </GifGrid>
                ))
            }
        </ol>

    </>
  )
}
