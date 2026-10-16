import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BaseGrid } from './base-grid.component';
import { BaseCard } from '../base-card/base-card.component';

const meta: Meta<BaseGrid> = {
  title: 'Components/BaseGrid',
  component: BaseGrid,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [BaseCard]
    })
  ],
  parameters: {
    docs: {
      description: {
        component: 'O **BaseGrid** é um container de layout responsivo baseado em CSS Grid para organizar cards e outros componentes, com suporte a bordas arredondadas, sombras suaves e animação fluida em hover.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<BaseGrid>;

export const WithCards: Story = {
  args: {
    columns: 3,
    gap: '1.5rem'
  },
  render: (args) => ({
    props: args,
    template: `
      <base-grid [columns]="columns" [gap]="gap">
        <base-card title="Card de Análise 1" imageUrl="https://images.unsplash.com/photo-1579309401371-cc709ac5e5a2?auto=format&fit=crop&w=600&q=80" [clickable]="true">
          Exemplo de card interativo com animação suave de elevação em hover.
        </base-card>
        <base-card title="Card de Produto 2" imageUrl="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80" [clickable]="true">
          Explore as funcionalidades avançadas desta grade responsiva.
        </base-card>
        <base-card title="Card de Estatísticas 3" imageUrl="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80" [clickable]="true">
          Design moderno com bordas arredondadas e sombras refinadas.
        </base-card>
      </base-grid>
    `
  })
};
