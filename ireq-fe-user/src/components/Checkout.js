import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { Redirect } from 'react-router-dom';

import STRIPE_PUBLISHABLE from '../constants/stripe';
import PAYMENT_SERVER_URL from '../constants/server';


const CURRENCY = 'GBP';

const fromPoundToPens = amount => amount;

const errorPayment = data => {
  alert('Payment error');
  console.log(data)
};

const onToken = (amount, description, sendTicket, successPayment) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromPoundToPens(amount)
    })
    .then(sendTicket)
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount, sendTicket, flag, successPayment}) => {
  // console.log(flag)
  // if(flag){
  //   return <Redirect to='/success' />
  // }
  return <StripeCheckout
    name={name}
    description={description}
    amount={fromPoundToPens(amount)}
    token={onToken(amount, description, sendTicket, successPayment)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />

}

export default Checkout;



