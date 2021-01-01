import React from "react";
import ReactDOM from "react-dom";
import './css/main.css'
import storeInstance from './store/Store'
import { Post } from './components/Post';
import { Card } from './components/Card';
// import { Image } from 'material-ui-image';
// import imageStore from "./store/ImageStore";

ReactDOM.render(
    <Post
        card={
            <Card
                mainPicture={

                <Image
                    src={imageStore.imageUrl}
                    alt="..." />}
                // buttonLeafOver,
                // countsLikeComment,
                // buttonsLikeComment
            />}
        value={storeInstance} />,
    document.getElementById('app'));

if (module.hot) {
    // enables hot module replacement if plugin is installed
    module.hot.accept();
}