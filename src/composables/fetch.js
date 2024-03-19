import { isRef, ref, unref, watchEffect } from 'vue';

export function useFetch(url) {
  const data = ref(null);
  const isFetching = ref(true);
  const error = ref(null);

  async function doFetch() {
    // reset state before fetching..
    data.value = null;
    error.value = null;

    // resolve the url value synchronously so it's tracked as a
    // dependency by watchEffect()
    const urlValue = unref(url);

    try {
      // unref() will return the ref value if it's a ref
      // otherwise the value will be returned as-is
      isFetching.value = true;
      const res = await fetch(urlValue);
      data.value = await res.json();
    } catch (e) {
      error.value = e;
    } finally {
      isFetching.value = false;
    }
  }

  if (isRef(url)) {
    // setup reactive re-fetch if input URL is a ref
    watchEffect(doFetch);
  } else {
    // otherwise, just fetch once
    doFetch();
  }

  return { data, isFetching, error, retry: doFetch };
}
