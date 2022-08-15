import axios from 'axios';

const isServer = typeof window === 'undefined';

export const http = axios.create({
    baseURL: isServer ? process.env.API_LOCALHOST : '/api',
});
