/// <reference types="react-scripts" />
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT?: string;
      REACT_APP_API_URL: string;
    }
  }
}

export {};
