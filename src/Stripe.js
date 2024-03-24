import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OvBRoSBMez9C0YjETJMWjCfqZZKkvJmDYpth8dh5RBkxXzcnay2NQWES6iFzbPXTkmvMNi7SYHu8IQdopR4AIQX00ckCo08hO');

export default stripePromise;