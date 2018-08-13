import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './assets/UITextField.scss';
import error from './assets/error.svg';
import valid from './assets/valid.svg';

const cx = classNames.bind(styles);

const UITextField = ({
    label,
    name,
    onChange,
    onBlur,
    placeholder,
    type,
    errorMessage,
    isWrong,
    isValid
}) => React.createElement(
    'label',
    { className: cx('UITextField_label'), htmlFor: name },
    React.createElement(
        'p',
        { className: cx('UITextField_inputGroupTitle') },
        label
    ),
    React.createElement(
        'div',
        { className: cx('UITextField_inputContainer') },
        React.createElement('input', {
            className: cx('UITextField_input', {
                'UITextField_input--error': isWrong
            }),
            id: name,
            name: name,
            onBlur: onBlur,
            onChange: onChange,
            type: type,
            placeholder: placeholder
        }),
        isWrong && React.createElement('img', {
            className: cx('UITextField_icon'),
            src: error,
            alt: 'X'
        }),
        isValid && React.createElement('img', {
            className: cx('UITextField_icon'),
            src: valid,
            alt: 'V'
        })
    ),
    isWrong && React.createElement(
        'p',
        { className: cx('UITextField_errorMessage') },
        errorMessage
    )
);

UITextField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
    placeholder: PropTypes.string,
    isWrong: PropTypes.bool,
    isValid: PropTypes.bool,
    type: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
};

UITextField.defaultProps = {
    onChange: () => {},
    onBlur: () => {},
    placeholder: '',
    type: 'text',
    errorMessage: '',
    isWrong: false,
    isValid: false
};

export default UITextField;