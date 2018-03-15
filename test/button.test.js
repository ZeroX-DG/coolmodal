import {$$, dismissModal} from './helper/utility';
import coolmodal from '../dist/coolmodal.min.js';
import CLASSNAME from '../src/class-list';

const {
  BUTTON,
  BUTTON_DANGER,
  BUTTON_INFO,
  BUTTON_SUCCESS,
  BUTTON_WARNING,
  BUTTON_GROUP
} = CLASSNAME;

afterEach(() => dismissModal());

describe('create button', () => {

  it('should have the default button class', () => {
    expect($$(BUTTON).length).toBeLessThan(1);
    coolmodal({title: 'Hey'});
    expect($$(BUTTON).length).toBeGreaterThan(0);
  });

  it('should add the info class to the default button', () => {
    coolmodal({title: 'Hey'});
    expect($$(BUTTON_INFO).length).toEqual(1);
  });

  it('should have a button group div', () => {
    coolmodal({title: 'Hey'});
    expect($$(BUTTON_GROUP).length).toEqual(1);
  });

  describe('with different types', () => {
    it('should add the danger class to danger button', () => {  
      coolmodal({title: 'Hey', button: [
        {content: 'Cancel', type: coolmodal.BUTTON_DANGER}
      ]});
      let button = $$(BUTTON);
      expect(button.hasClass(BUTTON_DANGER)).toBe(true);
    });

    it('should add the info class to info button', () => {  
      coolmodal({title: 'Hey', button: [
        {content: 'OK', type: coolmodal.BUTTON_INFO}
      ]});
      let button = $$(BUTTON);
      expect(button.hasClass(BUTTON_INFO)).toBe(true);
    });

    it('should add the success class to success button', () => {  
      coolmodal({title: 'Hey', button: [
        {content: 'OK', type: coolmodal.BUTTON_SUCCESS}
      ]});
      let button = $$(BUTTON);
      expect(button.hasClass(BUTTON_SUCCESS)).toBe(true);
    });

    it('should add the warning class to warning button', () => {  
      coolmodal({title: 'Hey', button: [
        {content: 'Cancel', type: coolmodal.BUTTON_WARNING}
      ]});
      let button = $$(BUTTON);
      expect(button.hasClass(BUTTON_WARNING)).toBe(true);
    });
  });

});