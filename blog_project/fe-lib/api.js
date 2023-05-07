// frontend api

const wrappedFetch = (...args) => {
  return fetch(...args).then(async (res) => {
    let payload;
    try {
      if (res.status === 204) return null;
      payload = await res.json();
    } catch (e) {
      console.log("error in frontend api", e);
    }
    if (res.ok) {
      return payload;
    }
    return Promise.reject(res.error || new Error("Something went wrong"));
  });
};

export { wrappedFetch };
