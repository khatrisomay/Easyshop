import React, { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    // Initialize AOS if needed
    if (window.AOS) {
      window.AOS.init()
    }
  }, [])

  return (
    <main>
      {/* ========== Start Hero-Section ========== */}
      <section className="section-hero">
        <div className="container grid grid-two--cols">
          <div className="section-hero--content">
            <p className="hero-subheading">About EasyShop</p>
            <h1 className="hero-heading">
              Your Trusted E-commerce Partner
            </h1>
            <p className="hero-para">
              EasyShop is your ultimate destination for cutting-edge gadgets and electronics.
              Founded with a passion for technology, we bring you the latest innovations
              with exceptional service and unbeatable value.
            </p>
            <div className="hero-btn">
              <a href="/products" className="btn">Explore Our Products</a>
            </div>
          </div>
          <div
            className="section-hero-image"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <figure>
              <img
                src="/images/heroSection.svg"
                alt="EasyShop about section"
              />
            </figure>
          </div>
        </div>
      </section>
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
      {/* ========== End Hero-Section ========== */}

      {/* ========== Start About Content Section ========== */}
      <section className="section-about-content">
        <div className="container">
          <div className="about-content grid grid-two--cols">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                EasyShop was born from a simple idea: to make technology accessible to everyone.
                We believe that great gadgets shouldn't be complicated to buy or understand.
                That's why we've created a platform that combines cutting-edge products with
                exceptional customer service.
              </p>
              <p>
                Our team of tech enthusiasts carefully curates each product in our catalog,
                ensuring that only the highest quality items make it to our shelves. From
                smartphones to smart home devices, we offer a wide range of products that
                enhance your digital lifestyle.
              </p>
            </div>
            <div className="about-image">
              <img src="/images/ecompost.png" alt="EasyShop team" />
            </div>
          </div>
        </div>
      </section>
      {/* ========== End About Content Section ========== */}

      {/* ========== Start Mission Section ========== */}
      <section className="section-mission">
        <div className="container">
          <h2 className="section-common--heading">Our Mission</h2>
          <div className="mission-content grid grid-three--cols">
            <div className="mission-item">
              <div className="mission-icon">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3>Quality First</h3>
              <p>We are committed to providing only the highest quality products and services to our customers.</p>
            </div>
            <div className="mission-item">
              <div className="mission-icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <h3>Customer Focus</h3>
              <p>Our customers are at the heart of everything we do. We strive to exceed expectations in every interaction.</p>
            </div>
            <div className="mission-item">
              <div className="mission-icon">
                <i className="fa-solid fa-innovation"></i>
              </div>
              <h3>Innovation</h3>
              <p>We continuously seek new ways to improve our products and services through technology and creativity.</p>
            </div>
          </div>
        </div>
      </section>
      {/* ========== End Mission Section ========== */}

      {/* ========== Start Why Choose Us Section ========== */}
      <section className="section-why--choose">
        <div className="container">
          <h2 className="section-common--heading">Why Choose EasyShop</h2>
          <p className="section-common--subheading">
            Choose EasyShop for a seamless, enriching shopping experience that
            empowers you to discover the perfect tech solutions.
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
              <img src="/images/ecompost.png" alt="EasyShop experience" />
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

export default About
