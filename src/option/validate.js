/**
 * 
 * @param {object} options An objects which contains all the options that need to be validated
 * @param {object} validate_options An object contains all constrains about the options to be validated
 */
export function validate(options, validate_options) {

  let validate_option_names = Object.keys(validate_options);

  for (let i = 0; i < validate_option_names.length; i++) {
    let validate_option_name = validate_option_names[i];
    // if the option validate property is an array then this option is absolute required and
    // the array will contains all the types that the option needed to be in.
    if (Array.isArray(validate_options[validate_option_name])) {
      if (!options[validate_option_name]) {
        throw new Error(
          `The required option '${validate_option_name}' is not provided`
        );
      }
      validateTypes(
        validate_option_name, 
        options[validate_option_name], 
        validate_options[validate_option_name]
      );
    }
    // otherwise, if the option is passed in, means the option can be required or vice versa depending on
    // the required property.
    // the types proptery contains all the types that the option needed to be in.
    else {
      if (!options[validate_option_name] && validate_options[validate_option_name].required) {
        throw new Error(
          `The required option '${validate_option_name}' is not provided`
        );
      }
      validateTypes(
        validate_option_name, 
        options[validate_option_name], 
        validate_options[validate_option_name].types,
        validate_options[validate_option_name].required
      );
    }
  }
}

function validateTypes(option_name ,option, types, is_required) {
  let option_type = typeof option;
  let validate_failed = true;
  for (let i = 0; i < types.length; i++) {
    if (types[i] == 'array' && Array.isArray(option)) {
      validate_failed = false;
      break;
    }
    else if (
      types[i] == 'object' && 
      !Array.isArray(option) && 
      types[i] == option_type
    ) {
      validate_failed = false;
      break;
    }
    else if (types[i] == option_type && types[i] != 'object') {
      validate_failed = false;
      break;
    }
  }
  if (validate_failed) {
    if (is_required) {
      throw new Error(
        `The option '${option_name}' must be in one of these types '${types.join(', ')}'`
      );
    }
    else if (!is_required && option_type != 'undefined'){
      throw new Error(
        `The option '${option_name}' must be in one of these types '${types.join(', ')}'`
      );
    }
  }
}