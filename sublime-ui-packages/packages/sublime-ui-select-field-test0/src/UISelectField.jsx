import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './assets/UISelectField.scss';

const cx = classNames.bind(styles);

const UISelectField = ({
    fieldLabel,
    name,
    placeholder,
    onGlobalChange,
    data,
}) => (
    <label className={cx('UISelectField')} htmlFor={name}>
        <p className={cx('UISelectField_Label')}>{fieldLabel}</p>
        <select className={cx('UISelectsField_Input')} name={name} onBlur={onGlobalChange}>
            <option value="0">{placeholder}</option>
            {
                data.map(({value, label}) => (
                    <option key={label} value={value} label={label}>{label}</option>
                ))
            }
        </select>
    </label>
);

UISelectField.propTypes = {
    fieldLabel: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onGlobalChange: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
    }).isRequired).isRequired,
};

export default UISelectField;
