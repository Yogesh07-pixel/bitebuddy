import React from 'react'
import {Link} from "react-router-dom";
const CheckoutSteps = ({delivery, confirmOrder, payment}) => (
    <div className="checkout-progress d-flex justify-content-center mt-5">
        {/* FOR DELIVERY */}
        {delivery ? (
            //  If delivery is true, create a link to the "Delivery route" with active styling
            <Link to="shipping" className="float-right">
                <div className="triangle2-active"></div>
                <div className="step active-step">Address</div>
                <div className="triangle-active"></div>
            </Link>
        ) : (
            <Link to="#!" disabled>
                <div className="triangle2-incomplete"></div>
                <div className="step incomplete">Address</div>
                <div className="triangle-incomplete"></div>
            </Link>
        )}
        {/*  CONFIRM ORDER */}
        {confirmOrder ? (

            <Link to="/order/confirm" className="float-right">
                <div className="triangle2-active"></div>
                <div className="step active-step">Confirm Order</div>
                <div className="triangle-active"></div>
            </Link>
        ) : (
            <Link to="#!" disabled>
                <div className="triangle2-incomplete"></div>
                <div className="step incomplete">Confirm Order</div>
                <div className="triangle-incomplete"></div>
            </Link>
        )}


{/* Payment */}
{payment ? (

            <Link to="/payment" className="float-right">
                <div className="triangle2-active"></div>
                <div className="step active-step">Payment</div>
                <div className="triangle-active"></div>
            </Link>
        ) : (
            <Link to="#!" disabled>
                <div className="triangle2-incomplete"></div>
                <div className="step incomplete">Payment</div>
                <div className="triangle-incomplete"></div>
            </Link>
        )}
    </div>
)

export default CheckoutSteps;