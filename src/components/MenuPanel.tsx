import Link from "next/link";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    menu: {
        listStyle: 'none'
    },
    menuLi: {
        display: 'inline',
        paddingRight: '15px'
    }
});

export default function MenuPanel () {
    const classes = useStyles();
    return (
            <nav>
                <ul className={classes.menu}>
                    <li className={classes.menuLi}>
                        <Link href={'/aboutUs'}>About</Link>
                    </li>
                    <li className={classes.menuLi}>
                        <Link href={'/events'}>Events</Link>
                    </li>
                    <li className={classes.menuLi}>
                        <Link href={'/cooperation'}>Cooperation</Link>
                    </li>
                    <li className={classes.menuLi}>
                        <Link href={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </nav>
    )
}
