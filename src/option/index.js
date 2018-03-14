import {validate} from './validate';
import CONSTRAINTS from './components';

export function validateOptions(options) {
  validate(options, CONSTRAINTS);
}