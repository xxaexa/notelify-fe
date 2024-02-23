import { IUserResponse } from "../types";

export const addUserToLocalStorage = (user: IUserResponse) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};

export const saveLocation = (location: any) => {
  if (location && location.pathname) {
    const path = location.pathname + location.search;
    localStorage.setItem("preLoginPath", path);
  }
};

export const getLastLocation = () => {
  return localStorage.getItem("preLoginPath");
};

export const deleteLastLocation = () => {
  localStorage.removeItem("preLoginPath");
};
