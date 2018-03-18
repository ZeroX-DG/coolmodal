import overlay_html from '../markup/overlay';
import {dismissModal} from './modal';
import {stringToNode} from './utility';

export function initOverlay(options, events) {
  let overlay = stringToNode(overlay_html);
  if (options.outsideClick) {
    overlay.addEventListener('click', function() {
      dismissModal();
      if(events['onDismiss']) events['onDismiss']();
    });
  }
  document.body.appendChild(overlay);
}
