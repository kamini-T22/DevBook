import React from 'react';
//import './Event.css';
import Header from '../navbar/Header';
import styled from 'styled-components';
const StyledEventWrapper = styled.div`
.bg{
  background: #161616;
}
.card {
  border: none;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  overflow: hidden;
  border-radius: 20px;
  min-height: 350px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    min-height: 350px;
  }

  @media (max-width: 420px) {
    min-height: 300px;
  }

  &.card-has-bg {
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
    background-size: 120%;
    background-repeat: no-repeat;
    background-position: center center;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: inherit;
      -webkit-filter: grayscale(1);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
      filter: grayscale(100%);
    }

    &:hover {
      transform: scale(0.98);
      box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.3);
      background-size: 130%;
      transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

      .card-img-overlay {
        transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
        background: #7FC7D9;
        background: linear-gradient(0deg, rgba(255, 186, 33, 0.5) 0%, rgba(255, 186, 33, 1) 100%);
      }
    }
  }
  .card-footer {
    background: none;
    border-top: none;
    .media {
      img {
        border: solid 3px rgba(255, 255, 255, 0.3);
      }
    }
  }
  .card-title {
    font-weight: 800;
  }
  .card-meta {
    color: rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 2px;
  }
  .card-body {
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  &:hover {
    .card-body {
      margin-top: 30px;
      transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    }
    cursor: pointer;
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  .card-img-overlay {
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
    background: #DCF2F1;
    background: linear-gradient(0deg, #7FC7D9 0%, #DCF2F1 100%);
  }
}
`;
const Event = () => {
  return (
    <>
    <Header/>
    <StyledEventWrapper>
    <div className='Bg'>
    <section className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col text-center mb-5">
          <p className="lead">____________________________________________________ </p>
            <h1 className="display-4 font-weight-bolder">Upcoming Events</h1>
            <p className="lead">____________________________________________________ </p>
          </div>
        </div>
        <div className="row">
          {/* Repeat this block for each card */}
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card text-dark card-has-bg click-col" style={{ backgroundImage: "url('https://images.pexels.com/photos/7648472/pexels-photo-7648472.jpeg?auto=compress&cs=tinysrgb&w=600')" }}>
            {/* <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="mk" /> */}
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">Thought Leadership</small>
                  <h4 className="card-title mt-0 ">Web Development Lorem Ipsum Sit Amet Consectetur dipisi?</h4>
                  <small><i className="far fa-clock"></i> October 15, 2020</small>
                </div>
                <div className="card-footer">
                  <div className="media">
                  {/* <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="" /> */}
                    <div className="media-body">
                      <h6 className="my-0 text-dark d-block">Oz Coruhlu</h6>
                      <small>Director of UI/UX</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat this block for each card */}

          {/* Repeat this block for each card */}
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card text-dark card-has-bg click-col" style={{ backgroundImage: "url('https://images.pexels.com/photos/1181618/pexels-photo-1181618.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')" }}>
            <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="" />
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">Thought Leadership</small>
                  <h4 className="card-title mt-0 ">Web Development Lorem Ipsum Sit Amet Consectetur dipisi?</h4>
                  <small><i className="far fa-clock"></i> October 15, 2020</small>
                </div>
                <div className="card-footer">
                  <div className="media">
                  <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="" />
                    <div className="media-body">
                      <h6 className="my-0 text-dark d-block">Oz Coruhlu</h6>
                      <small>Director of UI/UX</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat this block for each card */}

          {/* Repeat this block for each card */}
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card text-dark card-has-bg click-col" style={{ backgroundImage: "url('https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=600')" }}>
            <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="" />
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">Thought Leadership</small>
                  <h4 className="card-title mt-0 ">Web Development Lorem Ipsum Sit Amet Consectetur dipisi?</h4>
                  <small><i className="far fa-clock"></i> October 15, 2020</small>
                </div>
                <div className="card-footer">
                  <div className="media">
                  <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="" />
                    <div className="media-body">
                      <h6 className="my-0 text-dark d-block">Oz Coruhlu</h6>
                      <small>Director of UI/UX</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat this block for each card */}
        </div>


        <div className="row">
          {/* Repeat this block for each card */}
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card text-dark card-has-bg click-col" style={{ backgroundImage: "url('https://images.pexels.com/photos/1181401/pexels-photo-1181401.jpeg?auto=compress&cs=tinysrgb&w=600')" }}>
            <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="" />
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">Thought Leadership</small>
                  <h4 className="card-title mt-0 ">Web Development Lorem Ipsum Sit Amet Consectetur dipisi?</h4>
                  <small><i className="far fa-clock"></i> October 15, 2020</small>
                </div>
                <div className="card-footer">
                  <div className="media">
                  <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="" />
                    <div className="media-body">
                      <h6 className="my-0 text-dark d-block">Oz Coruhlu</h6>
                      <small>Director of UI/UX</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat this block for each card */}

          {/* Repeat this block for each card */}
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card text-dark card-has-bg click-col" style={{ backgroundImage: "url('https://images.pexels.com/photos/3205567/pexels-photo-3205567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
            <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="" />
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">Thought Leadership</small>
                  <h4 className="card-title mt-0 ">Web Development Lorem Ipsum Sit Amet Consectetur dipisi?</h4>
                  <small><i className="far fa-clock"></i> October 15, 2020</small>
                </div>
                <div className="card-footer">
                  <div className="media">
                  <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="" />
                    <div className="media-body">
                      <h6 className="my-0 text-dark d-block">Oz Coruhlu</h6>
                      <small>Director of UI/UX</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat this block for each card */}

          {/* Repeat this block for each card */}
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card text-dark card-has-bg click-col" style={{ backgroundImage: "url('https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600')" }}>
            <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="" />
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">Thought Leadership</small>
                  <h4 className="card-title mt-0 ">Web Development Lorem Ipsum Sit Amet Consectetur dipisi?</h4>
                  <small><i className="far fa-clock"></i> October 15, 2020</small>
                </div>
                <div className="card-footer">
                  <div className="media">
                  <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="" />
                    <div className="media-body">
                      <h6 className="my-0 text-dark d-block">Oz Coruhlu</h6>
                      <small>Director of UI/UX</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat this block for each card */}
        </div>
      </div>
    </section>
    </div>
    </StyledEventWrapper>
    </>
  );
};

export default Event;