import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const updateCartCount = () => {
      const cartProducts = JSON.parse(localStorage.getItem('cartProductLS')) || []
      const totalCount = cartProducts.reduce((total, product) => total + product.quantity, 0)
      setCartCount(totalCount)
    }

    updateCartCount()
    window.addEventListener('storage', updateCartCount)
    return () => window.removeEventListener('storage', updateCartCount)
  }, [])

  return (
    <header className="section-navbar">
      <section className="top_txt">
        <div className="head container">
          <div className="head_txt">
            <p>Free shipping, 30-day return or refund guarantee BY EasyShop.</p>
          </div>
          <div className="sing_in_up">
            <Link to="/signin">SIGN IN</Link>
            <a href="# ">SIGN UP</a>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <img
              src="/images/image.png"
              alt="EasyShop"
              className="logo spec"
              width="200px"
              height="auto"
            />
          </Link>
        </div>

        <nav className="navbar">
          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">about</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">products</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">contact</Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className="nav-link add-to-cart-button"
                id="cartValue"
              >
                <i className="fa-solid fa-cart-shopping"> {cartCount} </i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
