import { getProduct, getProducts } from '@/services/productServices';
import { Product } from 'interfaces/Product';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        if (req.method.toLocaleLowerCase() !== 'get') {
            res.status(404).end();
            return;
        }

        const handle = req.query['handle'] as string;

        if (typeof handle === 'undefined' || !handle.trim()) {
            res.status(401).end();
            return;
        }

        const product = getProduct(handle);

        if (!product) {
            res.status(404).end();
            return;
        }

        res.send(product);
    } catch (error) {
        debugger;
        res.status(500).send(error);
    }
}
