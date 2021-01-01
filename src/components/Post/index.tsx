import { Grid } from "@material-ui/core";
import React from "react";
import { useStyles } from './rawStyles';

interface Props {
  card: React.ReactNode
}

export const Post = ({card}: Props) => {

  const styles = useStyles();

  return (
    <Grid container className={styles.mainContainer}>
     <Grid item>
       {card}
     </Grid>
    </Grid>
  )
}