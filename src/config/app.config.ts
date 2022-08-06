export const EnvConfig = () => ({
  enviroment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  port: process.env.PORT || 3001,
  apiKey: process.env.apiKey || null,
});
