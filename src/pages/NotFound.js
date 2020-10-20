import React, { Component } from 'react';
import doge from "../assets/doge.png";

export default class NotFound extends Component {
    render() {
        return (
            <>
                <img src={doge} alt="Majestic dog" />
                <h3>You seem to be lost...</h3>
            </>
        )
    }
}