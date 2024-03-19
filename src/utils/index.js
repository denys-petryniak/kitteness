const API_URL = process.env.VUE_APP_API_ENDPOINT;
const API_KEY = process.env.VUE_APP_API_KEY;

export function getFetchUrl(path, params = {}) {
  const url = new URL(path, API_URL);

  url.searchParams.append('api_key', API_KEY);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  return url.toString();
}
