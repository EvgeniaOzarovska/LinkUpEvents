import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    footerContainer: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        padding: '10px 5px',
        backgroundImage: "linear-gradient(182deg, rgb(119, 14, 191),rgb(238, 141, 125))",
    },
    footerLog: {
        fontSize: '12px',
        color: '#17202a'
    },
    footerText: {
        fontSize: '10px'
    }
});

export default function Footer () {
    const classes = useStyles();
    return (
        <footer className={classes.footerContainer}>
            <h1 className={classes.footerLog}>Link Up Events</h1>
            <p className={classes.footerText}>© 2024 Link Up Events, Inc.</p>
        </footer>
    )

}
