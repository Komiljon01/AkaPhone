import { Carousel } from "antd";
import "./Showcase.css";
import watch from "../../assets/images/smart_watch.png";
import { GrFormNextLink } from "react-icons/gr";

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
                <img src={watch} alt="" />
                <a href="#">
                  Смарт часы AmazFit <GrFormNextLink />
                </a>
              </div>
              <div className="showcase__slider-item">
                <img src={watch} alt="" />
                <a href="#">
                  Смарт часы AmazFit <GrFormNextLink />
                </a>
              </div>
              <div className="showcase__slider-item">
                <img src={watch} alt="" />
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
