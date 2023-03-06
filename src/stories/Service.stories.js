import Service from '../components/Service.vue';

export default {
  title: 'Service',
  component: Service,
};

const Template = (args) => ({
  components: { Service },
  setup() {
    return { args };
  },
  template: '<Service v-bind="args"/>',
});

export const FirstStory = Template.bind({});

FirstStory.args = {
  imagePath: 'https://via.placeholder.com/600x400',
  title: 'Primary',
  subText: 'Secondary',
  position: 'left',
};

export const SecondStory = Template.bind({});

SecondStory.args = {
  imagePath: 'https://via.placeholder.com/600x400',
  title: 'Primary',
  subText: 'Secondary',
  position: 'right',
};