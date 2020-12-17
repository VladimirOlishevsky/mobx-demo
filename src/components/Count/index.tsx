import React from 'react';
import { observer } from "mobx-react";
import storeInstance from '../../store/Store'
import { Grid } from '@material-ui/core';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import { rawStyles } from './rawStyles'

export const Count = observer(() => {

    const styles = rawStyles();
    return (
        <Grid container direction='row'>
            <Grid item>
                <ThumbUpAltSharpIcon
                    className={styles.iconStyle}
                    color="secondary" />
                    {storeInstance.likesCount}
            </Grid>
            <Grid item>
                {storeInstance.commentsCount} comments
            </Grid>
        </Grid>
        // <div className="reactions-count" >
        //     <div className="col-sm" align="left">
        //         <i className="fa fa-thumbs-up" />{storeInstance.likesCount}
        //     </div>
        //     <div className="col-sm" align="right">
        //         {storeInstance.commentsCount} comments
        // </div>
        // </div>
    )
})