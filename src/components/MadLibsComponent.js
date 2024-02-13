import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import arrowR from '../assets/ArrowR.png';
import arrowL from '../assets/ArrowL.png';
import { MadLibApi } from '../services/DataServices';

export default function MadLibsComponent() {
    const [result, setResult] = useState('Your output here...');
    const [numone, setnumone] = useState('');
    const [numtwo, setnumtwo] = useState('');
    const [numthree, setnumthree] = useState('');
    const [numfour, setnumfour] = useState('');
    const [numfive, setnumfive] = useState('');

    const getResult = async () => {
        const response = await MadLibApi(numone, numtwo, numthree, numfour, numfive);
        console.log(numone, numtwo)
        console.log(response)
        setResult(response);
    }

    return (
        <Container fluid className="px-0 pt-5 position-absolute hellocolor24">
            <Row className='g-0'>
                <Col className='col-12 pt-5 lightbg vh-100'>
                    <p className='maxtxt pb-5 ps-5'>
                        MadLibs
                    </p>
                    <p className='bigtxt pt-5 ps-5'>
                        Make a Story!
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
                        <Col className='col-4 pt-2 pe-0 text-center'>
                            <input type='text' id='UserInput' onChange={(e) => setnumone(e.target.value)} className='ms-5 input1 border border-black tf madlibinput' placeholder='Object' />
                            <input type='text' id='UserInput2' onChange={(e) => setnumtwo(e.target.value)} className='ms-3 input1 border border-black tf madlibinput' placeholder='Verb' />
                            <input type='text' id='UserInput3' onChange={(e) => setnumthree(e.target.value)} className='ms-3 input1 border border-black tf madlibinput' placeholder='Adjective' />
                            <div className='pt-3'></div>
                            <input type='text' id='UserInput4' onChange={(e) => setnumfour(e.target.value)} className='ms-3 input1 border border-black tf madlibinput' placeholder='Place' />
                            <input type='text' id='UserInput5' onChange={(e) => setnumfive(e.target.value)} className='ms-3 input1 border border-black tf madlibinput' placeholder='Person' />
                        </Col>
                        <Col className='col-1 ms-4 me-3'>
                            <img src={arrowR} className='arrowsize' alt="arrowRight" />
                        </Col>
                        <Col className=''>
                            <p id='outputs' className='tf'>
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
                        }} className='hellocolor4 border border-black border-4 border-top-0 rounded-3 buttonsize tf'>
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
                                Odd Or Even
                            </p>
                            <Link to={'/ooe'}>
                                <img src={arrowR} className='arrowsize' alt="arrowRight" />
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
