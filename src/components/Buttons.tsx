import React from "react";
import { observer } from "mobx-react";
import storeInstance from '../store/Store'

export const Buttons = observer(() => {
    return (
        <div className="row">
            <div className="col-sm">
                <button
                    type="button"
                    className="btn btn-light align-top"
                    onClick={() => storeInstance.updateCount()}>
                    <i className="fa fa-thumbs-o-up" />
                    Like
                    </button>
            </div>
            <div className="col-sm">
                <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => document.getElementById('comment').focus()}>
                    <i className="fa fa-comment-o" />
                    Comment
                    </button>
            </div>
        </div>
    );
})