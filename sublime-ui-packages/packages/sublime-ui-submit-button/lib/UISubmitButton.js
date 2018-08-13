import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './assets/UISubmitButton.scss';

const cx = classNames.bind(styles);

const UISubmitButton = ({
    buttonText,
    formIsValid
}) => React.createElement(
    'button',
    { type: 'submit', className: cx('UISubmitButton'), disabled: !formIsValid },
    buttonText
);

UISubmitButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    formIsValid: PropTypes.bool.isRequired
};

export default UISubmitButton;