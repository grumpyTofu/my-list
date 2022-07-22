import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const createBaseQuery = (baseUrl: string) => fetchBaseQuery({ baseUrl });
