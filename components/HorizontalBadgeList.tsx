import classNames from 'classnames';
import styles from '../styles/components/horizontal-badge-list.module.scss';

export type HorizontalBadgeListProps = {
    items: string[];
};

const mainBlock = 'horizontal-badge-list';

const catNormalize = (catString) =>
    catString.toLocaleLowerCase().replaceAll(' ', '-');

const HorizontalBadgeList = ({ items }: HorizontalBadgeListProps) => {
    return (
        <div className={styles[mainBlock]}>
            <div className={styles[`${mainBlock}__wrapper`]}>
                {items.map((category, index) => (
                    <a
                        href={`#${category}`}
                        key={category + index}
                        className={classNames(
                            styles[`${mainBlock}__badge`],
                            styles[
                                `${mainBlock}__badge--${catNormalize(category)}`
                            ],
                        )}
                    >
                        {category}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default HorizontalBadgeList;
