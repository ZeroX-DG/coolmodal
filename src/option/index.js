import {validate} from './validate';

const REQUIRED_OPTIONS = {
  title: ['string'],
  content: {
    required: false,
    types: ['string', 'array'],
  },
  button: {
    types: ['array'],
    each_child: {
      content: ['string'],
      action: ['string']
    }
  }
};

export function validateOptions(options) {
  validate(options, REQUIRED_OPTIONS);
}