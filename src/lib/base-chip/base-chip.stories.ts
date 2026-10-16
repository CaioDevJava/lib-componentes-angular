import type { Meta, StoryObj } from '@storybook/angular';
import { BaseChip } from './base-chip.component';
import { moduleMetadata } from '@storybook/angular';

const meta: Meta<BaseChip> = {
  title: 'Components/BaseChip',
  component: BaseChip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseChip** possui bordas totalmente arredondadas (formato *pill*). Ele pode ser usado individualmente como etiqueta estática ou em grupos, ativando o botão "x" opcional (`removable = true`) para remoção em listas de tags.'
      }
    }
  },
  argTypes: {
    label: { control: 'text', description: 'Texto exibido no chip' },
    removable: { control: 'boolean', description: 'Exibe o botão "x" à direita para remoção em grupos' },
    backgroundColor: { control: 'color', description: 'Cor de fundo personalizada' },
    textColor: { control: 'color', description: 'Cor do texto personalizada' }
  }
};

export default meta;
type Story = StoryObj<BaseChip>;

export const IndividualPill: Story = {
  args: {
    label: 'Status: Ativo',
    removable: false
  }
};

export const GroupRemovableChip: Story = {
  args: {
    label: 'Filtro: Angular 19',
    removable: true
  }
};

export const CustomColoredPill: Story = {
  args: {
    label: 'Destaque',
    removable: false,
    backgroundColor: '#4f46e5',
    textColor: '#ffffff'
  }
};

export const ChipGroupExample: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
        <base-chip label="TypeScript" [removable]="true"></base-chip>
        <base-chip label="Angular" [removable]="true"></base-chip>
        <base-chip label="Design System" [removable]="true" backgroundColor="#10b981" textColor="#ffffff"></base-chip>
        <base-chip label="Estático (Pill)" [removable]="false"></base-chip>
      </div>
    `
  })
};
