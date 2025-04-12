export const handleApiError = error => {
  if (error.response) {
    const messages = {
      400: 'Bad request: invalid request body.',
      404: 'Endpoint not found.',
      409: 'You are already subscribed.',
      500: 'Server error: please try again later.',
    };
    alert(messages[error.response.status] || 'Unknown server error occurred.');
  } else {
    alert('Unexpected error. Please check your connection and try again.');
  }

  console.error('API Error:', error);
};
