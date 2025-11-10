document.getElementById('signinForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');

  // Simple authentication check
  if (email === 'somaykhatri14@gmail.com' && password === 'test@123') {
    // Store authentication state
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userEmail', email);
    errorMessage.style.display = 'none';
    // Redirect to home page
    window.location.href = 'index.html';
  } else {
    errorMessage.textContent = 'Invalid email or password';
    errorMessage.style.display = 'block';
  }
});
