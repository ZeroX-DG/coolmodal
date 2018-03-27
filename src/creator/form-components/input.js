import {stringToNode} from '../utility';
import input_html from '../../markup/input';

export function initInput(option) {
  let input = stringToNode(input_html);

  let properties = [
    'name',
    'placeholder',
    'id',
    'type',
    'value',
    'onchange',
    'onkeyup',
    'onkeydown',
    'className',
  ];
  for (var i = 0; i < properties.length; i++) {
    let property = properties[i];
    if (option[property]) {
      if (property == 'className') {
        input.classList.add(option[property]);
      }
      else {
        input[property] = option[property];
      }
    }
  }

  return input;
}
