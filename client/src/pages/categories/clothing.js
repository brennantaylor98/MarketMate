import React from "react";
import "./mainC.css"


const Clothing = () => {


    return (
        <div className="container">
            <h2 className="title">Clothing</h2>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Shirt</h2>
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
                        <h2 className="postTitle">Pants</h2>
                        <p className="postPrice">Price: 27</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Socks</h2>
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


export default Clothing;