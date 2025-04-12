import iziToast from 'izitoast';

function handleApiError(error) {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        iziToast.warning({
          message: 'Bad request: invalid request body.',
          position: 'topCenter',
        });
        break;
      case 404:
        iziToast.error({
          message: 'Endpoint not found.',
          position: 'topCenter',
        });
        break;
      case 409:
        iziToast.warning({
          message: 'You are already subscribed.',
          position: 'topCenter',
        });
        break;
      case 500:
        iziToast.error({
          message: 'Server error: please try again later.',
          position: 'topCenter',
        });
        break;
      default:
        iziToast.error({
          message: 'Unknown server error occurred.',
          position: 'topCenter',
        });
    }
  } else {
    iziToast.error({
      message: 'Unexpected error. Please check your connection and try again.',
    });
  }

  console.error('API Error:', error);
  throw error;
}

export default handleApiError;
