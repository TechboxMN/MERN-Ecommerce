import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const ContainerForm = styled(Container)`
    padding: 40px 0 0;
    display: flex;
    flex-direction: column;
`

const FormContainer = ({ children }) => {
    return <ContainerForm>{children}</ContainerForm>
}

export default FormContainer
