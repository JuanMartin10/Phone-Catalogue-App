import React from 'react'

import { useHistory } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'

import styled from 'styled-components'

const Phone = ({ phone }) => {

    const Button = styled.a`
        display: block;
        font-weight: 500;
        text-transform: uppercase;
        border: 1px solid #d1d1d1;
        padding: .8rem 2rem;
        margin: 2rem auto;
        text-align: center;
        justify-content: center;
          &:hover {
            cursor: pointer;
            background-color: rgb(240, 240, 240);
    }
    `

    const Image = styled.img`
        width: 100%;
    `

    const H3 = styled.h3`
        margin: 1rem auto;
        text-align: center;
        justify-content: center;
        text-transform: uppercase;
    `

    const history = useHistory()

    const { description, id, imageFileName, name } = phone

    return (
        <Container>

            <H3>{name}</H3>

            <Row>
                <Col>
                    <div className="d-flex flex-column align-content-center">
                        <p>{description}</p>
                        <Button onClick={() => history.push(`/${id}`)}>View Details</Button>
                    </div>
                </Col>

                <Col>
                    <figure className="d-flex align-content-center pd-15 ">
                        <Image src={imageFileName} alt={name} />
                    </figure>
                </Col>
            </Row>

        </Container>
    )
}

export default Phone
