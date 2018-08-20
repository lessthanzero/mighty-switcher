import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import centered from '@storybook/addon-centered';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Switcher from './Switcher';

storiesOf('Switcher', module)
  .addDecorator(StoryRouter())
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('default', () => <Switcher />, {
	info: {
		text: `
		      description or documentation about my component, supports markdown

		      ~~~js
		      <Button>Click Here</Button>
		      ~~~
		    `,
	}
  },)
  .add('unavailable on', () => <Switcher labelText={""} disabled={true} active={true} sizing={"standard"} theme={"default"}/>, {

  })
  .add('unavailable off', () => <Switcher labelText={""} disabled={true} active={false} sizing={"standard"} theme={"default"}/>, {

  })
  .add('switched on', () => <Switcher labelText={""} disabled={false} active={true} sizing={"standard"} theme={"default"}/>, {

  })
  .add('switched on, small', () => <Switcher labelText={""} disabled={false} active={true} sizing={"small"} theme={"default"}/>, {

  })
  .add('switched on, large', () => <Switcher labelText={""} disabled={false} active={true} sizing={"large"} theme={"default"}/>, {

  });
