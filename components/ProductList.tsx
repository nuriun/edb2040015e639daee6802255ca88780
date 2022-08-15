import { Product } from 'interfaces/Product';
import ProductListItem from '@/components/ProductListItem';
import styles from '../styles/components/product-list.module.scss';
import React from 'react';
import HorizontalBadgeList from './HorizontalBadgeList';
import removeDuplicatedItems from 'utils/removeDuplicateItems';
import useSWR from 'swr';
import { getProducts } from '@/services/productServices';

export type ProductListProps = {
    items?: Product[];
};

const ProductList = ({ items }: ProductListProps) => {
    const { data, error } = useSWR('/api/products', getProducts);

    let products = items || data;

    console.log(error);
    const productTypes = removeDuplicatedItems(
        products.map((item) => item.product_type),
    );

    return (
        <>
            <HorizontalBadgeList items={productTypes} />
            {productTypes.map((category, categoryIndex) => (
                <div key={category} className='mb-5'>
                    <h4 className={styles['product-list__category-header']}>
                        <a href={`#${category}`}>{category}</a>
                    </h4>
                    <div className='row gy-5' id={category}>
                        {products
                            .filter(
                                ({ product_type }) => product_type === category,
                            )
                            .map((item, index) => (
                                <div
                                    className='col-6 col-sm-6 col-md-4 col-xl-3'
                                    key={item.title + index}
                                >
                                    <ProductListItem data={item} />
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default React.memo(ProductList);
