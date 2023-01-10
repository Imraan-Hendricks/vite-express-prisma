export const NODE_ENV = process.env.NODE_ENV as 'development' | 'production' | 'test' | 'staging';
export const PORT = parseInt(process.env.PORT as string, 10);

