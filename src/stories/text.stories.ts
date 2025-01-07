import type { Meta, StoryObj } from '@storybook/angular/';
import {TestComponent} from '../test/test.component';


const meta: Meta<TestComponent> = {
  component: TestComponent,
};

export default meta;
type Story = StoryObj<TestComponent>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
