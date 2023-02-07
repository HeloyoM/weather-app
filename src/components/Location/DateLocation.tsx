import useStyles from './styled'
import moment from 'moment'

type Props = {
    date: string
}
const DateLocation = ({ date }: Props) => {
    const classes = useStyles()

    const convertDateFormat = moment(date).format('DD.MM.YY')

    const weekDays = ['today', 'tomorrow', 'Next 2 days', 'Next 3 days', 'Next 4 days', 'Next 5 days']

    const forecastDate = moment(date)
    const today = moment()
    const dateLabel = weekDays[forecastDate.diff(today, 'days')]

    return (<div className={classes.date}><div>{convertDateFormat}</div><span>{dateLabel}</span></div>)
}

export default DateLocation