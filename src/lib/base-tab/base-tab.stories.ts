import type { Meta, StoryObj } from '@storybook/angular';
import { BaseTab } from './base-tab.component';

const meta: Meta<BaseTab> = {
  title: 'Components/BaseTab',
  component: BaseTab,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseTab** é um componente de navegação por abas com suporte a múltiplos itens, seleção interativa e conteúdo dinâmico.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<BaseTab>;

export const Default: Story = {
  args: {
    activeId: 'tab1',
    tabs: [
      { id: 'tab1', title: 'Visão Geral', content: 'Conteúdo da aba Visão Geral.' },
      { id: 'tab2', title: 'Configurações', content: 'Conteúdo da aba Configurações do sistema.' },
      { id: 'tab3', title: 'Relatórios', content: 'Conteúdo da aba Relatórios e métricas.' }
    ]
  }
};
