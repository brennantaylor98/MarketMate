import React from "react";
import "./mainC.css"


const Pets = () => {


    return (
        <div className="container" id="categoryCont">
            <h2 className="title" id="categoryTitle">Pet Supplies</h2>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Chicken Coop</h2>
                        <p className="postPrice">Price: 125</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Dog Food</h2>
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
                        <h2 className="postTitle">Leash</h2>
                        <p className="postPrice">Price: 13</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Pets;