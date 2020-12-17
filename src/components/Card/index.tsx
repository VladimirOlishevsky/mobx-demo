import React from "react";
import { Grid, Button } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { observer } from "mobx-react";
import { Count } from '../Count/index';
import { useStyles } from './rawStyles';
import Image from 'material-ui-image';
import imageStore from '../../store/ImageStore'
import { Buttons } from '../Buttons/index';

export const Card = observer(() => {

    const styles = useStyles();
    return (
        <Grid
            className={styles.card}>
            <Image
                src={imageStore.imageUrl}
                alt="..." />
            <Button
                className={styles.buttonChevron}
                onClick={() => imageStore.fetchImage()}>
                <ChevronRightIcon />
            </Button>
            <Count />
            <Grid
                className={styles.cardBody} >
                <Buttons />
            </Grid>
        </Grid>
    )
})