import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import styled from 'styled-components'

// Redux
import { getDataPhones } from '../redux/PhoneActions'

// Components
import Phone from './Phone'


const List = () => {
    const H1 = styled.h1`
        padding: .8rem 2rem;
        margin: 2rem auto;
        text-align: center;
        justify-content: center;
        text-transform: uppercase;
    `
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('use effect de list')
        const getData = () => dispatch(getDataPhones())
        getData()
        // eslint-disable-next-line
    }, [])

    const phones = useSelector(state => state.phones.phones)
    const error = useSelector(state => state.phones.error)
    const loading = useSelector(state => state.phones.loading)

    return (
        <Container>
            <H1>Phone Catalogue</H1>
            <hr></hr>

            {error ? <p className="spinner">An error ocurred</p> : null}

            {loading ?
                <Spinner className="spinner" animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                :
                (
                    <Row className="justify-content-lg-center">
                        <Col md={{ span: 8, offset: 2 }}>{
                            phones.map(elm => (
                                <>
                                    <Phone
                                        key={elm.id}
                                        phone={elm}
                                    />
                                    <hr></hr>
                                </>
                            ))
                        }
                        </Col>

                    </Row>
                )
            }

        </Container>
    )
}

export default List
