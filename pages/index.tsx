import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getProducts } from '@/services/productServices';
import Logo from '@/components/Logo';

import styles from '../styles/pages/home.module.scss';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();

        async function fetchProducts() {
            const response = await getProducts();
            setProducts(response);
        }
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Logo initAnimation />
                <h1 className={styles.title}>
                    Welcome <br /> on board!
                </h1>
            </div>

            <Link href='/products'>
                <a>Take a look at all products!</a>
            </Link>
        </div>
    );
};

export default Home;
