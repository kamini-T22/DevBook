import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInputGroup,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn
} from 'mdb-react-ui-kit';
import Header from '../navbar/Header';


const UpdateProfile = () => {
  // State to manage selected option and corresponding input value
  const [selectedOption, setSelectedOption] = useState('');

  // Function to handle dropdown change
  const handleDropdownChange = (value) => {
    setSelectedOption(value);
  };

  // Function to render the form based on the selected option
  const renderForm = () => {
    if (selectedOption === 'Student') {
      return (
         <div>
           <MDBContainer className='py-1 '>
           <MDBRow around='6'>
           <MDBCol size='6' >
           <MDBInputGroup textBefore='Name' className='md'  >
              <input className='form-control' type='text' placeholder="Ex. Jhon Bran"  />
           </MDBInputGroup>
           </MDBCol>
           </MDBRow>
           <br></br>
           <MDBRow around='6'>
           <MDBCol size='6'>
           <MDBInputGroup textBefore='Email' className='mb-0'>
              <input className='form-control' type='text' placeholder="Ex.johnbran28@gmail.com" />
           </MDBInputGroup>
           </MDBCol></MDBRow>
           <br></br>
           <MDBRow around='6'>
           <MDBCol size='6'>
           <MDBInputGroup textBefore='Instution Name' className='mb-0'>
              <input className='form-control' type='text' placeholder="Ex.University of California" />
           </MDBInputGroup>
           </MDBCol></MDBRow>
           <br></br>
           <MDBRow around='6'>
           <MDBCol size='6'>
           <MDBInputGroup textBefore='Location' className='mb-0'>
              <input className='form-control' type='text' placeholder="Ex.California" />
           </MDBInputGroup>
           </MDBCol></MDBRow>
           <br></br>
           <MDBRow around='6'>
           <MDBCol size='6'>
           <MDBInputGroup textBefore='Date Of Birth' className='mb-0'>
              <input className='form-control' type='date' />
           </MDBInputGroup>
           </MDBCol></MDBRow>
           <br></br>
           <MDBRow around='6'>
           <MDBCol size='6'>
           <label htmlFor='basic-url2' className='form-label'>
           <b>Add your Education details</b>
           </label>
           </MDBCol></MDBRow>
           <MDBRow around='6'>
           <MDBCol size='6'>
            <MDBInputGroup textBefore='Degree' className='mb-0'>
              <input className='form-control' type='text' placeholder="Ex.B.Tech" />
           </MDBInputGroup>
           </MDBCol></MDBRow>
           <br></br>
           <MDBRow around='6'>
           <MDBCol size='6'>
           <MDBInputGroup textBefore='Field' className='mb-0'>
              <input className='form-control' type='text' placeholder="Ex.Information Technology" />
           </MDBInputGroup>
           </MDBCol></MDBRow>
           <br></br>
           <MDBRow around='6'>
           <MDBCol size='6'>
           <MDBInputGroup textBefore='Languages Known' className='mb-0'>
              <input className='form-control' type='text' placeholder="Ex.English,Spanish,German" />
           </MDBInputGroup>
           </MDBCol></MDBRow>
           <br></br>
           <MDBRow around='6'>
           <MDBCol size='6'>
           <MDBInputGroup textBefore='Programming Skill' className='mb-0'>
              <input className='form-control' type='text' placeholder="Ex.Java,C,MERN,Python" />
           </MDBInputGroup>
           </MDBCol></MDBRow>
           <br></br>
           <MDBRow around='6'>
           <MDBCol size='6'>
           <MDBInputGroup textBefore='Area Of Interest' className='mb-0'>
              <input className='form-control' type='text' placeholder="Ex.Artifical Intelligence" />
           </MDBInputGroup>
           </MDBCol></MDBRow>
           <br></br>
           <MDBRow around='6'>
           <MDBCol size='6'>
           <label htmlFor='basic-url2' className='form-label'>
           <b>Add your social network Links (optional)</b>
           </label>
           </MDBCol></MDBRow>
           <MDBRow around='6'>
           <MDBCol size='6'>
           <MDBInputGroup textBefore='FaceBook' className='mb-0'>
              <input className='form-control' type='text' placeholder="url" />
           </MDBInputGroup>
           </MDBCol></MDBRow>
           <br></br>
           <MDBRow around='6'>
           <MDBCol size='6'>
           <MDBInputGroup textBefore='Twitter' className='mb-0'>
              <input className='form-control' type='text' placeholder="url" />
           </MDBInputGroup>
           </MDBCol></MDBRow>
           <br></br>
           <MDBRow around='6'>
           <MDBCol size='6'>
           <label htmlFor='basic-url2' className='form-label'>
           <b>Tell us about yourself</b>
           </label>
           </MDBCol></MDBRow>
           <MDBRow around='6'>
           <MDBCol size='6'>
           <MDBInputGroup className='mb-3' textBefore='!!!'>
                <textarea className='form-control' rows={'4'} />
           </MDBInputGroup>
           </MDBCol>
           </MDBRow>
           <MDBContainer className='text-center'>
          <MDBBtn>Submit</MDBBtn>
        </MDBContainer>
           </MDBContainer>
        </div>
      );
    } else if (selectedOption === 'Employee') {
      return (
         <div>
         <MDBContainer className='py-1'>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <MDBInputGroup textBefore='Name' className='mb-0'>
             <input className='form-control' type='text' placeholder="Ex. Jhon Bran" />
          </MDBInputGroup>
          </MDBCol></MDBRow>
          <br></br>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <MDBInputGroup textBefore='Email' className='mb-0'>
             <input className='form-control' type='text' placeholder="Ex.johnbran28@gmail.com" />
          </MDBInputGroup>
          </MDBCol></MDBRow>
          <br></br>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <MDBInputGroup textBefore='Company Name' className='mb-0'>
             <input className='form-control' type='text' placeholder="Ex.Company of California" />
          </MDBInputGroup>
          </MDBCol></MDBRow>
          <br></br>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <MDBInputGroup textBefore='Location' className='mb-0'>
             <input className='form-control' type='text' placeholder="Ex.California" />
          </MDBInputGroup>
          </MDBCol></MDBRow>
          <br></br>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <MDBInputGroup textBefore='Date Of Birth' className='mb-0'>
             <input className='form-control' type='date' />
          </MDBInputGroup>
          </MDBCol></MDBRow>
          <br></br>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <label htmlFor='basic-url2' className='form-label'>
          <b>Add your Education details</b>
          </label>
          </MDBCol></MDBRow>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <MDBInputGroup textBefore='Degree' className='mb-0'>
             <input className='form-control' type='text' placeholder="Ex.B.Tech" />
          </MDBInputGroup>
          </MDBCol></MDBRow>
          <br></br>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <MDBInputGroup textBefore='Field' className='mb-0'>
             <input className='form-control' type='text' placeholder="Ex.Information Technology" />
          </MDBInputGroup>
          </MDBCol></MDBRow>
          <br></br>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <MDBInputGroup textBefore='Languages Known' className='mb-0'>
             <input className='form-control' type='text' placeholder="Ex.English,Spanish,German" />
          </MDBInputGroup>
          </MDBCol></MDBRow>
          <br></br>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <MDBInputGroup textBefore='Programming Skill' className='mb-0'>
             <input className='form-control' type='text' placeholder="Ex.Java,C,MERN,Python" />
          </MDBInputGroup>
          </MDBCol></MDBRow>
          <br></br>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <MDBInputGroup textBefore='Area Of Interest' className='mb-0'>
             <input className='form-control' type='text' placeholder="Ex.Artifical Intelligence" />
          </MDBInputGroup>
          </MDBCol></MDBRow>
          <br></br>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <MDBInputGroup textBefore='Passed Out in' className='mb-0'>
             <input className='form-control' type='date' />
          </MDBInputGroup>
          </MDBCol></MDBRow>
          <br></br>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <label htmlFor='basic-url2' className='form-label'>
          <b>Add your social network Links (optional)</b>
          </label>
          </MDBCol></MDBRow>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <MDBInputGroup textBefore='FaceBook' className='mb-0'>
             <input className='form-control' type='text' placeholder="url" />
          </MDBInputGroup>
          </MDBCol></MDBRow>
          <br></br>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <MDBInputGroup textBefore='Twitter' className='mb-0'>
             <input className='form-control' type='text' placeholder="url" />
          </MDBInputGroup>
          </MDBCol></MDBRow>
          <br></br>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <label htmlFor='basic-url2' className='form-label'>
          <b>Add your Experience</b> 
          </label>
          </MDBCol></MDBRow>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <MDBInputGroup textBefore='Role As' className='mb-0'>
             <input className='form-control' type='text' placeholder="Ex.Software Developer" />
          </MDBInputGroup>
          </MDBCol></MDBRow>
          <br></br>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <MDBInputGroup textBefore='Comapny Name' className='mb-0'>
             <input className='form-control' type='text' placeholder="Ex.California" />
          </MDBInputGroup>
          </MDBCol></MDBRow>
          <br></br>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <MDBInputGroup textBefore='Location' className='mb-0'>
             <input className='form-control' type='text' placeholder="Ex.California" />
          </MDBInputGroup>
          </MDBCol></MDBRow>
          <br></br>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <MDBInputGroup textBefore='From' className='mb-0'>
             <input className='form-control' type='date'  />
          </MDBInputGroup>
          </MDBCol></MDBRow>
          <br></br>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <MDBInputGroup textBefore='To' className='mb-0'>
             <input className='form-control' type='date' />
          </MDBInputGroup>
          </MDBCol></MDBRow>
          <br></br>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <label htmlFor='basic-url2' className='form-label'>
          <b>Tell us about yourself</b>
          </label>
          </MDBCol></MDBRow>
          <MDBRow around='6'>
          <MDBCol size='6'>
          <MDBInputGroup className='mb-3' textBefore='!!!'>
               <textarea className='form-control' rows={6}/>
          </MDBInputGroup>
          </MDBCol></MDBRow>
          <MDBContainer className='text-center'>
          <MDBBtn>Submit</MDBBtn>
        </MDBContainer>
          </MDBContainer>
       </div>
      );
    }
    return null;
  };

  return (
    <>
      <Header />
      <section style={{ backgroundColor: '#F5F7F8' }}>
        <MDBContainer className='py-5 '>
          <MDBCardBody className="text-center">
            <MDBCardImage
              src="https://img.freepik.com/free-photo/3d-illustration-cute-cartoon-girl-blue-jacket-glasses_1142-41044.jpg?ga=GA1.1.1951295137.1702544322&semt=ais_ai_generated"
              alt="avatar"
              className="rounded-circle"
              style={{ width: '150px' }}
              fluid
            />
            <MDBRow around='6'>
              <MDBCol size='6'>
                <MDBDropdown>
                  <MDBDropdownToggle color="primary">
                    {selectedOption ? selectedOption : 'Select...'}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem onClick={() => handleDropdownChange('Student')} link>Student</MDBDropdownItem>
                    <MDBDropdownItem onClick={() => handleDropdownChange('Employee')} link>Employee</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                <input
                  className='form-control'
                  type='text'
                  value={selectedOption}
                  readOnly
                  placeholder='Select your role..Student or Employee'
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBContainer>

        {renderForm()}
      </section>
    </>
  );
};

export default UpdateProfile;
