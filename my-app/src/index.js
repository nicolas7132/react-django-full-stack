import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var article_list = [];
axios.get('https://www.uscreditcardguide.com/wp-json/wp/v2/posts/')
    .then(response => console.log(response))

article_list.push({
    "id":1,
    "title": "First Title Name",
    "date": "2018-05-05",
    "summary": "ssss",
    "url": "http://kyle.net.cn"
});
article_list.push({
    "id":2,
    "title": "Second Title Name",
    "date": "2018-05-06",
    "summary": "ssss111",
    "url": "http://kyle.net.cn"
});
article_list.push({
    "id":3,
    "title": "Third Title Name",
    "date": "2018-05-07",
    "summary": "ssss222",
    "url": "http://kyle.net.cn"
});
article_list.push({
    "id":4,
    "title": "Four Title Name",
    "date": "2018-05-08",
    "summary": "ssss333",
    "url": "http://kyle.net.cn"
});

if (article_list.length === 0) {
    document.getElementById("loading-text").innerText = "Get Article Failed!";
} else {
    // hide the loading div
    document.getElementById("loading").style.display = "none";

    ReactDOM.render( <App items={article_list} />, document.getElementById('root'));
}

registerServiceWorker();
