export const envConstants = {
  isProduction: process.env.NODE_ENV === 'production',
  PAGE_SIZE: process.env.PAGE_SIZE,
  PORT: process.env.PORT,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  MONGODB_URI: process.env.MONGODB_URI,
};
