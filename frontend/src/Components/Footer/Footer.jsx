import React from 'react'
import logo_img from "../Assets/logo.png"
import "./Footer.css"
import { Link } from 'react-router-dom'
import { FaInstagram, FaPinterest, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="container   pb-3 pt-5">
      <div className="row mt-5  mb-3 d-flex justify-content-center align-items-center">

        <div className="col-lg-2 col-md-4 d-flex justify-content-center align-items-center pt-2">
          <img src={logo_img} />
          <h2 className='fs-2 fw-bold ps-3'>SHOPPER</h2>
        </div>
      </div>

      <div className="row d-flex justify-content-center align-items-center mt-4">
        <div className="col-1 col-sm-2 col-md-2  col-12"><Link to="#" className='text-dark text-center'><p className='footer-link' > Company  </p> </Link></div>
        <div className="col-1 col-sm-2 col-md-2 col-12"><Link to="#" className='text-dark  text-center'><p className='footer-link'> Products </p>  </Link></div>
        <div className="col-1 col-sm-2 col-md-2 col-12"><Link to="#" className='text-dark text-center'><p className='footer-link'> Offices </p>  </Link></div>
        <div className="col-1 col-sm-2 col-md-2 col-12"><Link to="#" className='text-dark text-center'><p className='footer-link'> About </p>  </Link></div>
        <div className="col-1 col-sm-2 col-md-2 col-12"><Link to="#" className='text-dark text-center'><p className='footer-link'> Contact </p>  </Link></div>
      </div>

      <div className="row d-flex justify-content-around align-items-center">
        <div className="col-md-8 col-8 d-flex justify-content-center align-items-center">
          <div className='footer-icon '>
            <a href="#" > <FaInstagram className="footer-icons" /> </a>
            <a href="#"><FaPinterest className="footer-icons" /> </a>
            <a href="tel: +919879296770" ><FaWhatsapp className="footer-icons" /> </a>

          </div>
        </div>
      </div>

      <hr className='footer-hrtag' />

      <div className="row">
        <div className="col-12">
          <p className='text-center'>Copyright @ 2023 - All Right Reserved</p>
        </div>
      </div>

    </div>
  )
}

export default Footer