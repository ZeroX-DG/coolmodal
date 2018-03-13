import overlay_html from '../markup/overlay';
import {stringToNode} from './utility';

export function initOverlay() {
  let overlay = stringToNode(overlay_html);
  document.body.appendChild(overlay);
}