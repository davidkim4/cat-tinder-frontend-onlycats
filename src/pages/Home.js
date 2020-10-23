import React, { Component } from 'react';
import cats from "../assets/cats.png";

export default class Home extends Component {
    render() {
        return (
            <>
                <div id="homeRow">
                    <div id="enter">
                        <a href="/catindex"><button class="button">Look At Cats!</button></a>
                    </div>
                    <img id="homeImg" src={cats} alt="a group of kittens" />
                </div>
                <div id="impawsible">
                    <p>Impawsible... It's all just cat photos?</p>
                    <p>Always nyas been...</p>
                </div>
                <div id="info">
                    <div id="post">
                        <div id="title">
                            <h2>Post<i class="material-icons">publish</i></h2>
                        </div>
                        <hr></hr>
                        <div>
                            <p>Purr-ticipate in a network of feline enthusiasts and upload photos of your adorable cat so that the whole world can see!</p>
                        </div>
                    </div>
                    <div id="like">
                        <div id="title">
                            <h2>Like<i class="material-icons">favorite</i></h2>
                        </div>
                        <hr></hr>
                        <div>
                            <p>We’re not kitt-ing! Share your love by liking photos of other user’s cats and show your fur-iends! </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}