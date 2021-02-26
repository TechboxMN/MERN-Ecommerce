import { Form } from 'react-bootstrap'
import styled from 'styled-components'

export const AddressInput = styled(Form.Group)`
    width: 100%;
    height: 40px;

    input {
        border-radius: 4px;
        background-color: #fff;
        border: 1px solid #e0e0e0;
    }
`
export const AddressInputExtra = styled(Form.Group)`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    input {
        border-radius: 4px;
        background-color: #fff;
        border: 1px solid #e0e0e0;
    }
`

export const FormInnerContainer = styled(Form)`
    padding: 30px;
    width: 100%;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
`

export const FormWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
`
export const FormSection = styled.div`
    width: 50%;
`

export const CartSection = styled.div`
    width: 50%;
`
