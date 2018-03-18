import {validate} from './validate';
import CONSTRAINTS from './render-option';

export function validateOptions(options) {
  validate(options, CONSTRAINTS);
}
