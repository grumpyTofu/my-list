import { generatedApi } from "./api.generated";

export const api = generatedApi.enhanceEndpoints({
  addTagTypes: ["Todos"],
  endpoints: {
    getTodos: {
      providesTags: (result) =>
        result ? [...result.map(({ id }) => ({ type: "Todos" as const, id })), { type: "Todos", id: "LIST" }] : [{ type: "Todos", id: "LIST" }],
    },
  },
});

export const { useGetTodosQuery } = api;
