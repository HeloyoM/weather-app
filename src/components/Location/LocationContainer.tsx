import { FC, useState } from "react"
import { IForecast, DailyForecast } from "../../interface/forecast"
import Location from './Location'

const ONE_PAGE = 1
type Props = {
    forecasts: IForecast
    city: string
}
const LocationContainer = ({ city, forecasts }: Props | any) => {
    const [currentDay, setCureentDay] = useState<number>(0)

    const handlePagination = () => {
        const foreward = currentDay + ONE_PAGE
        if (foreward > 4) return
        else setCureentDay(foreward)
    }
    const handleBackDays = () => {
        const backDay = currentDay - ONE_PAGE
        if (backDay <= -1) return
        else setCureentDay(backDay)
    }

    if (!forecasts.DailyForecasts.length) return <div>Lodaing...</div>

    return (
        <Location
            city={city}
            forecast={forecasts.DailyForecasts[currentDay]}
            Headline={forecasts.Headline}
            pagination={handlePagination}
            back={handleBackDays} />
    )
}

export default LocationContainer