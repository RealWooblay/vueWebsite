import NavigationHeader from '../components/NavigationHeader.vue';

export default {
  title: 'NavigationHeader',
  component: NavigationHeader,
  argTypes: {
    items: {
      control: {
        type: 'array',
        separator: ','
      },
      description: 'The list of navigation items'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavigationHeader },
  template: '<NavigationHeader :items="items" />'
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, label: 'Home' },
    { id: 2, label: 'About' },
    { id: 3, label: 'Contact' }
  ]
};
