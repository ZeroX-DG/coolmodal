import {createModal} from './creator';
import {validateOptions} from './option';
import default_const from './default-const';
import './styles/coolmodal.scss';

function coolmodal(options, events = {}) {
  validateOptions(options);
  createModal(options, events);
}

const default_const_names = Object.keys(default_const);
for(let i = 0; i < default_const_names.length; i++) {
  let default_const_name = default_const_names[i];
  coolmodal[default_const_name] = default_const[default_const_name];
}

export default coolmodal;
