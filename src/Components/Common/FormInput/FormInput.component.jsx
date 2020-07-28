import React from 'react';
import PropTypes from 'prop-types';
import "./FormInput.styles.scss";
FormInput.propTypes = {
    handleChange: PropTypes.func,
};

function FormInput(props) {
    console.log(props);

    const { handleChange, label, ...ortherProps } = props;
    return (
        <div className="group">
            <input
                type="text"
                className="form-input"
                onChange={handleChange}
                {...ortherProps}
            />
            {
                label &&
                (
                    <label
                        className={`${ortherProps.value.length ? 'shrink' : ''} form-input-label`}>
                        {label}
                    </label>
                )
            }
        </div>
    );
}

export default FormInput;