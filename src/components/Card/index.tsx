import React from "react";
import { Grid } from "@material-ui/core";
import { observer } from "mobx-react";
import { useStyles } from './rawStyles';
import { Form } from './../Form/index';

interface Props {
    mainImage: React.ReactNode,
    buttonLeafOver: React.ReactNode,
    countsLikeComment: React.ReactNode,
    buttonsLikeComment: React.ReactNode
}

export const Card = observer(({
    mainImage,
    buttonLeafOver,
    countsLikeComment,
    buttonsLikeComment
}: Props) => {

    const styles = useStyles();
    return (
        <Grid
            className={styles.card}>
            {mainImage}
            {buttonLeafOver}
            {countsLikeComment}
            {buttonsLikeComment}
            <Form />
        </Grid>
    )
})