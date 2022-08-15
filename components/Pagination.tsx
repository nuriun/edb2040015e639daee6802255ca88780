import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from '../styles/components/pagination.module.scss';

const Pagination = ({ pageCount, onPageChange, initial }) => {
    const [currentPage, setCurrentPage] = useState(initial);

    useEffect(() => {
        setCurrentPage(initial);
    }, [initial]);

    return (
        <ReactPaginate
            className={styles['pagination']}
            pageCount={pageCount}
            onPageChange={onPageChange}
            forcePage={currentPage - 1}
        />
    );
};

export default Pagination;
