import modal_html from '../markup/modal';
import {stringToNode} from './utility';

export function initModal() {
  let modal = stringToNode(modal_html);
  return modal;
}