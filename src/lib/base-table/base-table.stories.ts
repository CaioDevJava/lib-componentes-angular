import type { Meta, StoryObj } from '@storybook/angular';
import { BaseTable } from './base-table.component';

type Employee = { id: number; nome: string; cargo: string; departamento: string; status: string };

const meta: Meta<BaseTable<Employee>> = {
  title: 'Components/BaseTable',
  component: BaseTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseTable** é uma tabela de dados moderna e corporativa (Enterprise UI), projetada com cabeçalhos estruturados em caixa alta, espaçamento respirável, efeito de hover suave e estado vazio elegante.'
      }
    }
  },
  argTypes: {
    emptyText: { control: 'text', description: 'Texto exibido quando não há registros' }
  }
};

export default meta;
type Story = StoryObj<BaseTable<Employee>>;

export const Default: Story = {
  args: {
    columns: [
      { key: 'id', label: 'ID' },
      { key: 'nome', label: 'Nome' },
      { key: 'cargo', label: 'Cargo' },
      { key: 'departamento', label: 'Departamento' },
      { key: 'status', label: 'Status' }
    ],
    dados: [
      { id: 1, nome: 'Ana Silva', cargo: 'Desenvolvedora Sênior', departamento: 'Engenharia', status: 'Ativo' },
      { id: 2, nome: 'Carlos Souza', cargo: 'Product Owner', departamento: 'Produto', status: 'Ativo' },
      { id: 3, nome: 'Mariana Lima', cargo: 'UX Designer', departamento: 'Design', status: 'Férias' },
      { id: 4, nome: 'Lucas Mendes', cargo: 'DevOps Engineer', departamento: 'Infraestrutura', status: 'Ativo' }
    ]
  }
};

export const EmptyState: Story = {
  args: {
    columns: ['nome', 'cargo', 'departamento'],
    dados: [],
    emptyText: 'Nenhum funcionário encontrado no sistema.'
  }
};
