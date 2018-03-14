import {EventManager} from '../event/EventManager';
import {stringToNode, getNode, getNodes} from './utility';
import {injectToModal, dismissModal} from './modal';
import default_const from '../default-const';
const {
  DISMISS,
  SUBMIT
} = default_const;
import CLASSNAME from '../class-list';
const {
  BUTTON_GROUP,
  INPUT,
  FORM,
  LABEL,
  FORM_CONTROL,
  CONTENT,
  BUTTON_INFO
} = CLASSNAME;

import title_html from '../markup/title';
import button_html from '../markup/button';

export function initTitle(title_content) {
  let title = stringToNode(title_html);
  let text = document.createTextNode(title_content);
  title.appendChild(text);
  injectToModal(title);
}

export function initButton() {
  let button_group = document.createElement('div');
  button_group.className = BUTTON_GROUP;

  let buttons = arguments[0];

  for (let i = 0; i < buttons.length; i++) {
    let button_info = buttons[i];
    let button = stringToNode(button_html);
    let text = document.createTextNode(button_info.content);
    button.appendChild(text);
    button.classList.add(button_info.type || BUTTON_INFO);
    button_info.action = button_info.action || SUBMIT;
    if (button_info.action == DISMISS) {
      button.onclick = function() {
        dismissModal();
        EventManager.emmit('onDismiss');
      }
    }
    else if(button_info.action == SUBMIT){
      button.onclick = function() {
        let inputs = getNodes(INPUT);
        let form_result = {};
        for(let i = 0; i < inputs.length; i++) {
          let input = inputs[i];
          form_result[input.name] = input.value;
        }
        EventManager.emmit('onSubmit', form_result);
        dismissModal();
        EventManager.emmit('onDismiss');
      }
    }
    button_group.appendChild(button);  
  }
  
  injectToModal(button_group);
}

export function initContent() {
  if (typeof arguments[0] == 'string') {
    let paragraph = document.createElement('p');
    paragraph.className = CONTENT;
    paragraph.innerText = arguments[0];
    injectToModal(paragraph);
  }
  else {
    let form_content = arguments[0];
    let form = document.createElement('div');
    form.className = FORM;
    for(let i = 0; i < form_content.length; i++) {
      let element = form_content[i];
      let tag;
      if (element.tag == 'input') {
        tag = document.createElement('input');
        tag.className = INPUT;
        tag.classList.add(FORM_CONTROL);
        tag.name = element.name;
        tag.placeholder = element.placeholder;
        tag.id = element.id;
      }
      else if (element.tag == 'label') {
        tag = document.createElement('label');
        tag.className = LABEL;
        tag.classList.add(FORM_CONTROL);
        tag.innerText = element.text;
      }
      
      form.appendChild(tag);
    }
    injectToModal(form);
  }
}