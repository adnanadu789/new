document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you would typically send the data to a server
    // For this example, we will just show a success message

    document.getElementById('responseMessage').innerText = 'Thank you, ' + name + '! Your message has been sent.';
    
    // Clear form fields
    document.getElementById('contactForm').reset();
});
