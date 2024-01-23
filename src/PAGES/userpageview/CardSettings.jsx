import React from "react";
import "./tailwindcss.css";
import {
  MDBBtn
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import SnackbarContent from '@mui/material/SnackbarContent';
import { Link } from "react-router-dom";
export default function CardSettings() {
  
  const [buttonText, setButtonText] = useState('FOLLOW');
  
  const handleSubmit = () => {
    setTimeout(() => {
      setButtonText('FOLLOWING');
    }, 600000);
    };
  

  return (
    <>
    <br></br>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h4 className="text-blueGray-700  font-bold"><b>User's name (Catherine)</b></h4>
            <form onSubmit={handleSubmit}>
            <MDBBtn type='submit' style={{backgroundColor:'#31304D',color:'#FFFFFF'}} rippleColor='primary' className=' m-0'>
              {buttonText}
            </MDBBtn></form>
            <MDBBtn style={{backgroundColor:'#31304D',color:'#FFFFFF'}} rippleColor='primary' className=' m-0'>
              CONNECT 
            </MDBBtn>
            <Link to="/message"><MDBBtn style={{backgroundColor:'#31304D',color:'#FFFFFF'}} rippleColor='primary' className=' m-0'>
              MESSAGE
            </MDBBtn></Link> 
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-black-400 text-sm mt-3 mb-4 font-bold uppercase">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email address
                  </label>
                  <SnackbarContent style={{ backgroundColor: '#fff',color:'#000' }}
                   message={'catherine@gmail.com' }/>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-black-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    FaceBook 
                  </label>
                  <SnackbarContent style={{ backgroundColor: '#fff',color:'#000'}}
                   message={'https://www.facebook.com/' }/>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-black-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Twitter
                  </label>
                  <SnackbarContent style={{ backgroundColor: '#fff',color:'#000'}}
                   message={'https://twitter.com/' }/>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-black-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    GitHub
                  </label>
                  <SnackbarContent style={{ backgroundColor: '#fff',color:'#000'}}
                   message={'https://github.com/' }/>
                </div>
              </div>
            </div>



            <hr className="mt-6 border-b-1 border-black-300" />

            <h6 className="text-black-400 text-sm mt-3 mb-4 font-bold uppercase">
              Skills
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-black-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Languages Known
                  </label>
                  <SnackbarContent style={{ backgroundColor: '#fff',color:'#000'}}
                   message={'Java,C,Python' }/>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-black-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Certificates
                  </label>
                  <SnackbarContent style={{ backgroundColor: '#fff',color:'#000'}}
                   message={'Software Engineering Master Certification (SEMC), Cisco Certified Network Professional in Service Provider Operations (CCNP SP Operations)' }/>
                </div>
              </div>
              {/* <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-black-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Area of Interest
                  </label>
                  <SnackbarContent style={{ backgroundColor: '#B6BBC4',color:'#000'}}
                   message={'Cloud Computing' }/>
                </div>
              </div> */}
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-black-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Achievements
                  </label>
                  <SnackbarContent style={{ backgroundColor: '#fff',color:'#000'}}
                   message={'Certified Information Systems Security Professional (CISSP),Certified Quality Engineer (CQE)' }/>
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-black-300" />
            <h6 className="text-black-400 text-sm mt-3 mb-4 font-bold uppercase">
              Developments
            </h6>
            <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-black-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Projects
                  </label>
                  <SnackbarContent style={{ backgroundColor: '#fff',color:'#000'}}
                   message={'Machine Learning in Education' }/>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-black-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Current Projects
                  </label>
                  <SnackbarContent style={{ backgroundColor: '#fff',color:'#000'}}
                   message={'Sentimental Analysis using Deep Learning' }/>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-black-300" />
            <h6 className="text-black-400 text-sm mt-3 mb-4 font-bold uppercase">
              About Them
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                <SnackbarContent style={{ backgroundColor: '#fff',color:'#000'}}
                   message={'An passionate Programmer and developer . An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure' }/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
