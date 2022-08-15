import {
    Product,
    GetProductResponse,
    SearchProductResponse,
} from 'interfaces/Product';
import { http } from 'utils/http';

export const GET_PRODUCTS_URL_PATH = '/products';
export const SEARCH_PRODUCTS_URL_PATH = '/products/search';

export async function getProducts(): Promise<Product[]> {
    var { products }: GetProductResponse = (
        await http.get(GET_PRODUCTS_URL_PATH)
    ).data;
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
