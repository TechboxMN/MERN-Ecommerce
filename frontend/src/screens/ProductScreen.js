import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ButtonGroup, ListGroup, Button, Form } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Rating from '../components/Rating'
import Meta from '../components/Meta'
import {
    listProductsDetails,
    createProductReview,
} from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'
import {
    ButtonAdd,
    ButtonAddToCart,
    ButtonCount,
    ButtonPurchase,
    ButtonSubtract,
    DescriptionSpan,
    ProductBrand,
    ProductContainer,
    ProductDescription,
    ProductImage,
    ProductInfo,
    ProductInStock,
    ProductName,
    ProductPreview,
    ProductPrice,
    ListGroupItem,
    WriteCommentSpan,
    UserName,
    DateSpan,
    CommentSpan,
    CommentContainer,
} from '../components/ProductScreen.style'
import ProductCarousel from '../components/ProductCarousel'

const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const productReviewCreate = useSelector(
        (state) => state.productReviewCreate,
    )
    const {
        success: successProductReview,
        error: errorProductReview,
    } = productReviewCreate

    useEffect(() => {
        if (successProductReview) {
            alert('Review Submitted!')
            setRating(0)
            setComment('')
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
        }
        dispatch(listProductsDetails(match.params.id))
    }, [dispatch, match, successProductReview])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    const subtractHandler = () => {
        if (qty > 0) {
            setQty(qty - 1)
        }
    }

    const addHandler = () => {
        if (product.countInStock > qty) {
            setQty(qty + 1)
        }
    }

    const leaveCommentHandler = () => {
        history.push('/login')
    }

    const checkoutHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            createProductReview(match.params.id, {
                rating,
                comment,
            }),
        )
    }

    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Meta title={product.name} />
                    <ProductContainer>
                        <ProductPreview>
                            <ProductCarousel />
                        </ProductPreview>
                        <ProductInfo>
                            <ListGroup>
                                <ProductName>{product?.name}</ProductName>
                                <ProductBrand>{product?.brand}</ProductBrand>
                                <Rating
                                    color='#fdcc0d'
                                    value={Number(product?.rating)}
                                    text={`${product?.numReviews} reviews`}
                                />
                                <ProductPrice>$ {product?.price}</ProductPrice>
                                <ProductInStock>
                                    <DescriptionSpan>Status :</DescriptionSpan>
                                    {product?.countInStock > 0
                                        ? 'In Stock'
                                        : 'Out of Stock'}
                                </ProductInStock>
                                <ListGroupItem>
                                    <DescriptionSpan>
                                        Description :
                                        <ProductDescription>
                                            {product && product.description}
                                        </ProductDescription>
                                    </DescriptionSpan>
                                </ListGroupItem>

                                <ListGroupItem>
                                    <ButtonGroup
                                        className='btn-group'
                                        role='group'
                                        aria-label='Basic example'
                                    >
                                        <ButtonSubtract
                                            className='btn-secondary'
                                            type='button'
                                            onClick={subtractHandler}
                                        >
                                            <i className='ri-subtract-line'></i>
                                        </ButtonSubtract>
                                        <ButtonCount
                                            onChange={(e) =>
                                                setQty(e.target.value)
                                            }
                                        >
                                            {qty}
                                        </ButtonCount>
                                        <ButtonAdd
                                            className='btn-secondary'
                                            type='button'
                                            onClick={addHandler}
                                        >
                                            <i className='ri-add-line'></i>
                                        </ButtonAdd>
                                    </ButtonGroup>
                                </ListGroupItem>

                                <ButtonGroup
                                    className='btn-group'
                                    role='group'
                                    aria-label='Basic example'
                                >
                                    <ButtonAddToCart
                                        className='btn-primary'
                                        type='button'
                                        onClick={addToCartHandler}
                                        disabled={
                                            product &&
                                            product.countInStock === 0
                                        }
                                    >
                                        Add To Cart
                                    </ButtonAddToCart>

                                    <ButtonPurchase
                                        className='btn-secondary'
                                        type='button'
                                        onClick={checkoutHandler}
                                        disabled={
                                            product &&
                                            product.countInStock === 0
                                        }
                                    >
                                        Purchase
                                    </ButtonPurchase>
                                </ButtonGroup>
                            </ListGroup>
                        </ProductInfo>
                    </ProductContainer>
                    <Row>
                        <Col md={6}>
                            {product.reviews.length === 0 && (
                                <Message>No Reviews</Message>
                            )}
                            <CommentContainer variant='flush'>
                                <ListGroup.Item>
                                    <WriteCommentSpan>
                                        Хэрэглэгчийн үнэлгээ
                                        <Rating
                                            color='#fdcc0d'
                                            value={Number(product?.rating)}
                                            text={`${product?.numReviews} үнэлгээтэй`}
                                        />
                                    </WriteCommentSpan>
                                    {errorProductReview && (
                                        <Message variant='danger'>
                                            {errorProductReview}
                                        </Message>
                                    )}
                                    {userInfo ? (
                                        <Form onSubmit={submitHandler}>
                                            <Form.Group controlId='rating'>
                                                <Form.Label>Rating</Form.Label>
                                                <Form.Control
                                                    as='select'
                                                    value={rating}
                                                    onChange={(e) =>
                                                        setRating(
                                                            e.target.value,
                                                        )
                                                    }
                                                >
                                                    <option value=''>
                                                        Select...
                                                    </option>
                                                    <option value='1'>
                                                        1 - Poor
                                                    </option>
                                                    <option value='2'>
                                                        2 - Fair
                                                    </option>
                                                    <option value='3'>
                                                        3 - Good
                                                    </option>
                                                    <option value='4'>
                                                        4 - Very good
                                                    </option>
                                                    <option value='5'>
                                                        5 - Excellent
                                                    </option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId='comment'>
                                                <Form.Label>Comment</Form.Label>
                                                <Form.Control
                                                    as='textarea'
                                                    row='3'
                                                    value={comment}
                                                    onChange={(e) =>
                                                        setComment(
                                                            e.target.value,
                                                        )
                                                    }
                                                ></Form.Control>
                                            </Form.Group>
                                            <Button
                                                type='submit'
                                                variant='primary'
                                            >
                                                Submit
                                            </Button>
                                        </Form>
                                    ) : (
                                        <ButtonAddToCart
                                            onClick={leaveCommentHandler}
                                        >
                                              Сэтгэгдэл үлдээх
                                        </ButtonAddToCart>
                                    )}
                                </ListGroup.Item>
                                {product.reviews.map((review) => (
                                    <ListGroup.Item key={review._id}>
                                        <Rating value={review.rating} />
                                        <UserName>{review.name}</UserName>
                                        <CommentSpan>
                                            {review.comment}
                                        </CommentSpan>
                                        <DateSpan>
                                            {review.createdAt.substring(0, 10)}
                                        </DateSpan>
                                    </ListGroup.Item>
                                ))}
                            </CommentContainer>
                        </Col>
                    </Row>
                </>
            )}
        </>
    )
}

export default ProductScreen
