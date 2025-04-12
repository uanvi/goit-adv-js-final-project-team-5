import yourEnergyAPI from './your-energy-api.js';
import { handleApiError } from './utils/errorHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('subscriptionForm');
  const emailInput = form?.elements?.email;

  const showAlert = message => alert(message);

  const handleSuccess = message => {
    showAlert(message);
    emailInput.value = '';
  };

  form?.addEventListener('submit', async event => {
    event.preventDefault();

    if (!emailInput.checkValidity()) {
      showAlert('Please enter a valid email address.');
      return;
    }

    try {
      const message = await yourEnergyAPI.postSubscription(
        emailInput.value.trim()
      );
      handleSuccess(message);
    } catch (error) {
      handleApiError(error);
    }
  });
});
