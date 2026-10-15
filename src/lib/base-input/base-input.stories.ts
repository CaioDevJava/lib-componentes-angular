import type { Meta, StoryObj } from '@storybook/angular';
import { BaseInput } from './base-input.component';

const meta: Meta<BaseInput> = {
  title: 'Components/BaseInput',
  component: BaseInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseInput** é um campo de texto reutilizável com suporte a rótulos (labels), placeholder, estados visuais (default, success, error, warning) e mensagens de ajuda (helper text).'
      }
    }
  },
  argTypes: {
    label: { control: 'text', description: 'Rótulo do input' },
    placeholder: { control: 'text', description: 'Texto placeholder' },
    state: { control: 'select', options: ['default', 'success', 'error', 'warning'], description: 'Estado visual do input' },
    helperText: { control: 'text', description: 'Texto de ajuda ou mensagem de validação' },
    disabled: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<BaseInput>;

export const Default: Story = {
  args: {
    label: 'E-mail',
    placeholder: 'seu.email@exemplo.com',
    state: 'default',
    helperText: 'Digite seu e-mail corporativo.'
  }
};

export const SuccessState: Story = {
  args: {
    label: 'Nome de usuário',
    value: 'caiomagno',
    state: 'success',
    helperText: 'Nome de usuário disponível!'
  }
};

export const ErrorState: Story = {
  args: {
    label: 'Senha',
    type: 'password',
    value: '123',
    state: 'error',
    helperText: 'A senha deve ter no mínimo 8 caracteres.'
  }
};

export const WarningState: Story = {
  args: {
    label: 'Código promocional',
    value: 'DESC2024',
    state: 'warning',
    helperText: 'Este cupom expira em breve.'
  }
};
