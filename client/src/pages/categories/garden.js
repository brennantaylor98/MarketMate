import React from "react";
import "./mainC.css"


const Garden = () => {


    return (
        <div className="container" id="categoryCont">
            <h2 className="title" id="categoryTitle">Garden</h2>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Lawnmower</h2>
                        <p className="postPrice">Price: 350</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Garden Hose</h2>
                        <p className="postPrice">Price: 65</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Gardening Soil</h2>
                        <p className="postPrice">Price: 12</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Garden;