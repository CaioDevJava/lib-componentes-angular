import { BaseButton } from './lib/base-button.component';
const meta = { title: 'BaseButton', component: BaseButton, tags: ['autodocs'] };
export default meta;
export const Primary = { args: { variant: 'primary' }, render: (args) => ({ props: args, template: '<base-button [variant]="variant">Salvar</base-button>' }) };
