import { toQueryString } from './misc.helpers';

// TODO: Environment-specific, so that dev connects to dev and prod to prod
const env = 'dev';
const baseUrl = `https://q93njyaop0.execute-api.us-east-1.amazonaws.com/${env}`;


export const fetchFromAPI = ({ resource, method, data }) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  let url = `${baseUrl}/${resource}`;

  const requestParams = {
    method,
    headers,
    mode: 'cors',
  };

  // 'data' can either be query params or request body, depending on method.
  if (method === 'GET') {
    url += `?${toQueryString(data)}`;
  } else {
    requestParams.body = JSON.stringify(data);
  }

  const request = new Request(url, requestParams);

  return fetch(request).then((response) => {
    if (!response.ok) {
      console.log('FAIL.', response);
      return new Promise((resolve, reject) => {
        response.json().then(reject);
      });
    }

    return response.json();
  });
};
