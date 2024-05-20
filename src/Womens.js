import React from 'react'
import women_banner from './Components/Assets/banner_women.png'
import data_product from './Components/Assets/data'
import Item from './item'
import './Popular.css'
import './Womens.css'


const Womens = () => {
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={women_banner} alt="" />
      <div className='popular'>
        <h1>Available for WOMEN Only</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
    <div className="shopcategory-loadmore">
      Explore More
    </div>


    </div>
  )
}

export default Womens
