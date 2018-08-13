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
    isValid,
}) => (
    <label className={cx('UITextField_label')} htmlFor={name}>
        <p className={cx('UITextField_inputGroupTitle')}>
            {label}
        </p>
        <div className={cx('UITextField_inputContainer')}>
            <input
                className={cx('UITextField_input', {
                    'UITextField_input--error': isWrong,
                })}
                id={name}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
            />
            {
                isWrong && (
                    <img
                        className={cx('UITextField_icon')}
                        src={error}
                        alt="X"
                    />
                )
            }
            {
                isValid && (
                    <img
                        className={cx('UITextField_icon')}
                        src={valid}
                        alt="V"
                    />
                )
            }
        </div>
        {
            isWrong && (
                <p className={cx('UITextField_errorMessage')}>
                    {errorMessage}
                </p>
            )
        }

    </label>
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
    onBlur: PropTypes.func,
};

UITextField.defaultProps = {
    onChange: () => {},
    onBlur: () => {},
    placeholder: '',
    type: 'text',
    errorMessage: '',
    isWrong: false,
    isValid: false,
};

export default UITextField;
