import $ from 'jquery';
import CLASSNAME from '../../src/class-list';
const {MODAL_OVERLAY} = CLASSNAME;

export function $$(className) {
  return $(`.${className}`);
}

export function getNode(className) {
  return document.querySelector(`.${className}`);
}

export function dismissModal() {
  document.querySelector(`.${MODAL_OVERLAY}`).remove();
}