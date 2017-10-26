const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'dev'
? 'http://localhost:9007/'
: 'http://localhost:9007/';

export default PAYMENT_SERVER_URL;
