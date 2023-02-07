import { FC } from 'react'
import Container from '@mui/material/Container'

export interface ScreenTemplate {
    children?: JSX.Element,
}

const ScreenWrapper: FC<ScreenTemplate> = (props) => {
    const { children } = props
    return (
        <Container maxWidth="lg">
            <div >
                {children}
            </div>
        </Container>
    )
}

export default ScreenWrapper;