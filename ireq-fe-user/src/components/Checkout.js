import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { Redirect } from 'react-router-dom';

import STRIPE_PUBLISHABLE from '../constants/stripe';
import PAYMENT_SERVER_URL from '../constants/server';

const CURRENCY = 'GBP';

const fromPoundToPens = amount => amount;
  
const successPayment = data => {
<Redirect from='/menu' to='/success'/>
  console.log(data)
};

const errorPayment = data => {
  alert('Payment error');
  console.log(data )
};

const onToken = ( amount, description, sendTicket) => token =>
axios.post(PAYMENT_SERVER_URL,
  {
    description,
    source: token.id,
    currency: CURRENCY,
    amount: fromPoundToPens(amount)
  })
  .then(successPayment)
  .then(sendTicket)
  .catch(errorPayment);

const Checkout = ({name, description, amount, sendTicket }) =>
<StripeCheckout
  name={name}
  description={description}
  amount={fromPoundToPens(amount)}
  token={onToken(amount, description, sendTicket)}
  currency={CURRENCY}
  stripeKey={STRIPE_PUBLISHABLE}
/>




export default Checkout;



