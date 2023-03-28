import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () =>{

    const [categories, setCategorie] = useState([ 'hola', 'run', 'kiss']);

    const onAddCategorie = ( newCategory) =>{

        if( categories.includes(newCategory) ) return;

        // console.log(newCategory);
        setCategorie([ newCategory,...categories])
        // setCategorie( cat => [ ...cat, 'Valorant ' ]);
    }
    return (
        <>



        <h1>GifExpertApp</h1>
        {/* <img src=C:\Users\JNAREZ\Desktop\JavaScriptFUDEMY\08-gif-expert-app\public\Logo Na.png/>     */}
        <AddCategory 
        // setCategorie= { setCategorie }
        onNewCategory = { onAddCategorie }
        // currentCategories ={ categories }
        />
       
            {
                categories.map( cat => ( 
                    <GifGrid key={ cat } cat={ cat }/>
                ))
            }
     


        </>
    )
}