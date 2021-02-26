import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonGroup } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import {
    ButtonAddToCart,
    ButtonPurchase,
} from '../components/ProductScreen.style'
import {
    CartContainer,
    CartImage,
    CartInfoContainer,
    CartItemBox,
    CartItemContainer,
    CartItemName,
    CartItemPrice,
    CartItemWrapper,
    InnerWrapper,
    ButtonAdd,
    ButtonCount,
    ButtonSubtract,
    CartInfo,
    TotalPrice,
    ButtonCancel,
    ButtonContinue,
    CartSpan,
    PriceWrapper,
    ButtonContainer,
} from './Cart.style'
import { handleChange } from '../helpers/utility'

const Cart = ({ match, location, history }) => {
    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)

    const { cartItems } = cart

    const changer = (type, item) => {
        handleChange(type, item, dispatch, cartItems)
    }
    console.log(cartItems)

    const cancelHandler = () => {
        history.push('/cart')
    }

    return (
        <CartContainer>
            <CartItemContainer>
                {cartItems.length === 0 ? (
                    <Message>
                        Your Cart is empty <Link to='/'>Go Back</Link>
                    </Message>
                ) : (
                    <CartItemWrapper>
                        {cartItems.map((item) => (
                            <CartItemBox key={item.product}>
                                <InnerWrapper>
                                    <CartImage
                                        src={item.image}
                                        alt={item.name}
                                        fluid
                                        rounded
                                    />
                                    <CartInfoContainer>
                                        <Link to={`/product/${item.product}`}>
                                            <CartItemName>
                                                {item.name}
                                            </CartItemName>
                                        </Link>
                                        <CartItemPrice>
                                            ${item.price}
                                        </CartItemPrice>
                                    </CartInfoContainer>
                                    <ButtonGroup
                                        className='btn-group'
                                        role='group'
                                        aria-label='Basic example'
                                    >
                                        <ButtonSubtract
                                            type='button'
                                            variant='light'
                                            onClick={() => changer('-', item)}
                                        >
                                            <i className='ri-subtract-line'></i>
                                        </ButtonSubtract>

                                        <ButtonCount>{item.qty}</ButtonCount>
                                        <ButtonAdd
                                            type='button'
                                            variant='light'
                                            onClick={() => changer('+', item)}
                                        >
                                            <i className='ri-add-line'></i>
                                        </ButtonAdd>
                                    </ButtonGroup>
                                </InnerWrapper>
                            </CartItemBox>
                        ))}
                    </CartItemWrapper>
                )}
            </CartItemContainer>
            <CartInfo>
                <PriceWrapper>
                    <CartSpan>Бүтээгдэхүүний үнэ : </CartSpan>
                    <TotalPrice>
                        $
                        {cartItems
                            .reduce(
                                (acc, item) => acc + item.qty * item.price,
                                0,
                            )
                            .toFixed(2)}
                    </TotalPrice>
                </PriceWrapper>
                <ButtonContainer>
                    <ButtonContinue type='submit'>Үргэлжлүүлэх</ButtonContinue>
                    <ButtonCancel type='button' onClick={cancelHandler}>
                        Цуцлах
                    </ButtonCancel>
                </ButtonContainer>
            </CartInfo>
        </CartContainer>
    )
}

export default Cart
