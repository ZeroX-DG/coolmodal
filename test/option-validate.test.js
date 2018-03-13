import {validate} from '../src/option/validate';

const REQUIRED_OPTIONS = {
  title: ['string'],
  content: {
    required: false,
    types: ['string', 'array']
  }
};

describe('validator', () => {
  it('should throw error if the required option is not provided', () => {
    let t = validate([], REQUIRED_OPTIONS);
    expect(t).toThrow(Error);
  });
});