import { $$, dismissModal } from './helper/utility';
import coolmodal from '../dist/coolmodal.min.js';
import CLASSNAME from '../src/class-list';

const {
  SELECT
} = CLASSNAME;

afterEach(() => dismissModal());

describe('create select', () => {
  it('create a select with the select class', () => {
    coolmodal({
      title: 'Browser', content: [
        {
          tag: 'select', options: [
            { label: 'chrome', value: 'browser_chrome' }
          ]
        }
      ]
    });
    expect($$(SELECT).length).toBeGreaterThan(0);
  });
});