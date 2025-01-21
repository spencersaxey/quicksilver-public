require('dotenv').config();

const { JWT_KEY: jwtKey, PORT: port } = process.env;

if (typeof jwtKey !== 'string') throw new Error('Missing JWT_KEY in .env');
export const JWT_KEY = jwtKey;

if (typeof port !== 'string') throw new Error('Missing PORT in .env');
export const PORT = port;
