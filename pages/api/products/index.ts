import httpProxyMiddleware from 'next-http-proxy-middleware';
import dummy from '../../../utils/dummy.json';

export const config = {
    api: {
        externalResolver: true,
    },
};

export default function handler(req, res) {
    // res.send(dummy);
    httpProxyMiddleware(req, res, {
        target: process.env.BACKEND_URL,
        headers: {
            'X-Access-Token': process.env.ACCESS_TOKEN,
        },
        secure: false,
        pathRewrite: [
            {
                patternStr: '^/api',
                replaceStr: '',
            },
        ],
    });
}
