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
    expect(() => {
      validate({}, REQUIRED_OPTIONS)
    }).toThrow(Error);
  });

  it('should throw error if the option is not in the correct type', () => {
    expect(() => {
      validate({ title: 2 }, REQUIRED_OPTIONS)
    }).toThrow(Error);
  });

  it('should throw error if the optional option is not in the correct type', () => {
    expect(() => {
      validate({ title: 'hello', content: 2 }, REQUIRED_OPTIONS)
    }).toThrow(Error);
  });

  it('should NOT throw error if the optional option is not provided', () => {
    expect(() => {
      validate({ title: 'hello' }, REQUIRED_OPTIONS)
    }).not.toThrow(Error);
  });

  it('should NOT throw error if all options are provided and in correct type', () => {
    expect(() => {
      validate({ title: 'hello', content: 'Hey' }, REQUIRED_OPTIONS)
    }).not.toThrow(Error);
  });
});