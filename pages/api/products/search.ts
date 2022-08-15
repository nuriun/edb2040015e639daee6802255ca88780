import { getProducts, searchProducts } from '@/services/productServices';
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

        const query = req.query['query'] as string;
        const pageString = req.query['page'] as string;

        if (typeof query === 'undefined' || !query.trim()) {
            res.send({
                products: [],
                page_count: 1,
                currentPage: 1,
            });
            return;
        }

        var respones = await searchProducts(query, parseInt(pageString || '1'));

        res.send(respones);
    } catch (error) {
        res.status(500).send(error);
    }
}
