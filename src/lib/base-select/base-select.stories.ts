import type { Meta, StoryObj } from '@storybook/angular';
import { BaseSelect } from './base-select.component';

const meta: Meta<BaseSelect> = {
  title: 'Components/BaseSelect',
  component: BaseSelect,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseSelect** é um campo de seleção suspenso com suporte a múltiplos estados visuais (success, error, warning), rótulos e helper text.'
      }
    }
  },
  argTypes: {
    label: { control: 'text', description: 'Rótulo do select' },
    state: { control: 'select', options: ['default', 'success', 'error', 'warning'], description: 'Estado visual' },
    helperText: { control: 'text', description: 'Texto de ajuda ou validação' }
  }
};

export default meta;
type Story = StoryObj<BaseSelect>;

export const Options: Story = {
  args: {
    label: 'Status do Pedido',
    state: 'default',
    helperText: 'Selecione o status atual do pedido.',
    options: [
      { value: 'pending', label: 'Pendente' },
      { value: 'active', label: 'Em Andamento' },
      { value: 'completed', label: 'Concluído' }
    ]
  }
};

export const ErrorState: Story = {
  args: {
    label: 'Categoria',
    state: 'error',
    helperText: 'Por favor, selecione uma categoria válida.',
    options: [
      { value: '', label: 'Selecione...' },
      { value: 'cat1', label: 'Categoria A' }
    ]
  }
};
