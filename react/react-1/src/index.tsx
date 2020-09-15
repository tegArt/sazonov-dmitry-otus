import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './app';
import './styles/index.scss';

ReactDom.render(<App test="pong" />, document.getElementById('root') as HTMLElement);
