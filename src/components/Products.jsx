import React, { useState, useEffect } from 'react'
import productsData from '../../api/products.json'

const Products = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    setProducts(productsData)
    // Load cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cartProductLS')) || []
    setCart(savedCart)
  }, [])

  const updateCartValue = (cartProducts) => {
    const totalCount = cartProducts.reduce((total, product) => total + product.quantity, 0)
    // Update cart count in header (this would be handled by Header component)
    const cartValueElement = document.getElementById('cartValue')
    if (cartValueElement) {
      cartValueElement.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${totalCount} </i>`
    }
  }

  const showToast = (operation, id) => {
    // Simple toast implementation
    const toast = document.createElement('div')
    toast.className = 'toast'
    toast.textContent = operation === 'add' ? 'Product added to cart!' : 'Product removed from cart!'
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #4CAF50;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      z-index: 1000;
    `
    document.body.appendChild(toast)
    setTimeout(() => document.body.removeChild(toast), 3000)
  }

  const homeQuantityToggle = (event, id, stock) => {
    const productCard = event.target.closest('.cards')
    const quantityElement = productCard.querySelector('.productQuantity')
    let quantity = parseInt(quantityElement.textContent) || 1

    if (event.target.className === 'cartIncrement') {
      if (quantity < stock) {
        quantity += 1
      }
    }

    if (event.target.className === 'cartDecrement') {
      if (quantity > 1) {
        quantity -= 1
      }
    }

    quantityElement.textContent = quantity
    return quantity
  }

  const addToCart = (event, id, stock) => {
    const productCard = event.target.closest('.cards')
    let quantity = parseInt(productCard.querySelector('.productQuantity').textContent)
    let priceElement = productCard.querySelector('.productPrice')
    let price = parseFloat(priceElement.textContent.replace('₹', ''))

    let existingProd = cart.find((curProd) => curProd.id === id)

    if (existingProd && quantity > 1) {
      quantity = Number(existingProd.quantity) + Number(quantity)
      price = Number(price * quantity)
      let updatedCart = { id, quantity, price }

      const newCart = cart.map((curProd) => {
        return curProd.id === id ? updatedCart : curProd
      })

      setCart(newCart)
      localStorage.setItem('cartProductLS', JSON.stringify(newCart))
      updateCartValue(newCart)
      showToast('add', id)
      return
    }

    if (existingProd) {
      return false
    }

    price = Number(price * quantity)
    quantity = Number(quantity)

    const newCart = [...cart, { id, quantity, price }]
    setCart(newCart)
    localStorage.setItem('cartProductLS', JSON.stringify(newCart))
    updateCartValue(newCart)
    showToast('add', id)
  }

  return (
    <main>
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
          <div id="productContainer" className="grid grid-four--cols">
            {products.map((product) => (
              <div key={product.id} className="cards" id={`card${product.id}`}>
                <article className="information [card]">
                  <span className="category">{product.category}</span>
                  <div className="imageContainer">
                    <img className="productImage" src={product.image} alt={product.name} />
                  </div>
                  <h2 className="productName">{product.name}</h2>

                  <div className="productRating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>

                  <p className="productDescription">{product.description}</p>

                  <div className="productPriceElement">
                    <p className="productPrice">₹{product.price}</p>
                    <p className="productActualPrice">₹{product.price * 4}</p>
                  </div>

                  <div className="productStockElement">
                    <p className="productProperty">Total Stocks Available:</p>
                    <p className="productStock">{product.stock}</p>
                  </div>

                  <div className="productQuantityElement">
                    <p className="productProperty">Quantity(Pieces)</p>
                    <div className="stockElement">
                      <button className="cartIncrement">+</button>
                      <p className="productQuantity">1</p>
                      <button className="cartDecrement">-</button>
                    </div>
                  </div>

                  <button
                    className="add-to-cart-button"
                    onClick={(e) => addToCart(e, product.id, product.stock)}
                  >
                    <i className="fa-solid fa-cart-shopping"></i> Add To Cart
                  </button>
                </article>
              </div>
            ))}
          </div>
        </section>
      </section>
      {/* ========== End Our Products Section ========== */}
    </main>
  )
}

export default Products
