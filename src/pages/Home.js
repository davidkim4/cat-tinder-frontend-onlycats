import React, { Component } from 'react';
import catGroup from "../assets/catGroup.jpg";

export default class Home extends Component {
    render() {
        return (
            <>
                <img src={catGroup} alt="a group of kittens" />
            </>
        )
    }
}