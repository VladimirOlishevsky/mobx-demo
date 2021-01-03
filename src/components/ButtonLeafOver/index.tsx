import React from "react";
import { Button } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { observer } from "mobx-react";
import { useStyles } from './rawStyles';
import imageStore from '../../store/ImageStore'

export const ButtonLeafOver = observer(() => {
    const styles = useStyles();
    return (
        <Button
            className={styles.buttonChevron}
            onClick={() => imageStore.fetchImage()}>
            <ChevronRightIcon />
        </Button>
    )
})