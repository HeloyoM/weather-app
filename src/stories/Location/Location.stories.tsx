import { ComponentStory, ComponentMeta } from "@storybook/react"
import LocationContainer from './LocationContainer'
import { forecast } from '../../server'

export default {
    title: 'Location/card',
    component: LocationContainer,
    decorators: [(story => <div>{story()}</div>)],
    argTypes: {
        city: {
            defaultValue: 'Tel-Aviv'
        },
        forecasts: {
            defaultValue: forecast
        }
    }
} as ComponentMeta<typeof LocationContainer>

export const Template: ComponentStory<typeof LocationContainer> = (args) => (<LocationContainer {...args} />)

