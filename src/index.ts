import { createElement } from 'react';
import ReactDOM from 'react-dom';
import { checkEnvVariables } from 'scripts/checkEnvVariables';
import App from './App';

checkEnvVariables();

ReactDOM.render(createElement(App), document.getElementById('root'));
