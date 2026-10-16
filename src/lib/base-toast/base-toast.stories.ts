import type { Meta, StoryObj } from '@storybook/angular';
import { BaseToast } from './base-toast.component';

const meta: Meta<BaseToast> = {
  title: 'Components/BaseToast',
  component: BaseToast,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseToast** exibe notificações flutuantes temporárias (sucesso, erro, alerta, info), com suporte a botão de fechar (x), tempo de duração opcional e barra de progresso animada na base.'
      }
    }
  },
  argTypes: {
    message: { control: 'text', description: 'Mensagem exibida no toast' },
    variant: { control: 'select', options: ['success', 'error', 'warning', 'info'] },
    duration: { control: 'number', description: 'Tempo em milissegundos para fechar automaticamente (0 para persistente)' },
    dismissible: { control: 'boolean', description: 'Exibe botão de fechar (x)' }
  }
};

export default meta;
type Story = StoryObj<BaseToast>;

export const Success: Story = {
  args: {
    message: 'Operação realizada com sucesso!',
    variant: 'success',
    duration: 5000,
    dismissible: true
  }
};

export const ErrorToast: Story = {
  args: {
    message: 'Erro ao conectar ao servidor.',
    variant: 'error',
    duration: 0,
    dismissible: true
  }
};

export const WarningToast: Story = {
  args: {
    message: 'Sua sessão expira em breve.',
    variant: 'warning',
    duration: 4000,
    dismissible: true
  }
};

export const InfoToast: Story = {
  args: {
    message: 'Toast de exemplo!',
    variant: 'info',
    duration: 6000,
    dismissible: true
  }
};
