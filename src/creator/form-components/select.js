import {stringToNode} from '../utility';
import select_html from '../../markup/select';

export function initSelect(init_option) {
  let select = stringToNode(select_html);

  let properties = [
    'name',
    'id',
    'onchange',
    'placeholder',
    'className',
  ];
  for (var i = 0; i < properties.length; i++) {
    let property = properties[i];
    if (init_option[property]) {
      if (property == 'placeholder') {
        let placeholder = document.createElement('option');
        placeholder.appendChild(document.createTextNode(init_option[property]));
        placeholder.setAttribute('disabled', 'disabled');
        placeholder.setAttribute('selected', 'selected');
        select.appendChild(placeholder);
      }
      else if (property == 'className') {
        select.classList.add(option[property]);
      }
      else {
        select[property] = init_option[property];
      }
    }
  }

  if(!init_option.options) {
    throw new Error("The option 'options' is missing from the select tag object");
  }

  for(let j = 0; j < init_option.options.length; j++) {
    let option = init_option.options[j];
    let option_tag = document.createElement('option');
    option_tag.setAttribute('value', option.value);
    option_tag.appendChild(document.createTextNode(option.label));
    select.appendChild(option_tag);
  }
  return select;
}
