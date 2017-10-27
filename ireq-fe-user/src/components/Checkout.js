import React, { Component } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from '../constants/stripe';
import PAYMENT_SERVER_URL from '../constants/server';


const CURRENCY = 'GBP';

const fromPoundToPens = amount => amount * 100;
  
function submitTicket(newOrder) {
  axios.post('http://localhost:9007/tickets',
    {
      delivery: true,
      order_content: newOrder,
      message: 'this is the ticket',
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const successPayment = data => {
  submitTicket({
    type: "food",
    name: "super hot dog",
    extras: [],
    price: 700,
    inStock: true,
    allergens: ['meat', 'dairy', 'egg']
  })
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment error');
};

const onToken = (amount, description) => token =>
axios.post(PAYMENT_SERVER_URL,
  {
    description,
    source: token.id,
    currency: CURRENCY,
    amount: fromPoundToPens(amount)
  })
  .then(successPayment)
  .catch(errorPayment);

const Checkout = ({ name, description, amount }) =>
<StripeCheckout
  name={name}
  description={description}
  amount={fromPoundToPens(amount)}
  token={onToken(amount, description)}
  currency={CURRENCY}
  stripeKey={STRIPE_PUBLISHABLE}
/>




export default Checkout;



