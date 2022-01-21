

export const toQueryString = data => (
  Object
    .keys(data)
    .map((key) => {
      const val = data[key];
      const stringifiedVal = typeof val === 'object'
        ? JSON.stringify(val)
        : val;
      return `${encodeURIComponent(key)}=${encodeURIComponent(stringifiedVal)}`;
    })
    .join('&')
);
