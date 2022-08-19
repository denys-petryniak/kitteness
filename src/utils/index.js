const API_URL = process.env.VUE_APP_API_ENDPOINT;
const API_KEY = process.env.VUE_APP_API_KEY;

export function getFetchUrl({ path, params }) {
  const url = new URL(`${API_URL}${path}`);
  const requiredParams = { api_key: API_KEY, ...params };
  url.search = new URLSearchParams(requiredParams).toString();

  return url;
}
