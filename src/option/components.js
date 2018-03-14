const button = {
  required: false,
  types: ['array'],
  each_child: {
    content: ['string'],
    type: {
      required: false,
      types: ['string']
    },
    action: {
      required: false,
      types: ['string']
    }
  }
};

const title = {
  types: ['string']
};

const content = {
  required: false,
  types: ['string', 'array'],
};

export default {
  title,
  content,
  button
}