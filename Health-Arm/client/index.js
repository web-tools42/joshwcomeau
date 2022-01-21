const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const $fireButton = $('.js-fire');
const $authButton = $('.js-fitbit-auth');

const FITBIT_CLIENT_ID = '227MPD'
const FITBIT_URL = `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${FITBIT_CLIENT_ID}&expires_in=31536000&scope=nutrition%20profile`;


$authButton.addEventListener('click', ev => {
  window.location = FITBIT_URL;
});

// $fireButton.addEventListener('click', ev => {
//   fetch('/fire', { method: 'POST' })
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => {
//       $fireButton.disabled = true;
//       $fireButton.innerText = 'Fired!'
//     }).catch(error => {
//       console.log('request failed', error)
//     });
// });
//


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}
