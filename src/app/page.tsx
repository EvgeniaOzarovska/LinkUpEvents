'use client'

import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    mainStyle: {
        width: '100%',
        height: "850px",
        backgroundColor: "#b3d9ff",
},
welcomeText: {
        display: "block",
}
});

export default function Home() {
    const classes = useStyles();
  return (
      <main className={classes.mainStyle}>
        <article className={classes.welcomeText}>
            <h1>Welcome to Our Website</h1>
            <p>This is the homepage. Navigate through the menu above!</p>
        </article>
      </main>
  );
}
