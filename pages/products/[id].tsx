import Layout from '@/components/Layout';
import ProductDetail from '@/components/ProductDetail';
import { getProduct } from '@/services/productServices';
import classNames from 'classnames';
import { Product } from 'interfaces/Product';
import { useRouter } from 'next/router';

import styles from '../../styles/pages/product-detail.module.scss';

export type ProductDetailsProps = {
    product: Product;
    variant: number;
};

export async function getServerSideProps({ query: { id, variant } }) {
    var product = await getProduct(id);

    if (!product) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            product,
            variant: parseInt(variant),
        },
    };
}

const ProductDetails = ({ product, variant }: ProductDetailsProps) => {
    const selectedVariant =
        product.variants.find((v) => v.id === variant) || product.variants[0];
    const image =
        product.images.find((img) => img.id === selectedVariant.image_id) ||
        product.image;

    const title = `${product.vendor} ${product.title} -  ${selectedVariant.title}`;

    return (
        <Layout title={title}>
            <ProductDetail
                title={title}
                product={product}
                variant={selectedVariant}
                image={image}
            />
        </Layout>
    );
};

export default ProductDetails;
