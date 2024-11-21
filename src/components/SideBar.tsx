import {makeStyles} from "@mui/styles";
import Link from "next/link";

const useStyles = makeStyles({
    sideBarContainer: {
        position: 'fixed',
        left: 0,
        height: '100%',
        width: '100px',
        padding: '5px',
        backgroundImage: "linear-gradient(182deg, rgb(119, 14, 191),rgb(238, 141, 125))",
    },
});

export default function SideBar () {
    const classes = useStyles();
    return (
        <aside className={classes.sideBarContainer}>
            <Link href={'/aboutUs'}>About Us</Link>
            <Link href={'/aboutUs'}>About Us</Link>
            <Link href={'/aboutUs'}>About Us</Link>
            <Link href={'/aboutUs'}>About Us</Link>
            <Link href={'/aboutUs'}>About Us</Link>
            <Link href={'/aboutUs'}>About Us</Link>
            <Link href={'/aboutUs'}>About Us</Link>
        </aside>
    )

}
