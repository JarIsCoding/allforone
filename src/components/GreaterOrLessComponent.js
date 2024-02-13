import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import arrowR from '../assets/ArrowR.png';
import arrowL from '../assets/ArrowL.png';
import { GreaterOrLessApi } from '../services/DataServices';

export default function GreaterOrLessComponent() {
    const [result, setResult] = useState('Your output here...');
    const [numone, setnumone] = useState('');
    const [numtwo, setnumtwo] = useState('');

    const getResult = async () => {
        const response = await GreaterOrLessApi(numone, numtwo);
        console.log(numone, numtwo)
        console.log(response)
        setResult(response);
    }

    return (
        <Container fluid className="px-0 pt-5 position-absolute hellocolor23">
            <Row className='g-0'>
                <Col className='col-12 pt-5 lightbg vh-100'>
                    <p className='maxtxt pb-5 ps-5'>
                        Greater Or Less Than
                    </p>
                    <p className='bigtxt pt-5 ps-5'>
                        Which one is Greater?
                    </p>
                    <Row className='pt-5'>
                        <Col className='col-5 me-5'>
                            <p className='ps-5 tf'>
                                Input
                            </p>
                        </Col>
                        <Col>
                            <p className='tf'>
                                Output
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-4 pt-2 pe-0'>
                            <input type='number' id='UserInput' onChange={(e) => setnumone(e.target.value)} className='ms-5 input1 border border-black tf doubleinput' placeholder='Number1' />
                            <input type='number' id='UserInput2' onChange={(e) => setnumtwo(e.target.value)} className='ms-4 input1 border border-black tf doubleinput' placeholder='Number2' />
                        </Col>
                        <Col className='col-1 ms-4 me-3'>
                            <img src={arrowR} className='arrowsize' alt="arrowRight" />
                        </Col>
                        <Col className=''>
                            <p id='outputs' className='thirf'>
                                {result}
                            </p>
                        </Col>
                    </Row>
                    <Col className='col-12 ps-5 pt-3'>
                        <button id='startBtn' onClick={() => {
                            if (numone.trim() !== '') {
                                getResult();
                            } else {
                                alert('Please enter a question in the input field.');
                            }
                        }} className='hellocolor3 border border-black border-4 border-top-0 rounded-3 buttonsize tf'>
                            Start
                        </button>
                    </Col>
                    <Row className='px-5 pt-3'>
                        <Col className='col-6'>
                            <p className='twenty my-0'>
                                Go Back Home...
                            </p>
                            <p className='tf fw-bold pt-2'>
                                Home
                            </p>
                            <Link to={`/`}>
                                <img src={arrowL} className='arrowsize' alt="arrowLeft" />
                            </Link>
                        </Col>
                        <Col className='text-end'>
                            <p className='twenty my-0'>
                                Next Endpoint...
                            </p>
                            <p className='tf fw-bold pt-2'>
                                MadLibs
                            </p>
                            <Link to={'/mad'}>
                                <img src={arrowR} className='arrowsize' alt="arrowRight" />
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
