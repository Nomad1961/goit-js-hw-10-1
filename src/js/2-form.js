// 2-form.js
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');

  form.addEventListener('input', function (event) {
    const formData = {
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  window.addEventListener('load', function () {
    const savedData = localStorage.getItem('feedback-form-state');

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      form.elements.email.value = parsedData.email;
      form.elements.message.value = parsedData.message;
    }
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = form.elements.email.value.trim();
    const messageValue = form.elements.message.value.trim();

    if (emailValue && messageValue) {
      console.log({ email: emailValue, message: messageValue });

      localStorage.removeItem('feedback-form-state');
      form.reset();
    } else {
      alert('Please fill in all fields before submitting.');
    }
  });
});
