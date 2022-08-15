import classNames from 'classnames';
import { Product } from 'interfaces/Product';
import { ProductImage } from 'interfaces/ProductImage';
import { ProductVariant } from 'interfaces/ProductVariant';
import { useRouter } from 'next/router';
import * as React from 'react';
import ReactImageMagnify from 'react-image-magnify';

import styles from '../styles/components/product-detail.module.scss';
import Dropdown from './Dropdown';

type ProductDetailProps = {
    product: Product;
    variant: ProductVariant;
    image: ProductImage;
    title: string;
};

const paraghCleaner = /(<p(\s|\S)*?<\/p>)/g;

const mainBlock = 'product-detail';

const ProductDetail = ({
    product,
    variant,
    title,
    image,
}: ProductDetailProps) => {
    const router = useRouter();

    const category = product.product_type
        .toLocaleLowerCase()
        .replaceAll(' ', '-');

    const handleSelectOnChange = (event, newValue, newValuesOption) => {
        let currentOptions = product.options.reduce((acc, current) => {
            let optionName = 'option' + current.position;
            acc[optionName] = variant[optionName];
            return acc;
        }, {});

        currentOptions['option' + newValuesOption.position] = newValue;

        let selectedVariant = product.variants.find((v) => {
            for (const key in currentOptions) {
                if (Object.prototype.hasOwnProperty.call(currentOptions, key)) {
                    if (currentOptions[key] !== v[key]) {
                        return false;
                    }
                }
            }
            return true;
        });

        if (!selectedVariant) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        router.push(
            {
                pathname: router.pathname,
                query: {
                    id: product.handle,
                    variant: selectedVariant.id,
                },
            },
            `/products/${product.handle}?variant=${selectedVariant.id}`,
        );
    };

    return (
        <div className='pt-3 pt-md-5'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-4 pb-5'>
                    <div style={{ position: 'relative' }}>
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: title,
                                    isFluidWidth: true,
                                    src: image.src,
                                },
                                largeImage: {
                                    src: image.src,
                                    width: 1200,
                                    height: 1800,
                                },
                            }}
                            imageClassName={styles[`${mainBlock}__image`]}
                            enlargedImageContainerClassName={
                                styles[`${mainBlock}__enlarged_image_container`]
                            }
                        />
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-8 ps-0 ps-md-5'>
                    <h1 className={styles[`${mainBlock}__title`]}>{title}</h1>
                    <p
                        className={classNames(
                            styles[`${mainBlock}__price`],
                            styles[`${mainBlock}__price--${category}`],
                        )}
                    >
                        <label htmlFor=''>Price</label>
                        <span>
                            {variant.compare_at_price && (
                                <small>${variant.compare_at_price}</small>
                            )}
                            ${variant.price}
                        </span>
                    </p>
                    {product.options.map((op, i) => (
                        <div key={i} className={styles[`${mainBlock}__select`]}>
                            <Dropdown
                                label={op.name}
                                items={op.values}
                                value={variant['option' + op.position]}
                                onChange={(e) =>
                                    handleSelectOnChange(e, e.target.value, op)
                                }
                            />
                        </div>
                    ))}
                    Features:
                    <div
                        dangerouslySetInnerHTML={{
                            __html: product.body_html.replaceAll(
                                paraghCleaner,
                                '',
                            ),
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(ProductDetail);
