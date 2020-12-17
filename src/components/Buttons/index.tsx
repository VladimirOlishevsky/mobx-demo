import React from "react";
import { Grid, Button } from "@material-ui/core";
import { observer } from "mobx-react";
import storeInstance from '../../store/Store'
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import { rawStyles } from './rawStyles'
import { buttonsName } from "./config";

export const Buttons = observer(() => {

    const styles = rawStyles();

    return (
        <Grid item container direction='row'>
            <Grid item className="col-sm">
                <Button
                    color="secondary"
                    className={styles.buttonStyle}
                    onClick={() => storeInstance.updateCount()}>
                    <ThumbUpAltSharpIcon
                        className={styles.iconLike}
                        color="secondary" />
                   {buttonsName.like}
                </Button>
            </Grid>
            <Grid item className="col-sm">
                <Button
                    className={styles.buttonStyle}
                    onClick={() => storeInstance.updateCount()}>
                    <SmsOutlinedIcon
                        className={styles.iconLike} />
                    {buttonsName.comment}
                </Button>
            </Grid>
        </Grid>
    );
})