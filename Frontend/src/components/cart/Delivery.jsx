import React, { useState } from "react";
import { countries } from "countries-list";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveDeliveryInfo } from "../../actions/cartAction";
import CheckoutSteps from "./CheckoutSteps";
// import CheckoutSteps from "./CheckoutSteps";
const Delivery = () => {
  const countriesList = Object.values(countries);
  const navigate = useNavigate();
  const { deliveryInfo } = useSelector((state) => state.cart);
  const [address, setAddress] = useState(deliveryInfo.address);
  const [city, setCity] = useState(deliveryInfo.city);
  const [postalCode, setPostalCode] = useState(deliveryInfo.postalCode);
  const [phoneNo, setPhoneNo] = useState(deliveryInfo.phoneNo);
  const [country, setCountry] = useState(deliveryInfo.country);

  const dispatch = useDispatch();

  //   define function to handle the form submission
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveDeliveryInfo({ address, city, phoneNo, postalCode, country }));
    navigate("/confirm");
  };
  return (
    <>
    <CheckoutSteps delivery />
      {/* <CheckoutSteps delivery /> */}
      <div className="row wrapper">
        <div className="col-10 col-lg-5 cartt">
          <form onSubmit={submitHandler}>
            <h1 className="mb-4">Delivery Address</h1>
            {/* input for address */}
            <div className="form-group">
              <label htmlFor="address_field">Address</label>
              <input
                type="text"
                name=""
                id="address_field"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            {/* input for city */}
            <div className="form-group">
              <label htmlFor="city_field">City</label>
              <input
                type="text"
                name=""
                id="city_field"
                className="form-control"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            {/* input for phoneNo */}
            <div className="form-group">
              <label htmlFor="phone_field">Phone No</label>
              <input
                type="phone"
                name=""
                id="phone_field"
                className="form-control"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
            </div>
            {/* input for postalCode */}
            <div className="form-group">
              <label htmlFor="postal_code_field">Postal Code</label>
              <input
                type="text"
                name=""
                id="postal_code_field"
                className="form-control"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
            </div>
            {/* input for country */}
            <div className="form-group">
              <label htmlFor="country_field">Country</label>
              <select
                name=""
                id="country_field"
                className="form-control"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                {countriesList.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            {/* Submit btn */}
            <button
              id="shipping_btn"
              type="submit"
              className="btn btn-block py-3"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Delivery;
