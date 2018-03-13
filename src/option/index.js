import {validate} from './validate';

const REQUIRED_OPTIONS = {
  title: ['string'],
  content: {
    required: false,
    types: ['string', 'array']
  },
  button: ['array']
};

export function validateOptions(options) {
  validate(options, REQUIRED_OPTIONS);
}