'use strict';

module.exports = {
  FIELD_EMPTY: {
    cvv: 'Please fill out a CVV.',
    expirationDate: 'Please fill out an expiration date.',
    number: 'Please fill out a number.',
    postalCode: 'Please fill out a postal code.'
  },
  FIELD_INVALID: {
    cvv: 'This security code is not valid.',
    expirationDate: 'This expiration date is not valid.',
    number: 'This card number is not valid.',
    postalCode: 'This postal code is not valid.'
  },
  GENERIC_CARD_VIEW: 'Something went wrong on our end. Please try again.',
  UNSUPPORTED_CARD_TYPE: 'This card type is not supported. Please try another card.'
};
