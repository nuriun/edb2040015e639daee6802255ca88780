import Link from 'next/link';
import { Product } from 'interfaces/Product';
import { ProductVariant } from 'interfaces/ProductVariant';

import styles from '../styles/components/product-item.module.scss';
import React from 'react';
import classNames from 'classnames';

type Props = {
    data: Product;
};

const ProductListItem = ({ data }: Props) => {
    const defaultVariant: ProductVariant = data.variants[0];
    const title = `${data.vendor} ${data.title} - ${defaultVariant.title}`;
    return (
        <Link
            href={{
                pathname: '/products/[id]',
                query: { variant: defaultVariant.id },
            }}
            as={`/products/${data.handle}?variant=${defaultVariant.id}`}
        >
            <a
                className={classNames(
                    styles['product-item'],
                    styles[
                        data.product_type
                            .toLocaleLowerCase()
                            .replaceAll(' ', '-')
                    ],
                )}
                title={title}
            >
                <img
                    loading='lazy'
                    className={styles['product-item__image']}
                    src={data.image.src}
                />
                <div>
                    <p className={styles['product-item__title']}>{title}</p>
                    <div className={styles['product-item__price']}>
                        ${defaultVariant.price}{' '}
                        {defaultVariant.compare_at_price && (
                            <s>
                                <small>
                                    ${defaultVariant.compare_at_price}
                                </small>
                            </s>
                        )}
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default React.memo(ProductListItem);
