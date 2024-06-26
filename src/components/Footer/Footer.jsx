import "./Footer.css";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import facebook from "../../assets/images/facebook.png";
import telegram from "../../assets/images/telegram.png";
import instagram from "../../assets/images/instagram.png";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-logo">
            <Link to={"/"} className="footer-logo-text">
              <div className="footer-logo-container">
                <img src={logo} alt="footer-logo" />
              </div>
              <p>AkaPhone</p>
            </Link>
            <p className="footer-logo-descr">Качестенное по доступное цену</p>
          </div>

          <ul className="footer-links">
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Каталог продуктов</a>
            </li>
            <li>
              <a href="#">Доставка</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>

          <ul className="footer-products-links">
            <li>
              <a href="#">Смартфоны</a>
            </li>
            <li>
              <a href="#">Смарт Часы</a>
            </li>
            <li>
              <a href="#">Планшеты</a>
            </li>
            <li>
              <a href="#">Камеры</a>
            </li>
            <li>
              <a href="#">Аксессуары</a>
            </li>
          </ul>

          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5239.733278265789!2d69.2735993950113!3d41.33779942499062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5bc3472597%3A0xb7a352920b7c168a!2zRXF1aXBtZW50IGJhemFhciDigJxNYWxpa2HigJ0!5e0!3m2!1sen!2s!4v1719377674574!5m2!1sen!2s"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <ul className="footer-contacts">
            <li className="footer-contacts-links">
              <span>Наш телефон</span>
              <a href="tel:+998(91) 163-12-36">+998(91) 163-12-36</a>
            </li>
            <li className="footer-contacts-links">
              <span>Наш E-mail</span>
              <a href="mailto:info@akaphone.uz">info@akaphone.uz</a>
            </li>
            <li className="footer-contacts-links">
              <span>Наш адрес</span>
              <a href="#">ул Мевазор дом 21</a>
            </li>
            <li className="footer-contacts-social">
              <a href="#">
                <img src={facebook} alt="facebook icon" />
              </a>
              <a href="#">
                <img src={telegram} alt="telegram icon" />
              </a>
              <a href="#">
                <img src={instagram} alt="instagram icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
