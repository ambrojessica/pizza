import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './PrettyPizza.css';
import useForm from '../hooks/useForm';

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

const SubmitPage = () => {

  const [showSuccessMessage, values, handleChanges, handleSubmit] = useForm(initialValue);

  return (
    <div className='submitPage'>
      <Header />
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={values.city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={values.state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={values.zip} onChange={handleChanges} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message">
          <p>
            Thank you for ordering from your local Just Pizza! <span role="img" aria-label='pizza'>🍕</span>
          </p>
          <p>Your tasty food will be delivered to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SubmitPage;