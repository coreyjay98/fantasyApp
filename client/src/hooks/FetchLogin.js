const FetchLogin = async (username, password) => {
  const res = await fetch('/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const response = await res.json();
  return response;
};

export default FetchLogin;
