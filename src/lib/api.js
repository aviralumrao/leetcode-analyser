const BASE_URL = "https://alfa-leetcode-api.onrender.com";

export async function getInfo(username) {
  const response = await fetch(`${BASE_URL}/${username}`);
  if (!response.ok) {
    throw new Error("User not found");
  }
  console.log(username);
  return response.json();
}


export async function getUser(username) {
  const response = await fetch(`${BASE_URL}/${username}/profile`);
  if (!response.ok) {
    throw new Error("User not found");
  }
  console.log(username);
  return response.json();
}

export async function getUser_contest(username) {
  const response = await fetch(`${BASE_URL}/${username}/contest`);
  if (!response.ok) {
    throw new Error("User not found");
  }
  console.log(username);
  return response.json();
}

export async function getUser_badges(username) {
  const response = await fetch(`${BASE_URL}/${username}/badges`);
  if (!response.ok) {
    throw new Error("User not found");
  }
  console.log(username);
  return response.json();
}
