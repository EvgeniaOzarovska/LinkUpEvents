import {makeStyles} from "@mui/styles";
import MenuPanel from "@/components/MenuPanel";

const useStyles = makeStyles({
    headContainer: {
        width: '100%',
        padding: '10px 5px',
        backgroundImage: "linear-gradient(182deg, rgb(119, 14, 191),rgb(238, 141, 125))",
    },
    headerLog: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: '32px',
    },
});

export default function Header () {
    const classes = useStyles();
    return (
        <header className={classes.headContainer}>
            <h1 className={classes.headerLog}>Link Up Events</h1>
        <MenuPanel/>
        </header>
    )
}
