import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Offer from '../Components/Offers/Offer'

const Shop = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
      <NewsLetter />

    </>
  )
}

export default Shop