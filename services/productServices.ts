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
        url = `/api/${GET_PRODUCTS_URL_PATH}`;
    }

    var { products } = (await axios.get(url, options)).data;

    return products;
}

export async function searchProducts(
    query: string,
    page: number,
): Promise<SearchProductResponse> {
    const response: SearchProductResponse = (
        await http.get(
            `${SEARCH_PRODUCTS_URL_PATH}?query=${query}&page=${page || 1}`,
        )
    ).data;

    return response;
}

export async function getProduct(handle: string): Promise<Product> {
    let response;
    try {
        response = await http.get(`${GET_PRODUCTS_URL_PATH}/${handle}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
