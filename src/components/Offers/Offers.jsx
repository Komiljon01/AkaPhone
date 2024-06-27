import "./Offers.css";
import { Link } from "react-router-dom";

// Images
import offer1 from "../../assets/images/product-9.png";
import offer2 from "../../assets/images/product-10.png";
import offer3 from "../../assets/images/product-11.png";
import offer4 from "../../assets/images/product-12.png";
import offer5 from "../../assets/images/product-13.png";
import offer6 from "../../assets/images/product-14.png";
import offerDiscountImg from "../../assets/images/sale_bg.png";
import { MdAddShoppingCart } from "react-icons/md";

function Offers() {
  return (
    <section id="offers">
      <div className="container">
        <h3 className="offers-intro">Специальные предложения</h3>

        <div className="offers-cards">
          <div className="offers-card">
            <div className="offers-card-discount">
              <img src={offerDiscountImg} alt="offers card dicscount image" />
              <span>10%</span>
            </div>
            <Link to="/details">
              <img className="offer-card-img" src={offer2} alt="offer image" />
            </Link>

            <div className="offers-card-content">
              <h4>Lenovo IdeaPad L340</h4>
              <p className="offers-card-price">80 ₽</p>
              <a className="add-cart-btn" href="#">
                Add to Cart <MdAddShoppingCart />
              </a>
            </div>
          </div>

          <div className="offers-card">
            <h4>Кресло INDI CA-1613A-1 5</h4>
            <p className="offers-card-price">25 ₽</p>
            <Link to="/details">
              <img className="offer-card-img" src={offer3} alt="offer image" />
            </Link>
            <a className="add-cart-btn" href="#">
              Add to Cart <MdAddShoppingCart />
            </a>
          </div>

          <div className="offers-card">
            <div className="offers-card-discount">
              <img src={offerDiscountImg} alt="offers card dicscount image" />
              <span>10%</span>
            </div>
            <Link to="/details">
              <img className="offer-card-img" src={offer6} alt="offer image" />
            </Link>

            <div className="offers-card-content">
              <h4>Galaxy Tab S6</h4>
              <p className="offers-card-price">25 ₽</p>
              <a className="add-cart-btn" href="#">
                Add to Cart <MdAddShoppingCart />
              </a>
            </div>
          </div>

          <div className="offers-card">
            <div className="offers-card-discount">
              <img src={offerDiscountImg} alt="offers card dicscount image" />
              <span>10%</span>
            </div>
            <Link to="/details">
              <img className="offer-card-img" src={offer5} alt="offer image" />
            </Link>

            <div className="offers-card-content">
              <h4>HyperX Cloud Stinger</h4>
              <p className="offers-card-price">2 ₽</p>
              <a className="add-cart-btn" href="#">
                Add to Cart <MdAddShoppingCart />
              </a>
            </div>
          </div>

          <div className="offers-card">
            <Link to="/details">
              <img className="offer-card-img" src={offer1} alt="offer image" />
            </Link>

            <div className="offers-card-content">
              <h4>Xiaomi Mi Band 3</h4>
              <p className="offers-card-price">3 ₽</p>
              <a className="add-cart-btn" href="#">
                Add to Cart <MdAddShoppingCart />
              </a>
            </div>
          </div>

          <div className="offers-card">
            <div className="offers-card-discount">
              <img src={offerDiscountImg} alt="offers card dicscount image" />
              <span>10%</span>
            </div>
            <Link to="/details">
              <img className="offer-card-img" src={offer4} alt="offer image" />
            </Link>

            <div className="offers-card-content">
              <h4>Holitic Change</h4>
              <p className="offers-card-price">8 ₽</p>
              <a className="add-cart-btn" href="#">
                Add to Cart <MdAddShoppingCart />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
