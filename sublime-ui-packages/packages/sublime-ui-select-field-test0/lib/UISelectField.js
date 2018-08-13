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
    data
}) => React.createElement(
    'label',
    { className: cx('UISelectField'), htmlFor: name },
    React.createElement(
        'p',
        { className: cx('UISelectField_Label') },
        fieldLabel
    ),
    React.createElement(
        'select',
        { className: cx('UISelectsField_Input'), name: name, onBlur: onGlobalChange },
        React.createElement(
            'option',
            { value: '0' },
            placeholder
        ),
        data.map(({ value, label }) => React.createElement(
            'option',
            { key: label, value: value, label: label },
            label
        ))
    )
);

UISelectField.propTypes = {
    fieldLabel: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onGlobalChange: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
    }).isRequired).isRequired
};

export default UISelectField;