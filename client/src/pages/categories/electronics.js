import React from "react";
import "./mainC.css"


const Electronics = () => {


    return (
        <div className="container" id="categoryCont">
            <h2 className="title" id="categoryTitle">Electronics</h2>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">iPad Pro 512 GB</h2>
                        <p className="postPrice">Price: 1250</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">iMac Studio</h2>
                        <p className="postPrice">Price: 2700</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Apple Airpods Max</h2>
                        <p className="postPrice">Price: 450</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Electronics;