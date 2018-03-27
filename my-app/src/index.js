import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var article_list = [];
axios.get('https://www.uscreditcardguide.com/wp-json/wp/v2/posts/')
    .then(function (rep) {
       console.log(rep);
       if(rep.status === 200) {
           for (var index in rep.data) {
               var item = {};
               item["id"] = rep.data[index].id;
               item["title"] = rep.data[index].title.rendered;
               item["date"] = rep.data[index].date.substring(0, 10);
               var summary = rep.data[index].excerpt.rendered;
               summary = summary.replace(/<p>/g,"");
               summary = summary.replace(/<\/p>/g,"");
               item["summary"] = summary
               item["url"] = rep.data[index].guid.rendered;
               article_list.push(item);
           }

           if (article_list.length === 0) {
               document.getElementById("loading-text").innerText = "Get Article Failed!";
           } else {
               // hide the loading div
               document.getElementById("loading").style.display = "none";

               ReactDOM.render( <App  items = {article_list} />, document.getElementById('root'));
           }
       }
    });

registerServiceWorker();
