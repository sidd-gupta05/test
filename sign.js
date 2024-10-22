function showForm(formId) {
  // Hide all forms
  const forms = document.querySelectorAll('.form-content');
  forms.forEach(form => form.classList.remove('active'));
  
  // Show the selected form
  document.getElementById(formId).classList.add('active');
  
  // Update the active tab
  const tabs = document.querySelectorAll('.tab-link');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.querySelector(`[onclick="showForm('${formId}')"]`).classList.add('active');
}

document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Collecting data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email-signup').value;
  const password = document.getElementById('password-signup').value;
  const dob = document.getElementById('dob').value;
  const gender = document.getElementById('gender').value;
  const profession = document.getElementById('profession').value;
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;
  
  console.log('Signup Data:', { name, email, password, dob, gender, profession, weight, height });
  
  alert('Signup successfully!');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Collecting data
  const email = document.getElementById('email-login').value;
  const password = document.getElementById('password-login').value;
  
  console.log('Login Data:', { email, password });
  
  alert('Login successfully!');
});

    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Collecting data and other logic...

        // Redirect to page.html after successful signup
        window.location.href = 'page.html';
    });

    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Collecting data and other logic...

        // Redirect to page.html after successful login
        window.location.href = 'page.html';
    });

    // After successful signup or login
sessionStorage.setItem('loggedIn', 'true');

document.addEventListener('DOMContentLoaded', function () {
  const yesRadio = document.getElementById('medical-background-yes');
  const noRadio = document.getElementById('medical-background-no');
  const medicalBackgroundInput = document.getElementById('medical-background-input');

  yesRadio.addEventListener('change', function () {
      if (yesRadio.checked) {
          medicalBackgroundInput.style.display = 'block';
      }
  });

  noRadio.addEventListener('change', function () {
      if (noRadio.checked) {
          medicalBackgroundInput.style.display = 'none';
      }
  });
});


