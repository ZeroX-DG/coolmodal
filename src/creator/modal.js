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
  if (options.title && options.title_html) {
    dismissModal();
    throw new Error('You can\'t have both \'title\' and \'title_html\'');
  }
  options.title = options.title || options.title_html || '';
  initTitle(options.title, options.title_html != undefined);
  if (options.content && options.content_html) {
    dismissModal();
    throw new Error('You can\'t have both \'content\' and \'content_html\'');
  }
  options.content = options.content || options.content_html || '';
  initContent(options.content, options.content_html != undefined);
  options.button = options.button || [{content: 'OK', action: SUBMIT, type: BUTTON_INFO}];
  if (!options.noButton) {
    initButton(options.button, events);
  }
}

export function initModal(options) {
  let modal = stringToNode(modal_html);
  if (options.width) {
    modal.style.width = options.width;
  }

  if (options.theme) {
    // change theme to lower case and all spaces to hyphen
    modal.classList.add(options.theme.replace(/\s+/g, '-').toLowerCase());
  }
  getNode(MODAL_OVERLAY).appendChild(modal);
}
