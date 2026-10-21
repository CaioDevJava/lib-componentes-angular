import type { Meta, StoryObj } from '@storybook/angular';
import { BasePagination } from './base-pagination.component';

const meta: Meta<BasePagination> = {
  title: 'Components/BasePagination',
  component: BasePagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BasePagination** permite navegar entre grandes conjuntos de dados através de páginas numeradas, elipses automáticas para muitos registros, botões de salto rápido (primeira/última/anterior/próxima) e seletor dinâmico de itens por página.'
      }
    }
  },
  argTypes: {
    currentPage: { control: 'number', description: 'Página atual selecionada' },
    totalItems: { control: 'number', description: 'Número total de itens' },
    pageSize: { control: 'number', description: 'Quantidade de itens por página' },
    pageSizeOptions: { control: 'object', description: 'Opções de itens por página disponíveis' },
    showPageSizeOptions: { control: 'boolean', description: 'Exibe ou oculta o seletor de itens por página' },
    siblingCount: { control: 'number', description: 'Quantidade de páginas vizinhas exibidas ao redor da página atual' }
  }
};

export default meta;
type Story = StoryObj<BasePagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalItems: 95,
    pageSize: 10,
    pageSizeOptions: [5, 10, 20, 50],
    showPageSizeOptions: true,
    siblingCount: 1
  }
};

export const ManyPagesWithEllipsis: Story = {
  args: {
    currentPage: 12,
    totalItems: 500,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50],
    showPageSizeOptions: true,
    siblingCount: 1
  }
};

export const CompactWithoutSizeSelector: Story = {
  args: {
    currentPage: 3,
    totalItems: 45,
    pageSize: 10,
    showPageSizeOptions: false
  }
};
