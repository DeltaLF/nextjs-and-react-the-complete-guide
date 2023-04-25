function registerNewsletter(email) {
  return fetch("/api/newsletter", {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

export { registerNewsletter };
