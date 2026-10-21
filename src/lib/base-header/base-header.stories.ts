import type { Meta, StoryObj } from '@storybook/angular';
import { BaseHeader } from './base-header.component';

const meta: Meta<BaseHeader> = {
  title: 'Components/BaseHeader',
  component: BaseHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseHeader** é um cabeçalho responsivo com suporte a marca/logo, navegação principal com links ativos, slots para ações à direita (perfil, botões) e menu compacto adaptável para dispositivos móveis (hamburger drawer).'
      }
    }
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['static', 'fixed', 'sticky'],
      description: 'Comportamento de posicionamento na tela'
    },
    brandTitle: { control: 'text', description: 'Título da marca' },
    brandLogo: { control: 'text', description: 'URL do logotipo da marca' },
    navItems: { control: 'object', description: 'Lista de itens de navegação' }
  }
};

export default meta;
type Story = StoryObj<BaseHeader>;

const sampleNavItems = [
  { label: 'Início', active: false },
  { label: 'Dashboard', active: true },
  { label: 'Produtos', active: false },
  { label: 'Relatórios', active: false },
  { label: 'Configurações', active: false }
];

export const DefaultHeader: Story = {
  args: {
    position: 'sticky',
    brandTitle: 'Painel Admin',
    navItems: sampleNavItems
  }
};

export const HeaderWithActions: Story = {
  render: () => ({
    template: `
      <base-header [brandTitle]="'Loja Virtual'" [navItems]="navItems" [position]="'sticky'">
        <div actions style="display: flex; align-items: center; gap: 0.75rem;">
          <button style="padding: 0.375rem 0.75rem; border-radius: 0.375rem; border: 1px solid #cbd5e1; background: #fff; cursor: pointer; font-weight: 500;">Ajuda</button>
          <div style="width: 2.25rem; height: 2.25rem; border-radius: 50%; background: #2563eb; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.875rem;">CM</div>
        </div>
        <div mobile-actions style="display: flex; gap: 0.5rem; flex-direction: column;">
          <button style="width: 100%; padding: 0.5rem; border-radius: 0.375rem; border: 1px solid #cbd5e1; background: #fff;">Ajuda</button>
          <button style="width: 100%; padding: 0.5rem; border-radius: 0.375rem; background: #2563eb; color: #fff; border: none;">Meu Perfil</button>
        </div>
      </base-header>
    `,
    props: {
      navItems: sampleNavItems
    }
  })
};
