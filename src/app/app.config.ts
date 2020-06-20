// (2020-06-20)(by Ofadiman)
// TODO: Refactor this to avoid using APP_CONFIG object
export const APP_CONFIG: NodeJS.ProcessEnv = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DATABASE_NAME: process.env.DATABASE_NAME,
  MONGODB_HOST: process.env.MONGODB_HOST,
  MONGODB_PORT: process.env.MONGODB_PORT,
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_SERVICE_API_KEY: process.env.EMAIL_SERVICE_API_KEY,
  JWT_EXPIRES_IN_ACCOUNT_ACTIVATION: process.env.JWT_EXPIRES_IN_ACCOUNT_ACTIVATION,
  JWT_EXPIRES_IN_LOGIN: process.env.JWT_EXPIRES_IN_LOGIN,
  JWT_EXPIRES_IN_PASSWORD_RESET: process.env.JWT_EXPIRES_IN_PASSWORD_RESET,
  JWT_SECRET_ACCOUNT_ACTIVATION: process.env.JWT_SECRET_ACCOUNT_ACTIVATION,
  JWT_SECRET_LOGIN: process.env.JWT_SECRET_LOGIN,
  JWT_SECRET_PASSWORD_RESET: process.env.JWT_SECRET_PASSWORD_RESET,
  CLIENT_URL: process.env.CLIENT_URL
}
