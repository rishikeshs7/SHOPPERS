import React from 'react'
import men_banner from  './Components/Assets/banner_mens.png'
import new_collections from './Components/Assets/new_collections'
import Item from './item'
import './Popular.css'

import './Mens.css'


const Mens= () => {
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner'   src={men_banner} alt="" />
      <div className='popular'>
       
        
      
      <div className='new-collections-mens'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item, i)=>{
                return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
    </div>

    <div className="shopcategory-loadmore">
      Explore More
    </div>

    </div>
  )
}

export default Mens
