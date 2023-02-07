import { useState, useMemo } from 'react'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import { Divider } from "@material-ui/core"
import { Temperature } from "../../interface/forecast"
import DateLocation from "./DateLocation"
import useStyles from './styled'
import { getInitCelsius } from '../../utils/getTemp'

type Props = {
    currentTemp: Temperature
    date: string
    pagination: () => void
    back: () => void
}
const Temp = ({ currentTemp, date, pagination, back }: Props) => {
    const { Maximum, Minimum } = currentTemp
    const [displayCelsiusForm, setDisplayCelsiusForm] = useState(false)

    const min = useMemo(() => (getInitCelsius(Minimum.Value)), [Minimum])
    const max = useMemo(() => (getInitCelsius(Maximum.Value)), [Maximum])

    const classes = useStyles()

    const handleToggleTempUnit = () => setDisplayCelsiusForm(prev => !prev)
    const buttonLable = (displayCelsiusForm ? 'C' : 'F')
    const toggleTempButton = (<button onClick={handleToggleTempUnit}>{buttonLable}</button>)

    return (
        <div className={classes.tempContainer}>
            <DateLocation date={date} />
            {toggleTempButton}

            <div className={classes.tempDisplay}>
                <ArrowForward onClick={pagination} />
                <p>Minimum {displayCelsiusForm ? min.c : min.f}</p>
                <Divider orientation="vertical" />
                <p>Maximum {displayCelsiusForm ? max.c : max.f}</p>
                <ArrowBack onClick={back} />
            </div>
        </div>
    )
}

export default Temp