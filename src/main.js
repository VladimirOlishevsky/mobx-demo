import React from "react";
import ReactDOM from "react-dom";
import './css/main.css'
import storeInstance from './store/Store'
import { Post } from './components/Post';

ReactDOM.render( <Post value = { storeInstance }/>, document.getElementById('app'));

        if (module.hot) {
            // enables hot module replacement if plugin is installed
            module.hot.accept();
        }