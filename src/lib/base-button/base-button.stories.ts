import type { Meta, StoryObj } from '@storybook/angular';
import { BaseButton } from './base-button.component';

const meta: Meta<BaseButton> = {
  title: 'Components/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseButton** é um botão moderno e altamente customizável que suporta múltiplos estados (primary, secondary, success, warning, danger, ghost), estados de carregamento (loading), disabled e micro-interações elegantes.'
      }
    }
  },
  argTypes: {
    label: { control: 'text', description: 'Texto exibido no botão' },
    variant: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<BaseButton>;

export const Primary: Story = {
  args: {
    label: 'Botão Primário',
    variant: 'primary'
  }
};

export const Success: Story = {
  args: {
    label: 'Salvar com Sucesso',
    variant: 'success'
  }
};

export const Warning: Story = {
  args: {
    label: 'Atenção necessária',
    variant: 'warning'
  }
};

export const Danger: Story = {
  args: {
    label: 'Excluir registro',
    variant: 'danger'
  }
};

export const LoadingState: Story = {
  args: {
    label: 'Enviar',
    loading: true,
    loadingText: 'Processando...'
  }
};
