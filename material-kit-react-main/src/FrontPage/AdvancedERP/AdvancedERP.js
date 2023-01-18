import React from 'react';
import './AdvancedERP.css';
import AdvancedERPapi from '../Datas/ERPapi';
import reviews from '../Datas/ManagementSystem';
import Counterscroll from '../smallCo/Counter';
import Footer1 from '../smallCo/Footer';
import Progressbar from '../smallCo/ProgressBar';
import Header1 from '../smallCo/Navbar/Navbar';
import img from './img/hero-img.png';

export default function AdvancedERP() {
  return (
    <div>
      <Header1 />
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
              <h1>Better Solutions For Your Business</h1>
              <h2>We are team of talented designers making websites with Bootstrap</h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={img} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className=" container-fluid">
        <div className="text-center mt-5 AdvancedERP ">
          <h1>Advanced ERP</h1>
          <Progressbar />
          <p>
            Extremely efficient, fast, secure, automated & user friendly ERP for
            <br />
            <span>Schools, Colleges, Institutes, Coaching Classes & PreSchools</span>
          </p>
        </div>

        {/* ======================= (Advanced ERP) ================================================== */}
        <div className="container mt-5 contantCenter ">
          <div className="row">
            {AdvancedERPapi.map((val, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-5" key={index}>
                  <div className="row">
                    <div className="img col-sm-4">
                      <img src={val.url} alt="img" />
                    </div>
                    <div className="info-box-content col-lg-8 ">
                      <h5 className="info-box-title ">{val.title}</h5>
                      <p className="info-box-text">{val.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* // ====================== (Want call back from our Support Team?) =========================================== */}
      <div id="bg-img">
        <div className=" text-white text-center " id="feturemenu">
          <h1>Want call back from our Support Team?</h1>
          <h5 className=" mt-4">Enter the correct details.</h5>
          <button className="btn  btn-primary rounded-5 mt-3">Send verification code</button>
          <br />
          <img
            className="feturemenu-img"
            src="https://zenoxerp.com/assets-web/img/demo-content/icons/06-seo-score.svg"
            alt=""
          />
        </div>
      </div>
      {/* // ====================== (Management System) =========================================== */}

      <div className="container-fluid aboutfeture">
        {reviews.map((val, index) => {
          if (index % 2 === 0) {
            return (
              <div className=" row  p-5" key={index}>
                <div className="col-md ">
                  <h1>{val.title}</h1>
                  <div>
                    <Progressbar />
                  </div>

                  <p className="p">{val.des1}</p>
                  <p className="info-box-text">
                    <i className="fa fa-check" aria-hidden="true" />
                    {val.des2}
                  </p>
                  <p className="info-box-text">
                    <i className="fa fa-check" aria-hidden="true" />
                    {val.des3}
                  </p>
                  <p className="info-box-text">
                    <i className="fa fa-check" aria-hidden="true" />
                    {val.des4}
                  </p>
                  <div className="btnCSS">
                    <button className="btn btn-danger rounded-5">GET STARTED</button>
                    <button className="mx-3 btn btn-outline-danger rounded-5 ">DEMO LOGIN</button>
                  </div>
                </div>
                <div className="col-md ">
                  <img src={val.url} alt="" />
                </div>
              </div>
            );
          }

          return (
            <div className="row p-5 " id="even" key={index}>
              <div className="col-md ">
                <img src={val.url} alt="" />
              </div>
              <div className="col-md ">
                <h1>{val.title}</h1>
                <div>
                  <Progressbar />
                </div>
                <p className="p">{val.des1}</p>
                <p className="info-box-text">
                  <i className="fa fa-check" aria-hidden="true" />
                  {val.des2}
                </p>
                <p className="info-box-text">
                  <i className="fa fa-check" aria-hidden="true" />
                  {val.des3}
                </p>
                <p className="info-box-text">
                  <i className="fa fa-check" aria-hidden="true" />
                  {val.des4}
                </p>
                <div className="btnCSS">
                  <button className="btn btn-danger rounded-5">GET STARTED</button>
                  <button className="mx-3 btn btn-outline-danger rounded-5 ">DEMO LOGIN</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* ==========================<Automations in our ERP System>================================== */}
      <div id="bg-img">
        <div className=" text-white text-center container-fluid " id="feturemenu2">
          <h1>Automations in our ERP System</h1>
          <div>
            <Progressbar />
          </div>
          <h5 className=" mt-4">Automation speeds up the workflow & reduces human errors!</h5>

          <div className="row  mt-5">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb-5">
              <div className="imgg">
                <img src="https://zenoxerp.com/assets-web/img/demo-content/icons/icon39.svg" alt="" />
              </div>
              <b className="info-box-title"> AUTO RECEIPT GENERATION</b>
              <p className="info-box-textt">
                ZenoxERP School Management Software generates automatic fee receipts upon receipt of payment from the
                payment gateway.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb-5">
              <div className="imgg">
                <img src="https://zenoxerp.com/assets-web/img/demo-content/icons/icon40.svg" alt="" />
              </div>
              <b className="info-box-title"> AUTO FEE REMINDERS</b>
              <p className="info-box-textt">
                ZenoxERP School Management Software sends self-reminders to students / parents for a fee. It helps to
                collect timely fees.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb-5">
              <div className="imgg">
                <img src="	https://zenoxerp.com/assets-web/img/demo-content/icons/icon41.svg" alt="" />
              </div>
              <b className="info-box-title"> AUTO TASK MANAGER</b>
              <p className="info-box-textt">
                With the help of the system-generated task manager feature, users can get notifications about student
                follow-up, PDC, fee follow-up.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb-5">
              <div className="imgg">
                <img src="https://zenoxerp.com/assets-web/img/demo-content/icons/icon28.svg" alt="" />
              </div>
              <b className="info-box-title"> AUTO DAILY REPORTING</b>
              <p className="info-box-textt">
                System will send automatic daily report of total admissions, enquiry, sale, receipts, followps etc. on
                registered WhatsApp no.
              </p>
            </div>
          </div>
          <button className="btn btn-warning rounded-5"> GET STARTED</button>
        </div>
      </div>
      {/* =========================   (counter) ============================================ */}
      <Counterscroll />
      {/* =========================   (Footer) ============================================ */}
      <Footer1 />
    </div>
  );
}
