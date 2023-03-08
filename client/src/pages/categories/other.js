import React from "react";
import "./mainC.css"


const Other = () => {


    return (
        <div className="container" id="categoryCont">
            <h2 className="title" id="categoryTitle">Other</h2>
            <div>
                <div className="card postsCard">
                    <div>
                        <h2 className="postTitle">Coming Soon!</h2>
                        <p className="postPrice">.......</p>
                    </div>
                    <div>
                        <button className="favoriteBtn">✩</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Other;