import React from 'react';
import './searchbar.css'


const Searchmovie = (props) => { 

    return( 
        <div className='movielist'>
            <h1>Movie Search</h1>
            <input
                className='movieinput'
                value={props.value}  
                onChange={(event) => props.setSearch(event.target.value)}
                placeholder="Search"    
           />

        </div>
    )
}

export default Searchmovie;