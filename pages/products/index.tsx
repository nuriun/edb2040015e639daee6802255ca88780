import { getProducts } from '@/services/productServices';
import Layout from '@/components/Layout';
import ProductList from '@/components/ProductList';
import { Product } from 'interfaces/Product';
import { SWRConfig } from 'swr';

export type ProductsProps = {
    fallback: Product[];
};

export async function getServerSideProps(context) {
    const response = await getProducts();
    return {
        props: {
            fallback: {
                '/api/products': response,
            },
        }, // will be passed to the page component as props
    };
}

const Products = ({ fallback }: ProductsProps) => {
    return (
        <Layout>
            <SWRConfig value={{ fallback }}>
                <ProductList />
            </SWRConfig>
        </Layout>
    );
};

export default Products;
