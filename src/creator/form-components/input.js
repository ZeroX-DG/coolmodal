import CLASSNAME from '../../class-list';

const {
  INPUT,
  FORM_CONTROL
} = CLASSNAME;

export function initInput(option) {
  let tag = document.createElement('input');
  tag.className = INPUT;
  tag.classList.add(FORM_CONTROL);
  if (option.name) {
    tag.name = option.name;
  }
  if (option.placeholder) {
    tag.placeholder = option.placeholder;
  }
  if (option.id) {
    tag.id = option.id;
  }
  if (option.type) {
    tag.type = option.type;
  }
  if (option.value) {
    tag.value = option.value;
  }
  return tag;
}
