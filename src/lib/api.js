const BASE_URL = "https://alfa-leetcode-api.onrender.com/";

export async function getUser(username) {
  const response = await fetch(`${BASE_URL}/${username}`);

  if (!response.ok) {
    throw new Error("User not found");
  }

  return response.json();
}
