import React from "react";
import "./mainC.css"


const Kids = () => {


    return (
        <div className="container" id="categoryCont">
            <h2 className="title" id="categoryTitle">Kids</h2>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Bycicle</h2>
                        <p className="postPrice">Price: 55</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Scooter</h2>
                        <p className="postPrice">Price: 28</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Nintendo Wii</h2>
                        <p className="postPrice">Price: 350</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Kids;