import type { Meta, StoryObj } from '@storybook/angular';
import { BaseToggle } from './base-toggle.component';

const meta: Meta<BaseToggle> = {
  title: 'Components/BaseToggle',
  component: BaseToggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseToggle** é um switch acessível (role="switch") com suporte a estados ativado/desativado, rótulo e foco acessível.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<BaseToggle>;

export const Default: Story = {
  args: {
    label: 'Ativar notificações push',
    checked: false,
    disabled: false
  }
};

export const Checked: Story = {
  args: {
    label: 'Modo escuro',
    checked: true,
    disabled: false
  }
};
