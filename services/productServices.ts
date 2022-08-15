import axios from 'axios';
import {
    Product,
    GetProductResponse,
    SearchProductResponse,
} from 'interfaces/Product';
import { http } from 'utils/http';

export const GET_PRODUCTS_URL_PATH = '/products';
export const SEARCH_PRODUCTS_URL_PATH = '/products/search';

export async function getProducts(): Promise<Product[]> {
    const isServer = typeof window === 'undefined';
    let url;
    let options = {};

    if (isServer) {
        url = `${process.env.BACKEND_URL}/${GET_PRODUCTS_URL_PATH}`;
        options = {
            headers: {
                'X-Access-Token': process.env.ACCESS_TOKEN,
            },
        };
    } else {
        url = `/api${GET_PRODUCTS_URL_PATH}`;
    }

    var { products } = (await axios.get(url, options)).data;

    return products;
}

export async function searchProducts(
    query: string,
    page: number,
): Promise<SearchProductResponse> {
    // const response: SearchProductResponse = (
    //     await http.get(
    //         `${SEARCH_PRODUCTS_URL_PATH}?query=${query}&page=${page || 1}`,
    //     )
    // ).data;

    let requestPage = page;

    const response: Product[] = await getProducts();

    const result = response.filter((p) =>
        query.split(' ').every((word) => p.handle.includes(word)),
    );
    const page_count = result.length < 10 ? 1 : Math.ceil(result.length / 10);

    if (requestPage > page_count) {
        requestPage = page_count - 1;
    } else if (requestPage < 0) {
        requestPage = 0;
    }

    var start = (requestPage - 1) * 10;
    var end = start + 10;

    return {
        products: result.slice(start, end),
        page_count,
        total_count: result.length,
        current_page: requestPage,
    };
}

export async function getProduct(handle: string): Promise<Product> {
    const response: Product[] = await getProducts();

    const product = response.find((p) => p.handle === handle);

    return product;
}
