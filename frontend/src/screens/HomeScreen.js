import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'
import BannerCarousel from '../components/BannerCarousel'
import Meta from '../components/Meta'
import {
    ProductCol,
    ProductRow,
    ProductWrapper,
    Title,
} from './HomeScreen.style'
import StaticBlock from '../components/StaticBlock'
import Cards from '../components/Cards'

const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products, page, pages } = productList

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    return (
        <>
            <Meta />
            {!keyword ? (
                <BannerCarousel />
            ) : (
                <Container>
                    <Link to='/' className='btn btn-light mt-3 mb-3'>
                        Go Back
                    </Link>
                </Container>
            )}
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Container>
                        {!keyword ? <Cards /> : <></>}

                        <Title>Эрэлттэй бүтээгдэхүүнүүд</Title>
                        <ProductRow>
                            {products.map((product) => (
                                <ProductCol key={product._id}>
                                    <Product product={product} />
                                </ProductCol>
                            ))}
                        </ProductRow>
                    </Container>
                    {!keyword ? <StaticBlock /> : <></>}

                    {!keyword ? (
                        <Container>
                            <Title>Шинээр нэмэгдсэн</Title>
                            <ProductRow>
                                {products.map((product) => (
                                    <ProductCol key={product._id}>
                                        <Product product={product} />
                                    </ProductCol>
                                ))}
                            </ProductRow>
                            <Paginate
                                pages={pages}
                                page={page}
                                keyword={keyword ? keyword : ''}
                            />
                        </Container>
                    ) : (
                        <></>
                    )}
                </>
            )}
        </>
    )
}

export default HomeScreen
