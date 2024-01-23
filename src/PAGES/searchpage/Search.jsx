import React, { useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBRow
  } from 'mdb-react-ui-kit';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import userData from './data';
import Avatar from '@mui/material/Avatar';
import Header from '../navbar/Header';
import { Link } from 'react-router-dom';
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = userData.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const divStyle = {
    backgroundColor: '#FFFFFF',
  };
  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    width: '100%',
    boxSizing: 'border-box',
  };

  return (
    <>
    <div style={divStyle}>
    <div>
      <Header/>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        style={inputStyle}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-4 mt-4"
      />
      <MDBListGroup style={{ maxWidth: '100rem' ,alignItems:'stretch'}} light>
        {filteredUsers.map((user) => (
          <MDBListGroupItem key={user.id} className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
            <Avatar alt="Remy Sharp" src={user.img} />
              <div className='ms-4'>
                <p className='fw-bold mb-1'>{user.name}</p>
                <p className='text-muted mb-0'>{user.role}</p>
              </div>
            </div>
            <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
            <Link to={user.viewprofile}>View</Link> <MDBIcon fas icon='view' />
            </MDBBtn>
          </MDBListGroupItem>
        ))}
      </MDBListGroup>
    </div><br></br>
    <div>
    <MDBRow>
      <MDBCol xl={6} className='mb-4' style={{width:'100px0',height:'10px'}}>
        <MDBCard style={{ backgroundColor: '#B6BBC4' }}>
          <MDBCardBody>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <img
                  src='https://t3.ftcdn.net/jpg/06/34/03/94/240_F_634039487_qyC0ncbzo9in4vlWiGZJAx6PYeGSSmH0.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>John Doe</p>
                  <p className='text-muted mb-0'>Data Analyst</p>
                </div>
              </div>
              <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
              Follow <MDBIcon fas icon='Follow' />
            </MDBBtn>
            </div>
          </MDBCardBody>
          <MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
            <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
              Message <MDBIcon fas icon='envelope' />
            </MDBBtn>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol xl={6} className='mb-4'>
        <MDBCard style={{ backgroundColor: '#B6BBC4' }}>
          <MDBCardBody>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <img
                  src='https://t3.ftcdn.net/jpg/06/36/12/06/240_F_636120600_yMKS0Us9bchPNrNbyNUFLX5cBLhFwTMi.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>Alex Ray</p>
                  <p className='text-muted mb-0'>Speaker</p>
                </div>
              </div>
              <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
              Follow <MDBIcon fas icon='Follow' />
            </MDBBtn>
            </div>
          </MDBCardBody>
          <MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
            <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
              Message <MDBIcon fas icon='envelope' />
            </MDBBtn>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol xl={6} className='mb-4'>
        <MDBCard style={{ backgroundColor: '#B6BBC4' }}>
          <MDBCardBody>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <img
                  src='https://t3.ftcdn.net/jpg/06/57/85/22/240_F_657852299_5py03y6oH4mrUDyZnf9XxFSFfrjcqAzP.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>Kate Hunington</p>
                  <p className='text-muted mb-0'>Software Developer</p>
                </div>
              </div>
              <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
              Follow <MDBIcon fas icon='Follow' />
            </MDBBtn>
            </div>
          </MDBCardBody>
          <MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
            <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
              Message <MDBIcon fas icon='envelope' />
            </MDBBtn>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol xl={6} className='mb-1'>
        <MDBCard style={{ backgroundColor: '#B6BBC4' }}>
          <MDBCardBody>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <img
                  src='https://t3.ftcdn.net/jpg/06/27/18/78/240_F_627187896_oGzqEn5omXAXVwbnGbxGvVRX3bHukXcW.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>Michael Bale</p>
                  <p className='text-muted mb-0'>Programmer</p>
                </div>
              </div>
              <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
              Follow <MDBIcon fas icon='Follow' />
            </MDBBtn>
            </div>
          </MDBCardBody>
          <MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
            <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
              Message <MDBIcon fas icon='envelope' />
            </MDBBtn>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
    </div>
    </>
  );
};

export default Search;

