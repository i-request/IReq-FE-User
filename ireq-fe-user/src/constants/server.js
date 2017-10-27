const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'dev'
? 'http://localhost:9007/payment'
: 'http://localhost:9007/payment';

export default PAYMENT_SERVER_URL;
