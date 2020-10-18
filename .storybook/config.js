import { configure } from '@storybook/react';
import '!style-loader!css-loader!sass-loader!../src/styles/reset.scss';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
