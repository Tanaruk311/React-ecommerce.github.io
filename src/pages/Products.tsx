import React from 'react'
import Navbar from '../components/Navbar'
import ProductContent from '../components/ProductContent'
import RadioButtonsGroup from '../components/RadioButtonsGroup'
import { Container } from '@mui/material'

const Products = () => {
  return (
    <div>
    <Navbar />
    <Container>
    <ProductContent />
    <RadioButtonsGroup />
    </Container>
    </div>
  )
}

export default Products