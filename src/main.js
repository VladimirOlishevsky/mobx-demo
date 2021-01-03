import React from "react";
import ReactDOM from "react-dom";
import './css/main.css'
import storeInstance from './store/Store'
import { Post } from './components/Post';
import { Card } from './components/Card';
import imageStore from "./store/ImageStore";
import { ButtonLeafOver } from './components/ButtonLeafOver/index';
import { MainImage } from './components/MainImage/index';
import { CountsLikeComment } from './components/CountsLikeComment/index';
import { ButtonsLikeComment } from './components/ButtonsLikeComment/index';

ReactDOM.render(
    <Post
        card={
            <Card
                mainImage={<MainImage />}
                buttonLeafOver={<ButtonLeafOver />}
                countsLikeComment={<CountsLikeComment />}
                buttonsLikeComment={<ButtonsLikeComment />}
            />}
        value={storeInstance} />,
    document.getElementById('app'));

if (module.hot) {
    // enables hot module replacement if plugin is installed
    module.hot.accept();
}