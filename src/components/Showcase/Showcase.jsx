import "./Showcase.css";
import { Carousel } from "antd";
import { GrFormNextLink } from "react-icons/gr";

// Images
import amazfitWatch1 from "../../assets/images/amazfit-watch1.png";
import amazfitWatch2 from "../../assets/images/amazfit-watch2.png";
import amazfitWatch3 from "../../assets/images/amazfit-watch3.png";

function Showcase() {
  return (
    <section id="showcase">
      <div className="container">
        <div className="showcase-wrapper">
          <div className="showcase-content">
            <h2>Смартфоны и гаджеты для близких и друзей по доступной цене</h2>
            <p>
              В нашем магазине вы сможете найти качествунную продукцию по
              досутпным ценам для вашего близкого человека
            </p>
            <div className="showcase-button">
              <a href="#">Посмотреть каталог</a>
            </div>
          </div>

          <div className="showcase-slider">
            <Carousel draggable autoplay>
              <div className="showcase__slider-item">
                <img src={amazfitWatch2} alt="showcase slider image" />
                <a href="#">
                  Смарт часы AmazFit <GrFormNextLink />
                </a>
              </div>
              <div className="showcase__slider-item">
                <img src={amazfitWatch1} alt="showcase slider image" />
                <a href="#">
                  Смарт часы AmazFit <GrFormNextLink />
                </a>
              </div>
              <div className="showcase__slider-item">
                <img src={amazfitWatch3} alt="showcase slider image" />
                <a href="#">
                  Смарт часы AmazFit <GrFormNextLink />
                </a>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
