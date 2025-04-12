import yourEnergyAPI from './your-energy-api.js';
import iziToast from 'izitoast';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('subscriptionForm');
  const emailInput = form?.elements?.email;

  const showAlert = message => {
    iziToast.warning({
      message: message,
      position: 'topCenter',
    });
  };

  const handleSuccess = message => {
    iziToast.success({
      message: message,
      position: 'topCenter',
    });
    emailInput.value = '';
  };

  form?.addEventListener('submit', async event => {
    event.preventDefault();

    if (!emailInput.checkValidity()) {
      showAlert('Please enter a valid email address.');
      return;
    }

    const message = await yourEnergyAPI.postSubscription(
      emailInput.value.trim(),
    );
    handleSuccess(message);
  });
});
