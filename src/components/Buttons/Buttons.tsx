import React from "react";
import { Grid, Button } from "@material-ui/core";
import { observer } from "mobx-react";
import storeInstance from '../../store/Store'
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';

export const Buttons = observer(() => {

    return (
        <Grid item className="row">
            <Grid item className="col-sm">
                <Button
                    // type="button"
                    // className="btn btn-light align-top"
                    onClick={() => storeInstance.updateCount()}>
                        <ThumbUpAltSharpIcon style={{marginRight: 10}} color="action" />
                    {/* <i className="fa fa-thumbs-o-up" /> */}
                    Like
                    </Button>
            </Grid>
            <Grid item className="col-sm">
                <button
                    type="button"
                    className="btn btn-light"
                    //onClick={() => document.getElementById('comment') && document.getElementById('comment').focus()}
                    >
                    <i className="fa fa-comment-o" />
                    Comment
                    </button>
            </Grid>
        </Grid>
    );
})