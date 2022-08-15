import styles from '../styles/components/layout-content.module.scss';

const LayoutContent = ({ children }) => {
    return <main className={styles.content}>{children}</main>;
};

export default LayoutContent;
