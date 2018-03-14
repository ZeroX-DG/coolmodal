import {$$} from './helper/utility';
import coolm from '../dist/coolmodal.min.js';
import CLASSNAME from '../src/class-list';

const {
  MODAL,
  MODAL_OVERLAY
} = CLASSNAME;

describe('create modal', () => {

  it('should have an overlay div', () => {
    coolm({title: 'Hey', button: [{content: 'ok', action: coolm.DISMISS}]});
    let hasOverlay = $$(MODAL_OVERLAY).length > 0;
    expect(hasOverlay).toBe(true);
  });

  it('should have a modal div', () => {
    coolm({title: 'Hey', button:[{content: 'ok', action: coolm.DISMISS}]});
    let hasModal = $$(MODAL).length > 0;
    expect(hasModal).toBe(true);
  });

});