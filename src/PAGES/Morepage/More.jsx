

import React from 'react';
import './More.css';
import Header from '../navbar/Header';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
const More = () => {
  return (
    <>
    <Header/>
    <div className="App">
      <video className="video-background" loop muted autoPlay>
        <source src="https://player.vimeo.com/external/528744053.sd.mp4?s=5f8f1ebfe631b73180f8ac2320d59800aadcdd2f&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <Link to="/posts"><MDBCol>
        <MDBCard style={{backgroundColor:'#E7DECC'}}>
          <MDBCardImage
            src='https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGxlYXJuaW5nfGVufDB8fDB8fHww'
            alt='...'
            position='top'
            width='10px'
          />
          <MDBCardBody>
            <MDBCardTitle>POST</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
          <CardActions>
        <Button size="small">More..</Button>
      </CardActions>
        </MDBCard>
      </MDBCol></Link>
      <Link to="/event">
      <MDBCol>
        <MDBCard style={{backgroundColor:'#E7DECC'}}>
          <MDBCardImage
            src='https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>EVENTS</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
          <CardActions>
        <Button size="small">More..</Button>
      </CardActions>
        </MDBCard>
      </MDBCol></Link>
      <Link to="/job"><MDBCol>
        <MDBCard style={{backgroundColor:'#E7DECC'}}>
          <MDBCardImage
            src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGxlYXJuaW5nfGVufDB8fDB8fHww'
            alt='...'
            position='top'
            style={{ width: '100%', height: 'auto', maxWidth: '300px', maxHeight: '200px' }}
          />
          <MDBCardBody>
            <MDBCardTitle>JOBS</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
          <CardActions>
        <Button size="small">More..</Button>
      </CardActions>
        </MDBCard>
      </MDBCol></Link>
    </MDBRow>
      </div>
    </div>
    </>
  );
};

export default More;
