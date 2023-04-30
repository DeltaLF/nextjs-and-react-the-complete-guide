function registerNewsletter(email) {
  return fetch("/api/newsletter", {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then((data) => {
        throw Error(data.message || "Something went wrong");
      });
    }
  });
}

export { registerNewsletter };
