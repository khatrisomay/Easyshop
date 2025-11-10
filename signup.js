document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simple signup - accept any email and password
  if (email && password) {
    // Store authentication state
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userEmail', email);
    // Redirect to home page
    window.location.href = 'index.html';
  }
});
