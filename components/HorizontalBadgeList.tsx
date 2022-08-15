import classNames from "classnames";
import styles from "../styles/components/horizontal-badge-list.module.scss";

export type HorizontalBadgeListProps = {
  items: string[];
};

const HorizontalBadgeList = ({ items }: HorizontalBadgeListProps) => {
  return (
    <div className={styles["horizontal-badge-list"]}>
      <div className={styles["horizontal-badge-list__wrapper"]}>
        {items.map((category, index) => (
          <a
            href={`#${category}`}
            key={category + index}
            className={classNames(
              styles["horizontal-badge-list__badge"],
              styles[category.toLocaleLowerCase().replaceAll(" ", "-")]
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
