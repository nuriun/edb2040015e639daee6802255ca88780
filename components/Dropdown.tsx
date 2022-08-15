import { AnyTxtRecord } from 'dns';
import { ChangeEvent } from 'react';
import styles from '../styles/components/dropdown.module.scss';

type DropdownOnChangeCallback = (event: ChangeEvent<HTMLSelectElement>) => void;

export type DropdownProps = {
    onChange: DropdownOnChangeCallback;
    label: string;
    items: Array<any>;
    value: any;
};

const Dropdown = ({ onChange, label, items = [], value }: DropdownProps) => {
    return (
        <div className={styles.dropdown}>
            <label>{label}</label>
            <select onChange={onChange}>
                {items.map((val, index) => (
                    <option
                        selected={value === val}
                        value={val}
                        key={val + index}
                    >
                        {val}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
