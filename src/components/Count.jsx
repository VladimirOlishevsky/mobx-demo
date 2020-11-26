import React from 'react';
import { observer } from "mobx-react";
import storeInstance from '../store/Store'


export const Count = observer(() => {
    return (
        <div className="row reactions-count" >
            <div className="col-sm" align="left">
                <i className="fa fa-thumbs-up" />{storeInstance.likesCount}
            </div>
            <div className="col-sm" align="right">
                {storeInstance.commentsCount} comments
        </div>
        </div>
    )
})