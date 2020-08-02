import CustomButton from 'Components/Common/CustomButton/CustomButton.component';
import React from 'react';
import "./Cart-dropdown.styles.scss";
function CartDropDown(props) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">

            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default CartDropDown;