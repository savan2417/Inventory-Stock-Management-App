import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_image from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = ({ product }) => {

  const { addToCart } = useContext(ShopContext)

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-between">
        <div className="col-md-2 col-lg-1 left-side-img-main ">

          <div className="row ">
            <div className="col-12">
              <img src={product.image} alt='productImage' className='img-fluid product-leftside-img ' />
            </div>
          </div>

          <div className="row  mt-1">
            <div className="col-12">
              <img src={product.image} alt='productImage' className='img-fluid product-leftside-img ' />
            </div>
          </div>

          <div className="row  mt-1">
            <div className="col-12">
              <img src={product.image} alt='productImage' className='img-fluid product-leftside-img ' />
            </div>
          </div>

          <div className="row  mt-1">
            <div className="col-12">
              <img src={product.image} alt='productImage' className='img-fluid product-leftside-img ' />
            </div>
          </div>

        </div>
        <div className="col-md-5 ">
          <img src={product.image} alt='productImage' className='img-fluid product-rightside-img ' />
        </div>
        <div className="col-md-5 col-lg-6 ">
          <h2 className='productName'>{product.name}</h2>
          <div className=' d-flex align-items-center'>
            <img src={star_image} alt='starImage' height="50%" className='img-fluid me-1' />
            <img src={star_image} alt='starImage' height="50%" className='img-fluid me-1' />
            <img src={star_image} alt='starImage' height="50%" className='img-fluid me-1' />
            <img src={star_image} alt='starImage' height="50%" className='img-fluid me-1' />
            <img src={star_dull_icon} alt='starDullImage' height="50%" className='img-fluid me-1' />
            <p className='pt-3 '>(122)</p>
          </div>
          <div className='mt-4 d-flex '>
            <h5 className='me-5 '>${product.new_price}</h5>
            <h5 className='text-decoration-line-through text-danger'>${product.old_price}</h5>
          </div>
          <p className='pt-3'>
            A LightWeight, usually knitted, pullover shirt, close-fitting and with a round nechline and a short sleeves.warn as an undershirt or outer garments.
          </p>

          <h5>Select Size</h5>

          <div className='d-flex  flex-wrap'>
            <div className='productSizeBtn mt-3'>S</div>
            <div className='productSizeBtn mt-3'>M</div>
            <div className='productSizeBtn mt-3'>L</div>
            <div className='productSizeBtn mt-3'>XL</div>
            <div className='productSizeBtn mt-3'>XXL</div>

          </div>

          <div className='mt-3'>
            <button className='btn btn-danger mt-3 ps-5 pe-5 pt-2 pb-2 fs-5' onClick={() => { addToCart(product.id) }} >Add to Cart</button>
          </div>

          <div className='mt-3'>
            <p><span className='text-danger'>Stock : </span> {product.stock} Piece</p>
          </div>

          <div className='mt-3'>
            <p><span className='text-danger'>Category : </span> {product.category}, T-shirt, crop Top </p>
            <p><span className='text-danger'>Tags : </span> Modern, Latest</p>
          </div>

        </div>
      </div>






    </div>
  )
}

export default ProductDisplay