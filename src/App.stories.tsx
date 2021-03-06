import * as React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import App from './App';

export default {
  title: 'WebView',
  decorators: [withA11y],
};

export const WebView = () => <App />;
