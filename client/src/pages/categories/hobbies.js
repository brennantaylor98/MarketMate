import React from "react";
import "./mainC.css"


const Hobbies = () => {


    return (
        <div className="container" id="categoryCont">
            <h2 className="title" id="categoryTitle">Hobbies</h2>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Beach Volleyball</h2>
                        <p className="postPrice">Price: 45</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Tennis Racket</h2>
                        <p className="postPrice">Price: 85</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">FPV Racing Drone</h2>
                        <p className="postPrice">Price: 1150</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Hobbies;