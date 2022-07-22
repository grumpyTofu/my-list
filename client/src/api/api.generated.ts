import { emptyApi as api } from "./empty";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    appControllerGetHello: build.query<
      AppControllerGetHelloApiResponse,
      AppControllerGetHelloApiArg
    >({
      query: (queryArg) => ({
        url: `/api`,
        params: { "Get Hello": queryArg["Get Hello"] },
      }),
    }),
    getTodos: build.query<GetTodosApiResponse, GetTodosApiArg>({
      query: () => ({ url: `/api/todos` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedApi };
export type AppControllerGetHelloApiResponse = unknown;
export type AppControllerGetHelloApiArg = {
  "Get Hello": any;
};
export type GetTodosApiResponse = /** status 200 Success */ Todo[];
export type GetTodosApiArg = void;
export type Todo = {
  id: number;
  title: string;
  dateCreated: string;
};
