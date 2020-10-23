import React, { Component } from 'react';
import catIcon from "../assets/catIcon.png";

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <h1>OnlyCats
                <img src={catIcon} />
                    <span><a href="catindex">Cats</a></span>
                    <span><a href="/">Home</a></span>
                </h1>
            </div>
        )
    }
}
