import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'
import {
    AddressInput,
    FormWrapper,
    AddressInputExtra,
    FormInnerContainer,
    FormSection,
    CartSection,
} from '../components/ShippingScreen.style'
import Cart from '../components/Cart'

const ShippingScreen = ({ history }) => {
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const [name, setName] = useState(userInfo.name)
    const [city, setCity] = useState(shippingAddress.city)
    const [district, setDistrict] = useState(shippingAddress.district)
    const [subDistrict, setSubDistrict] = useState(shippingAddress.subDistrict)
    const [town, setTown] = useState(shippingAddress.town)
    const [building, setBuilding] = useState(shippingAddress.building)
    const [doorNumber, setDoorNumber] = useState(shippingAddress.doorNumber)
    const [extraInfo, setExtraInfo] = useState(shippingAddress.extraInfo)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            saveShippingAddress({
                city,
                district,
                subDistrict,
                town,
                building,
                doorNumber,
                extraInfo,
            }),
        )
        history.push('/payment')
    }

    return (
        <FormContainer>
            <FormInnerContainer onSubmit={submitHandler}>
                <FormSection>
                    <CheckoutSteps step1 step2 />
                    <AddressInput controlId='userName'>
                        <Form.Control
                            type='text'
                            placeholder='User Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                    </AddressInput>
                    <FormWrapper>
                        <AddressInput controlId='city'>
                            <Form.Control
                                type='text'
                                placeholder='Enter City'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            ></Form.Control>
                        </AddressInput>
                        <AddressInput controlId='district'>
                            <Form.Control
                                type='text'
                                placeholder='Enter District'
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                            ></Form.Control>
                        </AddressInput>
                        <AddressInput controlId='subDistrict'>
                            <Form.Control
                                type='text'
                                placeholder='Enter Subdistrict'
                                value={subDistrict}
                                onChange={(e) => setSubDistrict(e.target.value)}
                            ></Form.Control>
                        </AddressInput>
                        <AddressInput controlId='town'>
                            <Form.Control
                                type='text'
                                placeholder='Enter Town'
                                value={town}
                                onChange={(e) => setTown(e.target.value)}
                            ></Form.Control>
                        </AddressInput>
                        <AddressInput controlId='building'>
                            <Form.Control
                                type='text'
                                placeholder='Enter Building'
                                value={building}
                                onChange={(e) => setBuilding(e.target.value)}
                            ></Form.Control>
                        </AddressInput>
                        <AddressInput controlId='doorNumber'>
                            <Form.Control
                                type='text'
                                placeholder='Door Number'
                                value={doorNumber}
                                onChange={(e) => setDoorNumber(e.target.value)}
                            ></Form.Control>
                        </AddressInput>
                    </FormWrapper>
                    <AddressInputExtra controlId='extraInfo'>
                        <Form.Control
                            type='text'
                            placeholder='Extra Info'
                            value={extraInfo}
                            onChange={(e) => setExtraInfo(e.target.value)}
                        ></Form.Control>
                    </AddressInputExtra>
                </FormSection>
                <CartSection>
                    <Cart />
                </CartSection>
            </FormInnerContainer>
        </FormContainer>
    )
}

export default ShippingScreen
