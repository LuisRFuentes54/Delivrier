const ID_TOKEN_KEY = "id_token";

export const getToken = () => {
  return localStorage.getItem(ID_TOKEN_KEY);
};

export const saveToken = token => {
  localStorage.setItem(ID_TOKEN_KEY, token);
};

export const destroyToken = () => {
  localStorage.removeItem(ID_TOKEN_KEY);
};

export const authHeaderToken = () => {
  return { Authorization: `Bearer ${getToken()}` };
};

export default { getToken, saveToken, destroyToken };
