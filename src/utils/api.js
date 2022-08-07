import { BASE_URL } from "./config";

export const getAllGist = async (userName) => {
  const url = `${BASE_URL}/users/${userName}/gists`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    return { error };
  }
};

export const getGistDetails = async (id) => {
  const url = `${BASE_URL}/gists/${id}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    return { error };
  }
};
