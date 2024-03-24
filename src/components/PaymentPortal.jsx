import React from 'react';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OvBRoSBMez9C0YjETJMWjCfqZZKkvJmDYpth8dh5RBkxXzcnay2NQWES6iFzbPXTkmvMNi7SYHu8IQdopR4AIQX00ckCo08hO');

const PaymentPortal = () => {
  const handleSubmit = async (event) => {
    // Your payment handling logic
  };

  return (
    <Elements stripe={stripePromise}>
      <form onSubmit={handleSubmit} className="my-4">
        <div className="p-4 border rounded-md shadow-md">
          <CardElement className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded-md focus:outline-none focus:ring focus:border-blue-300">
          Pay
        </button>
      </form>
    </Elements>
  );
};

export default PaymentPortal;
