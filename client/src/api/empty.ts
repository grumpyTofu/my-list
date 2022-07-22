import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { createBaseQuery } from "./baseQuery";

const isDev = process.env.NODE_ENV === "development";

export const emptyApi = createApi({
  reducerPath: "api",
  baseQuery: createBaseQuery(isDev ? "/" : process.env.REACT_APP_API_URL),
  endpoints: () => ({}),
});
