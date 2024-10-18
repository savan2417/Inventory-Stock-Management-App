import React, { useEffect, useState } from 'react'
import "./NewCollections.css"

import Item from '../Item/Item'
const NewCollections = () => {

  const [new_collections, setNew_collections] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/newcollection")
      .then((res) => res.json())
      .then((data) => setNew_collections(data))
  }, [])

  return (
    <>
      <div className="container mt-5 mb-5">

        <div className="row">
          <div className="col-12">
            <h1 className='text-center mb-1'>NEW COLLECTIONS</h1>
            <div className='collection_underline'></div>
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
          {new_collections.map((item, index) => {
            return <Item key={index} item={item} />
          })}

        </div>
      </div>
    </>
  )
}

export default NewCollections