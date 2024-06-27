import "./Discount.css";
import { MdAddShoppingCart } from "react-icons/md";
import uuid4 from "uuid4";

import discountProducts from "../../data/dicountProducts";

import saleLayer from "../../assets/images/sale_bg.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, FreeMode, Navigation, Mousewheel } from "swiper/modules";
import { Link } from "react-router-dom";

function Discount() {
  return (
    <section id="discount">
      <div className="container">
        <h2 className="discount-title">Горячие за неделью</h2>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          mousewheel={true}
          modules={[FreeMode, Pagination, Navigation, Mousewheel]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            710: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 45,
            },
          }}
          className="mySwiper"
        >
          {discountProducts &&
            discountProducts.map((product) => (
              <SwiperSlide className="discount-slide" key={uuid4()}>
                <div className="sale-layer">
                  <img src={saleLayer} alt="sale layer" />
                  <span>{product.discount}</span>
                </div>
                <h4>{product.title}</h4>
                {
                  <Link className="discount-product-img" to="/details">
                    <img src={product.img} alt={product.title} />
                  </Link>
                }
                <p className="discount-text">{product.text}</p>
                <p className="discount-price">{product.price}</p>
                <a href="#" className="discount-add-cart">
                  Add to cart <MdAddShoppingCart className="cart-icon" />
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Discount;
