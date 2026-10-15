import type { Meta, StoryObj } from '@storybook/angular';
import { BaseChip } from './base-chip.component';

const meta: Meta<BaseChip> = {
  title: 'Components/BaseChip',
  component: BaseChip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseChip** é um componente de etiqueta (chip/tag) compacto usado para destacar categorias, tags ou atributos com cantos arredondados.'
      }
    }
  },
  argTypes: {
    removable: { control: 'boolean', description: 'Permite remover o chip' }
  }
};

export default meta;
type Story = StoryObj<BaseChip>;

export const Default: Story = {
  args: {
    removable: false
  }
};

export const Removable: Story = {
  args: {
    removable: true
  }
};
