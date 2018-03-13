import {stringToNode, getNode} from './utility';
import {injectToModal} from './modal';
import CLASSNAME from '../class-list';
const {BUTTON_GROUP} = CLASSNAME;

import title_html from '../markup/title';
import button_html from '../markup/button';

export function initTitle(title_content) {
  let title = stringToNode(title_html);
  let text = document.createTextNode(title_content);
  title.appendChild(text);
  injectToModal(title);
}

export function initButton() {
  let button_group = document.createElement("div");
  button_group.className = BUTTON_GROUP;

  let buttons = arguments[0];

  for (let i = 0; i < buttons.length; i++) {
    let button = stringToNode(button_html);
    let text = document.createTextNode(buttons[i].content);
    button.appendChild(text);
    button_group.appendChild(button);  
  }
  
  injectToModal(button_group);
}