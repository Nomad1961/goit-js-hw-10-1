// 2-snackbar.js
// import iziToast from 'izitoast';

// document.querySelector('.form').addEventListener('submit', function (event) {
//   event.preventDefault();

//   const delay = document.querySelector('input[name="delay"]').value;
//   const state = document.querySelector('input[name="state"]:checked').value;

//   const promise = new Promise((resolve, reject) => {
//     if (state === 'fulfilled') {
//       setTimeout(() => resolve(delay), delay);
//     } else {
//       setTimeout(() => reject(delay), delay);
//     }
//   });

//   promise
//     .then(value => {
//       iziToast.success({
//         title: 'Success',
//         message: `✅ Fulfilled promise in ${value}ms`,
//       });
//     })
//     .catch(value => {
//       iziToast.error({
//         title: 'Error',
//         message: `❌ Rejected promise in ${value}ms`,
//       });
//     });
// });
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delayInput = document.querySelector('input[name="delay"]');
  const delay = parseInt(delayInput.value);

  const state = document.querySelector('input[name="state"]:checked').value;

  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => resolve(delay), delay);
    } else {
      setTimeout(() => reject(delay), delay);
    }
  });

  promise
    .then(value => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${value}ms`,
      });
    })
    .catch(value => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${value}ms`,
      });
    });
});
