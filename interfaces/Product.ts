import { ProductImage } from './ProductImage';
import { ProductOption } from './ProductOptions';
import { ProductVariant } from './ProductVariant';

export type Product = {
    title: string;
    vendor: string;
    body_html: string;
    handle: string;
    product_type: string;
    image: ProductImage;
    images: ProductImage[];
    variants: ProductVariant[];
    options: ProductOption[];
};

export type GetProductResponse = {
    products: Product[];
};

export type SearchProductResponse = {
    products: Product[];
    page_count: number;
    current_page: number;
    total_count: number;
};
