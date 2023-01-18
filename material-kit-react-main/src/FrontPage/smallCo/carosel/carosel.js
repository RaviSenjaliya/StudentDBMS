import Carousel from 'react-bootstrap/Carousel';
import 'aos/dist/aos.css';
import './carosel.css';

function CarouselFade() {
  return (
    <Carousel fade className="caro-top">
      <Carousel.Item className="caro1 carousel-itemm">
        <div className="caropading  py-4 row ">
          <div className="col-md Carocenter  ">
            <h1>
              Online & Offline <br /> Examination
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed adipisci libero quae ducimus
              recusandae tenetur impedit sunt consequatur?
            </p>
            <div className="carobtn">
              <button className="btn btn-dark p-2 rounded-5  px-3 btn-csss">GET STARTED</button>
            </div>
          </div>
          <div className="col-md" />
        </div>
      </Carousel.Item>
      <Carousel.Item className="caro2 carousel-itemm">
        <div className="caropading  py-4 row ">
          <div className="col-md Carocenter  ">
            <h1>
              Admission Management <br /> System
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed adipisci libero quae ducimus
              recusandae tenetur impedit sunt consequatur?
            </p>
            <div className="carobtn">
              <button className="btn btn-dark p-2 rounded-5  px-3  btn-csss">GET STARTED</button>
            </div>
          </div>
          <div className="col-md" />
        </div>
      </Carousel.Item>
      <Carousel.Item className="caro3 carousel-itemm">
        <div className="caropading  py-4 row ">
          <div className="col-md Carocenter  ">
            <h1>
              Online Students <br /> Registration
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed adipisci libero quae ducimus
              recusandae tenetur impedit sunt consequatur?
            </p>
            <div className="carobtn">
              <button className="btn btn-dark p-2 rounded-5  px-3 btn-csss ">GET STARTED</button>
            </div>
          </div>
          <div className="col-md" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
