import client from "./client";

const postLogin = async (username, password) => {
  const endpoint = "membership/login";
  const response = await fetch(`${client.baseURL}${endpoint}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const data = await response.json();
  return data;
};

export default postLogin;
