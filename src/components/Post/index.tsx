import { Grid } from "@material-ui/core";
import React from "react";
import { useStyles } from './rawStyles';

interface Props {
  mainImage: React.ReactNode,
  buttonLeafOver: React.ReactNode,
  countsLikeComment: React.ReactNode,
  buttonsLikeComment: React.ReactNode
  form: React.ReactNode
}

export const Post = ({
  mainImage,
  buttonLeafOver,
  countsLikeComment,
  buttonsLikeComment,
  form
}: Props) => {

  const styles = useStyles();

  return (
    <Grid container className={styles.mainContainer}>
      <Grid item className={styles.content}>
        {mainImage}
        {buttonLeafOver}
        {countsLikeComment}
        {buttonsLikeComment}
        {form}
      </Grid>
    </Grid>
  )
}