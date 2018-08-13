import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Switcher from './Switcher';

storiesOf('Switcher', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Switcher />);
