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
  each_child: {
    tag: ['string'],
    type: {
      required: false,
      types: ['string']
    },
    placeholder: {
      required: false,
      types: ['string']
    },
    name: {
      required: false,
      types: ['string']
    },
    id: {
      required: false,
      types: ['string']
    },
    text: {
      required: false,
      types: ['string']
    },
    options: {
      required: false,
      types: ['array'],
      each_child: {
        label: ['string', 'number'],
        value: ['string', 'number']
      }
    }
  }
};

const width = {
  required: false,
  types: ['string']
};

export default {
  title,
  content,
  button,
  width
}
