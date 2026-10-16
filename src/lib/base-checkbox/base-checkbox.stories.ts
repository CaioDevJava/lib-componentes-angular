import type { Meta, StoryObj } from '@storybook/angular';
import { BaseCheckbox } from './base-checkbox.component';

const meta: Meta<BaseCheckbox> = {
  title: 'Components/BaseCheckbox',
  component: BaseCheckbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseCheckbox** é um componente de caixa de seleção acessível, com tipografia moderna, suporte a estados desabilitados e foco visível.'
      }
    }
  },
  argTypes: {
    label: { control: 'text', description: 'Texto do rótulo ao lado do checkbox' },
    checked: { control: 'boolean', description: 'Estado marcado' },
    disabled: { control: 'boolean', description: 'Desabilita a interação' }
  }
};

export default meta;
type Story = StoryObj<BaseCheckbox>;

export const Default: Story = {
  args: {
    label: 'Aceito os termos e condições de uso',
    checked: false,
    disabled: false
  }
};

export const Checked: Story = {
  args: {
    label: 'Inscrever-me na newsletter',
    checked: true,
    disabled: false
  }
};
