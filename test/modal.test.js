import {$$, dismissModal} from './helper/utility';
import coolmodal from '../dist/coolmodal.min.js';
import CLASSNAME from '../src/class-list';

const {
  MODAL,
  MODAL_OVERLAY
} = CLASSNAME;

afterEach(() => dismissModal());

describe('create modal', () => {

  it('should have an overlay div', () => {
    coolmodal({title: 'Hey', button: [{content: 'ok'}]});
    let has_overlay = $$(MODAL_OVERLAY).length > 0;
    expect(has_overlay).toBe(true);
  });

  it('should have a modal div', () => {
    coolmodal({title: 'Hey', button:[{content: 'ok'}]});
    let has_modal = $$(MODAL).length > 0;
    expect(has_modal).toBe(true);
  });

  it('should have a default with of 500px', () => {
    coolmodal({title: 'Hey'});
    let modal_width = $$(MODAL).width();
    expect(modal_width).toBe(500);
  });

  it('should have dark theme if the theme specified as dark', () => {
    coolmodal({title: 'Hey', theme: 'dark'});
    let modal = $$(MODAL);
    expect(modal.hasClass('dark')).toBe(true);
  });

  it('should close on overlay click if outsideClick is enabled', () => {
    coolmodal({title: 'Hey', outsideClick: true});
    let has_modal = $$(MODAL).length > 0;
    expect(has_modal).toBe(true);
    setTimeout(() => {
      $$(MODAL_OVERLAY).trigger('click');
      let has_modal = $$(MODAL).length > 0;
      expect(has_modal).toBe(false);
    });
  });

});
