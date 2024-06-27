import "./Details.css";

import rasm from "../../assets/images/product-1.png";
import { Link } from "react-router-dom";

function Details() {
  return (
    <section id="details">
      <div className="container">
        <div className="details-wrapper">
          <div className="details-img">
            <img src={rasm} alt="rasm" />
          </div>
          <div className="details-content">
            <span className="details-intro">Google</span>
            <h3 className="details-title">Google Pixel - Black</h3>
            <hr />
            <h4>Коротко о товаре</h4>
            <p className="details-descr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ex
              deserunt pariatur! Alias, quod placeat! Impedit quaerat non vel.
              Quod consequuntur molestias ratione sunt, quisquam harum minima
              architecto repellat accusamus.
            </p>
            <p className="details-price">10 ₽</p>

            <div className="details-buttons">
              <Link className="details-btn back-home-link" to="/">
                Back to croducts
              </Link>
              <a className="details-btn add-cart-link" href="$">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
