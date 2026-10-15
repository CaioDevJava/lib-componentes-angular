import type { Meta, StoryObj } from '@storybook/angular';
import { BaseTooltip } from './base-tooltip.component';

const meta: Meta<BaseTooltip> = {
  title: 'Components/BaseTooltip',
  component: BaseTooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseTooltip** exibe uma dica flutuante informativa ao passar o mouse, com bordas arredondadas e sombra elegante.'
      }
    }
  },
  argTypes: {
    content: { control: 'text', description: 'Texto da dica' }
  }
};

export default meta;
type Story = StoryObj<BaseTooltip>;

export const Default: Story = {
  args: {
    content: 'Informação adicional sobre o elemento'
  }
};
