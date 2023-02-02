import "./home.css";

import Card from "../Card/Card";

// import { Faker } from "react-fakers";

import { toast } from "react-toastify";

import { ToastContainer } from "react-toastify";

import { useEffect } from "react";
import ProductList from "../ProductList/ProductList";

const Home = () => {
  useEffect(() => Slider(0), []);
  return (
    <>
      <div className="home">
        <div className="home_container">
          <div className="HomeToastContainer">
            <ToastContainer />
          </div>
          <div className="homeSliderContainer">
            <div className="homeSlider">
              <img
                className="homeImg"
                src="https://m.media-amazon.com/images/I/81QheDHhSZL._SX3000_.jpg"
                alt=""
              />
            </div>
            <div className="homeSlider">
              <img
                className="homeImg"
                src="https://m.media-amazon.com/images/I/71usv3CIbTL._SX3000_.jpg"
                alt=""
              />
            </div>
            <div className="homeSlider">
              <img
                className="homeImg"
                src="https://m.media-amazon.com/images/I/8160RuRhSUL._SX3000_.jpg"
                alt=""
              />
            </div>
            <div className="homeSlider">
              <img
                className="homeImg"
                src="https://m.media-amazon.com/images/I/613-gA49v1L._SX3000_.jpg"
                alt=""
              />
            </div>
            <div className="homeSlider">
              <img
                className="homeImg"
                src="https://m.media-amazon.com/images/I/71vUdED1neL._SX3000_.jpg"
                alt=""
              />
            </div>
            <div className="homeSlider">
              <img
                className="homeImg"
                src="https://m.media-amazon.com/images/I/61BU2hYH4eL._SX3000_.jpg"
                alt=""
              />
            </div>
            <div className="homeSlider">
              <img
                className="homeImg"
                src="https://m.media-amazon.com/images/I/61cSuY2zmjL._SX3000_.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="Home_row">
            {/* Products => ProductID ,Title ,Rating,Price,IMg */}

            <ProductList
              title="Goldenize Fashion New Kids Digital"
              price={1999}
              image="https://images-eu.ssl-images-amazon.com/images/I/41jFOMMObvS._AC_SX368_.jpg"
              rating={4}
            />
            <ProductList
              title="Tecno Spark 8T (Turquoise Cyan, 4GB RAM,64GB Storage) | 50MP AI Camera | 7GB Expandable RAM "
              price={11999}
              image="https://m.media-amazon.com/images/I/81f+Gc9VBqL._AC_UF894,1000_QL80_FMwebp_.jpg"
              rating={4.5}
            />
            <ProductList
              title="boAt Immortal IM1000D Dual"
              price={599}
              image="https://images-eu.ssl-images-amazon.com/images/I/411zO-6GqjS._AC_SX368_.jpg"
              rating={4}
            />
            <ProductList
              title="RPM Euro Games Laptop/PC Controller Wired for Windows - 7, 8"
              price={890}
              image="https://images-eu.ssl-images-amazon.com/images/I/41mRWV0YG8L._AC_SX368_.jpg"
              rating={4.5}
            />
            
            
          </div>
            {/* Second Row */}
          <div className="Home_row">
            {/* Products => ProductID ,Title ,Rating,Price,IMg */}

            <ProductList
              title="Goldenize Fashion New Kids Digital"
              price={1999}
              image="https://images-eu.ssl-images-amazon.com/images/I/41jFOMMObvS._AC_SX368_.jpg"
              rating={5}
            />
            <ProductList
              title="Tecno Spark 8T (Turquoise Cyan, 4GB RAM,64GB Storage) | 50MP AI Camera | 7GB Expandable RAM "
              price={11999}
              image="https://m.media-amazon.com/images/I/81f+Gc9VBqL._AC_UF894,1000_QL80_FMwebp_.jpg"
              rating={4}
            />
            <ProductList
              title="boAt Immortal IM1000D Dual"
              price={599}
              image="https://images-eu.ssl-images-amazon.com/images/I/411zO-6GqjS._AC_SX368_.jpg"
              rating={4.5}
            />
            <ProductList
              title="RPM Euro Games Laptop/PC Controller Wired for Windows - 7, 8"
              price={890}
              image="https://images-eu.ssl-images-amazon.com/images/I/41mRWV0YG8L._AC_SX368_.jpg"
              rating={4}
            />
            
            
          </div>
          {/* Third Row */}
          <div className="Home_row">
            {/* Products => ProductID ,Title ,Rating,Price,IMg */}

            <ProductList
              title="Goldenize Fashion New Kids Digital"
              price={1999}
              image="https://images-eu.ssl-images-amazon.com/images/I/41jFOMMObvS._AC_SX368_.jpg"
              rating={5}
            />
            <ProductList
              title="Tecno Spark 8T (Turquoise Cyan, 4GB RAM,64GB Storage) | 50MP AI Camera | 7GB Expandable RAM "
              price={11999}
              image="https://m.media-amazon.com/images/I/81f+Gc9VBqL._AC_UF894,1000_QL80_FMwebp_.jpg"
              rating={4}
            />
            <ProductList
              title="boAt Immortal IM1000D Dual"
              price={599}
              image="https://images-eu.ssl-images-amazon.com/images/I/411zO-6GqjS._AC_SX368_.jpg"
              rating={4}
            />
            <ProductList
              title="RPM Euro Games Laptop/PC Controller Wired for Windows - 7, 8"
              price={890}
              image="https://images-eu.ssl-images-amazon.com/images/I/41mRWV0YG8L._AC_SX368_.jpg"
              rating={4.5}
            />
            
            
          </div>
          {/* Fourth Row */}
          <div className="Home_row">
            {/* Products => ProductID ,Title ,Rating,Price,IMg */}

            <ProductList
              title="Goldenize Fashion New Kids Digital"
              price={1999}
              image="https://images-eu.ssl-images-amazon.com/images/I/41jFOMMObvS._AC_SX368_.jpg"
              rating={4.5}
            />
            <ProductList
              title="Tecno Spark 8T (Turquoise Cyan, 4GB RAM,64GB Storage) | 50MP AI Camera | 7GB Expandable RAM "
              price={11999}
              image="https://m.media-amazon.com/images/I/81f+Gc9VBqL._AC_UF894,1000_QL80_FMwebp_.jpg"
              rating={4}
            />
            <ProductList
              title="boAt Immortal IM1000D Dual"
              price={599}
              image="https://images-eu.ssl-images-amazon.com/images/I/411zO-6GqjS._AC_SX368_.jpg"
              rating={4}
            />
            <ProductList
              title="RPM Euro Games Laptop/PC Controller Wired for Windows - 7, 8"
              price={890}
              image="https://images-eu.ssl-images-amazon.com/images/I/41mRWV0YG8L._AC_SX368_.jpg"
              rating={4.5}
            />
            
            
          </div>
          {/* Fifth Row */}
          <div className="Home_row">
            {/* Products => ProductID ,Title ,Rating,Price,IMg */}

            <ProductList
              title="Goldenize Fashion New Kids Digital"
              price={1999}
              image="https://images-eu.ssl-images-amazon.com/images/I/41jFOMMObvS._AC_SX368_.jpg"
              rating={4.5}
            />
            <ProductList
              title="Tecno Spark 8T (Turquoise Cyan, 4GB RAM,64GB Storage) | 50MP AI Camera | 7GB Expandable RAM "
              price={11999}
              image="https://m.media-amazon.com/images/I/81f+Gc9VBqL._AC_UF894,1000_QL80_FMwebp_.jpg"
              rating={4}
            />
            <ProductList
              title="boAt Immortal IM1000D Dual"
              price={599}
              image="https://images-eu.ssl-images-amazon.com/images/I/411zO-6GqjS._AC_SX368_.jpg"
              rating={5}
            />
            <ProductList
              title="RPM Euro Games Laptop/PC Controller Wired for Windows - 7, 8"
              price={890}
              image="https://images-eu.ssl-images-amazon.com/images/I/41mRWV0YG8L._AC_SX368_.jpg"
              rating={4.5}
            />
            
            
          </div>
        </div>
      </div>
    </>
  );

  //  JavaScripts for Slider
  function Slider(Counter) {
    const slides = document.querySelectorAll(" .homeImg");
    slides.forEach((slide, index) => {
      if (index !== Counter) {
        slide.style.visibility = `hidden`;
        slide.classList.add(`image-${index}`);
      }
    });
    moveCorousal(Counter, slides, slides.length);
  }

  function moveCorousal(Counter, slides, len) {
    if (slides) {
      if (Counter >= len - 1) Counter = 0;
      else Counter += 1;
      slides.forEach((slide, index) => {
        if (index === Counter) {
          slide.style.visibility = `visible`;
        } else {
          slide.style.visibility = `hidden`;
        }
      });
    }
    setTimeout(() => {
      moveCorousal(Counter, slides, len);
    }, 5000);
  }
};
export default Home;
