import React from "react";
import { Count } from "./Count";
import imageStore from '../store/ImageStore'
import { observer } from "mobx-react";
import { Buttons } from './Buttons';

export const Card = observer(() => {
    return (
        <div className="card">
            <img src={imageStore.imageUrl} className="card-img-top" alt="..." />
            <button className="btn btn-light" onClick={() => { imageStore.fetchImage() }}>
                <i className="fa fa-chevron-right" />
            </button>
            <Count />
            <div className="card-body" >
              <Buttons />
            </div>
        </div>
    )
})