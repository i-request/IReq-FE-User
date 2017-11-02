const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'dev'
? 'https://irequest-be.herokuapp.com/payment'
: 'https://irequest-be.herokuapp.com/payment';

export default PAYMENT_SERVER_URL;
