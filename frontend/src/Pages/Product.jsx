import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DiscriptionBox from '../Components/DiscriptionBox/DiscriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {

  const { contextValue } = useContext(ShopContext);
  const { productId } = useParams();
  const product = contextValue.find((e) => e.id === Number(productId))

  return (
    <>
      <div>
        <Breadcrums product={product} />
        <ProductDisplay product={product} />
        <DiscriptionBox />
        <RelatedProducts product={product} contextValue={contextValue} />
      </div>
    </>
  )
}

export default Product