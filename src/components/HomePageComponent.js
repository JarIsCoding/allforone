import React from 'react'
import logo from '../logo.svg';
import arrowR from '../assets/ArrowR.png'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

export default function HomePageComponent() {
    return (
        <Container fluid className="px-0 position-absolute pt-5 homecolor2">
            <Row className='g-0 vh-100'>
                <Col className='col-12 pt-5 lightbg'>
                    <p className='maxtxt pb-5 ps-5'>
                        All For One
                    </p>
                    <p className='bigtxt pt-5 ps-5'>
                        Endpoints
                    </p>
                </Col>
                <Col className='text-end pe-5'>
                    <p className='twenty my-0'>
                        Next Endpoint...
                    </p>
                    <p className='tf fw-bold pt-2'>
                        Say Hello
                    </p>
                    <Link to={'/hello'}>
                        <img src={arrowR} className='arrowsize' alt="arrowRight" />
                    </Link>
                </Col>
            </Row>
        </Container>
        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>
        //             This is page one
        //         </p>
        //         <Link to={'pageTwo'}>
        //             Go to Page Two
        //         </Link>
        //     </header>
        // </div>
    )
}
