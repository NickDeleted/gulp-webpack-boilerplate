import { deleteAsync } from 'del';
import { paths } from '../config/paths.js';

const reset = () => deleteAsync(paths.buildFolder);

export { reset };