import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/components/product-search-input.module.scss';

const errorMessageDisplayTime = 5000;

const ProductSearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState(router.query.q ?? '');
    const [inputErrorText, setError] = useState('');
    const errorDisplayTimer = useRef(null);

    const handleOnKeyDown = (e: any) => {
        if (e.keyCode === 13) {
            handleFormSubmit(e);
        }
    };

    useEffect(() => {
        setValue(router.query.q || '');
    }, [router.query.q]);

    const showError = (errorText: string): void => {
        setError(errorText);
        if (!errorDisplayTimer.current) {
            clearTimeout(errorDisplayTimer.current);
        }
        errorDisplayTimer.current = setTimeout(() => {
            setError('');
            errorDisplayTimer.current = null;
        }, errorMessageDisplayTime);
    };

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        e.stopPropagation();

        if (!value) {
            showError('You must enter at least one keyword');
            return;
        }

        if (value.length < 2) {
            showError('Search keywords length must be minimum of 2 characters');
            return;
        }

        router.push({
            pathname: '/search',
            query: {
                q: value,
            },
        });
    };

    console.log(inputErrorText);

    return (
        <div
            className={classNames(styles['product-search-input'], {
                [styles['product-search-input--error']]:
                    inputErrorText.length > 0,
            })}
        >
            <form
                className={styles['product-search-input__form']}
                onSubmit={(e) => handleFormSubmit(e)}
            >
                <input
                    className={styles['product-search-input__input']}
                    type='text'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => handleOnKeyDown(e)}
                    placeholder='Typea keywords and press "Enter"...'
                />
                <button
                    className={styles['product-search-input__button']}
                    type='submit'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        version='1.1'
                        viewBox='0 0 700 700'
                    >
                        <g>
                            <path d='m589.7 250.3-154-154c-16.402-16.402-42.996-16.402-59.398 0s-16.402 42.996 0 59.398l82.305 82.297-318.6 0.003906c-23.195 0-42 18.805-42 42 0 23.195 18.805 42 42 42h318.6l-82.297 82.309c-16.402 16.402-16.402 42.996 0 59.398 16.402 16.402 42.996 16.402 59.398 0l154-154c16.395-16.41 16.395-43.004-0.007813-59.406z' />
                        </g>
                    </svg>
                </button>
            </form>
            {inputErrorText.length > 0 && (
                <div className={styles['product-search-input__error_display']}>
                    {inputErrorText}
                </div>
            )}
        </div>
    );
};

export default ProductSearchInput;
