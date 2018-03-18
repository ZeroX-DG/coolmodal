import {$$, dismissModal} from './helper/utility';
import coolmodal from '../dist/coolmodal.min.js';
import CLASSNAME from '../src/class-list';

const {
  MODAL,
  MODAL_OVERLAY,
  BUTTON
} = CLASSNAME;

afterEach(() => dismissModal());

describe('events', () => {
  it('should trigger onDismiss function on dismiss', () => {
    let onDismiss = jest.fn(() => {});
    let events = {
      onDismiss
    };
    coolmodal({title: 'hey'}, events);
    setTimeout(()=>{
      dismissModal();
      expect(onDismiss).toBeCalled();
    });
  });

  it('should trigger onSubmit function on submit', () => {
    let onSubmit = jest.fn(() => {});
    let events = {
      onSubmit
    };
    coolmodal({title: 'hey'}, events);
    setTimeout(()=>{
      // default action of button is submit
      document.querySelector(`.${BUTTON}`).click();
      expect(onSubmit).toBeCalled();
    });
  });
});
