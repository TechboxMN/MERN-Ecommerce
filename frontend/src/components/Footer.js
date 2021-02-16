import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <div className='footercontainer'>
                <Row>
                    <Col className='footerlogo'>Electro</Col>
                </Row>
                <Row>
                    <Col className='footerspan'>Copyright &copy; Margusoe</Col>
                </Row>
            </div>
        </footer>
    )
}

export default Footer
