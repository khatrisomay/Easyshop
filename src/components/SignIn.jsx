import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simple authentication check
    if (email === 'user@example.com' && password === 'password') {
      // Store authentication state
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('userEmail', email)
      setError('')
      navigate('/') // Redirect to home page
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <main>
      <section className="section-signin">
        <div className="container">
          <div className="signin-form">
            <h2 className="section-common--heading">Sign In to EasyShop</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="btn signin-btn">Sign In</button>
            </form>
            <p className="signin-footer">
              Don't have an account? <a href="/contact">Contact us</a> to get started.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SignIn
