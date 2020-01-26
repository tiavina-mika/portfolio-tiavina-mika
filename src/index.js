import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import './index.css';
import Routes from './routes';
// import App from './App';
import * as serviceWorker from './serviceWorker';
WebFont.load({
    google: {
      families: [
        'lato:300,400,700', 
        'Century Gothic Regular:300,400,700', 
        'Montserrat:300,400',
        'Comfortaa:300,400,700', 
        'BebasNeueRegular:300,400,700', 
        'SofiaPro:300,400,700', 
        'Muli:300', 
        'QuestaGrandeRegular:300,400,700',
        'sans-serif']
    }
});
ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
