
import useStyles from './styled'
import { IForecast, DailyForecast } from '../../interface/forecast'
import Temp from './Temp'

type Props = {
    forecast: DailyForecast
    Headline: any
    city: string
    pagination: () => void,
    back: () => void
}
const Location = ({ forecast, city, Headline, pagination, back }: Props) => {
    const classes = useStyles()
    const { Date, Temperature, Day } = forecast
    console.log({ Temperature })
    return (
        <>
            <div className={classes.container}>
                <div>
                    <div>{Day.Icon}</div>
                    <div className={classes.category}>{Headline.Category}</div>
                </div>
                <div>{city}</div>
                <div className={classes.text}>"{Headline.Text}"</div>
            </div>
            <Temp currentTemp={Temperature} date={Date} pagination={pagination} back={back} />
        </>
    )
}

export default Location