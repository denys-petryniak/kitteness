const API_URL = process.env.VUE_APP_API_ENDPOINT;

export function getFetchUrl(path, params = {}) {
  const url = new URL(path, API_URL);

  Object.entries(params).forEach(([key, value]) => {
    // Only append the parameter if its value is not null or undefined
    if (value !== null && value !== undefined) {
      url.searchParams.append(key, value);
    }
  });

  return url.toString();
}
