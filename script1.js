document.getElementById('showContact').addEventListener('click', function(event) {
  event.preventDefault();
  const modal = document.getElementById('customAlert');
  modal.style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
  const modal = document.getElementById('customAlert');
  modal.style.display = 'none';
});

// Close the modal when the user clicks anywhere outside of it
window.addEventListener('click', function(event) {
  const modal = document.getElementById('customAlert');
  if (event.target == modal) {
      modal.style.display = 'none';
  }
});

// function automatically opens and fills in users email
function sendEmail() {
  const email = "timsbusiness99@gmail.com";
  const subject = "Subject Here";
  const body = "Body content here";

  // Create link
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Opens users default email client
  window.location.href = mailtoLink;
}


//function calls phone number-may only work on mobile devices or devices with a call function
function makeCall() {
  const phoneNumber = "5623861542";

  const telLink = `tel:${phoneNumber}`;

  window.location.href = telLink;
}
