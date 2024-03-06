import React from 'react'
import RestaurentCard from './RestaurentCard'
const Body =()=>{
    return(
     
        <>
        <div className="search">Search</div>
        <div className="res-container">
        <RestaurentCard
        resData={resObj}
      
        />
     
        </div>
        </>
        
        
    )
  }
export default Body
