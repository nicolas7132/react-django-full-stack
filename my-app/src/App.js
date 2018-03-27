import React, { Component } from 'react';
import './App.css';

class Article extends Component {
    handleClick(url, e) {
        e.preventDefault();
        window.location.href = url;
    }

    render() {
        return (<div className="article" onClick={this.handleClick.bind(this, this.props.item.url)}>
    <h4>{this.props.item.title}</h4>
        <p>{this.props.item.summary}</p>
        <span className="time">{this.props.item.date}</span>
        </div>);
    }
}

function App(props) {
    const items = props.items;
    const listItems = items.map((item) => <Article key={item.id} item={item}/>);

    return (
        <div>
        {listItems}
        </div>
)
}

export default App;
