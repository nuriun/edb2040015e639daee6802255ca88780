import { getProducts } from '@/services/productServices';
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

        let requestPage = pageString ? parseInt(pageString) : 0;

        const response: Product[] = await getProducts();


        const result = response.filter((p) =>
            query.split(' ').every((word) => p.handle.includes(word)),
        );
        const page_count =
            result.length < 10 ? 1 : Math.ceil(result.length / 10);

        if (requestPage > page_count) {
            requestPage = page_count - 1;
        } else if (requestPage < 0) {
            requestPage = 0;
        }

        var start = (requestPage - 1) * 10;
        var end = start + 10;

        res.send({
            products: result.slice(start, end),
            page_count,
            total_count: result.length,
            currentPage: requestPage,
        });
    } catch (error) {
        res.status(500).send(error);
    }
}
