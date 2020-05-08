import React from 'react';

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* ======= Header ======= */}
        <header id="header" className="fixed-top d-flex align-items-center">
          <div className="container d-flex align-items-center">

            <div className="logo mr-auto">
              <h1 className="text-light"><a href="index.html"><span>Bootslander</span></a></h1>
              {/* Uncomment below if you prefer to use an image logo */}
              {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}
            </div>

            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active"><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li className="drop-down"><a href="">Drop Down</a>
                  <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li className="drop-down"><a href="#">Drop Down 2</a>
                      <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                    <li><a href="#">Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#contact">Contact</a></li>

              </ul>
            </nav>{/* .nav-menu */}

          </div>
        </header> {/* End Header */}

        {/* ======= Hero Section ======= */}
        <section id="hero">

          <div className="container">
            <div className="row">
              <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                <div data-aos="zoom-out">
                  <h1>Build Your Landing Page With <span>Bootstlander</span></h1>
                  <h2>We are team of talanted designers making websites with Bootstrap</h2>
                  <div className="text-center text-lg-left">
                    <a href="#about" className="btn-get-started scrollto">Get Started</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
                <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>

          <svg
            className="hero-waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28 "
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              ></path>
            </defs>
            <g className="wave1">
              <use xlinkHref="#wave-path" x={50} y={3} fill="rgba(255,255,255, .1)"></use>
            </g>
            <g className="wave2">
              <use xlinkHref="#wave-path" x={50} y={0} fill="rgba(255,255,255, .2)"></use>
            </g>
            <g className="wave3">
              <use xlinkHref="#wave-path" x={50} y={9} fill="#fff"></use>
            </g>
          </svg>

        </section> {/* End Hero */}

      </>
    );
  }
}

export default AppHeader;