import React from "react";
import ReactDOM from "react-dom";
import './css/main.css'
import storeInstance from './store/Store'
import { Post } from './components/Post';
import imageStore from "./store/ImageStore";
import { ButtonLeafOver } from './components/ButtonLeafOver/index';
import { MainImage } from './components/MainImage/index';
import { CountsLikeComment } from './components/CountsLikeComment/index';
import { ButtonsLikeComment } from './components/ButtonsLikeComment/index';
import { Form } from "./components/Form";

ReactDOM.render(
    <Post
        mainImage={<MainImage />}
        buttonLeafOver={<ButtonLeafOver />}
        countsLikeComment={<CountsLikeComment />}
        buttonsLikeComment={<ButtonsLikeComment />}
        form={<Form />}
        value={storeInstance} />,
    document.getElementById('app'));

if (module.hot) {
    // enables hot module replacement if plugin is installed
    module.hot.accept();
}