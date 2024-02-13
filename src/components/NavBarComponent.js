import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import logo from '../assets/AF1Logo.png';
import navDiv from '../components/HelloComponent'
import { Button, Col, Container, Row } from 'react-bootstrap';
export default function NavBarComponent() {
  let navDiv = document.getElementById('navDiv')


  const openside = async () => {
    console.log(navDiv);
    if(navDiv.classList.contains('d-none')){
      navDiv.classList.remove('d-none')
    } else {
      navDiv.classList.add('d-none')
    }
  }

  useEffect(() => {
    navDiv = document.getElementById('navDiv')
  }, [])

  return (
    <Row>
      <Col sm={8} className='ps-5 pt-3 position-absolute'>
      <button id='logoBtn' onClick={() => openside()} className='border invis border-none'>
        <img className='logosize' src={logo} />
      </button>
      </Col>
      <Col sm={4} id='navDiv' className='d-none position-absolute end-0 col-4 pt-3 border border-black black text-white navopacity text-opacity-100 '>
        <Row className='mx-0 px-0 100vh'>
          <Col className='text-end px-0'>
            <Link className='link' to={'hello'}>
              <p className='twenty mb-1 pe-3'>Endpoint 1</p>
              <p className='fw-bold tf mb-1 pe-3'>Say Hello</p>
              <hr className='border border-black my-2 hropacity' />
            </Link>
            <Link className='link' to={'sums'}>
              <p className='twenty mb-1 pe-3'>Endpoint 2</p>
              <p className='fw-bold tf mb-1 pe-3'>Adding Numbers</p>
              <hr className='border border-black my-2 hropacity' />
            </Link>
            <Link className='link' to={'questions'}>
              <p className='twenty mb-1 pe-3'>Endpoint 3</p>
              <p className='fw-bold tf mb-1 pe-3'>Asking Questions</p>
              <hr className='border border-black my-2 hropacity' />
            </Link>
            <Link className='link' to={'gorl'}>
              <p className='twenty mb-1 pe-3'>Endpoint 4</p>
              <p className='fw-bold tf mb-1 pe-3'>Greater Or Less Than</p>
              <hr className='border border-black my-2 hropacity' />
            </Link>
            <Link className='link' to={'mad'}>
              <p className='twenty mb-1 pe-3'>Endpoint 5</p>
              <p className='fw-bold tf mb-1 pe-3'>MabLibs</p>
              <hr className='border border-black my-2 hropacity' />
            </Link>
            <Link className='link' to={'ooe'}>
              <p className='twenty mb-1 pe-3'>Endpoint 6</p>
              <p className='fw-bold tf mb-1 pe-3'>Odd Or Even</p>
              <hr className='border border-black my-2 hropacity' />
            </Link>
            <Link className='link' to={'reva'}>
              <p className='twenty mb-1 pe-3'>Endpoint 7</p>
              <p className='fw-bold tf mb-1 pe-3'>Reverse It Alphanumeric</p>
              <hr className='border border-black my-2 hropacity' />
            </Link>
            <Link className='link' to={'revn'}>
              <p className='twenty mb-1 pe-3'>Endpoint 8</p>
              <p className='fw-bold tf mb-1 pe-3'>Reverse It Numbers</p>
              <hr className='border border-black my-2 hropacity' />
            </Link>
            <Link className='link' to={'magic'}>
              <p className='twenty mb-1 pe-3'>Endpoint 9</p>
              <p className='fw-bold tf mb-1 pe-3'>Magic 8 Ball</p>
              <hr className='border border-black my-2 hropacity' />
            </Link>
            <Link className='link' to={'rest'}>
              <p className='twenty mb-1 pe-3'>Endpoint 10</p>
              <p className='fw-bold tf mb-1 pe-3'>Restaurant Picker</p>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}