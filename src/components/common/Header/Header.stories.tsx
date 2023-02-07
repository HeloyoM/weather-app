import { ComponentStory, ComponentMeta } from "@storybook/react"
import Header from './Header'

export default {
    title: 'Header/navbar',
    component: Header,
    decorators: [(story => <div>{story()}</div>)]
} as ComponentMeta<typeof Header>

export const Template: ComponentStory<typeof Header> = (args) => (<Header />)