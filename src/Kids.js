import React from 'react'
import kids_banner from './Components/Assets/banner_kids.png'
import Item from './item'
import new_collections from './Components/Assets/new_collections'
import './Kids.css'


const Kids = () => {
  return (
    <div>
      <img className='shopcategory-banner' src={kids_banner} alt="" />

      <div className='shop-category'>
      
      <div className='popular-kids'>
        <h1> </h1>
      
      <div className='new-collections-kids'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item, i)=>{
                return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
    </div>

    </div>
    <div className="shopcategory-loadmore">
      Explore More
    </div>

      
    </div>
  )
}

export default Kids
