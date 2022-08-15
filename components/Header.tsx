import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/components/header.module.scss';
import ProductSearchInput from './ProductSearchInput';

const Header = () => {
    const router = useRouter();
    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                <div className={styles.header__menu}>
                    <Link href='/'>
                        <a className={styles.header__logo}></a>
                    </Link>
                    <Link href='/products'>
                        <a
                            className={classNames(
                                styles.header__item,
                                isActive('/products'),
                            )}
                        >
                            Products
                        </a>
                    </Link>
                    <Link href='/blog'>
                        <a
                            className={classNames(
                                styles.header__item,
                                isActive('/blog'),
                            )}
                        >
                            Blog
                        </a>
                    </Link>
                    <Link href='/about'>
                        <a
                            className={classNames(
                                styles.header__item,
                                isActive('/about'),
                            )}
                        >
                            About
                        </a>
                    </Link>
                </div>
                <div className={styles.header__search}>
                    <ProductSearchInput />
                </div>
            </nav>
        </header>
    );

    function isActive(path) {
        return {
            [styles['header__item--active']]: router.pathname.includes(path),
        };
    }
};

export default Header;
