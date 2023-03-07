import React from "react";
import "./mainC.css"


const Health = () => {


    return (
        <div className="container">
            <h2 className="title">Health</h2>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Vitamin C</h2>
                        <p className="postPrice">Price: 35</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Eucalyptus Oils</h2>
                        <p className="postPrice">Price: 5</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Icy Hot</h2>
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


export default Health;