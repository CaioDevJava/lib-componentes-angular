import type { Meta, StoryObj } from '@storybook/angular';
import { BaseIcon } from './base-icon.component';

const meta: Meta<BaseIcon> = {
  title: 'Components/BaseIcon',
  component: BaseIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseIcon** é um componente wrapper para renderização padronizada de ícones e símbolos SVG em toda a aplicação.'
      }
    }
  },
  argTypes: {
    name: { control: 'text', description: 'Identificador do ícone' },
    label: { control: 'text', description: 'Rótulo acessível do ícone' }
  }
};

export default meta;
type Story = StoryObj<BaseIcon>;

export const Check: Story = {
  args: {
    name: 'check',
    label: 'Concluído'
  }
};
