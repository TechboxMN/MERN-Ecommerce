import styled from 'styled-components'
import { Form, Button } from 'react-bootstrap'

export const FormContainer = styled(Form)`
    display: flex;
    input {
        width: 740px !important;
        height: 40px;
        border-radius: 4px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
        font-weight: 300;
        border: 1px solid #e0e0e0;
    }
    button {
        margin-left: -40px;
        height: 40px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        color: white;
        font-size: 15px;
        border: 1px solid black;
        background-color: black;
    }

    &:hover {
        color: none;
        background-color: none;
        border-color: none;
        outline: none;
        box-shadow: none;
    }

    .btn-outline-success:hover {
        background-color: black;
        border-color: black;
    }

    .btn-outline-success.focus,
    .btn-outline-success:focus {
        box-shadow: none;
    }
`

export const FormControl = styled(Form.Control)`
    display: flex;
    border: 1px solid #828282;

    &:focus {
        color: none;
        outline: none;
        box-shadow: none;
    }
`
