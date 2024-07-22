

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value
  const subject = document.getElementById('subject').value

  const template = {
      name: name,
      email: email,
      message: message,
      subject: subject
  }
  emailjs.send('service_647f3ya', 'template_15puhbk', template)
      .then(function restForm() {
          console.log('Message sent successfully!');
          document.getElementById("contact-form").reset();
          alert("Your Messege Sent Successfully !!");
      }, function (error) {
          console.log('Failed to send message. Please try again.');
          console.log('FAILED...', error);
          alert("Failed to Send Message. Please try again !!");
      });
});