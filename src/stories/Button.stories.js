import React from 'react';
import SaleCard from '../components/saleCard/SaleCard';
import '../index.scss';
import '../components/saleCard/styles.scss';

export default {
  title: 'Example/SaleCard',
  component: SaleCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

const Template = args => <SaleCard />;

export const saleCard = Template.bind({});
