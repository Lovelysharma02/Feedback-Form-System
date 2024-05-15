document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    var feedback = document.getElementById('feedback').value;
    var rating = document.getElementById('rating').value;
  
    // Validation
    if (feedback.trim() === '') {
      showMessage('Please enter your feedback.', 'error');
      return;
    }
    if (rating < 1 || rating > 5 || isNaN(rating)) {
      showMessage('Please rate us between 1 and 5.', 'error');
      return;
    }
  
    // Simulate sending feedback (replace this with actual backend integration)
    setTimeout(function() {
      showMessage('Thank you for your feedback!', 'success');
      document.getElementById('feedbackForm').reset();
    }, 1000);
  });
  
  function showMessage(message, type) {
    var messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type;
    setTimeout(function() {
      messageDiv.textContent = '';
    }, 3000);
  }