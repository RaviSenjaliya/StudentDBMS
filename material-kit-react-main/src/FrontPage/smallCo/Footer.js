import React from 'react';
import '../AdvancedERP/AdvancedERP.css';
import ScrollToTop from 'react-scroll-to-top';

export default function Footer1() {
  return (
    <div>
      <ScrollToTop smooth top="20" />
      <div className="container-fluid  " style={{ backgroundColor: '#181e23', fontSize: '15px' }}>
        <div className="FooterP text-white">
          <div className="row py-5  ">
            <div className="col-md-8  ">
              <img
                src="https://zenoxerp.com/assets-web/img/demo-content/logo/logo-light.png"
                alt=""
                className=" m-0 p-0 mb-4"
                style={{ width: '22vw' }}
              />
              <br />
              <p>
                ZenoxERP has countless unique features and functionality, which will embrace your handling methodology
                with one touch digital experiences. It has classified features for different kind of users like
                Teachers, Students and Administration. Enhancing the management growth with customized dashboard,
                entities and modules for each user. The system administrator of Schools and Colleges & Institutes have
                large number of data of students and staff, which make it very complicated to organize and manage. They
                are used to supervise and monitor the performance of all the student's through daily reports and
                academic management module. It provides different reports to staff and parents respectively.
              </p>
              <a href="#" className="m-2 p-2">
                <i
                  className="fa fa-facebook-square"
                  style={{ fontSize: '40px', color: '#475993' }}
                  aria-hidden="true"
                />
              </a>
              <a href="#" className="m-2 p-2">
                <i className="fa fa-twitter-square" style={{ fontSize: '40px', color: '#76a9ea' }} aria-hidden="true" />
              </a>
              <a href="#" className="m-2 p-2">
                <i className="fa fa-google" style={{ fontSize: '40px' }} aria-hidden="true" />
              </a>
              <a href="#" className="m-2 p-2">
                <i className="fa fa-youtube-play" style={{ fontSize: '40px', color: '#f61c0d' }} aria-hidden="true" />
              </a>
            </div>
            <div className="col-md-4 " style={{ lineHeight: '2' }}>
              <br />
              <h3>
                <b>Services</b>
              </h3>
              <a href="#" className="text-white">
                <small>▶</small> School Management Software
              </a>
              <br />
              <a href="#" className="text-white">
                <small>▶</small> Coaching Class Management Software
              </a>
              <br />
              <a href="#" className="text-white">
                <small>▶</small> Training Institute Management Software
              </a>
              <br />
              <a href="#" className="text-white">
                <small>▶</small> PreSchool Management Software
              </a>
            </div>
          </div>
          <hr />
          {/* ------------------------------------------------------------------- */}
        </div>
        <div className="container footer-B  text-white">
          <div className="row py-5  ">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-5">
              <h5>Sales</h5>
              <h4>
                <a href="tel:+8160135356" className="text-white">
                  +91 8160135356
                </a>
              </h4>
              <h4>
                <a href="tel:+9313455405" className="text-white">
                  +91 9313455405
                </a>
              </h4>
              <h5>Support</h5>
              <h4>
                <a href="tel:+9313455405" className="text-white">
                  +91 9313455405
                </a>
              </h4>
              <h4>
                <a href="tel:+8160135356" className="text-white">
                  +91 8160135356
                </a>
              </h4>
            </div>
            {/* ----------------------------- */}
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-5">
              <h5>Sales Email</h5>
              <h4>
                <a href="mailto:rajankathiriya99@gmail.com" className="email">
                  rajankathiriya99@gmail.com
                </a>
              </h4>
              <h5>Sales Email</h5>
              <h4>
                <a href="mailto:rajankathiriya99@gmail.com" className="email">
                  ravisenjaliya008@gmail.com
                </a>
              </h4>
            </div>
            {/* ------------------------------- */}
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-5">
              <h4>Head Office Mumbai, India</h4>
              <p>603, B1/Daisy, Kalyan-Shil Road, Padale Gaon-Thane</p>
              <h4>Branch Office Bangalore, India</h4>
              <p>213/60, 11th Cross Wilson Gardens-560027 Bangalore</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black p-2">
        <div className="text-white text-center">© 2022 zenoxerp.com, Designed &amp; Developed by......</div>
      </div>
    </div>
  );
}
