import React, { useState, useEffect } from 'react'
import productsData from '../../api/products.json'

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [subtotal, setSubtotal] = useState(0)
  const [finalTotal, setFinalTotal] = useState(0)

  useEffect(() => {
    loadCartProducts()
  }, [])

  const loadCartProducts = () => {
    const cartData = JSON.parse(localStorage.getItem('cartProductLS')) || []
    setCartProducts(cartData)

    const filtered = productsData.filter((curProd) => {
      return cartData.some((curElem) => curElem.id === curProd.id)
    })
    setFilteredProducts(filtered)

    updateCartTotal(cartData)
  }

  const updateCartTotal = (cartData) => {
    const totalProductPrice = cartData.reduce((accum, curElem) => {
      let productPrice = parseInt(curElem.price) || 0
      return accum + productPrice
    }, 0)

    setSubtotal(totalProductPrice)
    setFinalTotal(totalProductPrice + 50)
  }

  const fetchQuantityFromCartLS = (id, price) => {
    let existingProduct = cartProducts.find((curProd) => curProd.id === id)
    let quantity = 1

    if (existingProduct) {
      quantity = existingProduct.quantity
      price = existingProduct.price
    }

    return { quantity, price }
  }

  const incrementDecrement = (event, id, stock, price) => {
    let quantity = 1
    let localStoragePrice = 0

    let existingProd = cartProducts.find((curProd) => curProd.id === id)

    if (existingProd) {
      quantity = existingProd.quantity
      localStoragePrice = existingProd.price
    } else {
      localStoragePrice = price
      price = price
    }

    if (event.target.className === 'cartIncrement') {
      if (quantity < stock) {
        quantity += 1
      } else if (quantity === stock) {
        quantity = stock
        localStoragePrice = price * stock
      }
    }

    if (event.target.className === 'cartDecrement') {
      if (quantity > 1) {
        quantity -= 1
      }
    }

    localStoragePrice = price * quantity
    localStoragePrice = Number(localStoragePrice.toFixed(2))

    const updatedCart = cartProducts.map((curProd) => {
      return curProd.id === id ? { id, quantity, price: localStoragePrice } : curProd
    })

    setCartProducts(updatedCart)
    localStorage.setItem('cartProductLS', JSON.stringify(updatedCart))
    updateCartTotal(updatedCart)
    loadCartProducts() // Reload to reflect changes
  }

  const removeProdFromCart = (id) => {
    let updatedCart = cartProducts.filter((curProd) => curProd.id !== id)
    setCartProducts(updatedCart)
    localStorage.setItem('cartProductLS', JSON.stringify(updatedCart))
    updateCartTotal(updatedCart)
    loadCartProducts() // Reload to reflect changes

    // Show toast
    showToast('delete', id)
  }

  const showToast = (operation, id) => {
    const toast = document.createElement('div')
    toast.className = 'toast'
    toast.textContent = operation === 'delete' ? 'Product removed from cart!' : 'Product updated!'
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #f44336;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      z-index: 1000;
    `
    document.body.appendChild(toast)
    setTimeout(() => document.body.removeChild(toast), 3000)
  }

  return (
    <main>
      <section className="addToCartElement">
        <div className="container">
          <section>
            <div id="productCartContainer" className="grid grid-four--cols">
              {filteredProducts.map((curProd) => {
                const { category, id, image, name, stock, price } = curProd
                const lSActualData = fetchQuantityFromCartLS(id, price)

                return (
                  <div key={id} className="cards" id={`card${id}`}>
                    <article className="information [ card ]">
                      <div>
                        <span className="category">{category}</span>
                      </div>
                      <div className="imageContainer">
                        <img className="productImage" src={image} alt={name} />
                      </div>

                      <h2 className="productName">{name}</h2>

                      <p className="productPrice">₹{lSActualData.price}</p>

                      <div className="stockElement">
                        <button
                          className="cartIncrement"
                          onClick={(e) => incrementDecrement(e, id, stock, price)}
                        >
                          +
                        </button>
                        <p className="productQuantity" data-quantity={lSActualData.quantity}>
                          {lSActualData.quantity}
                        </p>
                        <button
                          className="cartDecrement"
                          onClick={(e) => incrementDecrement(e, id, stock, price)}
                        >
                          -
                        </button>
                      </div>

                      <button
                        className="add-to-cart-button remove-to-cart-button"
                        onClick={() => removeProdFromCart(id)}
                      >
                        Remove
                      </button>
                    </article>
                  </div>
                )
              })}
            </div>
          </section>

          <section className="productCartTotalElem">
            <div className="productCartTotalElement">
              <p>Selected Offer Summary</p>
              <div className="productOrderTotal">
                <div>
                  <p>Sub Total:</p>
                  <p className="productSubTotal">₹{subtotal}</p>
                </div>
                <div>
                  <p>Tax:</p>
                  <p className="productTax">₹50</p>
                </div>
                <hr />
                <div>
                  <p>Final Total:</p>
                  <p className="productFinalTotal">₹{finalTotal}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Cart
