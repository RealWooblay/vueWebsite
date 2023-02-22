import { action } from '@storybook/addon-actions';

import Button from '../components/Button.vue';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  methods: { action: action('clicked') },
  template: '<Button @click="action"><slot /></Button>',
});

export const Primary = Template.bind({});
Primary.args = {
  class: 'storybook-button--primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  class: 'storybook-button--secondary',
  children: 'Secondary Button',
};