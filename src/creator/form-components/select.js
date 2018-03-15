import CLASSNAME from '../../class-list';

const {
  SELECT,
  FORM_CONTROL
} = CLASSNAME;

export function initSelect(init_option) {
  let tag = document.createElement('select');
  tag.className = SELECT;
  tag.classList.add(FORM_CONTROL);
  if (init_option.name) {
    tag.name = init_option.name;
  }
  if (init_option.id) {
    tag.id = init_option.id;
  }
  if(!init_option.options) {
    throw new Error("The option 'options' is missing from the select tag object");
  }
  for(let j = 0; j < init_option.options.length; j++) {
    let option = init_option.options[j];
    let option_tag = document.createElement('option');
    option_tag.setAttribute('value', option.value);
    option_tag.appendChild(document.createTextNode(option.label));
    tag.appendChild(option_tag);
  }
  return tag;
}