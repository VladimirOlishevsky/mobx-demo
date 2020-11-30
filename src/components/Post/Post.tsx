import { Grid } from "@material-ui/core";
import React from "react";
import { Card } from '../Card/Card';
import { Comments } from '../Comments/Comments';
import { Form } from '../Form/Form';
import { useStyles } from './rawStyles';

export const Post = () => {

  const styles = useStyles();

  return (
  <Grid className={styles.mainContainer}>
    <Grid className={styles.content} container>
      <Card />
      <Form />
      <Comments />
    </Grid>
  </Grid>
)}
