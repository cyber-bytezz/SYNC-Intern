// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form input values
  var name = document.querySelector('input[type="text"]').value;
  var email = document.querySelector('input[type="email"]').value;
  var message = document.querySelector('textarea').value;

  // Perform form validation
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
    return;
  }

  // Send form data to server (replace with your own implementation)
  var formData = {
    name: name,
    email: email,
    message: message
  };

  // Replace the following code with your own implementation for sending the form data to the server
  console.log(formData);
  alert('Form submitted successfully!');
});
