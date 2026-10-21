import type { Meta, StoryObj } from '@storybook/angular';
import { BaseLoader } from './base-loader.component';

const meta: Meta<BaseLoader> = {
  title: 'Components/BaseLoader',
  component: BaseLoader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseLoader** fornece um indicador visual de carregamento (spinner) com suporte a tamanhos, mensagem descritiva opcional e dois modos de exibição: inline (em botões ou blocos) e overlay (bloqueando a tela inteira).'
      }
    }
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do spinner'
    },
    mode: {
      control: 'select',
      options: ['inline', 'overlay'],
      description: 'Modo de exibição (inline ou tela cheia)'
    },
    message: { control: 'text', description: 'Mensagem descritiva exibida abaixo do spinner' },
    color: { control: 'color', description: 'Cor principal do spinner' }
  }
};

export default meta;
type Story = StoryObj<BaseLoader>;

export const InlineSmall: Story = {
  args: {
    size: 'small',
    mode: 'inline',
    message: ''
  }
};

export const InlineWithMessage: Story = {
  args: {
    size: 'medium',
    mode: 'inline',
    message: 'Processando pagamento...'
  }
};

export const OverlayFullscreen: Story = {
  args: {
    size: 'large',
    mode: 'overlay',
    message: 'Carregando dados do sistema, por favor aguarde...'
  }
};
