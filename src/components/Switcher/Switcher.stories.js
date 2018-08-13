import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import centered from '@storybook/addon-centered';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
// import withNotes from '@storybook/addon-notes';

import Switcher from './Switcher';

storiesOf('Switcher', module)
  .addDecorator(StoryRouter())
  .addDecorator(centered)
  .addDecorator(withKnobs)
  // .addDecorator(withNotes)
  .add('default', () => <Switcher />, {
	info: {
		text: `
		      description or documentation about my component, supports markdown

		      ~~~js
		      <Button>Click Here</Button>
		      ~~~
		    `,
	},
	notes: 'A basic switcher component for binary attributes'
  },);
