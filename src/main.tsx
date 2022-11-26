import { render } from 'preact';
import { App } from './app';
import '@cloudscape-design/global-styles/index.css';

render(<App />, document.getElementById('app') as HTMLElement);
