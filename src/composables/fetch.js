import { isRef, ref, unref, watchEffect } from 'vue';

export function useFetch(url, options = {}) {
  const data = ref(null);
  const isFetching = ref(true);
  const error = ref(null);

  // Tracks the most recent invocation so a slow/stale fetch can't overwrite
  // the result of a newer one when the URL changes rapidly.
  let latestFetchId = 0;

  async function doFetch() {
    const fetchId = ++latestFetchId;

    data.value = null;
    error.value = null;

    // resolve the url value synchronously so it's tracked as a
    // dependency by watchEffect()
    const urlValue = unref(url);

    try {
      isFetching.value = true;
      const res = await fetch(urlValue, options);
      const json = await res.json();
      if (fetchId !== latestFetchId) return;
      data.value = json;
    } catch (e) {
      if (fetchId !== latestFetchId) return;
      error.value = e;
    } finally {
      if (fetchId === latestFetchId) isFetching.value = false;
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
