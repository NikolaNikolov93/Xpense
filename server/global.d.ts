declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    PORT: string;
    MONGO_URI: string;
    JWT_SECRET: string;
    CLIENT_URL: string;
  }
}
