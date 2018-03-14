/**
 * 
 * @param {object} options An objects which contains all the options that need to be validated
 * @param {object} validate_options An object contains all constrains about the options to be validated
 */
export function validate(options, validate_options, parents=['root option']) {

  let validate_option_names = Object.keys(validate_options);

  for (let i = 0; i < validate_option_names.length; i++) {
    let validate_option_name = validate_option_names[i];
    let constrain_value = validate_options[validate_option_name];
    let option_value = options[validate_option_name];
    // if the option validate property is an array then this option is absolute required and
    // the array will contains all the types that the option needed to be in.
    if (Array.isArray(constrain_value)) {
      if (!option_value) {
        throwUnprovidedOptionError(validate_option_name, parents);
      }
      validateTypes(
        validate_option_name, 
        option_value,
        constrain_value,
        true,
        parents
      );
    }
    // otherwise, if the option is passed in, means the option can be required or vice versa depending on
    // the required property.
    // the types proptery contains all the types that the option needed to be in.
    else {
      if (!option_value && constrain_value.required) {
        throwUnprovidedOptionError(validate_option_name, parents);
      }
      validateTypes(
        validate_option_name, 
        option_value, 
        constrain_value.types,
        constrain_value.required,
        parents
      );
      // validate child options in array
      if (
        constrain_value.each_child && 
        ~constrain_value.types.indexOf('array') &&
        Array.isArray(option_value)
      ) {
        parents.unshift(validate_option_name);
        for(let i = 0; i < option_value.length; i++) {
          validate(option_value[i], constrain_value.each_child, parents);
        }
      }
      // validate child options in object
      if (
        constrain_value.children && 
        ~constrain_value.types.indexOf('object') &&
        !Array.isArray(option_value) &&
        typeof option_value == 'object'
      ) {
        parents.unshift(validate_option_name);
        validate(option_value, constrain_value.children, parents);
      }
    }
  }
}

function throwUnprovidedOptionError(option_name, parents) {
  throw new Error(
    `The required option '${option_name}' in ${parents.join(' in ')} is not provided`
  );
}

function validateTypes(option_name ,option, types, is_required, parents) {
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
      throwWrongTypeOptionError(option_name, types, parents);
    }
    else if (!is_required && option_type != 'undefined'){
      throwWrongTypeOptionError(option_name, types, parents);
    }
  }
}

function throwWrongTypeOptionError(option_name, types, parents) {
  throw new Error(
    `The option '${option_name}' in ${parents.join(' in ')} must be in one of these types '${types.join(', ')}'`
  );
}