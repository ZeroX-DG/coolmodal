import {createModal} from './creator';
import {validateOptions} from './option';
import './styles/coolmodal.scss';

function coolm(options) {
  validateOptions(options);
  createModal(options);
}

export default coolm;