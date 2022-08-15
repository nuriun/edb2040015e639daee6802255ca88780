import classNames from 'classnames';
import styles from '../styles/components/logo.module.scss';

const Logo = ({ initAnimation = false }) => {
    return (
        <a
            className={classNames(styles.logo, {
                [styles['logo--init-animation']]: initAnimation,
            })}
        />
    );
};

export default Logo;
