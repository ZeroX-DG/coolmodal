import $ from 'jquery';

export function $$(className) {
  return $(`.${className}`);
}