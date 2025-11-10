import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    // Load any home-specific scripts if needed
  }, [])

  return (
    <main>
      {/* ========== Start Home Hero Section ========== */}
      <section className="section-hero">
        <div className="container grid grid-two--cols">
          <div className="section-hero--content">
            <p className="hero-subheading">Explore the Latest in Tech Industries</p>
            <h1 className="hero-heading">
             EasyShop Your Destination for Cutting-Edge Gadgets!
            </h1>
            <p className="hero-para">
              Welcome to EasyShop eComStore, your ultimate destination for
              cutting-edge gadgets! Explore the latest in tech innovation and
              style with us. Shop now and discover a world of possibilities!
            </p>
            <div className="hero-btn">
              <Link to="/products" className="btn">Explore Our Products</Link>
            </div>
          </div>
          <div
            className="section-hero-image"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <figure>
              <img
                src="./images/heroSection.svg"
                alt="coding languages using html css js"
              />
            </figure>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1696038172">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      {/* ========== End Home Hero Section ========== */}

      {/* ========== Start Extra Product Section ========== */}
      <section className="section-extra-product">
        <div className="container grid grid-three--cols">
          <div className="div-extra grid grid-two--cols">
            <div className="extra-text">
              <p>new year sale</p>
              <h3>get and extra 50% off</h3>
              <a href="#">Show now</a>
            </div>
            <div className="extra-img extra-laptop">
              <img src="./images/laptop.png" alt="" />
            </div>
          </div>

          <div className="div-extra grid grid-two--cols">
            <div className="extra-text">
              <p>new year sale</p>
              <h3>40% discount on speakers</h3>
              <a href="#">Show now</a>
            </div>
            <div className="extra-img">
              <img src="./images/headphoneEcom.png" alt="" />
            </div>
          </div>

          <div className="div-extra grid grid-two--cols">
            <div className="extra-text">
              <p>new year sale</p>
              <h3>get and extra 50% off</h3>
              <a href="#">Show now</a>
            </div>
            <div className="extra-img">
              <img src="./images/mobiles.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* ========== End Extra Product Section ========== */}

      {/* ========== Start policy ========== */}
      <section className="section-policy">
        <div className="container grid grid-four--cols">
          <div className="div-policy">
            <div className="icons">
              <i className="fa-solid fa-truck-fast"></i>
            </div>
            <div className="div-policy-text">
              <p>worldwide shipping</p>
              <p>order above $100</p>
            </div>
          </div>

          <div className="div-policy">
            <div className="icons">
              <i className="fa-solid fa-rotate"></i>
            </div>
            <div className="div-policy-text">
              <p>Easy 30 Day Returns</p>
              <p>Back Returns in 7 Days</p>
            </div>
          </div>

          <div className="div-policy">
            <div className="icons">
              <i className="fa-solid fa-hand-holding-dollar"></i>
            </div>
            <div className="div-policy-text">
              <p>money back guarantee</p>
              <p>guarantee with in 30-Days</p>
            </div>
          </div>

          <div className="div-policy">
            <div className="icons">
              <i className="fa-solid fa-headset"></i>
            </div>
            <div className="div-policy-text">
              <p>Easy Online Support</p>
              <p>24/7 Any time support</p>
            </div>
          </div>
        </div>
      </section>
      {/* ========== End policy ========== */}

      {/* ========== Start Our Products Section ========== */}
      <section className="section-products container">
        <div className="">
          <h2 className="section-common--heading">Checkout EasyShop</h2>
        </div>

        <section className="container">
          <div id="productContainer"></div>
        </section>
      </section>

      {/* ========== Start Product Template Section ========== */}
      <template id="productTemplate">
        <div className="cards" id="cardValue">
          <article className="information [card]">
            <span className="category"></span>
            <div className="imageContainer">
              <img className="productImage" src="" alt="" />
            </div>
            <h2 className="productName"></h2>

            <div className="productRating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>

            <p className="productDescription"></p>

            <div className="productPriceElement">
              <p className="productPrice"></p>
              <p className="productActualPrice"></p>
            </div>

            <div className="productStockElement">
              <p className="productProperty">Total Stocks Available:</p>
              <p className="productStock"></p>
            </div>

            <div className="productQuantityElement">
              <p className="productProperty">Quantity(Pieces)</p>
              <div className="stockElement">
                <button className="cartIncrement">+</button>
                <p className="productQuantity">1</p>
                <button className="cartDecrement">-</button>
              </div>
            </div>

            <button className="add-to-cart-button">
              <i className="fa-solid fa-cart-shopping"></i> Add To Cart
            </button>
          </article>
        </div>
      </template>
      {/* ========== End Product Template Section ========== */}

      {/* ========== End Our Products Section ========== */}

      {/* ========== Start Why Choose Us Section ========== */}
      <section className="section-why--choose">
        <div className="container">
          <h2 className="section-common--heading">Why Choose EasyShop</h2>
          <p className="section-common--subheading">
            Choose EasyShop EduHub for a holistic, enriching learning experience that
            empowers you to achieve your goals.
          </p>
        </div>

        <div className="container grid grid-three--cols">
          <div className="choose-left-div text-align--right">
            <div className="why-choose--div" data-aos="zoom-in-up" data-aos-delay="0">
              <p className="common-text--highlight">1</p>
              <h3 className="section-common--title">Wide Selection</h3>
              <p>
                EasyShop offers a diverse range of gadgets, from smartphones to
                smart home devices, ensuring you find what you need to elevate
                your lifestyle and meet your tech requirements.
              </p>
            </div>

            <div
              className="why-choose--div"
              data-aos="zoom-in-up"
              data-aos-delay="300"
            >
              <p className="common-text--highlight">2</p>
              <h3 className="section-common--title">Quality Assurance</h3>
              <p>
                Every gadget at EasyShop undergoes rigorous quality checks,
                guaranteeing reliability and performance, so you can shop with
                confidence knowing you're getting the best.
              </p>
            </div>

            <div
              className="why-choose--div"
              data-aos="zoom-in-up"
              data-aos-delay="600"
            >
              <p className="common-text--highlight">3</p>
              <h3 className="section-common--title">Competitive Prices</h3>
              <p>
                Enjoy great value with EasyShop competitive prices on
                high-quality gadgets, making top-of-the-line technology accessible
                to all without compromising on quality or performance.
              </p>
            </div>
          </div>
          <div className="choose-center-div" data-aos="zoom-in" data-aos-delay="300">
            <figure>
              <img src="./images/ecompost.png" alt="thapa technical home page " />
            </figure>
          </div>
          <div className="choose-right-div">
            <div
              className="why-choose--div text-align--left"
              data-aos="zoom-in-up"
              data-aos-delay="0"
            >
              <p className="common-text--highlight">4</p>
              <h3 className="section-common--title">Expert Guidance</h3>
              <p>
                Our knowledgeable staff provides expert guidance, helping you
                choose the right gadget to meet your needs and preferences,
                ensuring you make informed decisions every step of the way.
              </p>
            </div>

            <div
              className="why-choose--div text-align--left"
              data-aos="zoom-in-up"
              data-aos-delay="300"
            >
              <p className="common-text--highlight">5</p>
              <h3 className="section-common--title">Convenient Shopping</h3>
              <p>
                With EasyShop, shopping for gadgets is easy and convenient. Our
                user-friendly website and secure payment options ensure a seamless
                experience from browsing to checkout, all from the comfort of your
                home.
              </p>
            </div>

            <div
              className="why-choose--div text-align--left"
              data-aos="zoom-in-up"
              data-aos-delay="600"
            >
              <p className="common-text--highlight">6</p>
              <h3 className="section-common--title">Excellent Service</h3>
              <p>
                EasyShop is committed to providing excellent service to our
                customers. From prompt assistance with inquiries to efficient
                handling of orders and deliveries, we prioritize your satisfaction
                every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ========== End   Why Choose Us Section ========== */}
    </main>
  )
}

export default Home
