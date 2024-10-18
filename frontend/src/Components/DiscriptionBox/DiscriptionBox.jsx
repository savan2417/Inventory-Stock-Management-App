import React from 'react'
import "./DiscriptionBox.css"

const DiscriptionBox = () => {
  return (
    <div className="container mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-2 col-sm-4 col-4  border border-2 pt-3 pb-2 text-center">
          <h6>Description</h6>
        </div>
        <div className="col-md-3 col-lg-2 col-sm-4 col-4 border border-2 pt-3 pb-2 text-center">
          <h6>Reviews(122)</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-12 border p-4">
          <p className='discriptionPara' > A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</p>
          <p className='discriptionPara'>An eCommerce website is an online destination where buyers shop for goods and sellers offer products and services. It's the hub of information about a company and what they sell. On an eCommerce website, you'll find product listings, eCommerce blog content, company history, and contact information.</p>
        </div>
      </div>
    </div>
  )
}

export default DiscriptionBox