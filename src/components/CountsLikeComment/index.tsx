import React from 'react';
import { observer } from "mobx-react";
import storeInstance from '../../store/Store'
import { Grid } from '@material-ui/core';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import { rawStyles } from './rawStyles'

export const CountsLikeComment = observer(() => {

    const styles = rawStyles();
    return (
        <Grid
            container
            direction='column'
            spacing={1}>
            <Grid item>
                <ThumbUpAltSharpIcon
                    className={styles.iconStyle}
                    color="secondary" />
                {' '}
                {storeInstance.likesCount}
            </Grid>
            <Grid item>
                {`${storeInstance.commentsCount} comments`}
            </Grid>
        </Grid>
    )
})