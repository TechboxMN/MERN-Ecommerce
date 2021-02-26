import React, { useEffect } from 'react'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    return loading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <Carousel pause='hover' className='bg-dark'>
            <Carousel.Item key={product._id}>
                <Image src={product.image} alt={product.name} fluid />
            </Carousel.Item>
        </Carousel>
    )
}

export default ProductCarousel
