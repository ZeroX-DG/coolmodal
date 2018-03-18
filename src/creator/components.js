import {stringToNode, getNode, getNodes} from './utility';
import {injectToModal, dismissModal} from './modal';
import default_const from '../default-const';
const {
  BUTTON_DISMISS,
  BUTTON_SUBMIT
} = default_const;
import CLASSNAME from '../class-list';
const {
  BUTTON_GROUP,
  INPUT,
  FORM,
  LABEL,
  FORM_CONTROL,
  CONTENT,
  BUTTON_INFO,
  SELECT
} = CLASSNAME;

import title_html from '../markup/title';
import button_html from '../markup/button';
import {initInput} from './form-components/input';
import {initSelect} from './form-components/select';

export function initTitle(title_content, html) {
  if (!html) {
    let title = stringToNode(title_html);
    let text = document.createTextNode(title_content);
    title.appendChild(text);
    injectToModal(title);
  }
  else {
    let title = stringToNode(title_content);
    injectToModal(title);
  }
}

export function initButton() {
  let button_group = document.createElement('div');
  button_group.className = BUTTON_GROUP;

  let buttons = arguments[0];
  let events = arguments[1];

  for (let i = 0; i < buttons.length; i++) {
    let button_info = buttons[i];
    let button = stringToNode(button_html);
    let text = document.createTextNode(button_info.content);
    button.appendChild(text);
    button.classList.add(button_info.type || BUTTON_INFO);
    button_info.action = button_info.action || BUTTON_SUBMIT;
    if (button_info.action == BUTTON_DISMISS) {
      button.onclick = function() {
        dismissModal();
        if(events['onDismiss']) {
          events['onDismiss']();
        }
      }
    }
    else if(button_info.action == BUTTON_SUBMIT){
      button.onclick = function() {
        let controls = getNodes(FORM_CONTROL);
        let form_result = {};
        for(let i = 0; i < controls.length; i++) {
          let control = controls[i];
          form_result[control.name] = control.value;
        }
        dismissModal();
        if(events['onSubmit']) {
          events['onSubmit'](form_result);
        }

      }
    }
    button_group.appendChild(button);
  }

  injectToModal(button_group);
}

export function initContent() {
  if (typeof arguments[0] == 'string') {
    let isHTML = arguments[1];
    if (isHTML) {
      injectToModal(stringToNode(arguments[0]));
    }
    else {
      let paragraph = document.createElement('p');
      paragraph.className = CONTENT;
      paragraph.innerText = arguments[0];
      injectToModal(paragraph);
    }
  }
  else if(Array.isArray(arguments[0])){
    let form_content = arguments[0];
    let form = document.createElement('div');
    form.className = FORM;
    for(let i = 0; i < form_content.length; i++) {
      let element = form_content[i];
      let tag;
      if (element.tag == 'input') {
        tag = initInput(element);
        if (element.label) {
          form.appendChild(createLabel(element.label));
        }
      }
      else if (element.tag == 'select') {
        tag = initSelect(element);
        if (element.label) {
          form.appendChild(createLabel(element.label));
        }
      }

      form.appendChild(tag);
    }
    injectToModal(form);
  }
}

function createLabel(text) {
  let label = document.createElement('label');
  label.className = LABEL;
  label.innerText = text;
  return label;
}
