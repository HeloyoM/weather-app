import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
    container: {
        width: '250px',
        border: '1px solid lightgrey',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        minHeight: '315px',
        height: '50%',
        gap: '1%',
        justifyContent: 'space-between',
        fontSize: '17px',
        fontFamily: 'Sora, sens-serif',
        textAlign: 'center',
        marginBottom: '1%',
        '& >:first-child': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: '2% 2%'
        }
    },
    text: {
        width: '100%',
        height: '45px',
        fontSize: '19px',
        color: 'steelblue',
        textAlign: 'center',
        padding: '2px',
        fontFamily: 'Sora, sens-serif'
    },
    category: {
    },
    date: {
        display: 'flex',
        fontSize: '18px',
        fontWeight: 500,
        borderRadius: '3px',
        position: 'relative',
        left: '38%',
        top: '4px',
        fontFamily: 'Sora, sens-serif',
        '& >span': {
            alignItems: 'center',
            display: 'flex',
            width: '39%',
            textAlign: 'center'
        },
        '& >:first-child': {
            border: '2.5px solid #d3d3d33b',
            width: 'fit-content',
            padding: '8px',
        }
    },
    tempContainer: {
        width: '30%',
        height: '20%',
        minHeight: '150px',
        maxHeight: '200px',
        border: '2.5px solid #d3d3d33b',
        margin: 'auto',
        borderRadius: '8px',
        '& >button': {
            backgroundColor: 'inherit',
            border: 'none',
            fontSize: '18px',
            position: 'relative',
            cursor: 'pointer',
            fontWeight: 600,
            color: 'green'
        }

    },
    tempDisplay: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        width: '100%',
        height: '30%',
        minHeight: '100px',
        fontFamily: 'Sora, sens-serif',
        fontSize: '19px',
        '& >p': {
            color: 'deeppink',
            width: '20%',
            height: '59px',
            textAlign: 'center',
        },
        '& >:first-child': {
            cursor: 'pointer'
        },
        '& >:last-child': {
            cursor: 'pointer'
        }
    }
}))