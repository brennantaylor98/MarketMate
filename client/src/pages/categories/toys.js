import React from "react";
import "./mainC.css"


const Toys = () => {


    return (
        <div className="container" id="categoryCont">
            <h2 className="title" id="categoryTitle">Toys</h2>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Pokemon</h2>
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
                        <h2 className="postTitle">Kendama</h2>
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
                        <h2 className="postTitle">Cocomelon Doll</h2>
                        <p className="postPrice">Price: 7</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Toys;