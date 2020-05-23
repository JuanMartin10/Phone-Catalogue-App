import React, { useEffect } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'
import { getDataPhones } from '../redux/PhoneActions'

const PhoneDetails = (props) => {
    const Image = styled.img`
        width: 100%;
    `

    const H2 = styled.h2`
        margin: 1rem auto;
        text-align: center;
        justify-content: center;
        text-transform: uppercase;
    `

    const dispatch = useDispatch()

    useEffect(() => {
        const getData = () => dispatch(getDataPhones())
        getData()
        // eslint-disable-next-line
    }, [])

    const phones = useSelector(state => state.phones.phones)
    const idx = props.match.params.id

    const phonefiltered = phones.filter(({ id }) => id == idx)[0]


    if (phonefiltered) {

        const { color, description, manufacturer, imageFileName, name, price, processor, ram, screen } = phonefiltered

        return (
            <Container>
                {phonefiltered ? <H2>{manufacturer} {name}</H2> : null}

                <hr></hr>

                <Row>
                    <Col>
                        <div className="mt-5">
                            {phonefiltered ? <Image src={imageFileName} alt={name} /> : null}
                        </div>
                    </Col>

                    <Col className="align-items-center">
                        {phonefiltered ?
                            (
                                <div className="mt-5">
                                    <p className="p-1">Screen: {screen}</p>
                                    <p className="p-1">Processor: {processor}</p>
                                    <p className="p-1">Ram: {ram} GB</p>
                                    <p className="p-1">Price: <bold>{price}</bold> €</p>
                                    <p className="p-1">Description: {description}</p>
                                    <p className="p-1">Color: {color}</p>
                                </div>
                            )
                            : null
                        }
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <Spinner className="spinner" animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }
}

export default PhoneDetails
