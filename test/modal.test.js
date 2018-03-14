import {$$} from './helper/utility';
import coolmodal from '../dist/coolmodal.min.js';
import CLASSNAME from '../src/class-list';

const {
  MODAL,
  MODAL_OVERLAY
} = CLASSNAME;

describe('create modal', () => {

  it('should have an overlay div', () => {
    coolmodal({title: 'Hey', button: [{content: 'ok'}]});
    let hasOverlay = $$(MODAL_OVERLAY).length > 0;
    expect(hasOverlay).toBe(true);
  });

  it('should have a modal div', () => {
    coolmodal({title: 'Hey', button:[{content: 'ok'}]});
    let hasModal = $$(MODAL).length > 0;
    expect(hasModal).toBe(true);
  });

});