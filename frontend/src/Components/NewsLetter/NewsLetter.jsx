import React from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
  return (
    <div className="container mt-5 pt-5 mb-5 newsLetter-main">
      <div className="row mt-5 mb-5 newsbottomspace">
        <h1 className='newsHeading'>Get Exclusive Offers On Your Email</h1>
        <p className='newsSubheading'>Subscribe to our newsletter and stay updated</p>
        <form className='newsForm'>
          <input type='text' placeholder='Your Email Id' className='newsInput' />
          <button type='submit' className='brn brn-secondary newsbtn'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default NewsLetter