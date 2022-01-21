const moment = require('moment');
const request = require('request');

const { CLIENT_ID, CLIENT_SECRET } = require('./secrets.js')


module.exports = {
  authenticate({ code }) {
    // We need to create a Base64-encoded string of the auth code
    // with our client secret.
    const stringToEncode = [CLIENT_ID, CLIENT_SECRET].join(':');

    const encodedString =  new Buffer(stringToEncode).toString('base64')

    return new Promise((resolve, reject) => {
      // Exchange the auth code for an access token
      request({
        url: 'https://api.fitbit.com/oauth2/token',
        method: 'post',
        form: {
          code,
          grant_type: 'authorization_code',
          client_id: CLIENT_ID
        },
        headers: {
          'Authorization': `Basic ${encodedString}`,
          'Content-Type': 'application/x-www-form-encoded'
        }
      }, (err, res) => {
        if (err) return reject(err);
        return resolve(JSON.parse(res.body));
      });
    });
  },

  profileInfo({ access_token, user_id }) {
    const url = `https://api.fitbit.com/1/user/${user_id}/profile.json`;

    return makeRequest(url, 'get', access_token);
  },

  waterInfo({ access_token, user_id }) {
    const date = moment().format('YYYY-MM-DD');
    const url = `https://api.fitbit.com/1/user/${user_id}/foods/log/water/date/${date}.json`;

    return makeRequest(url, 'get', access_token);
  },

  waterGoal({ access_token, user_id }) {
    const url = `https://api.fitbit.com/1/user/${user_id}/foods/log/water/goal.json`;

    return makeRequest(url, 'get', access_token);
  }
}


// PRIVATE
function makeRequest(url, method, token) {
  return new Promise((resolve, reject) => {
    request({
      url,
      method,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }, (err, res) => {
      return err ? reject(err) : resolve(JSON.parse(res.body));
    });
  });
}
