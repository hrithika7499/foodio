import React from 'react'

const RestaurentCard=(props)=>{
    const {resData}=props;
  return(
  <div className="res-card">
    <img  
    className="res-logo" 
    alt="res-logo"
    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/13367df49604381484b56567e757407a"/>
    <h3>{resData.name}</h3>
    <h4>{resObj.cuisines}</h4>
    <h4>{resObj.avgRating}</h4>
   
  </div>
  
  )
}


export default RestaurentCard
