import modal_html from '../markup/modal';
import {stringToNode, getNode} from './utility';
import CLASSNAME from '../class-list';
const {MODAL_OVERLAY, MODAL} = CLASSNAME;

import {
  initTitle,
  initButton
} from './components';

export function injectToModal(element) {
  getNode(MODAL).appendChild(element);
}

export function initModalContent(options) {
  initTitle(options.title);
  initButton(options.button);
}

export function initModal() {
  let modal = stringToNode(modal_html);
  getNode(MODAL_OVERLAY).appendChild(modal);
}