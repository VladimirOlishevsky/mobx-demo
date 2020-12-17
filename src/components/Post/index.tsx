import { Grid } from "@material-ui/core";
import React from "react";
import { Card } from '../Card';
import { Comments } from '../Comments/Comments';
import { Form } from '../Form';
import { useStyles } from './rawStyles';

export const Post = () => {

  const styles = useStyles();

  return (
    <Grid container className={styles.mainContainer}>
     <Grid item>
       <Card />
     </Grid>
    </Grid>
  )
}
//  <Grid item container>
//         <Card />
//         <Form />
//         <Comments />
//       </Grid>