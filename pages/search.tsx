import Layout from '@/components/Layout';
import Pagination from '@/components/Pagination';
import ProductList from '@/components/ProductList';
import { searchProducts } from '@/services/productServices';
import { Product } from 'interfaces/Product';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export type SearchProductsProps = {
    products: Product[];
    total_count: number;
    page_count: number;
};

export async function getServerSideProps({ query }) {
    const response = await searchProducts(
        query.q || '',
        parseInt(query.p || '1'),
    );

    return {
        props: {
            products: response?.products || [],
            total_count: response?.total_count,
            page_count: response.page_count || 1,
        }, // will be passed to the page component as props
    };
}

const SearchPage = ({
    products,
    total_count,
    page_count,
}: SearchProductsProps) => {
    const router = useRouter();
    const query = (router.query.q || '') as string;
    const page = parseInt((router.query.p || '1') as string);

    const handlePaganationOnChange = ({ selected }) => {
        router.push(
            {
                query: {
                    q: query,
                    p: selected + 1,
                },
            },
            null,
            {
                scroll: true,
            },
        );
    };

    return (
        <Layout title={`Result for "${query}"`}>
            <div>
                <h1>Search</h1>
                {total_count > 0 ? (
                    <p>
                        Result for <em> "{query}"</em>:
                    </p>
                ) : (
                    <p>The keyword "{query}" did not match any products.</p>
                )}
            </div>
            <ProductList items={products} />
            {page_count > 1 && (
                <Pagination
                    pageCount={page_count}
                    onPageChange={handlePaganationOnChange}
                    initial={page}
                />
            )}
        </Layout>
    );
};

export default SearchPage;
