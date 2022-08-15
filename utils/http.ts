import axios from 'axios';

const isServer = typeof window === 'undefined';

console.log('HTTP LOGS');
console.log(process.env.API_LOCALHOST + ':' + process.env.PORT);

export const http = axios.create({
    baseURL: isServer ? 'http://localhost:3000/api' : '/api',
});
