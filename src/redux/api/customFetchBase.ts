import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { logout } from "../features/userSlice";

const baseUrl = import.meta.env.VITE_BACKEND_API;

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const user = getUserFromLocalStorage();
    if (user) {
      headers.set("authorization", `Bearer ${user.token}`);
    }
    return headers;
  },
});

const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (
    (result.error?.status === 403 || (result.error?.data as any))?.error ===
    "Token expired"
  ) {
    logout();
  }

  return result;
};

export default customFetchBase;
