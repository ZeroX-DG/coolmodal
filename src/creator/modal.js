import modal_html from '../markup/modal';
import {stringToNode, getNode} from './utility';
import default_const from '../default-const';
const {
  SUBMIT
} = default_const;
import CLASSNAME from '../class-list';
const {MODAL_OVERLAY, MODAL, BUTTON_INFO} = CLASSNAME;

import {
  initTitle,
  initButton,
  initContent
} from './components';

export function injectToModal(element) {
  getNode(MODAL).appendChild(element);
}

export function dismissModal() {
  getNode(MODAL_OVERLAY).remove();
}

export function initModalContent(options, events) {
  initTitle(options.title);
  options.content = options.content || '';
  initContent(options.content);
  options.button = options.button || [{content: 'OK', action: SUBMIT, type: BUTTON_INFO}];
  initButton(options.button, events);
}

export function initModal() {
  let modal = stringToNode(modal_html);
  getNode(MODAL_OVERLAY).appendChild(modal);
}
