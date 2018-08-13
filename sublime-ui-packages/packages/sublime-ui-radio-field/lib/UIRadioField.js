import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './assets/UIRadioField.scss';

const cx = classNames.bind(styles);

const UIRadioField = ({
    fieldLabel,
    name,
    value,
    onChange
}) => React.createElement(
    'label',
    { className: cx('UIRadioField'), htmlFor: value },
    React.createElement('input', {
        className: cx('UIRadioField_Input'),
        id: value,
        value: value,
        name: name,
        onChange: onChange,
        type: 'radio'
    }),
    React.createElement(
        'p',
        { className: cx('UIRadioField_Label') },
        fieldLabel
    )
);

UIRadioField.propTypes = {
    fieldLabel: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default UIRadioField;