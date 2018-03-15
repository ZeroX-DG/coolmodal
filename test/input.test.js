import {$$, dismissModal, getNode} from './helper/utility';
import coolmodal from '../dist/coolmodal.min.js';
import CLASSNAME from '../src/class-list';

const {
  INPUT,
  LABEL
} = CLASSNAME;

afterEach(() => dismissModal());

describe('create input', () => {

  describe('with details', () => {

    it('should create an input with id', () => {
      coolmodal({title: 'Hey', content: [
        {tag: 'input', id: 'id'}
      ]});
      
      expect($$(INPUT).attr('id')).toBe('id');
    });

    it('should create an input with name', () => {
      coolmodal({title: 'Hey', content: [
        {tag: 'input', name: 'name'}
      ]});
      
      expect($$(INPUT).attr('name')).toBe('name');
    });

    it('should create an input with placeholder', () => {
      coolmodal({title: 'Hey', content: [
        {tag: 'input', placeholder: 'placeholder...'}
      ]});
      
      expect($$(INPUT).attr('placeholder')).toBe('placeholder...');
    });

    it('should create an input with type', () => {
      coolmodal({title: 'Hey', content: [
        {tag: 'input', type: 'password'}
      ]});
      
      expect($$(INPUT).attr('type')).toBe('password');
    });

    it('should create a label with the correct text', () => {
      coolmodal({title: 'Hey', content: [
        {tag: 'input', type: 'password', label: 'Password:'}
      ]});
      
      expect($$(LABEL).length).toBeGreaterThan(0);
      expect(getNode(LABEL).innerText).toBe('Password:');
    });
  });

  describe('with no details', () => {
    it('should not have unprovided details', () => {
      coolmodal({title: 'Hey', content: [
        {tag: 'input'}
      ]});
      expect($$(INPUT).attr('type')).toBe(undefined);
    });
  });
});