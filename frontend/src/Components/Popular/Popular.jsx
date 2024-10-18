import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import "./Popular.css"


const Popular = () => {

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then((res) => res.json())
      .then((data) => setPopularProducts(data))
  }, [])

  return (
    <>
      <div className="container mt-5 mb-5">

        <div className="row">
          <div className="col-12">
            <h1 className='text-center mb-1'>POPULAR IN WOMEN</h1>
            <div className='popular_underline'></div>
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
          {popularProducts.map((item, index) => {
            return <Item key={index} item={item} />
          })}

        </div>
      </div>
    </>
  )
}

export default Popular