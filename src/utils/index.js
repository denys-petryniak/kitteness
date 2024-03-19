const API_URL = process.env.VUE_APP_API_ENDPOINT;

export function getFetchUrl(path, params = {}) {
  const url = new URL(path, API_URL);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  return url.toString();
}
