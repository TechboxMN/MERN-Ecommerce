import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import {
    ProductBrand,
    ProductContainer,
    ProductImage,
    ProductInfo,
    ProductName,
    ProductPrice,
} from './Product.style'

const Product = ({ product }) => {
    return (
        <ProductContainer>
            <Link to={`/product/${product._id}`}>
                <ProductImage src={product.image} />
            </Link>

            <ProductInfo>
                <ProductBrand>{product.brand}</ProductBrand>
                <Link to={`/product/${product._id}`}>
                    <ProductName>
                        <strong>{product.name}</strong>
                    </ProductName>
                </Link>
                <ProductPrice as='h3'>${product.price}</ProductPrice>
            </ProductInfo>
        </ProductContainer>
    )
}

export default Product
