import type { Meta, StoryObj } from '@storybook/angular';
import { BaseModal } from './base-modal.component';

const meta: Meta<BaseModal> = {
  title: 'Components/BaseModal',
  component: BaseModal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseModal** exibe uma janela de diálogo flutuante centralizada com fundo desfocado (glassmorphic blur), cabeçalho, corpo e rodapé configuráveis.'
      }
    }
  },
  argTypes: {
    open: { control: 'boolean', description: 'Controla a visibilidade do modal' },
    title: { control: 'text', description: 'Título do modal' },
    description: { control: 'text', description: 'Texto descritivo do modal' },
    primaryButton: { control: 'text', description: 'Texto do botão de confirmação' },
    secondaryButton: { control: 'text', description: 'Texto do botão de cancelamento' }
  }
};

export default meta;
type Story = StoryObj<BaseModal>;

export const TwoActions: Story = {
  args: {
    open: true,
    title: 'Confirmar exclusão',
    description: 'Tem certeza de que deseja excluir este item permanentemente? Esta ação não poderá ser desfeita.',
    primaryButton: 'Sim, excluir',
    secondaryButton: 'Cancelar'
  }
};
